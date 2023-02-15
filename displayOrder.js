function displayOrder (){
    const numbers = [5, 2, 9, 1, 3,];
   numbers.sort(function(a, b){
    return a - b;
    })
    console.log(numbers);
}
displayOrder();

module.exports = displayOrder;