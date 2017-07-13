var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index.html', { title: 'Express' });
// });


router.get('/', function(req, res, next) {
  res.render('index', { title: 'TradeMe' });
});

router.get('/aboutus', function(req, res, next) {
  res.render('aboutus', { title: 'Express' });
});

router.get('/contactus', function(req, res, next) {
  res.render('contactus', { title: 'Express' });
});
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});


router.get('/myprofile', function(req, res, next) {
	if(req.cookies.username == null)
		res.redirect('login');
	else{
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/tmdata';
MongoClient.connect(url, function(err, db){
if (err) {
console.log('Unable to connect to the Server:', err);
} else {
console.log('Connected to Server');
var collection = db.collection('users');
var a = req.cookies.username; 
collection.find({"username": a}).toArray(function (err, result) {
if (err) {
res.send(err);
} 
else if (result.length) {
res.render('myprofile', {"user": result});
} 
})
//db.close();
}; }) } });


router.get('/myprofile2', function(req, res, next) {
	if(req.cookies.username == null)
		res.redirect('login');
	else{
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/tmdata';
MongoClient.connect(url, function(err, db){
if (err) {
console.log('Unable to connect to the Server:', err);
} else {
console.log('Connected to Server');
var collection = db.collection('items');
var a = req.cookies.username; 
collection.find({"username": a}).toArray(function (err, result) {
if (err) {
res.send(err);
} 
else if (result.length) {
res.render('myprofile2', {"itemlist": result});
} 
})
//db.close();
}; }) } });

router.get('/myprofile3', function(req, res, next) {
	if(req.cookies.username == null)
		res.redirect('login');
	else{
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/tmdata';
MongoClient.connect(url, function(err, db){
if (err) {
console.log('Unable to connect to the Server:', err);
} else {
console.log('Connected to Server');
var collection = db.collection('offers');
var a = req.cookies.username; 
collection.find({"username": a}).toArray(function (err, result) {
if (err) {
res.send(err);
} 
else if (result.length) { 
res.render('myprofile3', {"offers": result});
} 
})
//db.close();
}; }) } });

router.get('/myprofile4', function(req, res, next) {
	if(req.cookies.username == null)
		res.redirect('login');
	else{
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/tmdata';
MongoClient.connect(url, function(err, db){
if (err) {
console.log('Unable to connect to the Server:', err);
} else {
console.log('Connected to Server');
var collection = db.collection('offers');
var a = req.cookies.username; 
collection.find({"username": a}).toArray(function (err, result) {
if (err) {
res.send(err);
} 
else if (result.length) { 
res.render('myprofile4', {"offers": result});
} 
})
//db.close();
}; }) } });




function userUnique()
{
	var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/tmdata';
MongoClient.connect(url, function(err, db){
if (err) {
console.log('Unable to connect to the Server:', err);
} else {
console.log('Connected to Server');
var collection = db.collection('users');
var a = req.cookies.username; 
collection.find({"username": a}).toArray(function (err, result) {
	if (err) {
		res.send(err);
	 } 
	else if (result.length)
	{
		alert("Username not unique.")
	return false; 
	}	
});
}
});
}


router.get('/forgot', function(req, res, next) {
  res.render('forgot', { title: 'Express' });
});

router.get('/deletecookie', function(req, res){
res.clearCookie('username');
res.redirect('login');
});


// router.get('/accept', function(req, res){
// var collection = db.collection("items");
// collection.remove()
// res.redirect('login');
// });

// Show stored cookies in the console

// router.get('/items', function(req, res){
// var MongoClient = mongodb.MongoClient;
// var url = 'mongodb://localhost:27017/tmdata' ; // Define where the MongoDB server i
// MongoClient.connect(url, function (err, db)
// {// Connect to the server
// if (err) {
// console.log('Unable to connect to the Server', err);
// } else {
// // We are connected
// console.log('Connection established to', url);
// // Get the documents collection
// var collection = db.collection('items');
// collection.find({}).toArray(function (err, result) {// Find all students
// if (err) {		
// res.send(err);
// } else if (result.length) {
// console.log(result.length);
// res.render('items', {"itemlist": result});
// } else {
// res.send('No documents found');
// }
// db.close(); //Close connection
// }); }
// });
// });

router.get('/items', function(req, res){
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/tmdata' ; // Define where the MongoDB server is
MongoClient.connect(url, function (err, db)
{// Connect to the server
if (err) {
console.log('Unable to connect to the Server', err);
} else {
// We are connected
console.log('Connection established to', url);
// Get the documents collection
var collection = db.collection('items');
collection.find({}).toArray(function (err, result) {// Find all students
if (err) {
res.send(err);
} else if (result.length) {
	console.log(result.length);
res.render('items',{"itemlist" : result
});
} else {
res.send('No documents found');
}
db.close(); //Close connection
}); }});});


router.post('/checkuser', function(req, res){
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/tmdata';
MongoClient.connect(url, function(err, db){
if (err) {
console.log('Unable to connect to the Server:', err);
} else {
console.log('Connected to Server');
var collection = db.collection('users');
var a = req.body.username; var b = req.body.psw; 
collection.find({"username": a, "password":b}).toArray(function (err, result) {
if (err) {
res.send(err);
} else if (result.length) {
res.cookie('username', a, {expire : new Date() + 9999});
res.render('myprofile', {"user": result});
} else {
res.redirect('login');
}
db.close();
}); } }); });





// Show stored cookies in the console
router.get('/listcookies', function(req, res){
console.log("Cookies : ", req.cookies);
res.send('Look in console for cookies');
});


router.get('/list', function(req, res, next) {
	if(req.cookies.username == null)
		res.redirect('login');
	else{
  res.render('list', { title: 'Express' });
}
});

router.get('/offer', function(req, res, next) {
	if(req.cookies.username == null)
		res.redirect('login');
	else{
  res.render('offer', { title: 'Express' });
}
});

router.get('/items', function(req, res, next) {
  res.render('items', { title: 'Express' });
});

router.get('/chandra', function(req, res, next) {
  res.render('chandra', { title: 'Express' });
});






router.post('/register', function(req, res){
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/tmdata';
MongoClient.connect(url, function(err, db){
if (err) {
console.log('Unable to connect to the Server:', err);
} else {
console.log('Connected to Server');
var collection = db.collection('users');	
var users = {username: req.body.username, firstname: req.body.firstname, lastname: req.body.lastname, 
email: req.body.email, password: req.body.psw, phone: req.body.phone, gender: req.body.gender, 
month: req.body.month, day: req.body.day, year: req.body.year}; 
collection.insert([users], function (err, result){
if (err) {
console.log(err);
} else {
res.redirect("/login");
}
db.close();
}); } }); });








router.post('/list', function(req, res){
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/tmdata';
MongoClient.connect(url, function(err, db){
if (err) {
console.log('Unable to connect to the Server:', err);
} else {
console.log('Connected to Server');
var collection = db.collection('items');
var item = {name: req.body.itemname, description: req.body.description, condition: req.body.condition, 
lookingfor: req.body.lookingfor, photo: req.body.photo, username: req.cookies.username}; 
collection.insert([item], function (err, result){
if (err) {
console.log(err);
} else {
res.redirect("/items");
}
db.close();
}); } }); });

router.post('/offer', function(req, res){
var MongoClient = mongodb.MongoClient;
var url = 'mongodb://localhost:27017/tmdata';
MongoClient.connect(url, function(err, db){
if (err) {
console.log('Unable to connect to the Server:', err);
} else {
console.log('Connected to Server');
var collection = db.collection('offers');
var offer = {itemwanted: req.body.itemwanted, itemoffered: req.body.itemoffered, description: req.body.description, condition: req.body.condition, 
 photo: req.body.photo, username: req.cookies.username}; 
collection.insert([offer], function (err, result){
if (err) {
console.log(err);
} else {
res.redirect("/items");
}
db.close();
}); } }); });




module.exports = router;

	 