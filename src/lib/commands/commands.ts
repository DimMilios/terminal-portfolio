import type { Command } from "../types";

export const commands: Command[] = [
  { command: "help", description: "list available commands" },
  { command: "welcome", description: "display welcome message" },
  { command: "about", description: "about Dimitris Milios" },
  { command: "experience", description: "check out my past working experience" },
  { command: "skills", description: "list of my programming skills" },
  { command: "education", description: "check out my education background and certifications" },
  { command: "projects", description: "show my coding projects" },
  { command: "links", description: "check out social media and GitHub accounts" },
  { command: "contact", description: "check out ways to get in touch with me" },
  { command: "clear", description: "clear the terminal" },
];