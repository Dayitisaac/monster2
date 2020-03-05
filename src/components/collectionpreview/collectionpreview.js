import React from 'react'
import CollectionItem from '../collection-item/collection-item'
import './collectionpreview.styles.scss'

const CollectionPreview =({title,items}) => 
     (
        <div className ='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
                {
                  items.filter((item,idx) => idx < 4).map
                  (({id , ...otherPropsItems}) =>(

                      <CollectionItem key ={id} {...otherPropsItems}/>
                  )) 
                }

            </div>
            
        </div>
    )

export default CollectionPreview