import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Products = () => {
    const {user} = useFirebase()
    return (
        <div>
            <h1>Who is there</h1>
            <p>{user ? user.displayName : 'voooth'}</p>
        </div>
    );
};

export default Products;