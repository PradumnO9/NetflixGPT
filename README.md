# Netflix GPT

- Highly intrective, scalable and efficient movie streaming platform, having power of GPT API's for movie suggestion.
- UI like Netflix, responsive for mobile devices.
- App URL => https://netflix-gpt-lovat-beta.vercel.app/

# Tech Stack

- FrontEnd
  - React, Tailwind CSS
- BackEnd
  - TMDB live API's
    - NowPlayingMovies
    - PopularMovies
    - TopRatedMovies
    - UpcomongMovies

# App Structure

- Login/Sign Up
  - Sigh In / Sigh Up form
  - Redirect to Browse Page
- Browse (after authentication)
  - Header
  - Main Movie
    - Trailer in Background
    - Title & Description
    - MovieSuggestion
      - MovieLists * N
- NetflixGPT
  - Search Bar
  - Movie Suggestions

# Features

- Tailwind CSS
- Login Form
- Sign Up Form
- Form Validation
- Firebase Setup
- Created Redux Store with userSlice
- Fetch Movies from TMDB database
- Register TMDB API & create an app & get access token
- Get data from TMDB now playing movies list API
- Create movieSlice
- Custom Hook -> NowPlayingMovie, MovieTrailer, useUpcomingMovies, useTopRatedMovies, usePopularMovies
- TMDB Image CDN
- Multi-language Feature
- Redux => to manage data globally
- GPT Search => used open AI API (model: "gpt-3.5-turbo") to get movies suggession
- Deployed on Vercel

# Clone

- Clone this repository to your system
- In terminal use command => npm i (to install dependencies)
- npm start
