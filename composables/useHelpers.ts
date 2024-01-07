export const useHelpers = () => {
  const openUrl = (link: string) => {
    if (process.browser) window.open(link, "_blank");
  }

  const limitString = (str: string, limit = 22) => {
    if (!str) return;
    if (str.length <= limit) return str;
    return str.slice(0, limit) + '...'
  }

  const downloadFile = async (url: string) => {
    try {
      const response = await fetch(url);
      const blob = await response.blob();

      // Create a temporary anchor element to trigger the download
      const anchor = document.createElement('a');
      anchor.href = window.URL.createObjectURL(blob);
      anchor.download = 'file_name.extension'; // You can set the desired file name here
      anchor.style.display = 'none';
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
    } catch (error) {
      console.error('Error downloading file:', error);
    }
  }

  return {
    openUrl,
    limitString,
    downloadFile
  };
};
