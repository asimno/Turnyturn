import pool from './postgres.js'
const columns=['id']
const translate=columns.map(function(v,i,a){return "$"+(i+1)});

export function genParticipantID(){
    return Math.floor(1000 + Math.random() * 9000);
    //Not the safest method but should work for this project
}

export async function post(params) {
    if (params.length!=columns.length){
        console.error("Given parameters don't match the required length of columns! " + length(params) + " != " + length(columns));
    }
        await pool.query(
            `INSERT INTO participants (`+columns.toString()+`)
            VALUES (`+translate.toString()+`)
            `,
            params
        );
}
