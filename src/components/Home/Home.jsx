import React, {useEffect, useState} from 'react';
import { GET_Products } from '../../APIs/APIs';
import Item from '../Item/Item';

import Logo from '../../assets/images/logo.png';
import Email from '../../assets/images/mail-logo.png';
import Phone from '../../assets/images/cellphone-logo.png';
import AnaCarol from '../../assets/images/Ana-Carol.png';

import './Home.css';

function Home() {

  const [token, setToken] = useState(localStorage.getItem('token'));
  const [itemList, setItemList] = useState();

  useEffect(() => {
    if(!token) {
      window.location.replace('/login')
    }

    const { url, options } = GET_Products(token);
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        // return this.setState({ users: data });
        setItemList(data);
      });
  }, [])

  return (
    <div className='home_div'>
      <header className="home_header">
        <div className="home_header-container">
          <div className="home_header-logo-div">
            <img src={ Logo } alt="" className="home_header-logo" />
          </div>
          <div className="home_header-info-div">
            <img src={ Email } alt="" className="home_header-function" />
            <img src={ Phone } alt="" className="home_header-function" />
            <img src={ AnaCarol } alt="" className="home_header-image-user" />
            <div className="home_header-info-desc">
              <p className="home_header-info home_header-name">Ana Carol Machado</p>
              <p className="home_header-info home_header-date">Segunda, 17/01/2022</p>
            </div>
          </div>
        </div>
      </header>
      <main className="home_main">
        {
          itemList ? itemList.map((item) => {
            return <Item key={item.codigo} item={item}/>
          }) : <p className='home_loading'>Carregando...</p>
        }
      </main>
    </div>
  )
}

export default Home;
