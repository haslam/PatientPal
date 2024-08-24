import twilio from 'twilio';
import { twilioEnvs } from '../../config/base';

const { accountSid, authToken, phoneNumber } = twilioEnvs;
const twilioClient = twilio(accountSid, authToken);

module.exports = {
  getTwilioClient: () => {
    return twilioClient;
  },
  getTwilioPhoneNumber: () => {
    return phoneNumber;
  },
}