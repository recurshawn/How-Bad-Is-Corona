import React from 'react';

const YouTubeEmbed = () => {
    return (
        <div className="block fixed">
            <p>I recommend watching this video by 3blue1brown, especially if you want to gain a better intuition for the math behind epidemics.</p>
            <div className="iframe-container">
            <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Kas0tIxDvrg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
    );
}

export default YouTubeEmbed;