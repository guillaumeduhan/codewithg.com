import dayjs from "dayjs";
import community from "../static/community.json";
import courses from "../static/courses.json";

export const useHelpers = () => {
  const openUrl = (url: string) => window.open(url, "_blank");

  const getDaysDiff = (dateString: string) => {
    if (!dayjs) return;
    const today = dayjs();
    const otherDate = dayjs(dateString, "YYYY-MM-DD");
    const diff = otherDate.diff(today, "day");
    return diff;
  };

  const formatCourse = (localCourse: any, order: any) => {
    const { courses, id, ...rest } = order;
    return {
      order_id: id,
      vimeo_url: courses.vimeo_url,
      ...rest,
      ...localCourse,
    };
  };

  return {
    courses,
    community,
    getDaysDiff,
    formatCourse,
    openUrl,
  };
};
