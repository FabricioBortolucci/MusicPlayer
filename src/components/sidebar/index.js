import React, {useEffect, useState} from "react";
import "./sidebar.css";
import SidebarButton from "./sidebarButton";
import {SiFeedly} from "react-icons/si";
import {MdFavorite} from "react-icons/md";
import {FaGripfire} from "react-icons/fa";
import {FaPlay} from "react-icons/fa";
import {IoLibrary} from "react-icons/io5";
import {FaSignOutAlt} from "react-icons/fa";
import apiClient from "../../spotify";


export default function Sidebar() {
    const [image, setImage] = useState(
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLAY3C19kL0nV2bI_plU3_YFCtra0dpsYkg&usqp=CAU"
    );

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await apiClient.get("me");
                const imageUrl = response.data.images[0]?.url; // Use optional chaining to avoid errors
                if (imageUrl) {
                    setImage(imageUrl);
                }
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        fetchUserData();
    }, []);

    return <div className={"sidebar-container"}>
        <img alt={"img"}
             className={"profile-img"}
             src={image}/>
        <div>
            <SidebarButton title={"Trending"} to={"/trending"} icon={<FaGripfire/>}/>
            <SidebarButton title={"Feed"} to={"/feed"} icon={<SiFeedly/>}/>
            <SidebarButton title={"Player"} to={"/player"} icon={<FaPlay/>}/>
            <SidebarButton title={"Favoritos"} to={"/favorites"} icon={<MdFavorite/>}/>
            <SidebarButton title={"Biblioteca"} to={"/library"} icon={<IoLibrary/>}/>
        </div>
        <SidebarButton title={"Sair"} to={""} icon={<FaSignOutAlt/>}/>
    </div>;
}