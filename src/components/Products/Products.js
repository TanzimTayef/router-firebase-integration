import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app);
const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h1>Who is there</h1>
            <p>{user ? user.displayName : 'voooth'}</p>
        </div>
    );
};

export default Products;