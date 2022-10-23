import React from 'react'
import { Outlet } from 'react-router-dom';
import SideBar from './SideBar';

function Portal() {
    return (
        <div id="wrapper">
            <SideBar />
            <div id="content-wrapper" class="d-flex flex-column">
                <div id='content'>

                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default Portal