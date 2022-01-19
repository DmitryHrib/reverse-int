module.exports = function reverse (n) {
    let lev0 = Math.abs(n)
    let lev = lev0.toString()
    let i = 0;
    result = '';
    while (i < lev.length) {
      result = `${lev[i]}${result}`;
      i = i + 1;
    }
    return result;
};




  






