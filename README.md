#isKanji
Determine whether or not a character is a kanji.

##Installation
```bash
$ npm install iskanji
```

##Example
```javascript
var isKanji = require("iskanji");

isKanji("a"); // false
isKanji("あ"); // false
isKanji("木"); // true
```
##Tests
Install dependencies then run the npm script _test_

```bash
$ npm install
$ npm test
```

##License
[MIT](LICENSE)
