import React from 'react';
import cl from "./Users.module.css";
import userPhoto from "../../assets/images/avatar.png";
import {NavLink} from "react-router-dom";


let User = ({user, followingInProgress, unfollow, follow}) => {

    return (
        <div>
            <span>
                <NavLink to={'/profile/' + user.id}>
                    <div>
                        <img className={cl.ava} src={user.photos.small != null ? user.photos.small : userPhoto} alt=""/>
                    </div>
                </NavLink>
                <div>
                    {user.followed
                        ? <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            unfollow(user.id)
                        }}>Unfollow</button>
                        : <button disabled={followingInProgress.some(id => id === user.id)} onClick={() => {
                            follow(user.id)
                        }}>Follow</button>
                    }
                </div>
            </span>
            <span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status != null ? user.status : "my status is null"}</div>
                    </span>
                    <span>
                        {/*<div>{user.location.city}</div>
                        <div>{user.location.country}</div>*/}
                    </span>
                </span>
        </div>
    );
}

export default User;