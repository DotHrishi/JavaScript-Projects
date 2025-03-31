// // import generateName from "sillyname"
// // var sillyName = generateName();

// // console.log('My name is '+ sillyName);

// // import generateStupidName from "sillyname";

// // var newname=generateStupidName();

// // console.log("I am "+ newname);

// import inquirer from "inquirer";
// import qr from "qr-image";
// import fs from "fs";

// inquirer.prompt([
//     {"message":"Enter url to convert in QR code",
//        "name":"URL",},
// ])
// .then((answers)=>{
//     const url=answers.URL;
//     var qr_svg = qr.image(url);
//     qr_svg.pipe(fs.createWriteStream('qrimg.png'));
// })
// .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });

import f1s from "f1-stats"
