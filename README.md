# MicroCODE's 'mcode-data' package

A public NPM Package of our internal data processing tools for Frontend and Backend JavaScript NodeJS projects.

This is an extremely 'light weight' package with _zero dependencies_ (other than our own logging package which has none).

Identical data and math handling on both...

-   **Frontend** - in the Browser UI
-   **Backend** - in the Server MVC

## Description

This is our own internal data processing (data) code. It is used to gain more control over JavaScript data types and type coercion. Building large, extensible applications it is inevitable that you will have to carefully control data type coercion and handle type checking in a very common/consistent manner. Both of these can be defined as 'data handling', and this is our library for that in all our apps.

```
> node examples
```

-   Example of package use...

<p align="left"><img src=".\.github\images\mcode-data-example-calls.png" width="720" title="List Calls..."></p>

-   Corresponding results (logged to console by our **mcode-log** functions)...

<p align="left"><img src=".\.github\images\mcode-data-example-results.png" width="720" title="List Results..."></p>

## Dependencies

-   **Production**

1. mcode-log - our standard logging package (_just for displaying list mismatch errors or test results_)

-   **Development**

1. Node.JS - standard runtime environment
2. JSDocs - our preferred JavaScript documentation system
3. Jest.JS - our preferred JavaScript testing framework

## Development

When building a large application its important that the entire team agreed to common data handling practices.

### Installing

-   Get to a terminal session in the local repo folder of your project.
-   Use 'npm install' to load the package. It can be used 'stand-alone'...

```
npm install mcode-data
```

### Testing

This package includes a simple demo module: **examples.js**.
Running it directly will show you a set of examples for using all the data library functions.

-   From your project directory after installation...

```
node .\node_modules\mcode-data\examples
```

...this will deomnstrate thru console logging various uses of the mcode-data functions.

-   To test with **JEST**:
-   From the **mcode-data** package directory...

```
npm install --save-dev jest
npm test
```

-   A view of the JEST tests in the console...

<p align="left"><img src=".\.github\images\mcode-data-jest.png" width="720" title="Jest Results..."></p>

## Included Functions

These are the functions we want at the ready in any module for development and debug.

| Function         | Description                                               | Usage                                                  |
| ---------------- | --------------------------------------------------------- | ------------------------------------------------------ |
| Type Checking    |                                                           |
| **isString**     | Checks the type of an Object for String.                  | mcode.isString('stringToTest')                         |
| **isObject**     | Checks the type of an Object for Object.                  | mcode.isObject(objectName)                             |
| **isArray**      | Checks the type of an Object for Array.                   | mcode.isArray(arrayName)                               |
| **isFunction**   | Checks the type of an Object for Function.                | mcode.isFunction(objectName)                           |
| **isNumber**     | Checks the type of an Object for Number.                  | mcode.isNumber(102022 or numberName)                   |
| **isNaN**        | Checks the type of an Object for NaN.                     | mcode.isNaN(numberName)                                |
| **isJson**       | Checks the type of an Object for JSON.                    | mcode.isJson('JSON text' or objectName)                |
| **isDate**       | Checks the type of an Object for DATE.                    | mcode.isDate(timestamp)                                |
| **isTimeStamp**  | Checks the type of an Object for TIME STAMP.              | mcode.isTimeStamp(timestamp)                           |
| Type Conversions |                                                           |
| **octify**       | Converts a string into octal bytes for log.               | mcode.octify(stringToExamine)                          |
| **hexify**       | Converts a string into hexadecimal bytes for log.         | mcode.hexify(stringToExamine)                          |
| **extractId**    | Extracts the first alpha-numberic ID Field from a string. | mcode.extractId("EP\_**GPT13TZ1**\_20231115_0800.L5K") |

### Documentation

We believe is explicit code documentation, for other users, and for our 'future selves'.<br>
JSDocs is a standardized system for documenting functions and data structures that produces three (3) primary outputs:

1. Inline documentation for the coder.
2. Intellisense popup documentation for the coder for every function.
3. External 'reference manual' documentation for your entire code base, if used consistently.

-   This entire project--like all our projects--is documented with **JSDocs**.

-   To install JSDocs use, get to a terminal session in the project folder...

```
npm install --save-dev jsdoc
```

-   Configure JSDoc processing in...

```
jsdoc.json
```

-   To regenerate the JSDocs from all source code, use the following command (from the project root directory)...

```
jsdoc -c .jsdoc.json
```

...then open ./docs/index.html

<p align="left"><img src=".\.github\images\mcode-data-jsdocs.png" width="720" title="JSDocs..."></p>

## Help

Contact Timothy McGuire, support@mcode.com.

## Terminology

| Word or Acronym | Description/Definition                                                                                                                       |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| **NPM**         | Node Package Manager, actually “Node PM”, “Node pkgmakeinst” a system to deploy, install, and maintain NodeJS Apps. (PM was a BASH utility). |
| **NVM**         | Node Version Manager, a tool that supports changing NodeJS versions.                                                                         |
| **MERN**        | MongoDB, Express, React, Node JS.                                                                                                            |
| **MongoDB**     | A ‘NoSQL’ database designed for Cloud applications, also referred to as a ‘Document Store’.                                                  |
| **Express**     | Express is _not_ a database but rather an ‘extensible routing language’ for communication between a Client and a Server.                     |
| **React**       | A Web UI development system, a JavaScript library developed by Facebook and made public—and Open Source—since 2013.                          |
| **Node JS**     | A development stack that executes from a local file store—on a local Server—instead of from a network of servers.                            |
| **JSDocs**      | A toolset to automatically generate API-style documentation from source code tagging.                                                        |

## Authors

Contributor's names and contact info...

-   Timothy McGuire [@TimothyMcGuire](https://twitter.com/TimothyMcGuire) - Founder, President-CEO of MicroCODE, Inc. a software and controls engineering company in Detroit, Michigan USA.

## Version History

-   0.0.0
    -   Initial movement of our data handling functions from mcode-log to mcode-data.

## Future Development

-   0.1.\*
    -   Any additional core code we will develop for general list processing work.
    -   Complex function execution with passed arguments or passed functions.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## MicroCODE Mantra

MicroCODE, Inc. was founded in 1987 as a controls engineering and software development company.<br>
We specialize in manufacturing and quality control applications that must run 24x7x365 for years at a time.

Our slogan, distilled from over three decades of developing, testing, installing, and supporting 24x7x365
manufacturing applications, is..

<p align="left"><img src=".\.github\images\hail-caesar.png" width="720" title="Hail Caesar!"></p>
