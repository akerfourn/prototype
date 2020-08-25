import { initCmd, createCmd } from "./commands";

export type CommandsType = "init" | "create";

export function main() {
  const args = process.argv.slice(2); // keep only usefull args

  if (args.length < 1) {
    console.error("at least one argument required for the command name");
    return;
  }

  const command = args.shift() as CommandsType;

  switch (command) {
    case "init":
      initCmd(args);
      break;
    case "create":
      createCmd(args);
      break;
    default:
      console.error(`invalid command "${command}"`);
  }
}
