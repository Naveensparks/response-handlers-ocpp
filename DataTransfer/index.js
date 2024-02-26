module.exports = (msg, { success, error }, cp) => {
  success({ 
    status : 'Accepted'
    /*
  "Accepted",
  "Rejected",
  "UnknownMessageId",
  "UnknownVendorId"
    */
  });
};
