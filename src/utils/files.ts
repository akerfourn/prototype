import * as fs from "fs";

export function json2file(filename: string, data: any, pretty: boolean = true) {
  let space: number | undefined = undefined;
  if (pretty) {
    space = 2;
  }
  let sdata = JSON.stringify(data, null, space);
  fs.writeFileSync(filename, sdata);
}

export function makeDirectory(name: string): boolean {
  if (!fs.existsSync(name)) {
    fs.mkdirSync(name);
    return true;
  }
  return false;
}
