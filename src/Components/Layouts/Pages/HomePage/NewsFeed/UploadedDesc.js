import React from "react";

const UploadedDesc = ({description, hashtags}) => (
    <div className={'videoDescription'}>
        <span>{description}<br/></span>
        {hashtags && hashtags.map((hashtag) => (
            <span className={'hashtag'}>#{hashtag.hashname} </span>
        ))
        }
    </div>
);

export default UploadedDesc;