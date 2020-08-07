import { dir } from "console";

export function main() {
  const args = process.argv.slice(2);
  const directory = process.cwd();
  console.log(directory);
}
