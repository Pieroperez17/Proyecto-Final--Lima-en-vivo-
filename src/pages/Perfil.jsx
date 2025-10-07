import { SignOutButton ,UserProfile} from '@clerk/clerk-react';
import './styles/perfil.css'

const Perfil = () => {
    return (
        <div style={{ paddingTop: '5rem'}}>
            <SignOutButton className="sign-out-button">
                <button>Sign out</button>
            </SignOutButton>
            <UserProfile />
        </div>
    );
};

export default Perfil;