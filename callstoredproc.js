var mysql=require('mysql');
var express = require('express');
var bodyParser=require('body-parser');

var app=express();


var connection = mysql.createConnection({
	host:'aa48jcj8o44ss4.c6uleb0iwped.us-west-2.rds.amazonaws.com',
	user:'hochefdb',
	password:'Hochef1234',
	database:'M_TestDB'
});
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.get('/GetCustDet',function(req,res){
//testing purpose
//var params = "'select_cust', 0";
//for prod
//var flag = req.body.flag;
//var custid = req.body.custid;
//var params = "' + flag + ', + custid +";
//console.log(params);
connection.query("CALL testcustomer_actions('select_cust',0)",function(err,rows,field){
	
	if(!err){
		
		console.log(rows);
        res.end( JSON.stringify(rows));
	}else{
		
		
		console.log(err);
		res.end( JSON.stringify(rows));
	}
	
});

});
app.post('/GetCustDetbyID',function(req,res){
//console.log(req.body.custid);
//console.log(JSON.parse(req.body));
//var paramid = req.body.custid;
//testing purpose
////for prod
var flag = req.body.flag;

var custid = req.body.custid;

//var params = "' + flag + ', + custid +";
//console.log(params);
connection.query("CALL testcustomer_actions(" + flag + "," + custid + ")",function(err,rows,field){
	
	if(!err){
		
		console.log(rows);
        res.end( JSON.stringify(rows));
	}else{
		
		
		console.log(err);
		res.end( JSON.stringify(rows));
	}
	
});
});
app.listen(3000, function () {
  console.log('listening on port 3000!');
});
