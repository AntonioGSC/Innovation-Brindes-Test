import React, {useEffect, useState} from 'react';
import { GET_Products } from '../../APIs/APIs';

import './Home.css';

function Home() {

  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if(!token) {
      window.location.replace('/login')
    }

    const { url, options } = GET_Products(token);
    fetch(url, options)
      .then((response) => response.json())
      .then((data) => {
        // return this.setState({ users: data });
        console.log(data)
      });

    // window.onbeforeunload = function() {
    //   localStorage.clear();
    // }
  }, [])

  return (
    <div>
      TesteHome
    </div>
  )
}

export default Home;
