import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

const clientId = process.env.SPOTIFY_CLIENT_ID;
const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;
const redirectUri = process.env.SPOTIFY_REDIRECT_URI;
const authCode = process.env.SPOTIFY_AUTH_CODE; // This should be set to the auth code you get from the redirect URL

console.log('Client ID:', clientId);
console.log('Client Secret:', clientSecret);
console.log('Redirect URI:', redirectUri);
console.log('Auth Code:', authCode);


let accessToken = null;

// 👤 User Access Token (Authorization Code Flow)
async function getAccessToken(authCode) {
  try {
    const response = await axios({
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
      },
      data: new URLSearchParams({
        grant_type: 'authorization_code',
        code: authCode,
        redirect_uri: redirectUri
      })
    });

    accessToken = response.data.access_token;
    console.log('✅ Successfully obtained user access token.');
    return accessToken;
  } catch (error) {
    console.error('❌ Error fetching user access token:', error.response?.data || error.message);
    throw new Error('Failed to get user access token.');
  }
}

async function getToken() {
  if (!accessToken) {
    throw new Error('Access token not set. Call getAccessToken(authCode) first.');
  }
  return accessToken;
}

export default {
  getAccessToken,
  getToken,
};
