import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "odyssey-ts-serverless",
  frameworkVersion: "3",
  plugins: ["serverless-esbuild", "serverless-offline"],
  provider: {
    name: "aws",
    region: "ap-northeast-1",
    runtime: "nodejs18.x",
    httpApi: {
      cors: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  // import the function via paths
  functions: {
    graphql: {
      handler: "src/server.graphqlHandler",
      events: [
        {
          httpApi: {
            path: "/",
            method: "POST",
          },
        },
        {
          httpApi: {
            path: "/",
            method: "GET",
          },
        },
      ],
    },
  },
  package: { individually: true, patterns: ["./schema.graphql"] },
  custom: {
    esbuild: {
      bundle: true,
      minify: false,
      sourcemap: true,
      exclude: ["aws-sdk"],
      target: "node18",
      define: { "require.resolve": undefined },
      platform: "node",
      concurrency: 10,
    },
  },
};

module.exports = serverlessConfiguration;
