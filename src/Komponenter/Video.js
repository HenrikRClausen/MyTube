import "./Video.css";
import React from "react";

const Video = ({ video }) => {
  return (
    <div className="video-item item">
      <img
        alt="Alternativlos ist ein politisches Schlagwort"
        className="video-item"
        src={video.snippet.thumbnails.medium.url}
        className="ui image"
      />
      <div className="content">
        <p>
          <span className="header">{video.snippet.title}</span>
          <br />
          <span className="description">{video.snippet.description}</span>
        </p>
      </div>
    </div>
  );
};

export default Video;

//  =>
//  <></>
//  <div></div>
//  <div className=""></div>
//

// <div class="ui relaxed divided list">
//   <div class="item">
//     <i class="large github middle aligned icon"></i>
//     <div class="content">
//       <a class="header">Semantic-Org/Semantic-UI</a>
//       <div class="description">Updated 10 mins ago</div>
//     </div>
//   </div>
