export const createPageUrl = (pageName) => {
  switch (pageName) {
    case "Home":
      return "/";
    case "ExposedAI":
      return "/exposed-ai";
    case "UpsideDown":
      return "/upside-down";
    case "HaveYouEver":
      return "/have-you-ever";
    case "DiceRoll":
      return "/dice-roll";
    default:
      return "/";
  }
};
