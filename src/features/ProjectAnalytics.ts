import type { PieData } from "../components/AnalyticsPieChart";
import { projects } from "../fakeDB";

export const totalProjects = projects.length;

// by status (in card + chart)
export const activeProjects = projects.filter(
  (p) => p.status === "Active",
).length;
export const completedProjects = projects.filter(
  (p) => p.status === "Completed",
).length;
export const pausedProjects = projects.filter(
  (p) => p.status === "Paused",
).length;

// by tag (in chart)
export const personalProjects = projects.filter(
  (p) => p.tag === "Personal",
).length;
export const clientProjects = projects.filter((p) => p.tag === "Client").length;
export const learningProjects = projects.filter(
  (p) => p.tag === "Learning",
).length;


// Data for pie charts
export const tagData: PieData[] = [
  { id: 0, value: personalProjects, label: "Personal projects" },
  { id: 1, value: clientProjects, label: "Client projects" },
  { id: 2, value: learningProjects, label: "Learning projects" },
];

export const stateData: PieData[] = [
  { id: 0, value: completedProjects, label: "Completed projects" },
  { id: 1, value: activeProjects, label: "Active projects" },
  { id: 2, value: pausedProjects, label: "Paused projects" },
];
