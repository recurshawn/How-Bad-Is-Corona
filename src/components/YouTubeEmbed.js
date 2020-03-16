import React from 'react';
import YouTube from 'react-youtube';

class YouTubeEmbed extends React.Component {
    _onReady = (event) => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                //autoplay: 1
            }
        };
        return (
            <div className="block fixed">
                <p>I recommend watching this video by 3blue1brown, especially if you want to gain a better intuition for the math behind epidemics.</p>
                <div className="iframe-container">
                    <YouTube
                    videoId="Kas0tIxDvrg"
                    opts={opts}
                    onReady={this._onReady}
                    />
                </div>
                
            </div>
        );
    }
    
}



export default YouTubeEmbed;