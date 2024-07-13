import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    upcomingMovies: null,
    topRatedMovies: null,
    trailerVideo: null,
    playVideo: null,
  },
  reducers: {
    addNOwPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addUpcomingMovies: (state, action) => {
      state.upcomingMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    addPlayVideo: (state, action) => {
      state.playVideo = action.payload
    }
  },
});

export const {
  addNOwPlayingMovies,
  addPopularMovies,
  addUpcomingMovies,
  addTopRatedMovies,
  addTrailerVideo,
  addPlayVideo,
} = moviesSlice.actions;
export default moviesSlice.reducer;
