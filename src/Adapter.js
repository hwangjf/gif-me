// import API_KEY from "./component/Secrets";

class Adapter {
  static isLoggedIn() {
    return !!localStorage.getItem('token')
  }

  static logout() {
    localStorage.removeItem('token');
  }

  static getKey() {
    return 1
    // return API_KEY
  }
}

export default Adapter;