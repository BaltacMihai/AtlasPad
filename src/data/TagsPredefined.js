import HTMLTags from "./Tags/HTMLPredefined.json";
import MDTags from "./Tags/MDPredefined.json";
function getDefaultTags(fileType) {
  const defaultTagsModule = fileType !== "md" ? HTMLTags : MDTags;

  return defaultTagsModule.tags;
}

export default getDefaultTags;
