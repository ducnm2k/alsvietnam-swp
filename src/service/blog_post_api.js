import httpHelper from "helpers/httpHelper";

const BlogPostApi = {
  getAllArticleByTopic: (params) => {
    const url = `/articles?status=PUBLISHED`;
    return httpHelper.get(url, { params });
  },
  getAllArticleByTopicHeader: (topicId) => {
    const url = `/articles?status=PUBLISHED&page_size=5&topic_id=${topicId}`;
    return httpHelper.get(url);
  },
  searchtopicbyname: (name) => {
    const url = `/topics?title_english=${name}`;
    return httpHelper.get(url);
  },
  getPostContent: (articleId) => {
    const url = `/articles/${articleId}`;
    return httpHelper.get(url);
  },

  getTopicById : (topicId) =>{
    const url = `/topics/${topicId}`;
    return httpHelper.get(url);
  },
  getArticleByTitle: (title) =>{
    const url = `/articles?title=${title}&status=PUBLISHED`;
    return httpHelper.get(url);
  }
};

export default BlogPostApi;
