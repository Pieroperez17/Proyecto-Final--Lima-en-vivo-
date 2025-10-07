import React from 'react';
import { SignIn } from '@clerk/clerk-react';

const Login = () => (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <SignIn forceRedirectUrl={"/inicio"} />
    </div>
);

export default Login;