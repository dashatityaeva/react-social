import React from 'react';
import Paginator from "../Common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, pageSize, totalUsersCount, onPageChanged, users, ...props}) => {

    return (
        <div>
            <Paginator pageSize={pageSize} currentPage={currentPage}
                       totalItemsCount={totalUsersCount} onPageChanged={onPageChanged}/>

            {
                users.map(u => <User user={u}
                                     key={u.id}
                                     followingInProgress={props.followingInProgress}
                                     unfollow={props.unfollow}
                                     follow={props.follow}/>
                )
            }
        </div>
    );
}

export default Users;