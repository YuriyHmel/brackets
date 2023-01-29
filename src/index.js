module.exports = function check(str, bracketsConfig) {
  let arrStr = str.split('');
  let result = [];
  for (let i = 0; i < arrStr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (bracketsConfig[j].includes(arrStr[i])) {
        if  (bracketsConfig[j][0] === arrStr[i]) {
          if (bracketsConfig[j][0] === bracketsConfig[j][1] && bracketsConfig[j][1] === result[result.length - 1]) {
            result.pop();
            break;
          }
          result.push(arrStr[i]);
          break;
        } else if (bracketsConfig[j].includes(result[result.length - 1])) {
            result.pop();
            break;
        } else {
            return false;
          }
      }
    }
  }
  return result.length === 0? true : false;
}
