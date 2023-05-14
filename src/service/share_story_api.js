const { default: httpHelper } = require("helpers/httpHelper");

const StoryAPI = {
  createStory: (param) => {
    const url = `/stories`;
    return httpHelper.post(url, param);
  },
};
export default StoryAPI;