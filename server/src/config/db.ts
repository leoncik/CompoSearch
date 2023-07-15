import { Pool } from 'pg';

const pool = new Pool({
    // host: process.env.PGHOST,
    // port: parseInt(process.env.PGPORT || '5432'),
    // database: process.env.PGDATABASE,
    // user: process.env.PGUSER,
    // password: process.env.PGPASSWORD,

    host: 'database',
    port: 5432,
    database: 'compo_search_database',
    user: 'admin',
    password: 'password1234',
});

export default pool;
