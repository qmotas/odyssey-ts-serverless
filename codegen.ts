import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "./schema.graphql",
  generates: {
    "src/__generated__/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  config: {
    useIndexSignature: true,
    contextType: "src/types/context#Context",
    mappers: { Track: "src/types/trackModel#TrackModel" },
  },
};

export default config;
