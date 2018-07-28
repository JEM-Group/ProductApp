import React from "react";

const ResultList = props => (
  <ul className="list-group">
    {props.results.map(result => (
      <li className="list-group-item" key={result.id}>
        <a href={"https://www.youtube.com/watch?v=" + result.id.videoId}>
	        <img
	          alt={result.snippet.title}
	          className="img-fluid"
	          src = {result.snippet.thumbnails.high.url}
	          // getting youtube videoID
	          // src={result.id[videoId]}
	        />
	      </a>
      </li>
    ))}
  </ul>
);

export default ResultList;
