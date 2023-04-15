#!/bin/bash

# .env.localファイルから変数を読み込む
source .env.local

# codegen.ymlの内容を置き換える
cat << EOS > codegen.yml
overwrite: true
schema: "$GRAPHQL_ENDPOINT"
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
EOS