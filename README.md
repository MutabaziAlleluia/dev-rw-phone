# dev-rw-phone

This is a simple npm package that validates the structure and format phone numbers from Rwanda.

[Site](https://dev.co.rw/npm/dev-rw-phone) |
[Docs](https://dev.co.rw/npm/dev-rw-phone#docs)

[![NPM](https://nodei.co/npm/dev-rw-phone.png)](https://nodei.co/npm/dev-rw-phone/)

## Installation

```cli
npm install dev-rw-phone
```

or

```cli
yarn add dev-rw-phone
```

## Basic Usage

```js
// Load full build
const { phone } = require("dev-rw-phone");

console.log(phone("0780000000"));
// {
//     isOk: true,
//     error: null,
//     normalized: "250780000000",
//     formatted: "(+250) 780 000 000",
//     telco: "MTN",
//     short: "780000000"
// }

console.log(phone("80000000"));
// {
//     isOk: false,
//     error: "Phone number NOT valid",
//     normalized: "80000000",
//     formatted: "(+250) 7XX XXX XXX",
//     telco: null,
//     short: "7XXXXXXXX"
// }
```

# Methods

## isOk()

```js
const { isOk } = require("dev-rw-phone");

console.log(isOk("0780000000"));
// true
```

Or

```js
phone("0780000000").isOk;
```

## format()

```js
const { format } = require("dev-rw-phone");

console.log(format("0780000000"));
// "(+250) 780 000 000"
```

Or

```js
phone("0780000000").formatted;
```

## normalize()

```js
const { normalize } = require("dev-rw-phone");

console.log(normalize("0780000000"));
// "250780000000"
```

Or

```js
phone("0780000000").normalized;
```

## short()

```js
const { short } = require("dev-rw-phone");

console.log(short("0780000000"));
// "780000000"
```

Or

```js
phone("0780000000").short;
```

## telco()

```js
const { telco } = require("dev-rw-phone");

console.log(telco("0780000000"));
// "MTN"
```

Or

```js
phone("0780000000").telco;
```

## phone()

```js
const { phone } = require("dev-rw-phone");

console.log(phone("0780000000"));
// {
//     isOk: true,
//     error: null,
//     normalized: "250780000000",
//     formatted: "(+250) 780 000 000",
//     telco: "MTN",
//     short: "780000000"
// }
```

# Contributors

| [<img src="https://github.com/mutabazialleluia.png" width="100px;"><br><sub><b>Alleluia M</b></sub>](https://github.com/mutabazialleluia) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |


## Licence

MIT

## Author

Alleluia M
