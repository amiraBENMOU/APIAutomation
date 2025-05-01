import dotenv from 'dotenv';
dotenv.config();

export default {
  baseURL: 'https://api.spotify.com',
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
  redirectUri: process.env.SPOTIFY_REDIRECT_URI,
  authCode:process.env.SPOTIFY_AUTH_CODE,
};
