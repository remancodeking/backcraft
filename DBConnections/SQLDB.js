import mysql from 'mysql';

// Default options for the database connection
const defaultOptions = {
    host: 'localhost',
    user: 'admin',
    password: 'admin123',
    database: 'backraft'
};

// Function to create a MySQL connection
const SQLconnect = (options = defaultOptions) => {
    const sqlOptions = options; // If options are provided, use them; otherwise, use defaultOptions

    // Create a connection
    const connection = mysql.createConnection(sqlOptions);

    // Connect to the database and handle any errors
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to the database:', err.stack);
            return;
        }
        console.log('Connected to the database as id', connection.threadId);
    });

    return connection;
};

export default SQLconnect;
