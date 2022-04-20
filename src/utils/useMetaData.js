export const useMetaData = (_store, { title, breadcrumbs }) => {
  document.title = `DT | ${title}`;
  _store.breadcrumbs = breadcrumbs;
};
