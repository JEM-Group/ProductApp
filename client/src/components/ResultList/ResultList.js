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

        {/*<iframe width="420" height="315"
        src={"https://www.youtube.com/embed/" + result.id.videoId}>
        </iframe>*/}
        {/*<a href={"https://www.youtube.com/watch?v=" + result.id.videoId}>
	        <img
	          alt={result.snippet.title}
	          className="img-fluid"
	          src = {result.snippet.thumbnails.high.url}
	        />
	      </a>*/}
      </li>
    ))}
  </ul>
);

export default ResultList;
