// Author: Darren Lester
// Description: Determine whether or not a character is a Kanji
// Reference for kanji character codes: www.rikai.com/library/kanjitables/kanji_codes.unicode.shtml
// License: MIT

"use strict";

function isKanji(ch) {
	return (ch >= "\u4e00" && ch <= "\u9faf") ||
	(ch >= "\u3400" && ch <= "\u4dbf") ||
	ch === "𠮟";
}

module.exports = isKanji;
