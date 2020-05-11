import React from "react";

const UserUploadsData = ({description, hashtags}) => (
    <div>
        <span>{description}</span>
        {hashtags && hashtags.map((hashtag) => (
            <span>#{hashtag}</span>
        ))
        }
    </div>
);

export default UserUploadsData;