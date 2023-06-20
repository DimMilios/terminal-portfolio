import { COMMAND_KEY_LIST, type CommandKey } from "../types";

export function isValidCommand(command: string): command is CommandKey {
  return COMMAND_KEY_LIST.includes(command);
}

export const closest = (query: string) => {
  let candidate: string | undefined;
  for (let command of COMMAND_KEY_LIST) {
    if (command.startsWith(query)) {
      if (!candidate || command.length < candidate.length) {
        candidate = command;
      }
    }
  }

  return candidate;
};