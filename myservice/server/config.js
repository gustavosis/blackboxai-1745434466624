const path = require('path');

module.exports = {
  port: process.env.PORT || 3000,
  sessionSecret: process.env.SESSION_SECRET || 'your-secret-key',
  uploadDir: path.join(__dirname, '..', 'uploads'),
  rateLimit: {
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100 // limit each IP to 100 requests per windowMs
  },
  oauth: {
    facebook: {
      clientID: 'EAAOHxyIZBYpoBO4oSNjJxx9NOtbYZBnhYw47ZAaqyluTCMnqW8w8HJUKLTDvDmiwkAiZCKdvSOLX7YnVXPB5icEf8ZAb95ZBwtkEFiX8ogGzogATW7xt8ShtdynIzZApFksZBqZCOD1CkX6FAFbXrGMWlvQFYlSSMSuZAv36Tbfv4jmZBZC1TKL43hL01xI1ihgXNeSK2DC2xb9IVsy3feHx2Y3XvIuZCiiwqmWQ8h0vJLvM1EZBMcHC32FMUZCnLYatdiEkekZD',
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || 'your-facebook-secret',
      callbackURL: '/auth/facebook/callback'
    },
    google: {
      clientID: 'AIzaSyCoA6F7NcVwgWFkfxx-o-QkhxBXfoDSuPQ',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || 'your-google-secret',
      callbackURL: '/auth/google/callback'
    }
  }
};
