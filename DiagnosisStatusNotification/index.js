module.exports = (msg, { success, error }, cp) => {
  success({ 
    status: "Uploaded" 
               /* "Idle",
                "Uploaded",
                "UploadFailed",
                "Uploading"*/
  });
};
