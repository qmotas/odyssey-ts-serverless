import { trackResolver } from "./track";
import { Resolvers } from "src/__generated__/graphql";
import { queryResolver } from "./query";

export const resolvers: Resolvers = {
  Query: queryResolver,
  Track: trackResolver,
};
