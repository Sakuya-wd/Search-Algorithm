//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const BinarySearchConfirm = require('../src/BinarySearchConfirm.js');

describe('BinarySearchConfirm関数を単体テストする。', () => {
   test('引数の探索元が配列でない時、エラーを出力する。', () => {
      expect(() => BinarySearchConfirm("test")).toThrow();
   })

   test('引数の探索元の配列が空である時、エラーを出力する。', () => {
      expect(() => BinarySearchConfirm([])).toThrow();
   })

   test('引数の探す値が配列である時、エラーを出力する。', () => {
      expect(() => BinarySearchConfirm([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [])).toThrow();
   })

   test('引数の探索元または探す値に正の整数以外がある時、エラーを出力する。', () => {
      expect(() => BinarySearchConfirm(["test"])).toThrow();
      expect(() => BinarySearchConfirm([1.1])).toThrow();
      expect(() => BinarySearchConfirm([-1])).toThrow();
      expect(() => BinarySearchConfirm([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], ["test"])).toThrow();
      expect(() => BinarySearchConfirm([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [1.1])).toThrow();
      expect(() => BinarySearchConfirm([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [-1])).toThrow();
   })

   test('引数の探索元と探す値が正の整数のみの時、探したい値がある場合は見つかった箇所の配列の添字を出力する。', () => {
      expect(BinarySearchConfirm([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 0)).toBe(0);
   })

   test('引数の探索元と探す値が正の整数のみの時、探したい値が配列にない場合は-1を出力する。', () => {
      expect(BinarySearchConfirm([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], 10)).toBe(-1);
   })

})
