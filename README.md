# MicroCODE's 'mcode-data' package

A public NPM Package of our internal data processing tools for Frontend and Backend JavaScript NodeJS projects.

This is an extremely 'light weight' package with _zero dependencies_.

Identical data and math handling on both...

-   **Frontend** - in the Browser UI
-   **Backend** - in the Server MVC

## Description

This is our own internal data processing (data) code. It is used to gain more control over JavaScript data types and type coercion. Building large, extensible applications it is inevitable that you will have to carefully control data type coercion and handle type checking in a very common/consistent manner. Both of these can be defined as 'data handling', and this is our library for that in all our apps.

```
> node examples
```

## Dependencies

-   **Production**

1. None

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
| **fromSnakeCase**| Creates a 'Title Case String' from a 'snake-case-string'. | mcode.fromSnakeCase("snake-case-string") |
| **toSnakeCase**  | Creates a 'snake-case-string' from a 'Title Case String'. | mcode.toSnakeCase("Title Case String") |

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

* 0.5.0
    - All 'mcode-*' packages updated with 'ready()' only implemented in 'mcode-log'.
* 0.4.3
    - Corrected 'isJson()' to required the *1st* character be a '{', not any character.
* 0.4.2
    - Added 'fromSnakeCase()' and 'toSnakeCase()'.
* 0.4.1
    - Removed accidental dependency upon mcode-log.
* 0.4.0
    - Synchronized mcode-data, mcode-log, mcode-list, mcode-package.
* 0.3.9
    - Reorganization, all 'is' functions first.
* 0.3.8
    - Initial version, moved all data handling functions into new mcode-data package from mcode-log.
* 0.0.0
    - Initial movement of our data handling functions from mcode-log to mcode-data.

## Future Development

*   0.1.\*
    - Any additional core code we will develop for general list processing work.
    - Complex function execution with passed arguments or passed functions.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## MicroCODE Mantra

MicroCODE, Inc. was founded in 1987 as a controls engineering and software development company.<br>
We specialize in manufacturing and quality control applications that must run 24x7x365 for years at a time.

Our slogan, distilled from over three decades of developing, testing, installing, and supporting 24x7x365
manufacturing applications, is..

<p align="left"><img src=".\.github\images\hail-caesar.png" width="720" title="Hail Caesar!"></p>
