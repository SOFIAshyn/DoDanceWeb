import React from "react";

const UploadedDesc = ({description, hashtags}) => (
    <div>
        <span>{description}</span>
        {hashtags && hashtags.map((hashtag) => (
            <span>#{hashtag}</span>
        ))
        }
    </div>
);

export default UploadedDesc;