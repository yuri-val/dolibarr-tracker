import { useMetaData } from "../../utils/useMetaData";

export const setProjectsListMetaData = (mainStore) => {
  useMetaData(mainStore, {
    title: "Projects",
    breadcrumbs: [{ label: "Projects", route: "/projects" }],
  });
};

export const setProjectShowMetaData = (mainStore, project) => {
  useMetaData(mainStore, {
    title: `Project: ${project.title}`,
    breadcrumbs: [
      { label: "Projects", route: "/projects" },
      {
        label: project.ref,
        route: { name: "project.show", params: { id: project.id } },
      },
    ],
  });
};
