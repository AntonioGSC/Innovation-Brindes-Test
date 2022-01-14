import React, {useEffect, useState} from 'react';
import { GET_Products } from '../../APIs/APIs';
import Item from '../Item/Item'

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
