export type CommandKey = "help"
  | "welcome"
  | "about"
  | "education"
  | "projects"
  | "links"
  | "contact";


export const COMMAND_KEY_LIST = ["help", "welcome", "about", "education", "projects", "links", "contact"];

export type Command = {
  command: CommandKey;
  description: string;
};