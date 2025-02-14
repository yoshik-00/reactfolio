# フロントエンド

---

- ### 目的

  ##### ハンズオン学習

  ウェブアプリケーションを一気通貫で作成することで、理解が浅い分野を細部まで調べる機会を得る。また資格勉強だけでは得ることができない体系的な知識を学ぶ。

  ##### ポートフォリオサイト

  開発や研修等に関わるスケジュールを todo で管理、今まで経験したプロジェクトの記録、今まで使用した技術スタックの記録を視覚的にまとめ自分で振り返る、または他者にアピールすることができるポートフォリオサイトの作成。

  ##### アピール

  ポートフォリトサイトを作成することで、自分の技術力が形として残り他者から評価を受ける機会を増やすことができる。

- ### 要件
  上記の目的を考慮し今回作成するアプリケーションの要件を以下に記載する。
  - 汎用性が高くモダンな以下の技術スタックを採用する。
    - react
    - tailwindcss
    - node.js
    - RESTAPI
    - docker
  - notion の DB 機能を使用した to-do アプリを利用する。
  - 認証機能を実装しセキュリティを堅牢にする。
  - フォーム機能を実装する。
- ### 実装

  ##### システムアーキテクチャ図

  ![alt text](architecture.png)

  - ##### reactfolio

    <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />

    ###### view

      <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
      <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />

    ###### model

      <img src="https://img.shields.io/badge/Redux-593D88?style=for-the-badge&logo=redux&logoColor=white" />
      <img src="https://img.shields.io/badge/React state-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
      <img src="https://img.shields.io/badge/json-5E5C5C?style=for-the-badge&logo=json&logoColor=white" />

    ###### controller

      <img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white" />
      <img src="https://img.shields.io/badge/React memo-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
      <img src="https://img.shields.io/badge/React ref-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
      <img src="https://img.shields.io/badge/React effect-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />

- ### 導入（ローカル）
  > ```
  > git clone https://github.com/yoshik-00/reactfolio.git
  >
  > reactfolio直下に.env.developmentを作成し以下の記述
  >
  >   VITE_API_URL="http://localhost:3001"
  >
  >   #cognito
  >   VITE_AUTHORITY="https://cognito-idp.ap-northeast-1.amazonaws.com/ap-northeast-1_wfzavgr0h"
  >   VITE_CLIENT_ID="6ehpfv3e4jalpbuvbploov12qh"
  >   VITE_REDIRECT_URI="http://localhost:5173/"
  >   VITE_LOGOUT_URI="http://localhost:5173/"
  >   VITE_DOMAIN="https://ap-northeast-1wfzavgr0h.auth.ap-northeast-1.amazoncognito.com"
  >
  > npm install
  >
  > npm run dev
  >
  > 以下のリンクに接続
  > http://localhost:5173/
  >
  > ```

---
