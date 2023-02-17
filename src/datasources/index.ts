import { Context } from "./../types/context";
import { TrackAPI } from "./track-api";

export const dataSources: () => Context["dataSources"] = () => ({
  trackAPI: new TrackAPI(),
});
