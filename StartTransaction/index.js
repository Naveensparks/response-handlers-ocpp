module.exports = (msg, { success, error }, cp) => {
  success({
       connectorId : 2,
       idTag : 'string20',
       meterStart : 1,
       timestamp : (new Date()).toISOString()
});
};
