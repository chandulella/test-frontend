const express=require('express');
const path=require('path');
const app=express();


// app.use(express.static(__dirname+'/dist/frntend'));
app.use(express.static(__dirname+'/dist/frntend', {index: false}));

// app.get(path.join(__dirname + '/dist/frntend/index.html'));;
app.get('*', (request, response) => {
	response.sendFile(path.join(__dirname, 'dist/frntend', 'index.html'));
});
// app.get('', function(req, res) {
//     res.sendFile(path.join(__dirname + '/dist/frntend/index.html'));
// });
app.listen(process.env.PORT || 8080,()=>{
    console.log("Successful")
})
