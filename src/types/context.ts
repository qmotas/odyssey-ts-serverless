import { TrackAPI } from "src/datasources/track-api";

export type Context = {
  dataSources: {
    trackAPI: TrackAPI;
  };
};
