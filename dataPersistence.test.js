const mongoose = require('mongoose');
const axios = require('axios');
const isEqual = require('lodash.isequal'); // Asegúrate de instalar: npm install lodash.isequal

const conexion1 = 'mongodb://localhost:27017/tds_restaurada';
const conexion2 = 'mongodb://localhost:27017/tds_replica';
const collection = 'calculations';
const nestJsApiUrl = 'http://localhost:3002/employees/testSchemas';
const accessToken = 'ZN7IM9ME83ZPL9JK';
const BATCH_SIZE = 70;

function cleanDocs(docs) {
    return docs.map(doc => {
        const { _id, ...rest } = doc;
        return rest;
    });
}

async function run() {
    let conn1Docs = [];
    let conn2Docs = [];

    try {
        // Conexión a la base de datos de origen
        console.log('✨ Conectando a la base de datos de origen...');
        await mongoose.connect(conexion1, { useNewUrlParser: true, useUnifiedTopology: true });
        const db1 = mongoose.connection.db;
        conn1Docs = await db1.collection(collection).find({}).toArray();
        console.log(`✅ ${conn1Docs.length} documentos encontrados en '${collection}' en conexion1.`);
        await mongoose.disconnect();

        // Envío por lotes a la API
        console.log('🚀 Enviando documentos a la API NestJS...');
        for (let i = 0; i < conn1Docs.length; i += BATCH_SIZE) {
            const batch = conn1Docs.slice(i, i + BATCH_SIZE);
            console.log(`📦 Enviando lote ${Math.floor(i / BATCH_SIZE) + 1} de ${Math.ceil(conn1Docs.length / BATCH_SIZE)}...`);
            try {
                await axios.post(`${nestJsApiUrl}/?accessToken=${accessToken}`, batch, {
                    headers: { 'Content-Type': 'application/json' }
                });
                console.log(`✅ Lote ${Math.floor(i / BATCH_SIZE) + 1} enviado exitosamente.`);
            } catch (error) {
                console.error(`❌ Error en el lote ${Math.floor(i / BATCH_SIZE) + 1}: ${error.message}`);
                if (axios.isAxiosError(error) && error.response) {
                    console.error('Detalles de error:', error.response.data);
                    console.error('Código de estado:', error.response.status);
                }
                throw error;
            }
        }

        // Conexión a la base de datos de destino
        console.log('✨ Conectando a la base de datos de destino...');
        await mongoose.connect(conexion2, { useNewUrlParser: true, useUnifiedTopology: true });
        const db2 = mongoose.connection.db;
        conn2Docs = await db2.collection(collection).find({}).toArray();
        console.log(`✅ ${conn2Docs.length} documentos encontrados en '${collection}' en conexion2.`);
        await mongoose.disconnect();

        // Comparación profunda de documentos
        console.log('🔍 Comparando documentos...');
        const cleaned1 = cleanDocs(conn1Docs);
        const cleaned2 = cleanDocs(conn2Docs);

        if (cleaned1.length !== cleaned2.length) {
            console.log(`❌ Cantidad de documentos no coincide: ${cleaned1.length} en conexion1 vs ${cleaned2.length} en conexion2.`);
            return;
        }

        // Ordena para comparar en el mismo orden
        cleaned1.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));
        cleaned2.sort((a, b) => JSON.stringify(a).localeCompare(JSON.stringify(b)));

        let sonIguales = true;
        for (let i = 0; i < cleaned1.length; i++) {
            if (!isEqual(cleaned1[i], cleaned2[i])) {
                console.log(`❌ Diferencia encontrada en índice ${i}`);
                console.log('FID origen:', doc1.fid);
                console.log('FID destino:', doc2.fid);
                console.log('Documento origen:', doc1);
                console.log('Documento destino:', doc2);
            }
        }

        if (sonIguales) {
            console.log('🎉 ¡Todo correcto! Los documentos son IGUALES en ambas conexiones.');
        } else {
            console.log('⚠️ Hay diferencias entre las bases. Revisa la salida para más detalles.');
        }

    } catch (err) {
        console.error('❌ Error general:', err);
    }
}

run();
