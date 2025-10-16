import React from 'react';
import { useUser } from '@clerk/clerk-react';
import Sidebar from '../components/Sidebar';
import LiveCategories from '../components/Sidebar';
import CategoriasEnVivo from '../components/CategoriasEnVivo';
import Conversando from '../components/Conversando';

const Inicio = () => {
    const { user, isLoaded, isSignedIn } = useUser();
    console.log(user);

    if (!isLoaded || !isSignedIn) {
        return <div>Cargando...</div>;
    }


 // Ahora puedes acceder a los datos del usuario


    return (
        <div style={{ paddingTop: '4rem' }}>
            <CategoriasEnVivo />
            <Conversando />
        </div>
    );
};

export default Inicio;