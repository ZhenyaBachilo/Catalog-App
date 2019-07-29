import React from 'react';
import { CatalogListItem } from './CatalogListItem';
import { Products } from './Products';


export function CatalogList({inputText}) {

    const filteredProducts = Products.filter(item => 
        item.name.toLowerCase().includes(inputText.trim().toLowerCase()));

    return (
        <div className='catalogContent'>
            <ul className='catalogList'>
              {filteredProducts.map(item=> <CatalogListItem item={item} key={item.id}/>)}
            </ul>
        </div>
    )
}