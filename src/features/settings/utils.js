import { useMetaData } from "../../utils/useMetaData";

export const setSettingsMetaData = (mainStore) => {
  useMetaData(mainStore, {
    title: "Settings",
    breadcrumbs: [{ label: "Settings", route: "/settings" }],
  });
};
