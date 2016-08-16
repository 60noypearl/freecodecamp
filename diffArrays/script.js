function convertToRoman(num) {

    var arrRomanNumerals = ["I", "IV", "V", "IX", "X", "L", "XC", "C", "CD", "D", "CM", "M"];
    var arrRomanDecimals = [1, 4, 5, 9, 10, 50, 90, 100, 400, 500, 900, 1000];
    var strRoman = "";

    // 1842

    // take care of thousands, hundrends etc

    for (var i = arrRomanDecimals.length - 1; i > 0; i--) {
        // check if num is bigger than the number i'm going ot decrease
        if (num > arrRomanDecimals[i]) {
            for (var j = 0; j < (num / arrRomanDecimals[i]) - 1; j++) {
                strRoman += arrRomanNumerals[i];
            }

        }
    }

    return strRoman ;
}


console.log(convertToRoman(36));