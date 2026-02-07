import { useMemo } from "react";
import type { Action } from "../types/Project";
import type Project from "../types/Project";

const noOfActions = 7;

type ActionWithProject = Action & {
  projectId: number;
  projectName: string;
};

type GroupedActions = Record<string, ActionWithProject[]>;

const parseDMY = (dateStr: string) => {
  const [day, month, year] = dateStr.split("/").map(Number);
  return new Date(year, month - 1, day);
};

const useRecentActions = (projects: Project[]): GroupedActions => {

  return useMemo(() => {

    const allActions: ActionWithProject[] = projects.flatMap(project =>
      project.recent_actions.map(action => ({
        ...action,
        projectId: project.id,
        projectName: project.name
      }))
    );

    allActions.sort(
      (a, b) => parseDMY(b.date).getTime() - parseDMY(a.date).getTime()
    ).length = noOfActions;

    return allActions.reduce<GroupedActions>((acc, action) => {

      if (!acc[action.date]) acc[action.date] = [];

      acc[action.date].push(action);

      return acc;

    }, {});

  }, [projects]); // VERY important dependency
};

export default useRecentActions;
