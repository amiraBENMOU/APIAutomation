import { describe, test, expect } from '@jest/globals';
import request from 'supertest';
import APIController from './../utils/auth.js';

describe('acess need authentification tests', () => {
  const baseURL = 'https://api.spotify.com';
  //  code in the url from redirect URL after login
  const authCode = process.env.SPOTIFY_AUTH_CODE; 

  let token; //CREATE A TOKEN FOR THE AUTH CODE

  beforeAll(async () => {
    token = await APIController.getAccessToken(authCode);
  }, 100000); // ⏱️ 1 min timeout

  // ---------------------- user current profile acess test---------------------------------//

  // This endpoint requires user authentication and will return 200 if the token is valid
  test('Should return 200 for authorized endpoint', async () => {
    //const token = await APIController.getAccessToken(authCode);
    const res = await request(baseURL)
      .get('/v1/me')
      .set('Authorization', `Bearer ${token}`);
    expect(res.statusCode).toBe(200);
  });

  // This endpoint requires user authentication and will return 200 if the token is invalid
  test('Should return 401 if unauthorized', async () => {
    const res = await request(baseURL)
      .get('/v1/me'); // No auth header
    expect(res.statusCode).toBe(401);
  });

  // ---------------------- get the user plylist ---------------------------------//

  describe('GET /v1/me/playlists - User Playlists Endpoint', () => {
    const baseURL = 'https://api.spotify.com';
    const authCode = process.env.SPOTIFY_AUTH_CODE;
  
    test('Should return 200 and a list of user playlists', async () => {
      
      const res = await request(baseURL)
        .get('/v1/me/playlists')
        .set('Authorization', `Bearer ${token}`);
  
      // ✅ Expect 200 OK
      expect(res.statusCode).toBe(200);
  
      // ✅ Check if items array exists
      expect(res.body).toHaveProperty('items');
      expect(Array.isArray(res.body.items)).toBe(true);
  
      // 🧪 Optional debug log
      console.log('Retrieved Playlists:', res.body.items.map(p => p.name));
    });
  });

  // ---------------------- set the volum of the current music to 50 ---------------------------------//

  test('Should set volume and return 204 for authorized user', async () => {
  const volumePercent = 50;

  const res = await request(baseURL)
    .put('/v1/me/player/volume')
    .query({ volume_percent: volumePercent })
    .set('Authorization', `Bearer ${token}`);

  console.log('Response status:', res.statusCode);
  console.log('Response body:', res.body);

  expect(res.statusCode).toBe(204);
}, 100000); // ⏱️ timeout set to 1 min 


});
