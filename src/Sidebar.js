import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateProviderValue } from "./StateProvider";

function Sidebar() {
  const [{ playlists }] = useStateProviderValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://1000logos.net/wp-content/uploads/2017/08/Spotify-symbol.jpg"
        alt=""
      />
      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} key={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
