export const imageKitUrl = ({ path, transformations = {} }) => {
  const entries = Object.entries(transformations);

  if (entries.length === 0) {
    return `https://ik.imagekit.io/johndjameson/johndjameson/${path}`;
  }

  const transform = entries
    .map(([param, value]) => `${param}-${value}`)
    .join(',');

  return `https://ik.imagekit.io/johndjameson/tr:${transform}/johndjameson/${path}`;
};
