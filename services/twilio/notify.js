exports.notify = function (context, event, callback) {
  const { recipients, message } = event;
  const { getTwilioClient, getTwilioPhoneNumber } = context;
  
  const phoneNumbers = recipients.split(',').map((x) => x.trim());
  
  const client = getTwilioClient();

  const allMessageRequests = phoneNumbers.map((to) => {
    return client.messages
      .create({
        from: getTwilioPhoneNumber(),
        to,
        body: message,
      })
      .then((msg) => {
        return { success: true, sid: msg.sid };
      })
      .catch((err) => {
        return { success: false, error: err.message };
      });
  });

  Promise.all(allMessageRequests)
    .then((result) => {
      return callback(null, { result });
    })
    .catch((err) => {
      console.error(err);
      return callback('Failed to fetch messages');
    });
};