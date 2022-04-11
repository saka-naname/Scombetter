# Scombetter

Scombの見た目をいい感じに整えるChrome拡張機能

この拡張機能はScombZ([https://scombz.shibaura-it.ac.jp/](https://scombz.shibaura-it.ac.jp/))上のみで動作します。

## 主な機能
### サイドメニュー
- メニューやロゴをホバー時に明るくする
- アイコンの位置を整える
- 「サイドメニューを閉じる」ボタンの位置を整え、直感的に意味を分かりやすくする
### UIの改善
- ポータルメニューやLMSで表示されるお知らせダイアログのサイズを大きくする

## インストール
### 一般向け
準備中

### 開発者向け
必要なソフトウェア
- Git
- Node.js + npm

手順
1. コマンドプロンプトやBash等を開き、`git clone https://github.com/saka-naname/Scombetter.git`を実行してリポジトリをクローン（ダウンロード）する
2. `cd scombetter`を実行してダウンロードしたScombetterディレクトリに移動
3. `npm install`を実行して依存ライブラリをダウンロード
4. `npm run build`を実行してビルド
5. Google Chromeで [chrome://extensions/](chrome://extensions/) を開く
6. 右上のトグルでデベロッパー モードを有効にする
7. 「パッケージ化されていない拡張機能を読み込む」→ダウンロードした「Scombetter」フォルダ**内**の「dist」フォルダを選択
8. 一覧に「Scombetter」が表示されれば導入成功です、お疲れさまでした

## 使用上の注意
このソフトウェアは趣味で開発されたもので、学術情報センターとは何の関係もありません。  
このソフトウェアは自己責任の上で利用してください。このソフトウェアを使用したことで生じた損害に関して作者は責任を負いません。
