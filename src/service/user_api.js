import httpHelper from "helpers/httpHelper";

const UserAPI = {
  getUser: (id) => {
    const url = `/users/${id}`;
    return httpHelper.get(url);
  },
  signUp: (params) => {
    const url = `/users/get-involve`;
    return httpHelper.post(url, params);
  },
  getIdMember: () => {
    const url = `/roles?name=ROLE_MEMBER`;
    return httpHelper.get(url);
  },
  getIdVolunteer: () => {
    const url = `/roles?name=ROLE_VOLUNTEER`;
    return httpHelper.get(url)
  },
  verifyUser: (id, code) => {
    const url = `/users/${id}/verify-account/${code}`;
    return httpHelper.post(url);
  },
  resendMail: (id) => {
    const url = `/users/${id}/resend-email`;
    return httpHelper.post(url)
  },
  updateProfile: (profileForm) => {
    const url = `/users`;
    return httpHelper.put(url, profileForm);
  },
  changePassword: (params) => {
    const url = '/users/password';
    return httpHelper.put(url, params);
  }
};

export default UserAPI;
