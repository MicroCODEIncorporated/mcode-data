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
 *  22-Aug-2024   TJM-MCODE  {0004}   Corrected isJson() to rely on 1st character being '{' to determine JSON string
 *                                    it was returning true for any string that contained a '{' character,
 *                                    this was signaling 'true' for HTMX templates that contained '{{variable}}'.
 *  05-Oct-2024   TJM-MCODE  {0005}   Added 'uuidDecode()' function to decode UUID strings into their component parts.
 *
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

// #endregion

// #region  T Y P E S

// #endregion

// #region  I N T E R F A C E S

// #endregion

// #region  C O N S T A N T S, F U N C T I O N S – P U B L I C

// MicroCODE: define this module's name for our 'mcode-log' package
const MODULE_NAME = 'mcode-data.js';

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

            // if the very first character is '{' then it's probably JSON
            if (object.startsWith('{'))
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
        // example: `[404]: Not Found`
        return (`[${httpCode}]: ` + httpResponse[httpCode] || 'Unknown HTTP Status');
    },

    /**
     * @func uuidDecode
     * @memberof mcode
     * @desc Decodes a UUID string into its component parts, this supports RFC 4122 and RFC 9562 UUIDs.
     * @param {string} uuid a UUID string in the format 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
     * @param {boolean} localTime a flag to indicate if the timestamp should be converted to local time for display.
     * @returns {string} a JSON object containing the decoded UUID parts.
     */
    uuidDecode: function (uuid, localTime = false)
    {
        // V A R I A N T S

        const variants = [
            "NCS compatibility",
            "NCS compatibility",
            "RFC 4122, RFC 9562",
            "Microsoft GUIDs",
        ];

        // V E R S I O N S

        // NCS compatibility (variant 0, 1)
        const var1versions = [
            "Undefined / Reserved / NIL",     // 0
            " NCS Security Version",          // 1
            " NCS Security Version",          // 2
            " NCS Security Version",          // 3
            " NCS Security Version",          // 4
            " NCS Security Version",          // 5
            " NCS Security Version",          // 6
            " NCS Security Version",          // 7
            " NCS Security Version",          // 8
            " NCS Security Version",          // 9
            " NCS Security Version",          // 10
            " NCS Security Version",          // 11
            " NCS Security Version",          // 12
            " NCS Security Version",          // 13
            " NCS Security Version",          // 14
            "Undefined / Reserved / MAX",     // 15
        ];

        // RFC 4122 (Leach-Salz) (variant 2)
        const var2versions = [
            "Undefined / Reserved / NIL",     // 0
            "Gregorian Unordered Timestamp",  // 1
            "DCE Security (POSIX)",           // 2
            "Name-Based (MD5 Hash)",          // 3
            "Random-Based Number",            // 4
            "Name Based (SHA-1 Hash)",        // 5
            "Gregorian Ordered Timestamp",    // 6
            "Unix Epoch Timestamp",           // 7
            "Custom Encoding Format",         // 8
            "Reserved for future defnition",  // 9
            "Reserved for future defnition",  // 10
            "Reserved for future defnition",  // 11
            "Reserved for future defnition",  // 12
            "Reserved for future defnition",  // 13
            "Reserved for future defnition",  // 14
            "Undefined / Reserved / MAX",     // 15
        ];

        // Microsoft GUIDs (variant 3)
        const var3versions = [
            "Undefined / Reserved / NIL",     // 0
            "Microsoft GUID Version 1",       // 1
            "Microsoft GUID Version 2",       // 2
            "Microsoft GUID Version 3",       // 3
            "Microsoft GUID Version 4",       // 4
            "Microsoft GUID Version 5",       // 5
            "Microsoft GUID Version 6",       // 6
            "Microsoft GUID Version 7",       // 7
            "Microsoft GUID Version 8",       // 8
            "Microsoft GUID Version 9",       // 9
            "Microsoft GUID Version 10",      // 10
            "Microsoft GUID Version 11",      // 11
            "Microsoft GUID Version 12",      // 12
            "Microsoft GUID Version 13",      // 13
            "Microsoft GUID Version 14",      // 14
            "Undefined / Reserved / MAX",     // 15
        ];

        // L I S T S - by UUID Variant and their Versions

        // ƒ Table of UUID Variants
        const uuidVariants = [
            uuidvar1,  // NCS compatibility
            uuidvar1,  // NCS compatibility
            uuidvar2,  // RFC 4122, RFC 9562
            uuidvar3,  // Microsoft GUIDs
        ];

        // ƒ Table of UUID Layouts for Variant #0/1 (NCS compatibility)
        const uuidvar1Layouts = [
            uuidvarNIL,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvar1reserved,
            uuidvarMAX,
        ];

        // ƒ Table of UUID Layouts for Variant #2 (RFC 4122, RFC 9562)
        const uuidvar2Layouts = [
            uuidvarNIL,
            uuidvar2v1,
            uuidvar2v2,
            uuidvar2v3,
            uuidvar2v4,
            uuidvar2v5,
            uuidvar2v6,
            uuidvar2v7,
            uuidvar2v8,
            uuidvar2reserved,
            uuidvar2reserved,
            uuidvar2reserved,
            uuidvar2reserved,
            uuidvar2reserved,
            uuidvar2reserved,
            uuidvarMAX
        ];

        // ƒ Table of UUID Layouts for Variant #3 (GUID)
        const uuidvar3Layouts = [
            uuidvarNIL,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvar3reserved,
            uuidvarMAX,
        ];

        // L A Y O U T S - by UUID Variant and their Versions

        // ƒ UUID Variant #0 and #1 - NCS compatibility
        function uuidvar1()
        {
            versionText = var1versions[version];
            return uuidvar1Layouts[version]();
        }

        // ƒ UUID Variant #2 - RFC 4122 (Leach-Salz)
        function uuidvar2()
        {
            versionText = var2versions[version];
            return uuidvar2Layouts[version]();
        }

        // ƒ UUID Variant #3 - Microsoft GUIDs
        function uuidvar3()
        {
            versionText = var3versions[version];
            return uuidvar3Layouts[version]();
        }

        // V E R S I O N S - by UUID Variant

        // ƒ UUIDvar*v0 - Unused / Reserved for 00000000-0000-0000-0000-000000000000
        function uuidvarNIL()
        {
            // decoded by default as a generic UUID

            return uuidGenericLayout();
        }

        // ƒ UUIDvar*v15 - Unused / Reserved for FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF
        function uuidvarMAX()
        {
            // decoded by default as a generic UUID

            return uuidGenericLayout();
        }

        // ƒ UUIDv1, UUIDv1 - 14 - Unused /  reserved UUID variants
        function uuidvar1reserved()
        {
            // decoded by default as a generic UUID

            return uuidGenericLayout();
        }

        // ƒ UUIDv2, UUIDv9-15 - Unused /  reserved UUID variants
        function uuidvar2reserved()
        {
            // decoded by default as a generic UUID

            return uuidGenericLayout();
        }

        // D E C O D E R S - by UUID Variant and their Versions

        // ƒ to build a timestamp string in the format "YYYY-MMM-DD HH:MM:SS.mmm.uuu UTC"
        function makeTimestamp(time_high, time_mid, time_low, epochInMs, localTime)
        {
            try
            {
                // Handle UUID version 1 (time-based)
                const timeHigh = BigInt(parseInt(time_high, 16));
                const timeMid = BigInt(parseInt(time_mid, 16));
                const timeLow = BigInt(parseInt(time_low, 16));

                // Combine the time fields into a 60-bit value using BigInt
                const timeValue = (timeHigh << 48n) | (timeMid << 32n) | timeLow;

                // UUID uses 100-nanosecond intervals, so we convert the timeValue to milliseconds
                const timeValueInMs = timeValue / 10000n;

                // Add time since UUID epoch to the precomputed epoch offset
                const millisecondsSinceEpoch = Number(timeValueInMs + epochInMs);

                // Convert to a JavaScript Date object
                const timeDate = new Date(millisecondsSinceEpoch);

                // Extract milliseconds and microseconds
                const milliseconds = timeDate.getMilliseconds();
                const microseconds = Number((timeValue % 10000n) / 10n);

                if (localTime)
                {
                    // Format the value to "YYYY-MMM-DD HH:MM:SS.mmm.uuu AM/PM"
                    const datePart = timeDate.toLocaleDateString('en-US', {year: 'numeric', month: 'short', day: '2-digit'});
                    const timePart = timeDate.toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit',
                        hour12: true
                    });
                    const ampm = timePart.slice(-2); // AM/PM part
                    const timeNoMeridian = timePart.slice(0, -3); // Time without AM/PM
                    timestampText = `${datePart} ${timeNoMeridian}.${milliseconds.toString().padStart(3, '0')}.${microseconds.toString().padStart(3, '0')} ${ampm}`;
                }
                else
                {
                    // Format the value to "YYYY-MMM-DD HH:MM:SS.mmm.uuu UTC"
                    timestampText = timeDate.toISOString()
                        .replace('T', ' ')
                        .replace('Z', '')
                        .replace(/\.\d{3}/, `.${milliseconds.toString().padStart(3, '0')}.${microseconds.toString().padStart(3, '0')} UTC`);
                }
            }
            catch
            {
                // If there is an error, return the raw timestamp
                timestampText = `${time_high}${time_mid}${time_low}`;
            }
            return timestampText;
        }

        // ƒ UUIDv1 - Unordered Time-based UUID
        function uuidvar2v1()
        {
            /*
             UUIDv1 Field and Bit Layout - Gregorian Unordered Time-based UUID:
             3             2               1               0               0
             1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
            +---------------+---------------+---------------+---------------+
            |                         time_low                              |
            +---------------+---------------+--------+------+---------------+
            |            time_mid           |   ver  |     time_high        |
            ----+-----------+---------------+--------+------+---------------+
            |var|        clock_seq          |            node               |
            +---+-----------+---------------+---------------+---------------+
            |                            node                               |
            +---------------+---------------+---------------+---------------+
            */

            const time_low = part_a1;
            const time_mid = part_a0;
            const time_high = part_b;
            const time = `${time_high}${time_mid}${time_low}`;
            const clock_seq = part_c2;
            const clockSeq = BigInt(parseInt(clock_seq, 16));
            const node = part_c1 + part_c0;

            // Determine if the node is multicast based on the first bit of 'node'
            const multicastBit = parseInt(node.substring(0, 1), 16) >> 3;  // Extract multicast flag (1 bit) from node
            const multicast = multicastBit === 1;
            const multicastText = multicast ? 'Multicast' : 'Unicast';

            // The reset is based on UUID Variant and the Version of that Variant...
            let nodeType;
            let nodeValue;

            // Multicast or Unicast Addressed node
            nodeType = multicast ? 'MAC Address (Multicast)' : 'MAC Address (Unicast)';
            nodeValue = node.match(/.{2}/g).join(':');

            // The epoch is October 15, 1582 (start of UUID time)
            const epochInMs = BigInt(Date.UTC(1582, 9, 15));

            // Get 'YYYY-MMM-DD HH:MM:SS.mmm.uuu UTC'
            const timestampText = makeTimestamp(time_high, time_mid, time_low, epochInMs, localTime);

            // Return Variant 2 UUIDv1 Decoded
            return {

                UUID: uuid,

                Variant: variant,
                VariantText: variantText,

                Version: version,
                VersionText: versionText,

                Value1Name: "Timestamp",
                Value1: timestampText,

                Value2Name: "Clock Sequence",
                Value2: clockSeq,

                Value3Name: "",
                Value3: "",

                Value4Name: "Node Type",
                Value4: nodeType,

                Value5Name: "Node Address",
                Value5: `${nodeValue}`,

                Value6Name: "",
                Value6: "",

                NumberName: "Random Number",
                NumberText: `0x${time_high}${time_mid}${time_low}`,

                time_low: time_low,
                time_mid: time_mid,
                time_high: time_high,
                time: time,
                clock_seq: clock_seq,
                multicast: multicast,
                multicastText: multicastText,
                node: node,
            };
        }

        // ƒ UUIDv2 - DCE Security (POSIX) UUID
        function uuidvar2v2()
        {
            /*
             UUIDv2 Field and Bit Layout -  DCE Security (POSIX) UUID:
             3             2               1               0               0
             1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
            +---------------+---------------+---------------+---------------+
            |                         part_a1                               |
            +---------------+---------------+--------+------+---------------+
            |            part_a0            |   ver  |     part_b           |
            ----+-----------+---------------+--------+------+---------------+
            |var|        part_c2            |            part_c1            |
            +---+-----------+---------------+---------------+---------------+
            |                            part_c0                            |
            +---------------+---------------+---------------+---------------+
            */

            // {TBD} - not documented in RFC 9562

            return uuidGenericLayout();
        }

        // ƒ UUIDv3 - Name-Based (MD5 Hash) UUID
        function uuidvar2v3()
        {
            /*
             UUIDv3 Field and Bit Layout - Name-Based (MD5 Hash) UUID:
             3             2               1               0               0
             1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
            +---------------+---------------+---------------+---------------+
            |                         md5_high_1                            |
            +---------------+---------------+--------+------+---------------+
            |            md5_high_0         |   ver  |     md5_mid          |
            ----+-----------+---------------+--------+------+---------------+
            |var|        md5_low_2          |            md5_low_1          |
            +---+-----------+---------------+---------------+---------------+
            |                            md5_low_0                          |
            +---------------+---------------+---------------+---------------+
            */

            const md5_high_1 = part_a1;
            const md5_high_0 = part_a0;
            const md5_high = `${md5_high_1}${md5_high_0}`;
            const md5_mid = part_b;
            const md5_low_2 = part_c2;
            const md5_low_1 = part_c1;
            const md5_low_0 = part_c0;
            const md5_low = `${md5_low_2}${md5_low_1}${md5_low_0}`;

            const md5 = `${md5_high}${md5_mid}${md5_low}`;

            // Return Variant 2 UUIDv1 Decoded
            return {

                UUID: uuid,

                Variant: variant,
                VariantText: variantText,

                Version: version,
                VersionText: versionText,

                Value1Name: "md5_high",
                Value1: md5_high,

                Value2Name: "md5_mid",
                Value2: md5_mid,

                Value3Name: "md5_low",
                Value3: md5_low,

                Value4Name: "",
                Value4: '',

                Value5Name: "",
                Value5: '',

                Value6Name: "",
                Value6: '',

                NumberName: "MD5 Hash",
                NumberText: `0x${md5}`,

                md5_high: md5_high,
                md5_mid: md5_mid,
                md5_low: md5_low,

                MD5: md5
            };
        }

        // ƒ UUIDv4 - Random-Based Number UUID
        function uuidvar2v4()
        {
            /*
             UUIDv4 Field and Bit Layout - Random-Based Number UUID:
             3             2               1               0               0
             1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
            +---------------+---------------+---------------+---------------+
            |                        random_a1                              |
            +---------------+---------------+--------+------+---------------+
            |            random_a0          |   ver  |     random_b         |
            ----+-----------+---------------+--------+------+---------------+
            |var|        random_c2          |            random_c1          |
            +---+-----------+---------------+---------------+---------------+
            |                            part_c0                            |
            +---------------+---------------+---------------+---------------+
            */

            const random_a1 = part_a1;
            const random_a0 = part_a0;
            const random_a = `${random_a1}${random_a0}`;
            const random_b = part_b;
            const random_c2 = part_c2;
            const random_c1 = part_c1;
            const random_c0 = part_c0;
            const random_c = `${random_c2}${random_c1}${random_c0}`;

            const random = `${random_a}${random_b}${random_c}`;

            // Return Variant 2 UUIDv1 Decoded
            return {

                UUID: uuid,

                Variant: variant,
                VariantText: variantText,

                Version: version,
                VersionText: versionText,

                Value1Name: "random_a",
                Value1: random_a,

                Value2Name: "random_b",
                Value2: random_b,

                Value3Name: "random_c",
                Value3: random_c,

                Value4Name: "",
                Value4: '',

                Value5Name: "",
                Value5: '',

                Value6Name: "",
                Value6: '',

                NumberName: "Random Number",
                NumberText: `0x${random}`,

                random_a: random_a,
                random_b: random_b,
                random_c: random_c,

                Random: random
            };
        }

        // ƒ UUIDv5 - Name Based (SHA-1 Hash) UUID
        function uuidvar2v5()
        {
            /*
             UUIDv5 Field and Bit Layout -  Name Based (SHA-1 Hash) UUID:
             3             2               1               0               0
             1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
            +---------------+---------------+---------------+---------------+
            |                         sha1_high_1                           |
            +---------------+---------------+--------+------+---------------+
            |            sha1_high_0        |   ver  |     sha1_mid         |
            ----+-----------+---------------+--------+------+---------------+
            |var|        sha1_low_2         |            sha1_low_1         |
            +---+-----------+---------------+---------------+---------------+
            |                            sha1_low_0                         |
            +---------------+---------------+---------------+---------------+
            */

            const sha1_high_1 = part_a1;
            const sha1_high_0 = part_a0;
            const sha1_high = `${sha1_high_1}${sha1_high_0}`;
            const sha1_mid = part_b;
            const sha1_low_2 = part_c2;
            const sha1_low_1 = part_c1;
            const sha1_low_0 = part_c0;
            const sha1_low = `${sha1_low_2}${sha1_low_1}${sha1_low_0}`;

            const sha1 = `${sha1_high}${sha1_mid}${sha1_low}`;

            // Return Variant 2 UUIDv1 Decoded
            return {

                UUID: uuid,

                Variant: variant,
                VariantText: variantText,

                Version: version,
                VersionText: versionText,

                Value1Name: "sha1_high",
                Value1: sha1_high,

                Value2Name: "sha1_mid",
                Value2: sha1_mid,

                Value3Name: "sha1_low",
                Value3: sha1_low,

                Value4Name: "",
                Value4: '',

                Value5Name: "",
                Value5: '',

                Value6Name: "",
                Value6: '',

                NumberName: "SHA-1 Hash",
                NumberText: `0x${sha1}`,

                sha1_high: sha1_high,
                sha1_mid: sha1_mid,
                sha1_low: sha1_low,

                "SHA-1": sha1
            };
        }

        // ƒ UUIDv6 - Gregorian Ordered Timestamp UUID
        function uuidvar2v6()
        {
            /*
             UUIDv6 Field and Bit Layout - Gregorian Ordered Timestamp UUID:
             3             2               1               0               0
             1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
            +---------------+---------------+---------------+---------------+
            |                         time_high                             |
            +---------------+---------------+--------+------+---------------+
            |            time_mid           |   ver  |     time_low         |
            ----+-----------+---------------+--------+------+---------------+
            |var|        clock_seq          |            node               |
            +---+-----------+---------------+---------------+---------------+
            |                            node                               |
            +---------------+---------------+---------------+---------------+
            */

            const time_high = part_a1;
            const time_mid = part_a0;
            const time_low = part_b;
            const time = `${time_high}${time_mid}${time_low}`;
            const clock_seq = part_c2;
            const clockSeq = BigInt(parseInt(clock_seq, 16));
            const node = part_c1 + part_c0;

            // Determine if the node is multicast based on the first bit of 'node'
            const multicastBit = parseInt(node.substring(0, 1), 16) >> 3;  // Extract multicast flag (1 bit) from node
            const multicast = multicastBit === 1;
            const multicastText = multicast ? 'Multicast' : 'Unicast';

            // The reset is based on UUID Variant and the Version of that Variant...
            let nodeType;
            let nodeValue;

            // Multicast or Unicast Addressed node
            nodeType = multicast ? 'MAC Address (Multicast)' : 'MAC Address (Unicast)';
            nodeValue = node.match(/.{2}/g).join(':');

            // The epoch is October 15, 1582 (start of UUID time)
            const epochInMs = BigInt(Date.UTC(1582, 9, 15));

            // Get 'YYYY-MMM-DD HH:MM:SS.mmm.uuu UTC'
            const timestampText = makeTimestamp(time_high, time_mid, time_low, epochInMs, localTime);

            // Return Variant 2 UUIDv1 Decoded
            return {

                UUID: uuid,

                Variant: variant,
                VariantText: variantText,

                Version: version,
                VersionText: versionText,

                Value1Name: "Timestamp",
                Value1: timestampText,

                Value2Name: "Clock Sequence",
                Value2: clockSeq,

                Value3Name: "",
                Value3: "",

                Value4Name: "Node Type",
                Value4: nodeType,

                Value5Name: "Node Address",
                Value5: `${nodeValue}`,

                Value6Name: "",
                Value6: "",

                NumberName: "Random Number",
                NumberText: `0x${time_high}${time_mid}${time_low}`,

                time_low: time_low,
                time_mid: time_mid,
                time_high: time_high,
                time: time,
                clock_seq: clock_seq,
                multicast: multicast,
                multicastText: multicastText,
                node: node,
            };
        }

        // ƒ UUIDv7 - Unix Epoch Timestamp UUID
        function uuidvar2v7()
        {
            /*
             UUIDv7 Field and Bit Layout - Unix Epoch Timestamp UUID:
             3             2               1               0               0
             1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
            +---------------+---------------+---------------+---------------+
            |                         unix_ts1_ms                           |
            +---------------+---------------+--------+------+---------------+
            |            unix_ts0_ms        |   ver  |     rand_a           |
            ----+-----------+---------------+--------+------+---------------+
            |var|        rand_b2            |            rand_b1            |
            +---+-----------+---------------+---------------+---------------+
            |                            rand_b0                            |
            +---------------+---------------+---------------+---------------+
            */

            const unix_ts1_ms = part_a1;
            const unix_ts0_ms = part_a0;
            const unix_ts_ms = `${unix_ts1_ms}${unix_ts0_ms}`;
            const rand_a = part_b;
            const rand_b2 = part_c2;
            const rand_b1 = part_c1;
            const rand_b0 = part_c0;
            const rand_b = `${rand_b2}${rand_b1}${rand_b0}`;
            const rand = `${rand_a}${rand_b}`;

            // The epoch is January 1, 1970 (start of UNIX time)
            const epochInMs = BigInt(Date.UTC(1970, 1, 1));

            // Get 'YYYY-MMM-DD HH:MM:SS.mmm.uuu UTC'
            const timestampText = makeTimestamp('', unix_ts1_ms, unix_ts0_ms, epochInMs, localTime);

            // Return Variant 2 UUIDv1 Decoded
            return {

                UUID: uuid,

                Variant: variant,
                VariantText: variantText,

                Version: version,
                VersionText: versionText,

                Value1Name: "Timestamp",
                Value1: timestampText,

                Value2Name: "",
                Value2: "",

                Value3Name: "",
                Value3: "",

                Value4Name: "rand_a",
                Value4: rand_a,

                Value5Name: "rand_b",
                Value5: rand_b,

                Value6Name: "",
                Value6: '',

                NumberName: "Random Number",
                NumberText: `0x${rand}`,

                rand_a: rand_a,
                rand_b: rand_b,
                rand: rand,

                unix_ts_ms: unix_ts_ms,

                Random: rand
            };
        }

        // ƒ UUIDv8 - Custom Encoding Format UUID
        function uuidvar2v8()
        {
            /*
             UUIDv8 Field and Bit Layout - Custom Encoding Format UUID:
             3             2               1               0               0
             1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
            +---------------+---------------+---------------+---------------+
            |                         custom_a1                             |
            +---------------+---------------+--------+------+---------------+
            |            custom_a0          |   ver  |     custom_b         |
            ----+-----------+---------------+--------+------+---------------+
            |var|        custom_c2          |            custom_c1          |
            +---+-----------+---------------+---------------+---------------+
            |                            custom_c0                          |
            +---------------+---------------+---------------+---------------+
            */

            const custom_a1 = part_a1;
            const custom_a0 = part_a0;
            const custom_a = `${custom_a1}${custom_a0}`;
            const custom_b = part_b;
            const custom_c2 = part_c2;
            const custom_c1 = part_c1;
            const custom_c0 = part_c0;
            const custom_c = `${custom_c2}${custom_c1}${custom_c0}`;

            const custom = `${custom_a}${custom_b}${custom_c}`;

            // Return Variant 2 UUIDv1 Decoded
            return {

                UUID: uuid,

                Variant: variant,
                VariantText: variantText,

                Version: version,
                VersionText: versionText,

                Value1Name: "custom_a",
                Value1: custom_a,

                Value2Name: "custom_b",
                Value2: custom_b,

                Value3Name: "custom_c",
                Value3: custom_c,

                Value4Name: "",
                Value4: '',

                Value5Name: "",
                Value5: '',

                Value6Name: "",
                Value6: '',

                NumberName: "Custom Encoding",
                NumberText: `0x${custom}`,

                custom_a: custom_a,
                custom_b: custom_b,
                custom_c: custom_c,

                Custom: custom
            };
        }

        // ƒ UUIDv3, Microsoft GUID, UUIDv1 - 14 - Unused /  reserved UUID variants
        function uuidvar3reserved()
        {
            // decoded by default as a generic UUID

            return uuidGenericLayout();
        }

        /*
         UUID Generic Structure:
         3             2               1               0               0
         1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0 9 8 7 6 5 4 3 2 1 0
        +---------------+---------------+---------------+---------------+
        |                         part_a1                               |
        +---------------+---------------+--------+------+---------------+
        |            part_a0            |   ver  |     part_b           |
        ----+-----------+---------------+--------+------+---------------+
        |var|        part_c2            |            part_c1            |
        +---+-----------+---------------+---------------+---------------+
        |                            part_c0                            |
        +---------------+---------------+---------------+---------------+
        */

        // ƒ uuidGenericLayout - Generic UUID Layout
        function uuidGenericLayout()
        {
            const random = `${part_a1}${part_a0}${part_b}${part_c2}${part_c1}${part_c0}`;

            // Return Generic UUID Decoded
            return {

                UUID: uuid,

                Variant: variant,
                VariantText: variantText,

                Version: version,
                VersionText: versionText,

                Value1Name: "part_a",
                Value1: part_a,

                Value2Name: "part_b",
                Value2: part_b,

                Value3Name: "part_c",
                Value3: part_c,

                Value4Name: "",
                Value4: '',

                Value5Name: "",
                Value5: '',

                Value6Name: "",
                Value6: '',

                NumberName: "Random Number",
                NumberText: `0x${random}`,

                part_a: part_a,
                part_b: part_b,
                part_c: part_c,

                Random: random
            };
        }

        // M A I N - D E C O D E R

        // Split the UUID into parts: aaaaaaaa-aaaa-vbbb-Vccc-cccccccccccc
        //                            11111111 0000       222 111100000000

        // These pieces are common divisions of all UUIDs and they are interpreted
        // based on the UUID variant and version.
        uuid = uuid.toLowerCase();
        const UUID = uuid.toUpperCase();
        const [part_a1, part_a0, ver_part_b, var_part_c1, part_c1_c0] = uuid.split('-');
        const part_a = `${part_a1}${part_a0}`;
        const version = parseInt(ver_part_b.substring(0, 1), 16);
        const part_b = ver_part_b.substring(1);
        const variant = (parseInt(var_part_c1.substring(0, 1), 16) >> 2) & 0b11;
        const part_c2 = (parseInt(var_part_c1.substring(0, 1), 16) & 0b11).toString(16) + var_part_c1.substring(1);
        const part_c1 = part_c1_c0.substring(0, 4);
        const part_c0 = part_c1_c0.substring(4);
        const part_c = `${part_c2}${part_c1}${part_c0}`;

        // How to interpret the UUID...
        const variantText = variants[variant];
        let versionText = '<undetermined>';
        let variantValue1Name = 'part_a1';
        let variantValue1 = part_a1;
        let variantValue2Name = 'part_a0';
        let variantValue2 = part_a0;
        let variantValue3Name = 'part_b';
        let variantValue3 = part_b;
        let variantValue4Name = 'part_c2';
        let variantValue4 = part_c2;
        let variantValue5Name = 'part_c1';
        let variantValue5 = part_c1;
        let variantValue6Name = 'part_c0';
        let variantValue6 = part_c0;

        // If every thing is "0" then it's a NIL Value
        if (UUID === "00000000-0000-0000-0000-000000000000")
        {
            return {
                UUID: uuid,
                Variant: variant,
                VariantText: "NIL Value",

                Version: version,
                VersionText: "Reserved / NIL",

                Value1Name: "",
                Value1: "",
                Value2Name: "",
                Value2: "",
                Value3Name: "",
                Value3: "",
                Value4Name: "",
                Value4: "",
                Value5Name: "",
                Value5: "",
                Value6Name: "",
                Value6: "",

                NumberName: "",
                NumberText: "",

                NIL: true,
                NILText: "00000000-0000-0000-0000-000000000000"
            };
        }
        else if (UUID === "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF")
        {
            return {
                UUID: uuid,
                Variant: variant,
                VariantText: "MAX Value",

                Version: version,
                VersionText: "Reserved / MAX",

                Value1Name: "",
                Value1: "",
                Value2Name: "",
                Value2: "",
                Value3Name: "",
                Value3: "",
                Value4Name: "",
                Value4: "",
                Value5Name: "",
                Value5: "",
                Value6Name: "",
                Value6: "",

                NumberName: "",
                NumberText: "",

                MAX: true,
                MAXText: "FFFFFFFF-FFFF-FFFF-FFFF-FFFFFFFFFFFF"
            };
        }
        else
        {
            // Decode the UUID based on the variant and version
            return uuidVariants[variant]();
        }
    },

    /**
     * @func toSnakeCase
     * @memberof mcode
     * @desc Returns a lowercase-snake-case-name by converting a string's spaces to hyphens and discarding non-alphanumeric characters.
     * @param {string} str the string to convert to snake case.
     * @returns {string} a value representing the snake case version of the string.
     */
    toSnakeCase: function (str)
    {
        return str
            .toLowerCase()            // convert the entire string to lowercase
            .replace(/[^\w\s]/g, '')  // remove any non-alphanumeric characters except spaces
            .replace(/\s+/g, '-')     // replace spaces with hyphens
            .replace(/^-+|-+$/g, ''); // remove any leading or trailing hyphens
    },

    /**
     * @func fromSnakeCase
     * @memberof mcode
     * @desc Returns a text string by converting a snake-case-name to Title Case Name sentence.
     * @param {string} str the string to convert from snake case.
     * @returns {string} a value representing the Title Case version of the string.
     */
    fromSnakeCase: function (str)
    {
        return str
            .split('-')               // split the string at hyphens
            .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // capitalize the first letter of each word
            .join(' ');               // join the words with spaces
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