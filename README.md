# 🎧 Spotify API Automation Project

	**This project is a Node.js-based test automation suite that interacts with the Spotify Web API using the Authorization Code Flow. It includes public and authenticated API tests, using Jest for testing and Axios for HTTP requests. **

## 📁 Project Structure

api_automation/ ├── tests/ │ └── publicApi.test.js # Jest test suite for public/authenticated endpoints ├── utils/ │ ├── auth.js # Handles Spotify auth token via Authorization Code Flow │ ├── config.js # Loads and exports env config variables │ └── publicApi.js # API wrappers for various Spotify endpoints ├── .env # Environment variables (not committed) ├── babel.config.js # Babel config (for Jest ESM support) ├── auth-url.js # Generates authorization URL (manual step) ├── package.json └── README.md

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

** create a .env file in the root directory **
** add this code in the .env file **

```bash

SPOTIFY_CLIENT_ID=your_spotify_client_id
SPOTIFY_CLIENT_SECRET=your_spotify_client_secret
SPOTIFY_REDIRECT_URI=http://localhost:3000/callback
SPOTIFY_AUTH_CODE=your_one_time_authorization_code

```