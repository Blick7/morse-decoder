const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
  "": " ",
};

function decode(expr) {
  let buff = [];
  // divide by 10 to get a binary letter in morse (array)
  let i = 0;
  while (i < expr.length) {
    buff.push(expr.slice(i, i + 10));
    i += 10;
  }

  //  get dots and dashes from binary
  let arr = [];
  for (let el of buff) {
    arr.push(
      el
        .match(/.{1,2}/g)
        .map((item) => {
          if (item == "10") return ".";
          else if (item == "11") return "-";
          else return "";
        })
        .join("")
    );
  }

  // convert morse dots and dashes to letters and digits
  arr = arr
    .map((item) => {
      if (MORSE_TABLE[item]) return MORSE_TABLE[item];
    })
    .join("");
  return arr;
}

module.exports = {
  decode,
};
// console.log(
//   module.exports(
//     decode(
//       "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"
//     )
//   )
// );
