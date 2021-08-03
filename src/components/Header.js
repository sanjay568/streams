import React from 'react';
import { Link  } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (<div className='ui secondary pointing menu'>
            <Link to='/' className='item'>Streamer</Link>
            <div className='right menu'>
                <Link to='/' className='item'>All Stream</Link>  
                <GoogleAuth />
             </div>
        
    </div>);
}
// 593736152125-mvoggrns3l4hoo26k754vln9d7cv9vp0.apps.googleusercontent.com
export default Header;