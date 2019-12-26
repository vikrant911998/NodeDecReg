const fs = require('fs');


// var song = fs.readFileSync('/Users/vikrant/Downloads/song.mp4',{encoding:'utf-8'});

// console.log(song.toString());

// fs.readFile('example.txt',(err,data)=>{
    
//     if(data){
//         console.log(data.toString());
//     }
//     else{
//         console.log('Error happened ',err);
//     }
// });


// var data = fs.readFileSync('example.txt');
// data = data.toString();
// console.log(data);



//Writes in the file in the async way.
// fs.writeFile('demo.txt','This is just test data',{},(err)=>{
//     if(err)
//         console.log('Error happened ',err);

//     else
//         console.log('Data successfully written.');
// });



//Writes in the file in sync way.
// fs.writeFileSync('example.txt','Demo Text another Written',{encoding:'utf-8'});


//It gives the path from root to your current directory.
// console.log(__dirname);

//It gives the path from root to your current File.
// console.log(__filename);


// It creates the directory in the system synchronously.
// fs.mkdirSync('../demo2');


//It creates the directory in the system in the async way.
// fs.mkdir('../../demo2',(err)=>{
//     if(err)
//         console.log('Error in creating directory\n');


//     else{
//         console.log('Directory created successFully');
//     }
// });