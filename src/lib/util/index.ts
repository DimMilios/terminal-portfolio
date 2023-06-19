import { COMMAND_KEY_LIST, type CommandKey } from "../types";

export function isValidCommand(command: string): command is CommandKey {
  return COMMAND_KEY_LIST.includes(command);
}