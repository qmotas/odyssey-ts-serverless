import { Track } from "src/__generated__/graphql";

export type TrackModel = Omit<Track, "author"> & {
  authorId: string;
};
