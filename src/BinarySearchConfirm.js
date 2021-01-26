//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const BinarySearchConfirm = (BinaryArray,search) => {

  if (DifferentTypeObject_BinaryArray(BinaryArray)) {
    throw new TypeError(
      "引数の探索元が配列ではありません。引数の探索元は配列とし正の整数のみ設定下さい。"
    );
  }

  if (EmptyArray(BinaryArray)) {
    throw new RangeError(
      "引数の探索元の配列が空です。引数の探索元は配列とし正の整数のみ設定下さい。"
    );
  }

  if (DifferentTypeObject_Search(search)) {
    throw new TypeError(
      "引数の探したい値が配列です。引数の探したい値は配列を設定せず正の整数のみ設定下さい。"
    );
  }

  if (BinaryArray.some(DifferentTypeString_BinaryArray) || (DifferentTypeString_Search(search))) {
    throw new TypeError(
      "引数の探索元または探したい値に正の整数以外があります。引数は正の整数のみ設定下さい。"
    );
  }

  //配列に探索したい値が見つからない場合は-1を出力する。
  let target = -1;
  //配列に探索したい値がある場合はそのデータが配列のどこにあるかを出力する。
  return BinarySearch(BinaryArray, search, target);
};

const DifferentTypeObject_BinaryArray = (BinaryArray) => {
  if (typeof BinaryArray !== "object") return true;
  return false;
};

const EmptyArray = (BinaryArray) => {
  if (BinaryArray.length == 0) return true;
  return false;
};

const DifferentTypeObject_Search = (search) => {
  if (typeof search === "object") return true;
  return false;
};

const DifferentTypeString_BinaryArray  = (BinaryArray) => {
  if (typeof BinaryArray === "string") return true;
  if (Math.round(BinaryArray) != BinaryArray) return true;
  if (Math.sign(BinaryArray) == -1) return true;
  return false;
};

const DifferentTypeString_Search  = (search) => {
  if (typeof search === "string") return true;
  if (Math.round(search) != search) return true;
  if (Math.sign(search) == -1) return true;
  return false;
};

const BinarySearch = (BinaryArray, search, target) => {
  let pivot = Math.floor(BinaryArray.length / 2);

  if (search == BinaryArray[pivot]) {
    target = pivot;
    return target;

    //探索したい値が配列の中央の値より下なら
    //配列の中央から左側を新たな配列とし配列数が1になるまでをこの関数を繰り返す。
  } else if (search < BinaryArray[pivot]) {
    let left = BinaryArray.slice(0, pivot);
    return BinarySearch(left, search, target);

    //探索したい値が配列の中央の値より上なら
    //配列の中央から右側を新たな配列とし配列数が1になるまでこの関数を繰り返す。
  } else if (search > BinaryArray[pivot]) {
    let right = BinaryArray.slice(pivot + 1, length);
    return BinarySearch(right, search, target);
  } else {
    return target;
  }
};

module.exports = BinarySearchConfirm;
