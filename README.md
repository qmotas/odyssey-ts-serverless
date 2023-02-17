# odyssey-ts-serverless

[Apollo Odyssey（Apollo Server のチュートリアル）](<(https://www.apollographql.com/tutorials/browse)>)の API を部分的に TypeScript + Apollo Server で実装し、Serverless Framework で AWS Lambda にデプロイする実装サンプルです

コンセプト

- TypeScript で開発する
- GraphQL スキーマは外部ファイルで管理する
- graphql-codegen で Resolver に型をつける

実装時のメモ https://zenn.dev/qmotas/scraps/1c7db1b96ab16b

## 未対応

- 認証
- Mutation

## スキーマ

```graphql
type Query {
  tracksForHome: [Track!]!
}

type Track {
  id: ID!
  title: String!
  author: Author!
  thumbnail: String
  length: Int
  modulesCount: Int
}

type Author {
  id: ID!
  name: String!
  photo: String
}
```

## 環境

```sh
node -v
v18.14.0
```

```sh
npm -v
9.3.1
```

```sh
pnpm --version
7.27.0
```

## Getting Started

```sh
git clone https://github.com/qmotas/odyssey-ts-serverless.git
```

```sh
cd odyssey-ts-serverless
pnpm install
```

```sh
pnpm dev
```

- serverless offline でローカル環境が立ち上がります
- `schema.graphql`を編集すると型定義が自動生成されます（`graphql-codegen --watch`）

## Deploy

```sh
pnpm serverless deploy
```

事前に`aws configure`または`serverless config credentials`で認証情報を設定しておく必要があります

https://www.serverless.com/framework/docs/providers/aws/guide/credentials/
