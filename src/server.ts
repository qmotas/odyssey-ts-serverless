import { ApolloServer } from "@apollo/server";
import {
  handlers,
  startServerAndCreateLambdaHandler
} from "@as-integrations/aws-lambda";
import { GraphQLFileLoader } from "@graphql-tools/graphql-file-loader";
import { loadSchemaSync } from "@graphql-tools/load";
import { addResolversToSchema } from "@graphql-tools/schema";
import { join } from "path";
import { TrackAPI } from "./datasources/track-api";
import { resolvers } from "./resolvers";
import { Context } from "./types/context";

const schema = loadSchemaSync(join(__dirname, "../schema.graphql"), {
  loaders: [new GraphQLFileLoader()],
});

const schemaWithResolvers = addResolversToSchema({ schema, resolvers });

const server = new ApolloServer<Context>({
  schema: schemaWithResolvers,
});

export const graphqlHandler = startServerAndCreateLambdaHandler(
  server,
  handlers.createAPIGatewayProxyEventV2RequestHandler(),
  {
    context: async () => {
      return {
        dataSources: {
          trackAPI: new TrackAPI(),
        },
      };
    },
  }
);
