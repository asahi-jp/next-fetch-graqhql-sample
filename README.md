# 概要
Next.jsでGraphQLのエンドポイントからTypeScript型情報を生成して使うサンプル

# 参考記事
https://www.engilaboo.com/nextjs-graphql/

# npmパッケージ
```
npm i @graphql-codegen/typed-document-node @graphql-codegen/cli @graphql-codegen/typescript-operations @apollo/client
```

# .env.local
```
GRAPHQL_ENDPOINT=<GraphQlエンドポイント>
ID=<記事ID>
```

# codegen.yml
以下を追加
```
overwrite: true
schema: "<GraphQlエンドポイント>"
documents:
  - "components/**/*.graphql"
generates:
  ./generated/graphql.tsx:
    plugins:
      - "typescript"
      - "typescript-operations"
      - "typed-document-node"
    config:
      avoidOptionals:
        objet: true
        field: true
```

# 型生成
```
npm run graphql:codegen
```
codegen.ymlのdocumentsで指定したファイルとエンドポイントを基に、
`./generated/graphql.tsx`に型情報が生成される


