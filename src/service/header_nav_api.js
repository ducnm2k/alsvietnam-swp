import httpHelper from "helpers/httpHelper";

const HeadNavApi = {

    getListTopic:() =>{
        const url = `/topics?build_tree=true&build_article=true`;
        return httpHelper.get(url);
    }
};

export default HeadNavApi;
