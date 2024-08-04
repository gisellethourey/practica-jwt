
import pg from 'pg';
import 'dotenv/config.js';

const { Pool } = pg;
const{
DB_USER,
DB_PASSWORD,
DB_HOST,
DB_DATABASE,
DB_PORT
}= process.env;

const config ={
    user:DB_USER,
    password:DB_PASSWORD,
    host:DB_HOST,
    port:DB_PORT,
    database:DB_DATABASE,
    allowExitOnIdle: true
    }
    
   const pool= new Pool(config); 

    try{
        await pool.query('SELECT NOW()');
        console.log('Database connected');
    } catch (error){
        console.log(error)
    }
    
    export default pool
    