var push = require('web-push');

let vapidkeys = {
    publicKey: 'BBS2-JxqY3ANbn8ZMzVV9J0FEKBwDP5K7yIxkzNr91kg8uDb6Ea09EJ4UhAAieVhYsPNGAyOq7dcohurfMPxbYY',
    privateKey: 'oW21wHiYb3Ek4abDBCHma5xJWV_prq_W5oVt0pHgHio'
  } 

push.setVapidDetails('mailto:sds@1.co.uk',vapidkeys.publicKey, vapidkeys.privateKey)


let sub = {
    endpoint:
    "https://fcm.googleapis.com/fcm/send/fLqJKTzr3AU:APA91bFG--8TmzbOydYmLNh1P3Sbpjc7QPbQgGDOtrGcEr7rEkwfdQDuCir0wfBRuRTe2YWVsfqdigVXoSXbmVxyjnlgQFh6xxzpKmXIDegu5wVxoYglLEEV2h8Pq_7suE00rVAAOMGS",
    expirationTime:null,
    keys:{
        p256dh:"BMmaeFYS5Qyww3sdm-u8yOmuA5QnSb600kj2559WO_7IUwQA8fdKW1k4HPO1MdFIAg0nrsOxN9VOlK7U46FXwoE",
        auth:"V4Uwnp_iXFVMB6TbB05q0Q"}};
console.log(vapidkeys);