const LinearSearchConfirm = require('../src/LinearSearchConfirm.js');


describe('LinearSearchConfirm', () => {

   test('LinearSearchConfirm', () => {

      //例外処理が網羅されているか確認。
      expect(() => LinearSearchConfirm('test')).toThrow();
      expect(() => LinearSearchConfirm(1.1)).toThrow();
      expect(() => LinearSearchConfirm(-1)).toThrow();

      //例外処理以外の仕様が網羅されているか確認。
      expect(LinearSearchConfirm(4)).toBe(1);
      expect(LinearSearchConfirm(5)).toBe(-1);

   })

})
