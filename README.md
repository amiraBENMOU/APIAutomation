# 🎧 Spotify API Automation Project

	This project is a Node.js-based test automation suite that interacts with the Spotify Web API using the Authorization Code Flow. It includes public and authenticated API tests, using Jest for testing and Axios for HTTP requests. 

# 📌 Prerequisites
   
   Node.js >= 18

   A Spotify Developer account and registered app: https://developer.spotify.com/dashboard



## 📁 Project Structure

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


## 🚀 Getting Started

### 1. **frok the repository**

```bash

frok this repo 
git clone https://github.com/amiraBENMOU/spotify-api-automation.git
cd spotify-api-automation

```

### 2. **Install dependencies**

```bash

npm install

```

### 3. **Configure environment**

 create a .env file in the root directory and  add this code in it .

```bash

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
SPOTIFY_AUTH_CODE=your_one_time_authorization_code

```
#### Remarque 

You get the  SPOTIFY_CLIENT_ID and  SPOTIFY_CLIENT_SECRET   from  your spotify devlopper dashboard  