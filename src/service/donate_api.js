const { default: httpHelper } = require("helpers/httpHelper");

const DonateAPI = {
  createDonate: (params) => {
    const url = `/donations`;
    return httpHelper.post(url, params);
  },

  getListDonateCampaign: () => {
    const url = `/donation-campaigns?sort_by=dateEnd&sort_order=desc`;
    return httpHelper.get(url);
  },

  getCampaignById: (id) => {
    const url = `/donation-campaigns/${id}`;
    return httpHelper.get(url);
  },
  getListDonor: (currentPage, pageSize) => {
    const url = `/donations/statistic?donation_type=GENERAL&sort_by=paymentDate&sort_order=desc`;
    return httpHelper.get(url);
  },
  getDetailCampaign: (id) => {
    const url = `/donations/statistic?donation_campaign_id=${id}`;
    return httpHelper.get(url);
  },
  checkDonate: (id) => {
    const url = `/donations/callback?vnp_TxnRef=${id}`;
    return httpHelper.get(url);
  },
  statisticFund: () => {
    const url = `/donations/statistic?donation_type=GENERAL&build_for_dashboard=true`;
    return httpHelper.get(url);
  },
};

export default DonateAPI;
