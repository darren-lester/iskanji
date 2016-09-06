// Author: Darren Lester
// Description: Basic non-exhaustive testing; a sanity check.
// License: MIT

"use strict";

var chai = require("chai");
var assert = chai.assert;
var kanji = require("joyo-kanji").kanji;

var isKanji = require("../index.js");

function testArray(array, expected) {
	for(var i in array) {
		assert.equal(isKanji(array[i]), expected);
	}
}

describe("isKanji", function(){
	it("should return false for roman characters", function(){
		var romanAlphabetLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i",
		"j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w",
		"x", "y", "z"];
		var romanAlphabetUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I",
		"J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W",
		"X", "Y", "Z"];

		testArray(romanAlphabetLower, false);
		testArray(romanAlphabetUpper, false);
	});

	it("should return false for numbers", function(){
		var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

		testArray(numbers, false);
	});

	it("should return false for hiragana", function(){
		var hiragana = ["あ", "い", "う", "え", "お", "か", "き", "く", "け",
		"こ", "さ", "し", "す", "せ", "そ", "た", "ち", "つ", "て", "と", "な",
		"に", "ぬ", "ね", "の", "は", "ひ", "ふ", "へ", "ほ", "ま", "み", "む",
		"め", "も", "や", "ゆ", "よ", "ら", "り", "る", "れ", "ろ", "わ", "を",
		"ん"];

		testArray(hiragana, false);
	});

	it("should return false for katakana", function(){
		var katakana = ["ア", "イ", "ウ", "エ", "オ", "カ", "キ", "ク", "ケ", "コ",
		"サ", "シ", "ス", "セ", "ソ", "タ", "チ", "ツ", "テ", "ト", "ナ", "ニ", "ヌ",
		"ネ", "ノ", "ハ", "ヒ", "フ", "ヘ", "ホ", "マ", "ミ", "ム", "メ", "モ", "ヤ",
		"ユ", "ヨ", "ラ", "リ", "ル", "レ", "ロ", "ワ", "ヲ", "ン"];

		testArray(katakana, false);
	});

	it("should return true for kanji", function(){
		testArray(kanji, true);
	});
});