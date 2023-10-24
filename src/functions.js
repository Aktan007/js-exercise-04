const reverseNumber = (num, r = 0) => {
    if (!num) return r; {
      r = r * 10 + num % 10;
      return reverseNumber(Math.floor(num / 10), r)
    }
  };
  
  console.log(reverseNumber(12345));
  console.log(reverseNumber(663428));