//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const LinearSearchConfirm = (LinearArray,search) => {

  if (DifferentTypeObject_LinearArray(LinearArray)) {
    throw new TypeError(
      "引数の探索元が配列ではありません。引数の探索元は配列とし正の整数のみ設定下さい。"
    );
  }

  if (EmptyArray(LinearArray)) {
    throw new RangeError(
      "引数の探索元の配列が空です。引数の探索元は配列とし正の整数のみ設定下さい。"
    );
  }

  if (DifferentTypeObject_Search(search)) {
    throw new TypeError(
      "引数の探したい値が配列です。引数の探したい値は配列を設定せず正の整数のみ設定下さい。"
    );
  }

  if (LinearArray.some(DifferentTypeString_LinearArray) || (DifferentTypeString_Search(search))) {
    throw new TypeError(
      "引数の探索元または探したい値に正の整数以外があります。引数は正の整数のみ設定下さい。"
    );
  }
  
  return LinearSearch(LinearArray,search);
};

const DifferentTypeObject_LinearArray = (LinearArray) => {
  if (typeof LinearArray !== "object") return true;
  return false;
};

const EmptyArray = (LinearArray) => {
  if (LinearArray.length == 0) return true;
  return false;
};

const DifferentTypeObject_Search = (search) => {
  if (typeof search === "object") return true;
  return false;
};

const DifferentTypeString_LinearArray  = (LinearArray) => {
  if (typeof LinearArray === "string") return true;
  if (Math.round(LinearArray) != LinearArray) return true;
  if (Math.sign(LinearArray) == -1) return true;
  return false;
};

const DifferentTypeString_Search  = (search) => {
  if (typeof search === "string") return true;
  if (Math.round(search) != search) return true;
  if (Math.sign(search) == -1) return true;
  return false;
};

//配列の先頭から順番に探す値が見つかるまで探す。
const LinearSearch = (LinearArray,search) => {
  //探す値が見つからない場合は-1を出力する。
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
