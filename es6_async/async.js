const fs = require('fs');

const readFile = function(fileName){
	return new Promise((resolve, reject) => {
		fs.readFile(fileName,(err,data) =>{
			if(err){
				reject(err);
			}
			resolve(data);
		});
	});
}

async function fn(){
	let [a,b] = await Promise.all([
		readFile('./a.txt'),
		readFile('./b.txt'),
	]);
	
	console.log(a.toString());
	console.log(b.toString());
}
fn();