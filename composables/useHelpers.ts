import dayjs from "dayjs";
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

  const getPrice = (price: number, locale: any = "en") => {
    if (!price) return;
    if (price === 0) return;
    if (!locale) return `$${price}`;
    return `${locale === "en" ? "$" : ""}${price}${locale === "fr" ? "€" : ""}`;
  };

  return {
    courses,
    getDaysDiff,
    getPrice,
    formatCourse,
    openUrl,
  };
};
