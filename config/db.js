import mysql from 'mysql2/promise'; 

const pool = mysql.create({
       host: '127.0.0.1',
       user: 'root',
       password: '',
       database: 'librarydb'
})

export default pool;