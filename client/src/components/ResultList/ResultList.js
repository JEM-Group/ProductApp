import React from "react";
import './ResultList.css';

const ResultList = props => (
  <ul className="list-group">
    {props.results.map(result => (
      <li className="list-group-item" key={result.id.videoId}>
        <p>{result.snippet.title}</p>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={"https://www.youtube.com/embed/" + result.id.videoId} allowFullScreen></iframe>
        </div>
      </li>
    ))}
  </ul>
);

export default ResultList;
