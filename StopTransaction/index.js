module.exports = (msg, { success, error }, cp) => {
  success({
    {
      transactionId : 2,
      timestamp : (new Date()).toISOString(),
      meterStop : 1
  });
};
