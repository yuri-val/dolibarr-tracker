import { useMetaData } from "../../utils/useMetaData";

export const setCreateMetadata = (mainStore, projectId) => {
  useMetaData(mainStore, {
    title: `Task > Create`,
    breadcrumbs: [
      { label: "Projects", route: "/projects" },
      {
        label: "Project",
        route: {
          name: "project.show",
          params: { id: projectId },
        },
      },
      {
        label: "Create Task",
        route: { name: "task.create", query: { projectId: projectId } },
      },
    ],
  });
};

export const setAddTimeMetadata = (mainStore, task) => {
  useMetaData(mainStore, {
    title: `Task > Add Time > ${task.label}`,
    breadcrumbs: [
      { label: "Projects", route: "/projects" },
      {
        label: "Project",
        route: {
          name: "project.show",
          params: { id: task.fk_project },
        },
      },
      {
        label: task.ref,
        route: { name: "task.add_time", params: { id: task.id } },
      },
    ],
  });
};
