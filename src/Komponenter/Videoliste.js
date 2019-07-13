import React from "react";
import Video from "./Video";

const Videoliste = ({ liste }) => {
  const renderetListe = liste.map(video => {
    return <Video video={video} />;
  });

  return <div className="ui relaxed divided list">{renderetListe}</div>;
};

export default Videoliste;

//  =>
//  <></>
//  <div></div>
//  <div className=""></div>
//  <span>React App</span>
