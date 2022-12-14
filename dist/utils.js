import * as fs from "fs";
export const getInitialState = (filePath) => {
    const json = fs.readFileSync(filePath);
    const data = JSON.parse(json.toString());
    return data;
};
//# sourceMappingURL=utils.js.map