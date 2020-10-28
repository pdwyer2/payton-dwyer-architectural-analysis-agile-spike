const mysql = require('mysql');

var config =
{
	host: 'payton-dwyer-server-demo.mysql.database.azure.com',
	user: 'pdwyer@payton-dwyer-server-demo',
	password: 'password1!',
	database: 'demo',
	port: 3306,
	ssl: true
};

const conn = new mysql.createConnection(config);

conn.connect(
	function (err) { 
		if (err) { 
			console.log("!!! Cannot connect !!! Error:");
			throw err;
		}
		else {
			console.log("Connection established.");
			deleteData();
		}	
	});

function deleteData(){
	   conn.query('DELETE FROM inventory WHERE name = ?', ['orange'], 
			function (err, results, fields) {
				if (err) throw err;
				else console.log('Deleted ' + results.affectedRows + ' row(s).');
	   	})
	   conn.end(
		   function (err) { 
				if (err) throw err;
				else  console.log('Done.') 
		});
};