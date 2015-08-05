# _sv2json

_sv2json is a simple tool to convert files delimited by certain characters/breaks into JSON files.

For example, it allows you to convert CSV or TSV (tab separated values) into JSON.

## Usage

First, install _sv2json to your project:

```bash
$ npm install _sv2json --save
```

Then, include it in your script/project:

```javascript
var _sv2json = require('_sv2json');
```

You can then use it as such:

```javascript
/*
* We assume that the variable 'tsvData' contains data delimited by tabs (\t)
*/

var jsonVersionOfTsvData = _sv2json(tsvData, '\t');
```
