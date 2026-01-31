import type Project from "./types/Project";

export const projects: Project[] = [
  {
    id: 1,
    name: "Portfolio",
    status: "Completed",
    last_updated: "3 days ago",
    tag: "Personal",
    recent_actions: [
      { message: "Build project section", date: "12/12/2025" },
      { message: "Finalised navbar links", date: "11/12/2025" },
      { message: "Added responsive design", date: "10/12/2025" },
    ],
  },
  {
    id: 2,
    name: "Devpulse Dashboard",
    status: "Active",
    last_updated: "Today",
    tag: "Web App",
    recent_actions: [
      { message: "Setup initial project structure", date: "30/01/2026" },
      { message: "Integrate GitHub API", date: "29/01/2026" },
      { message: "Add dark/light theme toggle", date: "28/01/2026" },
    ],
  },
  {
    id: 3,
    name: "GameHub",
    status: "Completed",
    last_updated: "1 week ago",
    tag: "React",
    recent_actions: [
      { message: "Add game search feature", date: "24/01/2026" },
      { message: "Fix screenshot carousel layout", date: "22/01/2026" },
      { message: "Optimize API requests", date: "20/01/2026" },
    ],
  },
  {
    id: 4,
    name: "Auth System",
    status: "Paused",
    last_updated: "2 weeks ago",
    tag: "Security",
    recent_actions: [
      { message: "Design login/signup forms", date: "17/01/2026" },
      { message: "Setup JWT authentication", date: "15/01/2026" },
      { message: "Add password reset functionality", date: "14/01/2026" },
    ],
  },
  {
    id: 5,
    name: "REST API Boilerplate",
    status: "Paused",
    last_updated: "4 days ago",
    tag: "Backend",
    recent_actions: [
      { message: "Define REST endpoints", date: "27/01/2026" },
      { message: "Setup database models", date: "25/01/2026" },
      { message: "Add middleware for logging", date: "23/01/2026" },
    ],
  },
  {
    id: 6,
    name: "Task Tracker",
    status: "Completed",
    last_updated: "1 month ago",
    tag: "Productivity",
    recent_actions: [
      { message: "Implement task creation", date: "01/12/2025" },
      { message: "Add task completion feature", date: "28/11/2025" },
      { message: "Integrate notifications", date: "25/11/2025" },
    ],
  },
];
