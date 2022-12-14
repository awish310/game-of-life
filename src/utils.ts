import * as fs from "fs";
import { InitialState } from "./types.js";

export const getInitialState = (filePath: string): InitialState => {
  const json = fs.readFileSync(filePath);
  const data = JSON.parse(json.toString());
  return data;
};
