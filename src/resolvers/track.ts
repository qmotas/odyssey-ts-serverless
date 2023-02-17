import { TrackResolvers } from "src/__generated__/graphql";

export const trackResolver: TrackResolvers = {
  author: ({ authorId }, _, { dataSources }) => {
    return dataSources.trackAPI.getAuthor(authorId);
  },
};
