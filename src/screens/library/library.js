import React, {useEffect, useState} from "react";
import APIKit from "../../spotify";
import "./library.css";
import {IconContext} from "react-icons";
import {AiFillPlayCircle} from "react-icons/ai";

export default function Library() {

    const [playlists, setPlaylists] = useState(null);

    useEffect(() => {
        APIKit.get('me/playlists').then(function (response) {
            setPlaylists(response.data.items);
        });
    }, []);

    return <div className={"screen-container"}>
        <div className={"library-body"}>
            {playlists?.map(playlist =>
                <div className={"playlist-card"}>
                    <img src={playlist.images[0].url} className={"playlist-image"} alt={"Playlist-Art"}/>
                    <p className={"playlist-title"}>
                        {playlist.name.length > 20 ? playlist.name.slice(0, 20) + "... " : playlist.name}
                    </p>
                    <p className={"playlist-total"}>
                        {playlist.tracks.total} songs
                    </p>
                    <div className={"playlist-fade"}>
                        <IconContext.Provider value={{size: "50px", color: "#E99D72"}}>
                            <AiFillPlayCircle/>
                        </IconContext.Provider>
                    </div>
                </div>
            )}
        </div>
    </div>;
}
