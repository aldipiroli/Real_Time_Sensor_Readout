var app = require("express")();
var express = require("express");

app.use(express.static(__dirname + '/public'));
var http = require("http").Server(app);
var io = require("socket.io")(http);

app.get("/", function(req, res){
	res.sendfile("index.html");
});

var mySocket;

var seriaport = require('serialport');
var SerialPort = require('serialport');

var mySerial = new SerialPort("/dev/ttyUSB5", {
	baudrate: 9600,
	parser: SerialPort.parsers.readline("\n")
});

mySerial.on("open", function(){
	console.log("Porta Aperta")
});

mySerial.on("data", function(data){
	console.log(data);
	io.emit("dataArduino", {
		valor: data
	});
});


io.on("connection", function(socket){
	console.log("user conneted");
});

http.listen(3000, function(){
	console.log("This is working on port 3000");
});