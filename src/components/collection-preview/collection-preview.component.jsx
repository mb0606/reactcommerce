import React from "react"

import "./collection-preview.styles.scss"

import CollectionItem from "../collection-item/collection-item.components"

const CollectionPreview = ({title, items}) => { 

return (
    <div className="collection-preview">
        <h1 className="title">{title.toUpperCase()}</h1>
        <div className="preview">
            {items
                .filter((item, idex)=> idex < 4)
                .map(({id, ...itemProps})=> 
                <CollectionItem key={id} {...itemProps}>{itemProps.name}</CollectionItem>
                )}
        </div>
    </div>
        )
    
}

export default CollectionPreview