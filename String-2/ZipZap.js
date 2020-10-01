// String-2 -- zipZap
// https://codingjs.wmcicompsci.ca/exercise.html?name=zipZap&title=String-2

// Look for patterns like "zip" and "zap" in the string
//  -- length-3, starting with 'z' and ending with 'p'.
//  Return a string where for all such words,
//  the middle letter is gone, so "zipXzap" yields "zpXzp".

// Examples

// zipZap('zipXzap') → zpXzp
// zipZap('zopzop') → zpzp
// zipZap('zzzopzop') → zzzpzp












function zipZap(str) {
  let strArr = str.split("");
  let result = "";

  const laserQuick = (arr) => {
    if (arr.length === 0) return;

    if (arr[0] === "z" && arr[2] === "p") {
      let zipZap = arr[0] + arr[2];
      result += zipZap;
      arr = arr.slice(3, arr.length);
      laserQuick(arr);
    } else {
      result += arr[0];
      arr.shift();
      laserQuick(arr);
    }
  };

  laserQuick(strArr);
  return result;
}

console.log(zipZap("zzzopzop"));
