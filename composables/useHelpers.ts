import courses from "../static/courses.json";

export const useHelpers = () => {
  const openUrl = (url: string) => window.open(url, "_blank");

  return {
    openUrl,
    courses,
  };
};
