import { QueryResolvers } from "./../__generated__/graphql";

export const queryResolver: QueryResolvers = {
  tracksForHome: (_, __, { dataSources }) => {
    return dataSources.trackAPI.getTracksForHome();
  },
};
