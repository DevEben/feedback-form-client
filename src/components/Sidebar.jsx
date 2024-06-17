import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDashboard } from "react-icons/md";
import { BsClipboardCheckFill } from "react-icons/bs";
import { TbLogout2 } from "react-icons/tb";
import './Sidebar.css';
import axios from 'axios';

function Sidebar({ setView }) {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            // Retrieve token from localStorage
            const token = localStorage.getItem('token');

            if (!token) {
                console.error('Token not found in localStorage');
                return;
            }
            const newToken = JSON.parse(token);

            const config = {
                headers: {
                    'Authorization': `Bearer ${newToken}`
                }
            };

            // Perform logout request
            const response = await axios.post(`https://insightbuddy.vercel.app/api/signout`, {}, config);

            // Handle successful logout
            localStorage.clear(); 
            alert(response.data.message); 
            navigate('/login-signUp'); 
            setView('logout'); 
        } catch (error) {
            // Handle errors
            console.error('Error logging out user:', error);
            alert(error.response.data.message);
        }
    };

    return (
        <div className="sidebar">
            <div className='tabsContainer'>
                <div className='tabs' onClick={() => setView('dashboard')}><i><MdDashboard/></i>Dashboard</div>
                <div className='tabs' onClick={() => setView('marked-feedback')}><i><BsClipboardCheckFill/></i>Marked <br/>Feedback</div>
                <div className='tabs' onClick={handleLogout}><i><TbLogout2/></i>Logout</div>
            </div>
        </div>
    );
}

export default Sidebar;
