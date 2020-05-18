import Unsplash from "unsplash-js";

const APP_ACCESS_KEY: string = "3v1PSEZQsqL5n05NbHdfyckfJLwyHyDDLIZ6MAAvhF0";
const APP_SECRET: string = "zKw7FOe6nlv7kCOStc41NoA7hi2rI9WzPFSSYKBw-9g";

export const unsplash = new Unsplash({
  accessKey: APP_ACCESS_KEY,
  secret: APP_SECRET,
});