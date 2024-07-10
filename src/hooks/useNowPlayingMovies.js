import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addNOwPlayingMovies } from "../redux/moviesSlice";
import { useEffect } from "react";

const useNowPlayingMOvies = () => {
  const dispatch = useDispatch();

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addNOwPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowPlayingMOvies;
