import fs from "fs";
import path from "path";

const root = process.cwd();

const getFileNames = () => fs.readdirSync(path.join(root, "blogs"));

export default getFileNames;
