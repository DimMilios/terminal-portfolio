export type CommandKey = "help"
  | "welcome"
  | "about"
  | "education"
  | "projects"
  | "links"
  | "contact"
  | "clear"
  | "experience"
  | "skills"
  | "";


export const COMMAND_KEY_LIST = ["help", "welcome", "about", "education", "projects", "links", "contact", "clear", "experience", "skills", ""];

export type Command = {
  command: CommandKey;
  description: string;
};