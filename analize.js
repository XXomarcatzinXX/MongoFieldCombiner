const mongoose = require('mongoose');
const fs = require('fs');

const MONGO_URI = 'mongodb://localhost:27017/tds_restaurada';
const COLECCION = 'incidencesTypesBackup';

// ❌ Campos que NO deben aparecer en el schema final
const EXCLUDE_FIELDS = [];

// 🛠️ Campos que deben forzarse como arreglo con objeto vacío [{}]
const EXCLUDED_ARRAY_OBJECT_FIELDS = ['i', 'ir'];

async function run() {
    try {
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        const db = mongoose.connection.db;
        const docs = await db.collection(COLECCION).find({}).toArray();

        const combined = {};

        const mergeFields = (obj, target) => {
            for (const key in obj) {
                // ❌ Excluir claves exactas o que contengan 'data' pero no 'data' exactamente
                if (
                    EXCLUDE_FIELDS.includes(key) ||
                    (key !== 'data' && key.toLowerCase().includes('data'))
                ) {
                    continue;
                }

                if (EXCLUDED_ARRAY_OBJECT_FIELDS.includes(key)) {
                    if (!(key in target)) {
                        target[key] = [{}];
                    }
                    continue;
                }

                if (obj[key] === null || obj[key] === undefined) {
                    if (!(key in target)) target[key] = null;
                } else if (Array.isArray(obj[key])) {
                    if (!(key in target)) {
                        target[key] = [];
                    } else if (!Array.isArray(target[key])) { // Asegurar que target[key] es un array si existe
                        target[key] = [];
                    }
                } else if (typeof obj[key] === 'object' && obj[key] !== null) { // Añadir verificación de null para obj[key]
                    if (!(key in target)) {
                        target[key] = {};
                    } else if (typeof target[key] !== 'object' || target[key] === null || Array.isArray(target[key])) { // Asegurar que target[key] es un objeto si existe y no es null o un array
                        target[key] = {};
                    }
                    mergeFields(obj[key], target[key]);
                } else {
                    if (!(key in target)) target[key] = obj[key];
                }
            }
        };

        for (const doc of docs) {
            mergeFields(doc, combined);
        }

        fs.writeFileSync('incidencesTypesBackup.json', JSON.stringify(combined, null, 2));
        console.log(`✅ Generado el json con ${Object.keys(combined).length} campos únicos`);

        await mongoose.disconnect();
    } catch (err) {
        console.error('❌ Error:', err);
    }
}

run();