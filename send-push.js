const webpush = require('web-push');

const options = {
  vapidDetails: {
    subject: 'http://127.0.0.1:8080',
    publicKey: 'BBc7Bb5f5CRJp7cx19kPHz5d9S5jFSzogxEj2V1C44WuhTwd78tnXLPzOxGe0bUmKJUTAMemSKFzyQjSBN_-XyE',
    privateKey: 'tBoppvhj9A9NO0ZrFsPiH_CoAZ84TagjxiKyGjR4V8w'
  },
  TTL: 5000
}

const pushSubscription =  { "endpoint": "https://updates.push.services.mozilla.com/wpush/v2/gAAAAABZRXohVRzRQ2OY4SCK7C3cu85_-Z6ty68_GhzYRc51jKixy2TEGqwYiCsFKaq2gXiqP5mbjC_OZ_zpUho_P2FFBtRnu6JPh53aH0aASppP_0qvtv9Ci4Paq5ug_qAk_YvBpgqrxiqRKvNxaCcDSdTSSqGiDNBm0s9GgkdEto_Sao24rnE", "keys": { "auth": "oAurpeX6j9OR_R8TwYJOYg", "p256dh": "BIqeYncgggaq8okTVcefPDo5dRtVAE6Mik3w9DFAVtW2IVeTxoSsq1Mge44ralGzWnThx0gQOqMlWYbIncczF9A" } } 

const payload = JSON.stringify({
  notification: {
    title: 'Info',
    body: 'Hallo Welt!',
    icon: './assets/angular.png',
    data: 'additional data'
  }
});

webpush.sendNotification(
  pushSubscription,
  payload,
  options
);
