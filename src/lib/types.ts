export type CommandKey = "help"
  | "welcome"
  | "about"
  | "education"
  | "projects"
  | "links"
  | "contact"
  | "clear"
  | ""


export const COMMAND_KEY_LIST = ["help", "welcome", "about", "education", "projects", "links", "contact", "clear", ""];

export type Command = {
  command: CommandKey;
  description: string;
};