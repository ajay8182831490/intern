import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MyAccount = () => {
    const [userData, setUserData] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`http://localhost:3600/v1/user/userProfile`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "auth-token": localStorage.getItem('token')
                    },
                });

                if (!response.ok) {
                    throw new Error(`Server returned ${response.status} ${response.statusText}`);
                }

                const json = await response.json();
                setUserData(json)

            } catch (error) {
                console.error('Error fetching user data:', error);

                navigate('/login');
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>User Information</h1>

            <p>Name: {userData.name}</p>
            <p>Email: {userData.email}</p>
            <p>Mobile No: {userData.mobileno}</p>
            <p>Bio: {userData.bio}</p>


        </div>
    );
};

export default MyAccount;
