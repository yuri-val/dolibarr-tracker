import { useTitle } from "@vueuse/core";

export const useMetaData = (_store, { title, breadcrumbs }) => {
  useTitle(`DT | ${title}`);
  _store.breadcrumbs = breadcrumbs;
};
