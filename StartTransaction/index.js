module.exports = (msg, { success, error }, cp) => {
  success({
    transactionId: 12134,
    idTagInfo: {status: "Accepted"}  
                          /*Accepted",
                        "Blocked",
                        "Expired",
                        "Invalid",
                        "ConcurrentTx"*/
});
};
