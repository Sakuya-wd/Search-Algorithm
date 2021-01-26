//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const LinearSearchConfirm = require("./LinearSearchConfirm.js");

const LinearSearchDisplay = () => {
  //検索元のデータ。
  let LinearArray = [1, 4, 0, 3, 2];
  //検索する値。
  let search = 4;
  
  console.log(LinearSearchConfirm(LinearArray,search));
};

LinearSearchDisplay();

module.exports = LinearSearchDisplay;
