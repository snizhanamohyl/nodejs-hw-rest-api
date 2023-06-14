const subscriptionList = ["starter", "pro", "business"];
const emailRegexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const minPasswordLength = 6;

module.exports = { subscriptionList, emailRegexp, minPasswordLength };
