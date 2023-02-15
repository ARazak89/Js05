function average() {
  const numbers = [20, 12, 8, 9];
    let som = 0;
    for (let i = 0; i < numbers.length; i++){
      som += numbers[i];
    }
    return som/numbers.length;
  }  
 console.log(average());

 module.exports = average;