import React from 'react';
import Sidebar from '../components/Sidebar';
import LiveCategories from '../components/Sidebar';
import CategoriasEnVivo from '../components/CategoriasEnVivo';
import StreamsVivo from '../components/StreamsVivo';
import { useUser } from '@clerk/clerk-react';

const Inicio = () => {
    const { user, isLoaded, isSignedIn } = useUser();
    console.log(user.firstName);

    if (!isLoaded || !isSignedIn) {
        return <div>Cargando...</div>;
    }


 // Ahora puedes acceder a los datos del usuario


    return (
        <div style={{ paddingTop: '4rem' }}>
            <CategoriasEnVivo />
            <StreamsVivo />
        </div>
    );
};

export default Inicio;