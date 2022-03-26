import { openDatabase, enablePromise } from 'react-native-sqlite-storage';

enablePromise(true);

export const openDb = async () => {
    return openDatabase({ name: 'todoapp.db', location: 'default' });
};

export const createDB = async (db) => {
    const query = `CREATE TABLE IF NOT EXISTS todoapp (
        id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        title TEXT NOT NULL,
        checked INTEGER NOT NULL DEFAULT '0'
    );`;

    await db.executeSql(query);
};

export const toggleCheck = async (id, checked) => {
    const checkInt = checked ? 1 : 0;

    const db = await openDb();
    const query = `UPDATE todoapp SET checked = '${checkInt}' WHERE id = '${id}'`;

    return await db.executeSql(query);
};

export const insertNota = async (nota) => {
    const db = await openDb();
    const query = `INSERT INTO todoapp (title) VALUES ('${nota}')`;

    return await db.executeSql(query);
};

export const getDatas = async () => {
    return new Promise(async (resolve, reject) => {
        const db = await openDb();

        const query = 'SELECT * FROM todoapp';

        const dati = await db.executeSql(query);

        const valori = [];

        dati.forEach((result) => {
            for (let index = 0; index < result.rows.length; index++) {
                valori.push(result.rows.item(index));
            }
        });

        resolve(valori);
    });
};