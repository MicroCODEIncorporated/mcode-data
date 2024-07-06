// #region  F I L E
// <copyright file="mcode-data/index.js" company="MicroCODE Incorporated">Copyright © 2022-2024 MicroCODE, Inc. Troy, MI</copyright><author>Timothy J. McGuire</author>
// #region  M O D U L E

// #region  D O C U M E N T A T I O N
/*
 *      Title:    MicroCODE Shared Data Handling Library
 *      Module:   modules (node_modules/mcode-data/index.js)
 *      Project:  MicroCODE MERN Applications
 *      Customer: Internal+MIT xPRO Course
 *      Creator:  MicroCODE Incorporated
 *      Date:     January 2022-2024
 *      Author:   Timothy McGuire
 *
 *      MIT License: MicroCODE.mcode-data
 *
 *      Copyright (c) 2022-2024 Timothy McGuire, MicroCODE, Inc.
 *
 *      Permission is hereby granted, free of charge, to any person obtaining a copy
 *      of this software and associated documentation files (the "Software"), to deal
 *      in the Software without restriction, including without limitation the rights
 *      to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *      copies of the Software, and to permit persons to whom the Software is
 *      furnished to do so, subject to the following conditions:
 *
 *      The above copyright notice and this permission notice shall be included in all
 *      copies or substantial portions of the Software.
 *
 *      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *      IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *      FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *      AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *      LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *      OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *      SOFTWARE.
 *
 *
 *      DESCRIPTION:
 *      ------------
 *
 *      This module implements the MicroCODE's Common JavaScript functions for data handling.
 *
 *
 *      REFERENCES:
 *      -----------
 *
 *      1. MIT xPRO Course: Professional Certificate in Coding: Full Stack Development with MERN
 *
 *      2. LADDERS® source code: MACRO-11, MACRO-32, C#, and JavaScript.
 *
 *
 *
 *
 *      MODIFICATIONS:
 *      --------------
 *
 *  Date:         By-Group:   Rev:    Description:
 *
 *  30-Jan-2024   TJM-MCODE  {0001}   New module for common reusable JavaScript data handling functions.
 *  01-Feb-2024   TJM-MCODE  {0002}   Changed to the Universal Module Definition (UMD) pattern to support AMD,
 *                                    CommonJS/Node.js, and browser global in our exported module.
 *  01-Feb-2024   TJM-MCODE  {0003}   Swap() and Call() now throw an error if the 'keys' and 'values' lists are not the same length,
 *                                    instead of looging the error and returning a default value.
 *
 *
 *
 * NOTE: This module follow's MicroCODE's JavaScript Style Guide and Template JS file, see:
 *
 *       o  https://github.com/MicroCODEIncorporated/JavaScriptSG
 *       o  https://github.com/MicroCODEIncorporated/TemplatesJS
 *
 */

// #endregion

// #region  I M P O R T S

const packageJson = require('./package.json');

// #endregion

// #region  T Y P E S

// #endregion

// #region  I N T E R F A C E S

// #endregion

// #region  C O N S T A N T S, F U N C T I O N S – P U B L I C

// MicroCODE: define this module's name for our 'mcode-log' package
const MODULE_NAME = 'mcode-data.js';

// define local copy of 'getEnvVar()' for use before 'mcode' is loaded
// this same function is available in 'mcode-env.js' but we need it here without that package

/**
 * @function getEnvVar
 * @memberof mcode
 * @desc a private helper function that returns the value of an environment variable, or a default value if not found.
 * @param {any} key the name of the environment variable to get.
 * @param {any} defaultValue the default value to return if the environment variable is not found.
 * @returns {any} the value of the environment variable, or the default value if not found.
 */
function getEnvVar(key, defaultValue)
{
    if (typeof process !== 'undefined' && process.env && key in process.env)
    {
        return process.env[key];
    }
    return defaultValue;
};

// get our environment variables if we're on a Node.js platform
const theme = getEnvVar('THEME', 'dark'); // default to dark mode
const mode = getEnvVar('NODE_ENV', 'development'); // default to development mode

/**
 * @namespace mcode
 * @desc mcode namespace containing functions and constants.
 */
const mcode = {

    /**
     * @func isString
     * @memberof mcode
     * @desc Checks whether or not a object is a JS String.
     * @api public
     * @param {object} jsObject JavaScript object to be tested
     * @returns {boolean} a value indicating whether or not the object is a STRING.
     */
    isString: function (jsObject)
    {
        return Object.prototype.toString.call(jsObject) === '[object String]';
    },

    /**
     * @method isObject
     * @memberof mcode
     * @desc Checks whether or not a object is a JS Object.
     * @api public
     * @param {object} jsObject JavaScript object to be tested
     * @returns {boolean} a value indicating whether or not the object is an OBJECT.
     */
    isObject: function (jsObject)
    {
        if (mcode.isString(jsObject)) return false;

        return typeof jsObject === 'object' && jsObject !== null && !Array.isArray(jsObject) && typeof jsObject !== 'function';
    },

    /**
     * @method isArray
     * @memberof mcode
     * @desc Checks whether or not an object is a JS Array.
     * @api public
     * @param {object} jsObject JavaScript object to be tested
     * @returns {boolean} a value indicating whether or not the object is an ARRAY.
     */
    isArray: function (jsObject)
    {
        return Array.isArray(jsObject);
    },

    /**
     * @method isFunction
     * @memberof mcode
     * @desc Checks whether or not an object is a JS Function.
     * @api public
     * @param {object} jsObject JavaScript object to be tested
     * @returns {boolean} a value indicating whether or not the object is a FUNCTION.
     */
    isFunction: function (jsObject)
    {
        if (mcode.isString(jsObject)) return false;

        return typeof jsObject === 'function';
    },

    /**
     * @func isNumber
     * @memberof mcode
     * @desc Checks whether or not an object is a JS Number and *not* NaN.
     * @api public
     * @param {any} numberToCheck as a number of some type
     * @returns {boolean} a value indicating whether or not the object is valid Number.
     */
    isNumber: function (numberToCheck)
    {
        // NOTE: this compare will fail for NaN
        // eslint-disable-next-line no-self-compare
        return (typeof numberToCheck === 'number') && (numberToCheck === numberToCheck);
    },

    /**
     * @func isNaN
     * @memberof mcode
     * @desc Checks whether or not an object is a double-precision 'Not-a-Number (Nan)'.
     * @api public
     * @param {any} numberToCheck as a number of some type
     * @returns {boolean} a value indicating whether or not the object is NaN.
     */
    isNaN: function (numberToCheck)
    {
        // NOTE: this compare will always be true for NaN, and only for NaN
        // eslint-disable-next-line no-self-compare
        return (numberToCheck !== numberToCheck);
    },

    /**
     * @func isJson
     * @memberof mcode
     * @desc Checks a string for embedded JSON data.
     * @api public
     * @param {object} object string to be tested
     * @returns {boolean} a value indicating whether or not the object is a JSON string.
     */
    isJson: function (object)
    {
        try
        {
            if (typeof object !== 'string')
            {
                return false;
            }

            if ((object).includes('{'))
            {
                return true;  // treat as JSON -- JSON.parse() is overkill here
            }
            else
            {
                return false; // *not* JSON
            }
        }
        catch
        {
            return false;  // *not* JSON and not parsable
        }
    },

    /**
     * @func isUndefined
     * @memberof mcode
     * @desc Checks whether or not an object is a 'undefined'.
     * @api public
     * @param {any} objectToCheck as a variable of some type
     * @returns {boolean} a value indicating whether or not the object is UNDEFINED.
     */
    isUndefined: function (objectToCheck)
    {
        // return true if 'objectToCheck' is UNDEFINED
        return ((typeof objectToCheck === 'undefined') || (objectToCheck === null));
    },

    /**
     * @func isDate
     * @memberof mcode
     * @desc Checks whether or not an object is a JS Date.
     * @param {object} objectToCheck
     * @returns {boolean} a value indicating whether or not the object is a DATE.
     */
    isDate: function (objectToCheck)
    {
        // return true if 'objectToCheck' is DATE Value
        return (objectToCheck instanceof Date);
    },

    /**
     * @func isTimeStamp
     * @memberof mcode
     * @desc Checks whether or not an object is a Timestampe, i.e.: a JS Date.
     * @param {object} objectToCheck
     * @returns {boolean} a value indicating whether or not the object is a TIMESTAMP.
     */
    isTimeStamp: function (objectToCheck)
    {
        // return true if 'objectToCheck' is DATE/TIMESTAMP Value
        return (objectToCheck instanceof Date);
    },

    /**
     * @func octify
     * @memberof mcode
     * @desc Converts a string to an octal string.
     * @api public
     * @param {string} text - The string to be converted to an octal string of bytes.
     * @returns {string} The octal string.
     * @example
     *           mcode.octify('Hello, World!');  // returns: "110 145 154 154 157 54 40 127 157 162 154 144 41"
     */
    octify(text)
    {
        const buffer = Buffer.from(text, 'utf8');

        // Convert each byte to its octal representation
        const octArray = [...buffer].map((byte) => byte.toString(8).padStart(3, '0'));

        // Join the octal values into a string separated by spaces
        return octArray.join(' ');
    },

    /**
     * @func hexify
     * @memberof mcode
     * @desc Converts a string to a hexadecinal string of bytes.
     * @api public
     * @param {string} text the string to be converted to a hex string.
     * @returns {string} the hex string.
     * @example
     *           mcode.hexify('Hello, World!');  // returns: "48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 21"
     */
    hexify(text)
    {
        const buffer = Buffer.from(text, 'utf8');
        const hex = buffer.toString('hex');

        // Format the hex string into groups of 2 characters (1 byte)
        return hex.match(/.{1,2}/g).join(' ');
    },

    /**
     * @func extractId
     * @memberof mcode
     * @desc Extracts an alpha-numberic ID Field from a string, intended to be a unique portion of a common string.
     * @param {string} objectName typically a file name, but can be any string, to extract an ID Field from.
     * @returns {string} the extracted ID Field.
     *
     *  Rules for extracting the ID Field:
     *  ----------------------------------
     *  1. The ID Field is assumed to be the first alpha-numeric field in the string.
     *  2. The ID Field is assumed to be Letters + Numbers, with no spaces or special characters.
     *  3. The ID Field is assumed to be either at the beginning or end of the string, or separated by non-alpha-numeric characters.
     *  4. The ID Field cound have lowercase 'placeholders' for numbers, like 'PxCy' or 'PnCn' for 'P1C2'.
     *
     * @example
     *
     * const str1 = "CG_BRKE01_20231116.L5K";
     * const str2 = "CG_BRKE03_20231116.L5K";
     *
     * console.log(extractIdField(str1)); // Expected output: "BRKE01"
     * console.log(extractIdField(str2)); // Expected output: "BRKE03"
     *
     * const str1 = "EP_GPT13TZ1_20231115_0800.L5K";
     * const str2 = "EP_GPT13TZ2_20231113_1600.L5K";
     *
     * console.log(extractIdField(str1)); // Expected output: "GPT13TZ1"
     * console.log(extractIdField(str2)); // Expected output: "GPT13TZ2"
     *
     * const str1 = "SEP_P1C2_GMP_ARL.L5K";
     * const str2 = "SEP_P3C0_GMP_ARL.L5K";
     *
     * console.log(extractIdField(str1)); // Expected output: "P1C2"
     * console.log(extractIdField(str2)); // Expected output: "P3C0"
     *
     * const str1 = "SEP_P1C2_GMP_ARL.L5K";
     * const str2 = "SEP_PxCy_GMP.L5K";
     *
     * console.log(extractIdField(str1)); // Expected output: "P1C2"
     * console.log(extractIdField(str2)); // Expected output: "PxCy"
     *
     *
     */
    extractId: function (objectName)
    {
        let idField = '';
        let inAlphaNumeric = false;
        let isLetter = false;
        let isLowerL = false;
        let isNumber = false;
        let hasLetters = false;
        let hasNumbers = false;
        let si = 0;

        // ƒ to check for upper case letter
        const isUpper = (objectName, i) =>
        {
            // if 'i' is outside 'objectName' return false
            if (i < 0 || i >= objectName.length)
            {
                return false;
            }
            return (objectName[i] >= 'A' && objectName[i] <= 'Z');
        };

        // scan the string for the first alpha-numeric field
        for (let i = 0; i < objectName.length; i++)
        {
            isNumber = (objectName[i] >= '0' && objectName[i] <= '9');
            isLetter = (objectName[i] >= 'A' && objectName[i] <= 'Z');
            isLowerL = (objectName[i] >= 'a' && objectName[i] <= 'z');

            if (isNumber || isLetter || isLowerL)
            {
                if (!inAlphaNumeric)
                {
                    inAlphaNumeric = true;
                    si = i;
                }
                idField += objectName[i];
                hasLetters = hasLetters || isLetter || isLowerL;
                hasNumbers = hasNumbers || isNumber;

                // Check for 'lower case numeric placeholder' like 'PxCy' or 'PnCn' for 'P1C2'
                if (isUpper(objectName, i - 1) && isUpper(objectName, i + 1) && isLowerL)
                {
                    hasNumbers = true;  // treat the single lower case letter between upper case letters as a number placeholder
                }
            }
            else
            {
                // hit non Alpha-Numeric character
                if (inAlphaNumeric && hasLetters && hasNumbers)
                {
                    idField = objectName.substring(si, i);
                    break;  // we have the field we want, exit to return it
                }
                else
                {
                    // current field does not meet criteria, reset and continue
                    si = 0;
                    idField = '';
                    inAlphaNumeric = false;
                    hasLetters = false;
                    hasNumbers = false;
                }
            }
        }

        return idField || '';
    },

    /**
     * @func httpStatus
     * @memberof mcode
     * @desc Returns the text for a given HTTP status code.
     * @param {object} httpCode the HTTP status code to translate.
     * @returns {string} a value representing the English meaning of a HTTP status code.
     */
    httpStatus: function (httpCode)
    {
        const httpResponse =
        {
            "100": "Continue",
            "101": "Switching Protocols",
            "102": "Processing",
            "103": "Early Hints",
            "200": "OK",
            "201": "Created",
            "202": "Accepted",
            "203": "Non-Authoritative Information",
            "204": "No Content",
            "205": "Reset Content",
            "206": "Partial Content",
            "207": "Multi-Status",
            "208": "Already Reported",
            "226": "IM Used",
            "300": "Multiple Choices",
            "301": "Moved Permanently",
            "302": "Found",
            "303": "See Other",
            "304": "Not Modified",
            "305": "Use Proxy",
            "307": "Temporary Redirect",
            "308": "Permanent Redirect",
            "400": "Bad Request",
            "401": "Unauthorized",
            "402": "Payment Required",
            "403": "Forbidden",
            "404": "Not Found",
            "405": "Method Not Allowed",
            "406": "Not Acceptable",
            "407": "Proxy Authentication Required",
            "408": "Request Timeout",
            "409": "Conflict",
            "410": "Gone",
            "411": "Length Required",
            "412": "Precondition Failed",
            "413": "Payload Too Large",
            "414": "URI Too Long",
            "415": "Unsupported Media Type",
            "416": "Range Not Satisfiable",
            "417": "Expectation Failed",
            "418": "I'm a Teapot", // indicates that the server refuses to brew coffee because it is a teapot. (An April fool’s joke from 1998)
            "421": "Misdirected Request",
            "422": "Unprocessable Entity",
            "423": "Locked",
            "424": "Failed Dependency",
            "425": "Too Early",
            "426": "Upgrade Required",
            "428": "Precondition Required",
            "429": "Too Many Requests",
            "431": "Request Header Fields Too Large",
            "444": "Connection Closed Without Response",
            "451": "Unavailable For Legal Reasons",
            "500": "Internal Server Error",
            "501": "Not Implemented",
            "502": "Bad Gateway",
            "503": "Service Unavailable",
            "504": "Gateway Timeout",
            "505": "HTTP Version Not Supported",
            "506": "Variant Also Negotiates",
            "507": "Insufficient Storage",
            "508": "Loop Detected",
            "509": "Bandwidth Limit Exceeded",
            "510": "Not Extended",
            "511": "Network Authentication Required"
        };

        // return the translated HTTP status code
        return ('' + httpCode + ': ' + httpResponse[httpCode] || 'Unknown HTTP Status');
    },
};

// #endregion

// #region  M E T H O D - E X P O R T S

// Immediately Invoked Function Expression (IIFE) invoked on 'this' which
// represents the global object(window in a browser, global in Node.js).
// This IIFE returns the 'mcode' object to be assigned to the global object.
// The Universal Module Definition (UMD) pattern supports Asynchronous Module Definition (AMD),
// CommonJS / Node.js, and Browser 'global' usage.
(
    /**
     * @function (IIFE)
     * @description Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, and browser global
     * @param {any} root the global object (window, self, global, etc.) being updated.
     * @param {any} factory a function that returns the exports of the module. This function is invoked in
     * the context of the global object when the module is loaded. The return value of this function is used
     * as the exported value of the module when it's not being used with AMD or Node.js module systems.
     * This function is where you define what your module exports.
     */
    function (root, factory)
    {
        if (typeof define === 'function' && define.amd)
        {
            // AMD. Register as an anonymous module.
            define([], factory);
        }
        else if (typeof module === 'object' && module.exports)
        {
            // Node. Does not work with strict CommonJS, but
            // only CommonJS-like environments that support module.exports, like Node.
            module.exports = factory();
        }
        else
        {
            // Browser globals (root is 'window')
            root.mcode = factory();
        }

    }(  // root: the global object (window, self, global, etc.)
        (typeof self !== 'undefined') ? self : this,

        // factory: a function that returns the exports of the module
        function () {return mcode;})
);

// #endregion

// #endregion
// #endregion