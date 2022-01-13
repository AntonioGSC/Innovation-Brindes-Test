import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PageLogin from '../pages/Login/PageLogin';
import PageHome from '../pages/Home/PageHome';

export class PageRoutes extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<PageLogin/>} />
            <Route exact path="/" element={<PageHome/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default PageRoutes;