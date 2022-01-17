import React from 'react';

import './Item.css'

function Item( {item } ) {
  return (
    <div className='item_div'>
      <div className="item_header">
        <p className="item_header-name">{item.nome}</p>
        <p className="item_header-cod">{item.codigo}</p>
      </div>
      <div className="item_main">
        <img src={item.imagem} alt="Imagem do Produto" className="item_main-image" />
        <p className="item_main-description">{item.descricao}</p>
        <div className="item_main-price-div">
          <p className="item_main-price-intro">a partir de</p>
          <p className="item_main-price">R$ {parseFloat(item.preco).toFixed(2).replace('.',',')}</p>
          <p className="item_main-price-footer">gerado pela melhor oferta</p>
        </div>
      </div>
      <div className="item_footer">
        <button className='item_footer-button'>CONFIRA</button>
      </div>
    </div>
  )
}

export default Item
