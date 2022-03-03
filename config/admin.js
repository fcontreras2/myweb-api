module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7b91ffa49e8178aacf2b499dc0156f7c'),
  },
});
