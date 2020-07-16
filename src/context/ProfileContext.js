import React, { createContext } from 'react';

const ProfileContext = createContext({
    profile: {
        id: -1,
        username: ''
    }
});

export default ProfileContext;
