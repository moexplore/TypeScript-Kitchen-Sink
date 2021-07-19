/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./kitchen.ts":
/*!********************!*\
  !*** ./kitchen.ts ***!
  \********************/
/***/ (() => {

eval("\r\nvar myName = \"Moshe\";\r\nvar numberOfStates = 50;\r\nvar sum = 5 + 4;\r\nconsole.log(sum);\r\nfunction sayHello() {\r\n    return \"Hello World!\";\r\n}\r\nconsole.log(sayHello());\r\nconsole.log(checkAge(\"Charles\", 21));\r\nconsole.log(checkAge(\"Abby\", 27));\r\nconsole.log(checkAge(\"James\", 18));\r\nconsole.log(checkAge(\"John\", 17));\r\nvar veg = [\"carrot\", \"tomato\", \"broccoli\"];\r\nfor (var i = 0; i < veg.length; i++) {\r\n    console.log(veg[i]);\r\n}\r\nvar pet = {\r\n    name: \"fido\",\r\n    breed: \"dog\"\r\n};\r\nconsole.log(pet.name, pet.breed);\r\nfunction checkAge(name, age) {\r\n    if (age < 21) {\r\n        return \"Sorry \" + name + \", you aren't old enough to view this page!\";\r\n    }\r\n    else {\r\n        return \"You are old enough to enter \" + name;\r\n    }\r\n}\r\nvar sinkTest = [{\r\n        name: \"Mo\",\r\n        age: 22\r\n    }, {\r\n        name: \"Jo\",\r\n        age: 19\r\n    }, {\r\n        name: \"Yo\",\r\n        age: 25\r\n    }, {\r\n        name: \"Shmo\",\r\n        age: 18\r\n    }, {\r\n        name: \"Po\",\r\n        age: 55\r\n    }];\r\n//this loop runs the function for each object in the array\r\nfor (var i = 0; i < sinkTest.length; i++) {\r\n    console.log(checkAge(sinkTest[i].name, sinkTest[i].age));\r\n}\r\n//this loop iterates through sinkTest\r\nfor (var i in sinkTest) {\r\n    //console.log(i)\r\n    console.log(sinkTest[i]);\r\n}\r\nfunction getLength(str) {\r\n    return str.length;\r\n}\r\nif (getLength(\"Hello\") % 2 !== 0) {\r\n    console.log(\"The world is nice and even!\");\r\n}\r\nelse\r\n    (console.log(\"The world is an odd place!\"));\r\nvar stringLength = getLength(\"Hello World\");\r\nconsole.log(stringLength);\r\n\n\n//# sourceURL=webpack://TypeSKitchSink/./kitchen.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./kitchen.ts"]();
/******/ 	
/******/ })()
;