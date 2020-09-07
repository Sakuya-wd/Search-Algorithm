
const BinarySearchConfirm = (search) =>{

  //検索元の配列(正の整数)。 
  let BinaryArray =[0,1,2,3,4,5,6,7,8];
  //探す値が見つからない場合はエラー(-1)を出力する。
  let target = -1;
  
  //正の整数でない時、あるいは配列に探す値がない時エラー(例外)を出力する
  if(OutOfRange(search)){

    throw new RangeError("引数が不正です。正の整数のみ引数に指定できます。");

  //配列に探索したい値がある場合はそのデータが配列のどこにあるかを表示する。
  }else{

    let result = BinarySearch(search,BinaryArray,target);

    return result;

  }

}


const OutOfRange = (search) =>{
    
  if(typeof search !== "number") return true;
  if(Math.round(search) != search) return true;
  if(Math.sign(search) == -1) return true;

  return false;

}

const BinarySearch = (search,BinaryArray,target) =>{

  let pivot = Math.floor(BinaryArray.length/2);


  //探したい値の添字を表示する。
  if(search == BinaryArray[pivot]){

    target = pivot;
    return target;
     
  //探索したい値が配列の中央の値より下なら
  //配列の中央から左側を新たな配列とし配列数が1になるまでをこの関数を繰り返す。
  }else if(search < BinaryArray[pivot]){

    let left = BinaryArray.slice(0,pivot);
    return BinarySearch(search,left,target);

  //探索したい値が配列の中央の値より上なら
  //配列の中央から右側を新たな配列とし配列数が1になるまでこの関数を繰り返す。
  }else if(search > BinaryArray[pivot]){

    let right = BinaryArray.slice(pivot+1,length)
    return BinarySearch(search,right,target);

  }else{

    return target;

  }

}


module.exports = BinarySearchConfirm;
