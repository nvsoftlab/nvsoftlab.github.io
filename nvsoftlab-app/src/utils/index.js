export const createPageUrl = (pageName) => {
  switch (pageName) {
    case "Home":
      return "/";
    case "ExposedAI":
      return "/exposed-ai";
    case "HaveYouEver":
      return "/have-you-ever";
    case "DiceRoll":
      return "/dice-roll";
    default:
      return "/";
  }
};
