import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

function Protected(props) {
    let Cm = props.Cmp
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('user-info')) {
            navigate("/register")
        }
    }, [])
    return (
        <div>
            <Cm />
        </div>
    )
}

export default Protected