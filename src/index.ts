export const prettyGoodKeker = (subject: string, object?: string) => {
  if (object) {
    return `${subject} kek about ${object}`;
  }
  return `${subject} just kek without reason`;
};
