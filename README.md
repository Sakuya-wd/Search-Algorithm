# 探索アルゴリズム

線形探索、二分探索のプログラムを用意しました。

# 線形探索

## プログラム仕様

・ 配列と探す値は正の整数のみとする。デフォルトは探す値を`4` 配列は`[1,4,0,3,2]`とする。

・ 配列の先頭から順番に探す値が見つかるまで探す。

・ 探す値が配列にある場合、`見つかった箇所の配列の添字`を出力する。
 
・ 探す値が配列にない場合、エラー(-1)を出力する。

## プログラム実行

srcディレクリ内にあるindex.htmlの一部ソースを変更願います。

二段目の<script></script>を下記のようにコメントして下さい。

```html
<script type="module" src="src/LinearSearchDisplay.js"></script>

<!--<script type="module" src="src/BinarySearchDisplay.js"></script>-->
```

srcディレクトリ内にてプログラム実行コマンドを願います。

プログラム実行コマンド

```
node LinearSearchDisplay.js
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド
```
rm -rf node_modules
```

インストールコマンド
```
npm install 
```


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 探す値が配列にある場合、`見つかった箇所の配列の添字`を出力する。

・ 探す値が配列にない場合、エラー(-1)を出力する。

## テスト実行

テスト実行コマンド

```
npm run test
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```

## 構文チェックと自動コード整形

git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。

# 二分探索

## プログラム仕様

・ 配列と探す値は正の整数のみとする。デフォルトは探す値を`1` 配列は`[0,1,2,3,4,5,6,7,8]`とする。

・ 配列は昇順されているとする。

・ a)配列の中央の値が探す値と同じであれば`見つかった箇所の配列の添字`を出力する。

・ b)配列の中央の値が探す値より大きければ、dの処理を行う。

・ c)配列の中央の値が探す値より小さければ、eの処理を行う

・ d)配列の中央から左端を新たな配列としaから繰り返す。

・ e)配列の中央から右端を新たな配列としaから繰り返す。

・ 探す値が配列にない場合、エラー(-1)を出力する。

## プログラム実行

srcディレクリ内にあるindex.htmlの一部ソースを変更願います。

一段目の<script></script>を下記のようにコメントして下さい。

```html
<!--<script type="module" src="src/LinearSearchDisplay.js"></script>-->

<script type="module" src="scc/BinarySearchDisplay.js"></script>
```

srcディレクトリ内にてプログラム実行コマンドを願います。

プログラム実行コマンド

```
node BinarySearchDisplay.js
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド
```
rm -rf node_modules
```

インストールコマンド
```
npm install 
```


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 探す値が配列にある場合、`見つかった箇所の配列の添字`を出力する。

・ 探す値が配列にない場合、エラー(-1)を出力する。

## テスト実行

テスト実行コマンド

```
npm run test
```

## カバレッジ

下記ディレクトリをブラウザで表示願います。

```
coverage/lcov-report/
```

## 構文チェックと自動コード整形

git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。

