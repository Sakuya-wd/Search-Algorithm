# 探索アルゴリズム

線形探索、二分探索のプログラムを用意しました。

## 開発環境

OS: macOS Catalina(バージョン10.15.6)

ターミナル: Terminal.app

エディター: Visual Studio Code 2

開発言語: JavaScript Jeat

バージョン管理: Git

Node.js: (バージョンv14.7.0)

パッケージ管理: npm (バージョン6.14.8)

使用パッケージ: ESLint Prettier husky lint-staged

# 線形探索

## プログラム仕様

・ 配列と探す値は正の整数のみとする。デフォルトは探す値を`4` 配列は`[1,4,0,3,2]`とする。

・ 配列の先頭から順番に探す値が見つかるまで探す。

・ 探す値が配列にある場合、`見つかった箇所の配列の添字`を出力する。
 
・ 探す値が配列にない場合、エラー(-1)を出力する。

## プログラム実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
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


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 探す値が配列にある場合、`見つかった箇所の配列の添字`を出力する。

・ 探す値が配列にない場合、エラー(-1)を出力する。

## テスト実行

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
```

テスト実行コマンド

```
npm run test
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
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

node_modulesのインストールを願います。

インストールコマンド

```
npm install 
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


## テスト仕様

・ 引数が正の整数でない時、エラー(例外)を出力する。

・ 探す値が配列にある場合、`見つかった箇所の配列の添字`を出力する。

・ 探す値が配列にない場合、エラー(-1)を出力する。

## テスト実行

node_modulesをインストールを願います。

インストールコマンド

```
npm install 
```

テスト実行コマンド

```
npm run test
```

Error: Cannot find moduleが出た場合はnode_modulesを削除し再度インストール願います。

削除コマンド

```
rm -rf node_modules
```

## カバレッジ

・ Chromeのブラウザを起動願います。

・ ファイルからファイルを開くを選択してください。

・ 下記ファイルをブラウザで表示願います。

```
coverage/lcov-report/index.html
```

## 構文チェックと自動コード整形

git comit時にgit addしたjsファイルの構文チェックを行います。

構文にerrorまたはwarningがある場合はコミットを失敗させます。

その際はプログラムを修正し再度git add後git commit願います。

構文にerrorとwarningがない場合は自動でコード整形します。

## 作成理由

JavaScript Jestの基本文法を学習すると同時に、効率的な開発方法を学習するため。

プログラムの品質を自動的に保つため、ESLint Prettier husky lint-stagedを学習。

