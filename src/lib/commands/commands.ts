import type { Command } from "../types";

export const commands: Command[] = [
  { command: "help", description: "list available commands" },
  { command: "welcome", description: "display welcome message" },
  { command: "about", description: "about Dimitris Milios" },
  { command: "education", description: "my education background" },
  { command: "projects", description: "show my coding projects" },
  { command: "links", description: "check out social media and GitHub accounts" },
  { command: "contact", description: "check ways to get in touch with me" },
  { command: "clear", description: "clear the terminal" },
];