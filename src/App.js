import React, { useEffect, useState } from "react";
import "./App.css";
import Login from "./Login";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Player";
import { useStateProviderValue } from "./StateProvider";

// constructor that gives us the full access to spotify api via the package
const spotify = new SpotifyWebApi();

function App() {
  // we can access user (for example here) => const [{user}, dispatch] = useStateProviderValue()
  // dispatch allows us to shoot actions at the StateProvider(data layer) and return back values!
  const [{ user, token }, dispatch] = useStateProviderValue();
  console.log(user);

  // NOTE: we could also pull in the whole data layer object, without distructuring
  // const [StateProvider, dispatch] = useStateProviderValue();
  // console.log(StateProvider.user);

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    // this make sure that if access_token is undefined, it will not be set
    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      // will give access from react to spotify services
      spotify.setAccessToken(_token);

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist("37i9dQZEVXcFuHl4vbX5Kn").then((response) => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });
    }
  }, [dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
