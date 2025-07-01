const mongoose = require('mongoose');
const axios = require('axios'); // Asegúrate de tener axios instalado: npm install axios

const conexion1 = 'mongodb://localhost:27017/tds_restaurada_origen'; // Renombré para mayor claridad
const conexion2 = 'mongodb://localhost:27017/tds_restaurada_destino'; // Renombré para mayor claridad
const collection = 'employees';
const nestJsApiUrl = 'http://localhost:3002/employees/testSchemas'; // Asegúrate de usar 'http://'
const accessToken = 'ZN7IM9ME83ZPL9JK';

async function run() {
    let conn1Docs = [];
    let conn2Docs = [];

    try {
        console.log('✨ Conectando a la base de datos de origen (conexion1)...');
        // Conectar a la primera base de datos y obtener los documentos
        await mongoose.connect(conexion1, { useNewUrlParser: true, useUnifiedTopology: true });
        const db1 = mongoose.connection.db;
        conn1Docs = await db1.collection(collection).find({}).toArray();
        console.log(`✅ Se encontraron ${conn1Docs.length} documentos en la colección '${collection}' de conexion1.`);
        await mongoose.disconnect();
        console.log('🔌 Desconectado de conexion1.');

        console.log('🚀 Enviando datos a la API de NestJS...');
        // Enviar los documentos a la API de NestJS
        // Iteramos sobre los documentos para enviarlos uno por uno,
        // o puedes enviar un arreglo completo si tu API lo soporta.
        // Aquí asumimos que tu API puede manejar un array de objetos.
        await axios.post(`${nestJsApiUrl}/?accessToken=${accessToken}`, conn1Docs);
        console.log('✅ Datos enviados exitosamente a la API de NestJS.');

        console.log('✨ Conectando a la base de datos de destino (conexion2) para verificar...');
        // Conectar a la segunda base de datos y obtener los documentos después de la operación de NestJS
        await mongoose.connect(conexion2, { useNewUrlParser: true, useUnifiedTopology: true });
        const db2 = mongoose.connection.db;
        conn2Docs = await db2.collection(collection).find({}).toArray();
        console.log(`✅ Se encontraron ${conn2Docs.length} documentos en la colección '${collection}' de conexion2.`);
        await mongoose.disconnect();
        console.log('🔌 Desconectado de conexion2.');

        console.log('🔎 Comparando los documentos de ambas conexiones...');
        // Comparar los documentos
        if (conn1Docs.length === conn2Docs.length) {
            let sonIguales = true;
            // Para una comparación profunda, podrías necesitar una librería como 'lodash.isequal'
            // o implementar una lógica de comparación más robusta si el orden o la estructura varían.
            // Por simplicidad, aquí haremos una verificación básica de longitud y un vistazo a los IDs si existen.

            // Una forma simple de comparar es ordenar y luego convertir a string (si los objetos son simples).
            // Para objetos complejos y desordenados, necesitas una comparación profunda.
            const sortedConn1Docs = conn1Docs.map(doc => JSON.stringify(doc)).sort();
            const sortedConn2Docs = conn2Docs.map(doc => JSON.stringify(doc)).sort();

            for (let i = 0; i < sortedConn1Docs.length; i++) {
                if (sortedConn1Docs[i] !== sortedConn2Docs[i]) {
                    sonIguales = false;
                    break;
                }
            }

            if (sonIguales) {
                console.log('🎉 ¡Felicidades! Los documentos en ambas conexiones son IGUALES. Tus esquemas de NestJS funcionan correctamente.');
            } else {
                console.log('⚠️ Los documentos en ambas conexiones son DIFERENTES. Revisa tu lógica en NestJS o la base de datos de destino.');
            }
        } else {
            console.log(`❌ Las cantidades de documentos no coinciden: Conexion1 tiene ${conn1Docs.length} y Conexion2 tiene ${conn2Docs.length}.`);
        }

    } catch (err) {
        console.error('❌ ¡Ocurrió un error!', err);
        // Detalles adicionales del error si es de axios
        if (axios.isAxiosError(err) && err.response) {
            console.error('Detalles de la respuesta de la API:', err.response.data);
            console.error('Código de estado de la API:', err.response.status);
            console.error('Encabezados de la API:', err.response.headers);
        }
    }
}

run();