import { RESTDataSource } from "@apollo/datasource-rest";
import { TrackModel } from "src/types/trackModel";
import { Author } from "src/__generated__/graphql";

export class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "https://odyssey-lift-off-rest-api.herokuapp.com/";
  }

  async getTracksForHome(): Promise<Array<TrackModel>> {
    return this.get<Array<TrackModel>>("tracks");
  }

  async getAuthor(authorId): Promise<Author> {
    return this.get<Author>(`author/${authorId}`);
  }
}
