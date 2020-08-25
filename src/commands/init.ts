import { initDirectory, createDirectory } from "../actions/init";

export function initCmd(params: Array<string>) {
  if (params.length > 0) {
    console.error("too many argument for init command");
  }

  initDirectory();
}

export function createCmd(params: Array<string>) {
  const name = params.shift();

  if (params.length > 0) {
    console.error("too many argument for create command");
    return;
  }

  if (name === undefined) {
    console.error("invalid name argument (undefined)");
    return;
  }

  createDirectory(name);
}
