
const BinarySearchConfirm = require("./BinarySearchConfirm.js");


const BinarySearchDisplay = () =>{

   //検索する値(正の整数)。
   let search = 1;
   let result = BinarySearchConfirm(search);

   console.log(result);

}


BinarySearchDisplay();

module.exports = BinarySearchDisplay;

