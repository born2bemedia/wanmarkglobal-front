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
