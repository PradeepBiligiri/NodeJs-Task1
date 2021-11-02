// console.log("Welcome");

//1. Internal Packages.

//2. External Packages.
//3. Custom Packages.

// const os = require("os");
// console.log(os.uptime());

//Requring HTTPS
// var http = require("http");

// // CREATING A SERVER
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "json" });
//     res.write('[{ FirstName: "Pradeep", LastName: "Biligiri" }]');
//     res.end();
//   })
//   .listen(8000);

//CREQATING A FILE
// const fs = require("fs");

//CREATE DIRECTRY OR FOLDER GUVI
// fs.mkdirSync("Guvi");

// CREATE A FILE NAMED BIO
// fs.writeFileSync("bio.txt", "My name is Pradeep");

//CREATE A FILE INSIDE GUVI FOLDER
// fs.writeFileSync("guvi/bio.txt", "My name is Pradeep");

// ADD OR INSERT TEXT INSIDE THE EXISTING FILE
// fs.appendFileSync("guvi/bio.txt", " I am a developer");

//READ A FILEBASE
// const data = fs.readFileSync("guvi/bio.txt");

// console.log(data); // the data will return buffer value.

//WE NEED TO USER ENCODING VALUES TO GET OR READ DATA IN THE FILE.
// const data = fs.readFileSync("guvi/bio.txt", "utf8");

//console.log(data); // the data will return string value.

//CHANGING THE NAME OF THE FILE AND TYPE OF FILE.
// fs.renameSync("guvi/bio.txt", "guvi/resume.doc"); // file name changed to resume and file type changes to .doc
//fs.renameSync("guvi/resume.doc", "guvi/resume.xls"); //  file type changes to .xls
//fs.renameSync("guvi/resume.xls", "guvi/resume.pdf"); //  file type changes to .pdf

//DELETING THE FILE
// fs.unlinkSync("bio.txt");

//DELETING THE DIRECTRY OR FOLDER
// fs.mkdirSync("sample");

// setTimeout(() => {
//   fs.rmdirSync("sample");
// }, 5000);

//TASK -1

const fs = require("fs");

//Create ting folder and file
// fs.writeFileSync(
//   "guvi/current date-time.txt",
//   "Current date time is -07:52 AM"
// );

// // Retriving data from file
// const data = fs.readFileSync("guvi/current date-time.txt", "utf8");

// console.log(data);
// fs.unlinkSync("guvi/current date-time.txt");
const fs = require("fs");
var http = require("http");

http
  .createServer((req, res) => {
    //   Getting current Date time
    let date = new Date();
    //Creating the file inside a folder
    fs.writeFileSync(
      "guvi/CurrentDateTime.txt",
      `Current date time is - ${date}`
    );

    //Readingh the file
    const data = fs.readFileSync("guvi/CurrentDateTime.txt", "utf8");

    //Display the timestamp in browser
    res.write(data);
    res.end();
  })
  .listen(8000);

// let date = date.now();
// console.log(date);
