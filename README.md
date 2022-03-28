# Scombetter

ScombZの見た目をいい感じに整えるChrome拡張機能

この拡張機能はScombZ([https://scombz.shibaura-it.ac.jp/](https://scombz.shibaura-it.ac.jp/))上のみで動作します。

## 主な機能
### サイドメニュー
- メニューやロゴをホバー時に明るくする
- アイコンの位置を整える
- 「閉じる」ボタンの位置を整え、直感的に意味を分かりやすくする

## インストール
### 必要なソフトウェア
- Git
- Node.js + npm
  
### 手順
1. コマンドプロンプトやBash等を開き、`git clone https://github.com/saka-naname/Scombetter.git`を実行してリポジトリをクローン（ダウンロード）する
2. `cd scombetter`を実行してダウンロードしたScombetterディレクトリに移動
3. `npm install`を実行して依存ライブラリをダウンロード
4. `npm run build`を実行してビルド
5. Google Chromeで [chrome://extensions/](chrome://extensions/) を開く
6. 右上のトグルでデベロッパー モードを有効にする
7. 「パッケージ化されていない拡張機能を読み込む」→ダウンロードした「Scombetter」フォルダ**内**の「dist」フォルダを選択
8. 一覧に「Scombetter」が表示されれば導入成功です、お疲れさまでした