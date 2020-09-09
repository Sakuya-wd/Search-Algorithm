//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const LinearSearchConfirm = (search) => {
  //検索元の配列(正の整数)。
  let LinearArray = [1, 4, 0, 3, 2];

  //正の整数でない時、あるいは配列に探す値がない時エラー(例外)を出力する
  if (OutOfRange(search)) {
    throw new RangeError("引数が不正です。正の整数のみ引数に指定できます。");

    //配列に探索したい値がある場合はそのデータが配列のどこにあるかを表示する。
  } else {
    let result = LinearSearch(search, LinearArray);

    return result;
  }
};

const OutOfRange = (search) => {
  if (typeof search !== "number") return true;
  if (Math.round(search) != search) return true;
  if (Math.sign(search) == -1) return true;

  return false;
};

//配列の先頭から順番に探す値が見つかるまで探す。
const LinearSearch = (search, LinearArray) => {
  //探す値が見つからない場合はエラー(-1)を出力する。
  let target = -1;

  for (let i = 0; i < LinearArray.length; i++) {
    if (LinearArray[i] == search) {
      target = i;
      break;
    }
  }

  return target;
};

module.exports = LinearSearchConfirm;
