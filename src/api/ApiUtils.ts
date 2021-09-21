var ApiUtils = {
  checkStatus: function(response) { 
    if (response.ok) {
      return response;
    } else {
      let error: any = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
};
export { ApiUtils as default };
