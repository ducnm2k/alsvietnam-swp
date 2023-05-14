const { default: httpHelper } = require("helpers/httpHelper");

const InvolvedAPI = {
    createRequest: (params) => {
        const url = `/users/get-involve`;
        return httpHelper.post(url,  params );
    },


};

export default InvolvedAPI;
