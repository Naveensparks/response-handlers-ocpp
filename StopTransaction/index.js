module.exports = (msg, { success, error }, cp) => {
  success({
      idTagInfo: {status: "Accepted"}
                      /*Accepted",
                        "Blocked",
                        "Expired",
                        "Invalid",
                        "ConcurrentTx"*/
  });
};
