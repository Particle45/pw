var push = require('web-push');

let vapidkeys = {
    publicKey: 'BBS2-JxqY3ANbn8ZMzVV9J0FEKBwDP5K7yIxkzNr91kg8uDb6Ea09EJ4UhAAieVhYsPNGAyOq7dcohurfMPxbYY',
    privateKey: 'oW21wHiYb3Ek4abDBCHma5xJWV_prq_W5oVt0pHgHio'
  } 

push.setVapidDetails('mailto:sds@1.co.uk',vapidkeys.publicKey, vapidkeys.privateKey)


let sub = {};
console.log(vapidkeys);