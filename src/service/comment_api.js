import httpHelper from "helpers/httpHelper";

const CommentAPI = {
  getListComment: (articleId,page_size) => {
    const url = `/comments?articleId=${articleId}&sort_by=createdAt&sort_order=desc&page_size=${page_size}`;
    return httpHelper.get(url);
  },
  createComment: (params)=>{
    const url =`/comments`;
    return httpHelper.post(url,params)
  },
  deleteComment: (commentId) => {
    const url =`/comments/${commentId}`;
    return httpHelper.delete(url)
  },
  reportComment: (params) =>{
    const url=`/comments/reports`;
    return httpHelper.post(url,params)
  },
  likeComment: (commentId) => {
    const url = `/comments/${commentId}/likes`;
    return httpHelper.post(url);
  },
  unlikeComment: (commentId) => {
    const url = `/comments/${commentId}/unlikes`;
    return httpHelper.put(url);
  },
  likeArticle: (articleId) => {
    const url = `/articles/${articleId}/likes`;
    return httpHelper.post(url);
  },
  unlikeArticle: (articleId) => {
    const url = `/articles/${articleId}/unlikes`;
    return httpHelper.put(url);
  },
  getLikeArticleById: (articleId) => {
    const url = `/articles/${articleId}/likes`;
    return httpHelper.get(url);
  }
};

export default CommentAPI;
