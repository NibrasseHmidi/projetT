module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'c4be81f29371f890495813ea5c37ffef'),
  },
});
