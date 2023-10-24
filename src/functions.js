const reverseNumber = (num, r = 0) => {
    if (!num) return r; {
      r = r * 10 + num % 10;
      return reverseNumber(Math.floor(num / 10), r)
    }
  };
  
  console.log(reverseNumber(12345));
  console.log(reverseNumber(663428));


const isPerfectSquare = (num001) => {
    let result = Math.sqrt(num001) 
    if (result % 1 === 0) {
        return true
    } else {
        return false
    }
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(-4));
console.log(isPerfectSquare(0)); 



  export {reverseNumber, isPerfectSquare}
  