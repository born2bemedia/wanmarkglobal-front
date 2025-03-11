import { saveAs } from 'file-saver';
import Cookies from 'js-cookie';

export { Cookies as cookies };

export const lsRead = <T>(key: string, fallback: T): T => {
  const value = localStorage.getItem(key);
  return value ? (JSON.parse(value) as T) : fallback;
};

export const lsWrite = <T>(key: string, value: T): void => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const lsRemove = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error(`Failed to remove "${key}" from localStorage:`, error);
  }
};

export const downloadFile = async ({
  url,
  fileName,
}: {
  url: string;
  fileName: string;
}) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const blob = await response.blob();
    saveAs(blob, fileName);
  } catch (error) {
    console.error(error);
  }
};
