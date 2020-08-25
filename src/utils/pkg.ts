import { exec } from "child_process";

export function pkgInstall() {
  exec("yarn install");
}
