export const formatRoute = (value: string) => {
  return value.split(" ").join("-").toLowerCase();
};
