module.exports = (msg, { success, error }, cp) => {
  success({ 
    status: 'Installing' 
                /*"Downloaded",
                "DownloadFailed",
                "Downloading",
                "Idle",
                "InstallationFailed",
                "Installing",
                "Installed"
  */
  });
};
