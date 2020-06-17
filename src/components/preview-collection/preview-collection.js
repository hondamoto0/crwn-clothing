import React from 'react';
import './preview-collection.styles.scss';
import CollectionItem from '../collection-item/collection-item';
const CollectionPreview = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 class='title'>{title.toUpperCase()}</h1>
        <div class='preview'>
        {
            items
            .filter((item,idx) => idx < 4)
            .map(({id,...otherCollectionProps}) => (
                <CollectionItem key={id} {...otherCollectionProps}/>
            ))
        }
        </div>
    </div>
)
export default CollectionPreview;