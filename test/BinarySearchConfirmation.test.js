const BinarySearchConfirm = require('../src/BinarySearchConfirm.js');


describe('BinarySearchConfirm', () => {

   test('BinarySearchConfirm', () => {

      //例外処理が網羅されているか確認。
      expect(() => BinarySearchConfirm('test')).toThrow();
      expect(() => BinarySearchConfirm(1.1)).toThrow();
      expect(() => BinarySearchConfirm(-1)).toThrow();

      //例外処理以外の仕様が網羅されているか確認。
      expect(BinarySearchConfirm(1)).toBe(1);
      expect(BinarySearchConfirm(9)).toBe(-1);

   })

})
