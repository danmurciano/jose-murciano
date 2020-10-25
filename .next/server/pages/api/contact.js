module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/contact.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/api/contact.js":
/*!******************************!*\
  !*** ./pages/api/contact.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst sendmail = __webpack_require__(/*! sendmail */ \"sendmail\")();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (async (req, res) => {\n  const form = req.body;\n  form.photo ? sendmail({\n    from: form.email,\n    to: \"danm.editing@gmail.com\",\n    subject: 'Website Message',\n    html: form.message + \" \",\n    attachments: [{\n      filename: 'photo.png',\n      path: `/Users/danmurciano/Web-Dev/Projects/Jose/public/${form.photo}`\n    }]\n  }, function (err, reply) {\n    console.log(err && err.stack);\n    console.dir(reply);\n  }) : sendmail({\n    from: form.email,\n    to: \"danm.editing@gmail.com\",\n    subject: 'Website Message',\n    html: form.message + \" \"\n  }, function (err, reply) {\n    console.log(err && err.stack);\n    console.dir(reply);\n  });\n  res.status(200).json(form);\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvY29udGFjdC5qcz9hMGIxIl0sIm5hbWVzIjpbInNlbmRtYWlsIiwicmVxdWlyZSIsInJlcSIsInJlcyIsImZvcm0iLCJib2R5IiwicGhvdG8iLCJmcm9tIiwiZW1haWwiLCJ0byIsInByb2Nlc3MiLCJzdWJqZWN0IiwiaHRtbCIsIm1lc3NhZ2UiLCJhdHRhY2htZW50cyIsImZpbGVuYW1lIiwicGF0aCIsImVyciIsInJlcGx5IiwiY29uc29sZSIsImxvZyIsInN0YWNrIiwiZGlyIiwic3RhdHVzIiwianNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxNQUFNQSxRQUFRLEdBQUdDLG1CQUFPLENBQUMsMEJBQUQsQ0FBUCxFQUFqQjs7QUFFZSxzRUFBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBQ2pDLFFBQU1DLElBQUksR0FBR0YsR0FBRyxDQUFDRyxJQUFqQjtBQUVBRCxNQUFJLENBQUNFLEtBQUwsR0FFRU4sUUFBUSxDQUFDO0FBQ1BPLFFBQUksRUFBRUgsSUFBSSxDQUFDSSxLQURKO0FBRVBDLE1BQUUsRUFBRUMsd0JBRkc7QUFHUEMsV0FBTyxFQUFFLGlCQUhGO0FBSVBDLFFBQUksRUFBRVIsSUFBSSxDQUFDUyxPQUFMLEdBQWUsR0FKZDtBQUtQQyxlQUFXLEVBQUUsQ0FDWDtBQUNFQyxjQUFRLEVBQUUsV0FEWjtBQUVFQyxVQUFJLEVBQUcsbURBQWtEWixJQUFJLENBQUNFLEtBQU07QUFGdEUsS0FEVztBQUxOLEdBQUQsRUFXTCxVQUFTVyxHQUFULEVBQWNDLEtBQWQsRUFBcUI7QUFDdEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLElBQUlBLEdBQUcsQ0FBQ0ksS0FBdkI7QUFDQUYsV0FBTyxDQUFDRyxHQUFSLENBQVlKLEtBQVo7QUFDRCxHQWRPLENBRlYsR0FtQkVsQixRQUFRLENBQUM7QUFDUE8sUUFBSSxFQUFFSCxJQUFJLENBQUNJLEtBREo7QUFFUEMsTUFBRSxFQUFFQyx3QkFGRztBQUdQQyxXQUFPLEVBQUUsaUJBSEY7QUFJUEMsUUFBSSxFQUFFUixJQUFJLENBQUNTLE9BQUwsR0FBZTtBQUpkLEdBQUQsRUFLTCxVQUFTSSxHQUFULEVBQWNDLEtBQWQsRUFBcUI7QUFDdEJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxHQUFHLElBQUlBLEdBQUcsQ0FBQ0ksS0FBdkI7QUFDQUYsV0FBTyxDQUFDRyxHQUFSLENBQVlKLEtBQVo7QUFDRCxHQVJPLENBbkJWO0FBNkJBZixLQUFHLENBQUNvQixNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUJwQixJQUFyQjtBQUNELENBakNEIiwiZmlsZSI6Ii4vcGFnZXMvYXBpL2NvbnRhY3QuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzZW5kbWFpbCA9IHJlcXVpcmUoJ3NlbmRtYWlsJykoKTtcblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IGZvcm0gPSByZXEuYm9keTtcblxuICBmb3JtLnBob3RvID9cblxuICAgIHNlbmRtYWlsKHtcbiAgICAgIGZyb206IGZvcm0uZW1haWwsXG4gICAgICB0bzogcHJvY2Vzcy5lbnYuQ09OVEFDVF9FTUFJTCxcbiAgICAgIHN1YmplY3Q6ICdXZWJzaXRlIE1lc3NhZ2UnLFxuICAgICAgaHRtbDogZm9ybS5tZXNzYWdlICsgXCIgXCIsXG4gICAgICBhdHRhY2htZW50czogW1xuICAgICAgICB7XG4gICAgICAgICAgZmlsZW5hbWU6ICdwaG90by5wbmcnLFxuICAgICAgICAgIHBhdGg6IGAvVXNlcnMvZGFubXVyY2lhbm8vV2ViLURldi9Qcm9qZWN0cy9Kb3NlL3B1YmxpYy8ke2Zvcm0ucGhvdG99YFxuICAgICAgICB9XG4gICAgICBdXG4gICAgfSwgZnVuY3Rpb24oZXJyLCByZXBseSkge1xuICAgICAgY29uc29sZS5sb2coZXJyICYmIGVyci5zdGFjayk7XG4gICAgICBjb25zb2xlLmRpcihyZXBseSk7XG4gICAgfSlcblxuICA6XG4gICAgc2VuZG1haWwoe1xuICAgICAgZnJvbTogZm9ybS5lbWFpbCxcbiAgICAgIHRvOiBwcm9jZXNzLmVudi5DT05UQUNUX0VNQUlMLFxuICAgICAgc3ViamVjdDogJ1dlYnNpdGUgTWVzc2FnZScsXG4gICAgICBodG1sOiBmb3JtLm1lc3NhZ2UgKyBcIiBcIlxuICAgIH0sIGZ1bmN0aW9uKGVyciwgcmVwbHkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVyciAmJiBlcnIuc3RhY2spO1xuICAgICAgY29uc29sZS5kaXIocmVwbHkpO1xuICAgIH0pXG5cbiAgcmVzLnN0YXR1cygyMDApLmpzb24oZm9ybSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/contact.js\n");

/***/ }),

/***/ "sendmail":
/*!***************************!*\
  !*** external "sendmail" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"sendmail\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzZW5kbWFpbFwiPzExMzkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoic2VuZG1haWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzZW5kbWFpbFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///sendmail\n");

/***/ })

/******/ });