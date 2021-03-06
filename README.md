# Scombetter

Scombの見た目をいい感じに整えるChrome拡張機能

この拡張機能はScombZ([https://scombz.shibaura-it.ac.jp/](https://scombz.shibaura-it.ac.jp/))上のみで動作します。

## 主な機能
### ポータルメニュー
- 未読のお知らせを青文字でハイライトする
### サイドメニュー
- メニューやロゴをホバー時に明るくする
- アイコンの位置を整える
- 「サイドメニューを閉じる」ボタンの位置を整え、直感的に意味を分かりやすくする
- メニュー開閉の際に文字並びが崩れないようにする
### UIの改善
- ポータルメニューやLMS等で表示されるお知らせダイアログのサイズを大きくする
### 時間割
- LMSから時間割を保存し、拡張機能ポップアップに週時間割として表示する
- 拡張機能の週時間割からLMSの授業ページを直接開く
### オプション
- ページ右下の「Top」ボタンを非表示にする

## インストール
### 一般向け
1. [Releases](https://github.com/saka-naname/Scombetter/releases)から最新の「scombetter_x.x.x.zip」をダウンロードして、適当な場所に解凍する
2. Google Chromeで [chrome://extensions/](chrome://extensions/) を開く
3. 右上のトグルでデベロッパー モードを有効にする
4. 「パッケージ化されていない拡張機能を読み込む」→解凍した「scombetter_x.x.x」フォルダを選択
5. 一覧に「Scombetter」が表示されれば導入成功です、お疲れさまでした

### 開発者向け
必要なソフトウェア
- Git
- Node.js + npm

手順
1. コマンドプロンプトやBash等を開き、`git clone https://github.com/saka-naname/Scombetter.git`を実行してリポジトリをクローンする
2. `cd scombetter`を実行（ダウンロードしたScombetterディレクトリに移動）
3. `npm install`を実行（依存ライブラリのダウンロード）
4. `npm run build`を実行（ビルド）
5. Google Chromeで [chrome://extensions/](chrome://extensions/) を開く
6. 右上のトグルでデベロッパー モードを有効にする
7. 「パッケージ化されていない拡張機能を読み込む」→ダウンロードした「Scombetter」フォルダ**内**の「dist」フォルダを選択
8. 一覧に「Scombetter」が表示されれば導入成功です、お疲れさまでした

ビルド
- `npm run build:dev` ... 開発用の設定でビルドする
- `npm run watch` ... ファイルの監視を開始し、ファイルが更新される度に開発用の設定でビルドする
- `npm run build` ... 本番用の設定でビルドする（`npm run build:prod`も同様）

注意
ビルドした後は [chrome://extensions/](chrome://extensions/) で拡張機能の更新を行ってください

## 使用上の注意
このソフトウェアは趣味で開発されたもので、芝浦工業大学 学術情報センター・情報システム課とは何の関係もありません。  
このソフトウェアは自己責任の上で利用してください。このソフトウェアを使用したことで生じた損害に関して作者は責任を負いません。
