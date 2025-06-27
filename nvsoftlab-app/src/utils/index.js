export const createPageUrl = (pageName) => {
  switch (pageName) {
    case "Home":
      return "/";
    case "DiceRoll":
      return "/dice-roll";
    default:
      return "/";
  }
};
