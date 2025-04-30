//in this file we will create a function that will return the auth url for the given provider

import dotenv from 'dotenv';
dotenv.config();

function generateSpotifyAuthURL() {
    const clientId = process.env.SPOTIFY_CLIENT_ID;
    const redirectUri = encodeURIComponent(process.env.SPOTIFY_REDIRECT_URI);
    const scopes = [
      'user-read-playback-state',
      'user-modify-playback-state',
      'user-read-currently-playing',
      'user-read-private',
      'user-read-email',
      'user-library-read',
      'playlist-read-private',
      'playlist-modify-public',
      'user-top-read'
    ];
  
    const scopeParam = encodeURIComponent(scopes.join(' '));
  
    const authURL = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopeParam}`;
  
    console.log('🔗 Spotify Auth URL:\n', authURL);
  }
  
  generateSpotifyAuthURL();

