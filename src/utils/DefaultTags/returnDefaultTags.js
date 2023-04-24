import HTMLTags from "@/utils/DefaultTags/partials/HTMLTags.json";
import MDTags from "@/utils/DefaultTags/partials/MDTags.json";

function getDefaultTags(fileType) {
  const defaultTagsModule = fileType !== "md" ? HTMLTags : MDTags;

  return defaultTagsModule.tags;
}

export default getDefaultTags;
