const fs = require('fs');
const path = require('path');

const INPUT_JSON = './xmlSatMetasLogs.json'; // Ruta a tu JSON de entrada
const CLASS_NAME = 'XmlSatMetasLog'; // Puedes personalizar esto

function getType(value) {
    if (value === null) return 'any';
    if (Array.isArray(value)) return 'array';
    return typeof value;
}

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function generateProp(key, value, subTypes) {
    const type = getType(value);

    if (type === 'object') {
        const className = capitalize(key);
        subTypes.push(generateClass(className, value));
        return `  @Prop({ type: ${className} })\n  ${key}: ${className};`;
    }

    if (type === 'array') {
        const arrayContent = value[0];
        const innerType = arrayContent ? getType(arrayContent) : 'any';

        if (innerType === 'object') {
            const className = capitalize(key.slice(0, -1) || 'Item');
            subTypes.push(generateClass(className, arrayContent));
            return `  @Prop({ type: [${className}] })\n  ${key}: ${className}[];`;
        }

        return `  @Prop({ type: [${mapJsType(innerType)}] })\n  ${key}: ${mapJsType(innerType)}[];`;
    }

    return `  @Prop()\n  ${key}: ${mapJsType(type)};`;
}

function mapJsType(type) {
    switch (type) {
        case 'string': return 'string';
        case 'number': return 'number';
        case 'boolean': return 'boolean';
        case 'any': return 'any';
        case 'object': return 'Record<string, any>';
        default: return 'any';
    }
}

function generateClass(name, jsonObject) {
    const subTypes = [];
    const fields = Object.entries(jsonObject)
        .map(([key, value]) => generateProp(key, value, subTypes))
        .join('\n\n');

    const classDef = `@Schema()\nexport class ${name} {\n${fields}\n}`;

    return [...subTypes, classDef].join('\n\n');
}

function generateNestSchema(jsonData) {
    const header = `import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';\nimport { Document } from 'mongoose';\n`;
    const baseClass = generateClass(CLASS_NAME, jsonData);
    const schemaFactory = `\nexport type ${CLASS_NAME}Document = ${CLASS_NAME} & Document;\nexport const ${CLASS_NAME}Schema = SchemaFactory.createForClass(${CLASS_NAME});`;

    return `${header}\n${baseClass}${schemaFactory}`;
}

// Leer el JSON
(async () => {
    try {
        const raw = await fs.promises.readFile(INPUT_JSON, 'utf8');
        const json = JSON.parse(raw);

        const content = generateNestSchema(json);
        const outFile = path.join(process.cwd(), 'xmlSatMetasLogs.schema.ts');
        await fs.promises.writeFile(outFile, content, 'utf8');

        console.log(`✅ Esquema generado en: ${outFile}`);
    } catch (err) {
        console.error('❌ Error:', err.message);
    }
})();
