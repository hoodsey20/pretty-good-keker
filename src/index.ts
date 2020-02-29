export const prettyGoodKeker = (subject: string, object?: string) => {
  if (object) {
    const objectText = object === subject ? 'yourself' : object;
    return `${subject} kek about ${objectText}`;
  }
  return `${subject} just kek without reason`;
};
