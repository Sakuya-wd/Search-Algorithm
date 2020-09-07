
const LinearSearchConfirm = require('./LinearSearchConfirm.js');


const LinearSearchDisplay = () =>{

   //検索する値(正の整数)。
   let search = 4;
   let result = LinearSearchConfirm(search);
   
   console.log(result);

}


LinearSearchDisplay();

module.exports = LinearSearchDisplay;



