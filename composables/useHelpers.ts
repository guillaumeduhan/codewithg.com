export const useHelpers = () => {
  const openUrl = (url: string) => window.open(url, "_blank");

  const limitString = (str: string, limit = 22) => {
    if (!str) return;
    if (str.length <= limit) return str;
    return str.slice(0, limit) + '...'
  }

  return {
    openUrl,
    limitString
  };
};
