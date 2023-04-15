# 概要
Next.jsでGraphQLのエンドポイントからTypeScript型情報を生成して使うサンプル

# 参考記事
https://www.engilaboo.com/nextjs-graphql/

# npmパッケージ
```
npm i @graphql-codegen/typed-document-node @graphql-codegen/cli @graphql-codegen/typescript-operations @apollo/client

npm install
```

# .env.local
```
GRAPHQL_ENDPOINT=<GraphQlエンドポイント>
ID=<記事ID>
```

# codegen.yml
`codegen.yml`を生成（先に`.env`を設定）
```
./script.sh
```

# 型生成
`./generated/graphql.tsx`にGraphQLの型情報を生成
```
npm run graphql:codegen
```
