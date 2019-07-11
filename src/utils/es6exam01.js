const regMixedNumberWord = /([A-Za-z0-9]*[A-Za-z]+\d+[A-Za-z0-9]*|[A-Za-z0-9]*\d+[A-Za-z]+[A-Za-z0-9]*)/g;
var input =
  "Products are created with 123cxvx SKUs and MXX and CSV and 79 and mic7979 and m98opt options";
var output = new Array();
var rexnumber = /[0-9]/g;
var rexchar = /[a-zA-Z]/g;
findNumberWordCombination = (input) => {
  if (!input) return [];
  return input.match(regMixedNumberWord);
}
generateVariation = (arrayword) => {
  while (arrayword.length > 0) {
    let tamp = arrayword.shift();
    output = output.concat( inserting(tamp));
  }
  return output;
}
inserting = (word) => {
  let arrtemp = new Array();
  for (let k = 0; k < word.length; k++) {
    if (word.charAt(k).match(rexnumber) && word.charAt(k + 1).match(rexchar) || word.charAt(k + 1).match(rexnumber) && word.charAt(k).match(rexchar)) {
      let firsttext = word.substring(0, k + 1);
      let lasttext = word.substring(k + 1);
      arrtemp.push(firsttext + "-" + lasttext);
      arrtemp= arrtemp.concat(insertallword(firsttext + "-" + lasttext, k));
    }
  }
  return arrtemp;
}

insertallword = (word, k) => {
  let arrallword = new Array();
  for (let l = k; l < word.length; l++) {
    if (word.charAt(l).match(rexnumber) && word.charAt(l + 1).match(rexchar) || word.charAt(l + 1).match(rexnumber) && word.charAt(l).match(rexchar)) {
      let firsttext = word.substring(0, l + 1);
      let lasttext = word.substring(l + 1);
      arrallword.push(firsttext + "-" + lasttext);
    }
  }
  return arrallword;
}
module.exports = {
  findNumberWordCombination,
  generateVariation,
  inserting
}
