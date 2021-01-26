//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const BinarySearchConfirm = require("./BinarySearchConfirm.js");

const BinarySearchDisplay = () => {
  //検索元のデータ。
  let BinaryArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  //検索する値。
  let search = 1;

  console.log(BinarySearchConfirm(BinaryArray,search));
};

BinarySearchDisplay();

module.exports = BinarySearchDisplay;
