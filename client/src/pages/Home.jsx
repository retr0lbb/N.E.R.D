import React, { useContext, useEffect} from 'react';
import { UserContext } from '../components/userContext';

export default function Home() {
  const { user, setUser } = useContext(UserContext);

  useEffect(() => {
    const userFromStorage = localStorage.getItem('user');

    if (userFromStorage) {
      setUser(JSON.parse(userFromStorage));
    }
  }, [setUser]);

  return (
    <div>
      {user ? (
        <div>
          Olá, {user.name}!
          <button
            onClick={(e) => {
              console.log(user.name);
            }}
          >
            Olá, meu bem
          </button>
          <button onClick={ e=>{
            localStorage.removeItem('user');
            setUser(null);
            window.location.href = "/*"
          }}>
            deslogar
          </button>
        </div>
      ) : (
        <p>Carregando informações do usuário...</p>
      )}
    </div>
  );
}
