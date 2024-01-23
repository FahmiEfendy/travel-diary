export const stringFormatter = (string) => {
  const maxCharacter = 200;

  return `${string.slice(0, maxCharacter)} ...`;
};
