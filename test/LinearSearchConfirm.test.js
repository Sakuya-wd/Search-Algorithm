//git commit時にeslintで構文チェックしprettierでコードフォーマットを修正する。

const LinearSearchConfirm = require('../src/LinearSearchConfirm.js');

describe('LinearSearchConfirm関数を単体テストする。', () => {
   test('引数の探索元が配列でない時、エラーを出力する。', () => {
      expect(() => LinearSearchConfirm("test")).toThrow();
   });

   test('引数の探索元の配列が空である時、エラーを出力する。', () => {
      expect(() => LinearSearchConfirm([])).toThrow();
   });

   test('引数の探す値が配列である時、エラーを出力する。', () => {
      expect(() => LinearSearchConfirm([3, 1, 4, 2, 0], [])).toThrow();
   });

   test('引数の探索元または探す値に正の整数以外がある時、エラーを出力する。', () => {
      expect(() => LinearSearchConfirm(["test"])).toThrow();
      expect(() => LinearSearchConfirm([1.1])).toThrow();
      expect(() => LinearSearchConfirm([-1])).toThrow();
      expect(() => LinearSearchConfirm([3, 1, 4, 2, 0], ["test"])).toThrow();
      expect(() => LinearSearchConfirm([3, 1, 4, 2, 0], [1.1])).toThrow();
      expect(() => LinearSearchConfirm([3, 1, 4, 2, 0], [-1])).toThrow();
   });

   test('引数の探索元と探す値が正の整数のみの時、探したい値がある場合は見つかった箇所の配列の添字を出力する。', () => {
      expect(LinearSearchConfirm([3, 1, 4, 2, 0], 3)).toBe(0);
   });

   test('引数の探索元と探す値が正の整数のみの時、探したい値が配列にない場合は-1を出力する。', () => {
      expect(LinearSearchConfirm([3, 1, 4, 2, 0], 5)).toBe(-1);
   });
});

