import postgres from 'postgres';
import { PGCONNECT } from '$env/static/private';

console.log("PGCONNECT in test file:", PGCONNECT);

const sql = postgres(PGCONNECT, {});

export default sql;
