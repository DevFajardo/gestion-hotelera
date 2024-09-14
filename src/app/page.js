<<<<<<< HEAD
export default function Home() {
  return <h1>hola</h1>;
=======
'use client'
import useLoginState from './LoginUtils/useLoginState.js';

export default function Home() {
  const { data, handleData, handleSubmit } = useLoginState();
  return (
    <div className={'login'}>
      <div className={'login_container'}>
        <form onSubmit={handleSubmit}>
          <h2 id='loginsesion'>Iniciar Sesión</h2>
          {data && data.error && <p className={'error'}>{data.error}</p>}
          <div className={'form-group'}>
            <input
              type="text"
              id="username"
              name="username"
              value={data.username}
              onChange={handleData}
              placeholder="Usuario"
            />
          </div>
          <div className={'form-group'}>
            <input
              type="password"
              id="password"
              name="password"
              value={data.password}
              onChange={handleData}
              placeholder="Contraseña"
            />
          </div>

          <button type="submit" className={'login-button'}>Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
>>>>>>> d20369314f4e0097a5315d3a465e012b5b2c92e0
}
