import React, { Component } from 'react'
import SHOP_DATA from './data.js'
import './shop.styles.scss'
import CollectionPreview from '../../components/collectionpreview/collectionpreview'

 class ShopPage extends Component {
    constructor(){
        super();
        this.state ={
          collections : SHOP_DATA
        }
    }


    render() {
        const {collections} = this.state
        return (
            <div className='ShopPage'>
                {
                    collections.map(({id, ...otherPropsItems}) => (
                        <CollectionPreview key={id} {...otherPropsItems}/>
                    ))

                }

            </div>
        )
    }
}
export default ShopPage