import React from 'react';

const ImageList = props => {
    const images = props.images.map((({ description, alt_description, id, urls }) => {
        return <img all={description} alt={alt_description} key={id} src={urls.regular}/>
    }));

    return <div>{images}</div>
};

export default ImageList;