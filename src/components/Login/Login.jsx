import React, {useEffect, useState} from 'react';
import { POST_Login } from '../../APIs/APIs';
import emailLogo from '../../assets/images/email.svg';
import passwordLogo from '../../assets/images/password.svg';

import './Login.css';

function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    localStorage.removeItem('token');
  }, [])

  const submitLogin = (event) => {
    event.preventDefault();
    event.stopPropagation();
    const { url, options } = POST_Login(email, password);
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        if(data.status !== 1){
          return console.log('Erro', data);
        }
        localStorage.setItem('token', data.token_de_acesso);
        window.location.replace('/');
      });
  }

  return (
    <div className='login_div'>
      <h1 className='login_welcome'>Bem-vindo a Innovation Brindes</h1>
      <div className="login_login-form">
        <form onSubmit={submitLogin} className="login_form">
          <div className="login_form-div-input">
            <img className="login_form-logo" src={emailLogo} />
            <input 
              type="text" 
              placeholder='Usuário'
              className="login_form-input login_form-email" 
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="login_form-div-input">
            <img className="login_form-logo" src={passwordLogo} />
            <input 
              type="text" 
              placeholder='Senha'
              className="login_form-input login_form-password" 
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <div className="login_form-div-option">
            <p className='login_form-option'>Manter Logado</p>
            <p className='login_form-option'>Esqueceu a senha?</p>
          </div>
          <input type="submit" className="login_form-submit" value="Login" />
        </form>
      </div>
    </div>
  )
}

export default Login;
