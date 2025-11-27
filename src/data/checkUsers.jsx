import { useState, useEffect } from 'react';
import { useUser } from "@clerk/clerk-react";


export function useUsuariosRegistrados({usename}) {
    const [usuarios, setUsuarios] = useState(null);
    const { user} = useUser();

    useEffect(() => {
        let cancelled = false;

        const fetchUsuarios = async () => {
            try {
                const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`);
                if (!res.ok) throw new Error('Error fetching users');
                const users = await res.json();
                if (!cancelled) setUsuarios(users);
            } catch (err) {
                console.error(err);
                if (!cancelled) setUsuarios(null);
            } 
        };

        fetchUsuarios();
        return () => { cancelled = true; };
    }, []);
    var aceso = false;
    for (let i = 0; i < usuarios?.length; i++) {
        if (usuarios[i].name === usename) {
            aceso = true;
            break;
        }
    }
    console.log(aceso);
    if (aceso) {
        console.log("Usuario registrado");
    } else {
        // The following code creates a new user if not registered
            const newUser = {
                "Id_usuario": usuarios?.legth + 1,
                "es_streamer": false,
                "name": user.emailAddresses[0].emailAddress,
                "avatarURL": user.imageUrl == null ? "" : user.imageUrl,
                "saldoMonedas": 1000,
                "puntos": 0,
                "nivel": 0,
                "horas_live": 0,
                "id_seguidos": []
            };

            (async () => {
                try {
                    const res = await fetch(`${import.meta.env.VITE_BACKEND_URL}/users`, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(newUser)
                    });
                    if (res.ok) {   
                        console.log('ok');
                        
                    } else {
                        const text = await res.text();
                        console.error('Error creating user:', res.status, text);
                    }
                } catch (err) {
                    console.error(err);
                }
            })();
        }
        return;
}
