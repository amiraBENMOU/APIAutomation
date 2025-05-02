# 🎧 Spotify API Automation Project

This project is a Node.js-based test automation suite that interacts with the Spotify Web API using the Authorization Code Flow. It includes public and authenticated API tests, using Jest for testing and Axios for HTTP requests. 

# 📌 Prerequisites
   
  -  Node.js >= 18

  -  A premuim Spotify account 

  -  A Spotify Developer account where you create an App at : https://developer.spotify.com/dashboard

  -   From the dashboard you get your Client ID , client secret and you create your redirect url  that we will need in the next steps 
  
  ![Dashboard](https://res.cloudinary.com/dsfoania5/image/upload/v1746188614/Capture_d_%C3%A9cran_2025-05-02_132304_cymhym.png)


## ⚠️ Remarques

if you don't have a spotify accout you can the "get the user plylist " and the " set the volum of the current music to 50 " in publicApi.test.js as comment or simply remove it 



# 📁 Project Structure

spotify-api-automation/
│
├── tests/                   
│   └── publicApi.test.js     
│
├── utils/                   
│   ├── auth.js               
│   └── config.js             
│
├── .banelrc
├── .env 
├── auth-url.js
├── jest.config.js            
├── package.json              
└── README.md                


# 🚀 Getting Started

## 1. **frok the repository**

```bash

frok this repo 
git clone https://github.com/amiraBENMOU/spotify-api-automation.git
cd spotify-api-automation

```

## 2. **Install dependencies**

```bash

npm install

```

## 3. **Configure environment**

 Create a .env file in the root directory and  add your clent id , client secret and redirect uri that we get previously  .

```bash

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
SPOTIFY_AUTH_CODE=your_one_time_authorization_code

```
## 4. **⚙️ Scripts** 


Add this script in  your package.json file 

```bash

"scripts": {
  "test": "jest",
  "auth": "node auth-url.js"
}

```
## 🧪 Get the authentification code and Run Tests

1- past this code in your terminal  

```bash

npm run auth

```
2- Copy the link you get in your browser 

the link you get will be something like : https://accounts.spotify.com/authorize?response_type=code&client_id=ccd99b3e30c94215912a645eaaa0e8fd&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2Fcallback&scope=user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing%20user-read-private%20user-read-email%20user-library-read%20playlist-read-private%20playlist-modify-public%20user-top-read

3- the response you will get will be something like : http://127.0.0.1:3000/callback?code=AQCS0-0LQP-y3Ccg7CVJ--RKawEiHaP0AaGvHUwIXpd_83yg1TlbgfmZsoJkiJ5k84ediexdrFHSFZMwtaRiyH2YNL4B4pqb2ju_Z_jfEiYXUz5nEIiIBm3ODEshbcac6_l5DC8GlVK0LsGfNm6bEo2MlUVl3QUvqwc3fuJ3iDRccC-t8LGxCl8gzw1wTd5yQPwP0ZybdeR34BIJh5LWW5KPT5abGCwGBmISgCl8JLcwdORDOtaUmgWJVq6s0mv_gC1tA8bTBh8dCokaLnMUBVLhc85XffUIRk3y7JPb7ZpTRNCTt-bBq333bhgD_6hA5nFHcTRAyoiK8xNMwiCFbf-9sGgAGd3k0py6gx7emyVQfNF_Ozb-uyGyW00TAWCVoHiiWTjnAPd9IafYlOhthF02KEJkz3vOtQAlGhvk2jyJsXwaCRPkCdIu

Copy the code after " code = " and past in SPOTIFY_AUTH_CODE in the .env 

4 - before starting your tests select any song in your spotify and make it run with low volume 
to see the difference when we test 

![Spotify Preview](https://res.cloudinary.com/dsfoania5/image/upload/v1746188464/Capture_d_%C3%A9cran_2025-05-02_131540_bffnnr.png)

5 - Run tests

```bash
npm test

```
If everything works well you will get this kind of result 

![Result Preview](https://res.cloudinary.com/dsfoania5/image/upload/v1746189649/Capture_d_%C3%A9cran_2025-05-02_134027_sjoshu.png)

# 📖 References
