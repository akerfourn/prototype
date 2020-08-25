import { json2file } from "../utils";
import * as fs from "fs";
import * as prompts from "prompts";
import type { PromptObject } from "prompts";

export async function initDirectory(name?: string) {
  let baseptdb: any = [];
  console.log("generate base db file");
  json2file("prototype.db.json", baseptdb);
  console.log("make base directories");
  if (!fs.existsSync("packages")) {
    fs.mkdirSync("packages");
  }
  console.log("$ init project");

  let projectname: string = name ?? "";
  if (name === undefined) {
    const cwd = process.cwd();
    let cwdarr = cwd.split("/");
    if (cwdarr.length > 0) {
      projectname = cwdarr.pop() as string;
    }
  }

  const questions: Array<PromptObject> = [
    {
      type: "text",
      name: "name",
      message: `name (${projectname})?`,
    },
    {
      type: "text",
      name: "version",
      message: "version (1.0.0)?",
    },
    {
      type: "text",
      name: "main",
      message: "main (index.js)?",
    },
    {
      type: "text",
      name: "license",
      message: "license (MIT)?",
    },
  ];

  const response = await prompts(questions);

  const packagejson: any = {
    name: response.name || projectname,
    version: response.version || "1.0.0",
    main: response.main || "index.js",
    license: response.license || "MIT",
  };

  json2file("package.json", packagejson);
}

export function createDirectory(name: string) {
  if (fs.existsSync(name)) {
    console.error("this path already exist, unable to create");
    return;
  }

  console.log(`$ make ${name} directory`);
  fs.mkdirSync(name);
  console.log(`$ move to ${name} directory`);
  process.chdir(name);
  console.log(`$ init ${name} directory`);
  initDirectory(name);
}
