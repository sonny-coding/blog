import fs from "fs";
import path from "path";

const root = process.cwd();
const readBlogFiles = (fileName) =>
  fs.readFileSync(path.join(root, "blogs", fileName), "utf8");

export default readBlogFiles;
