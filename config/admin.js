module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'bf06d90a22a5196a1858816a16aaf094'),
  },
});
