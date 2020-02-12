import React from 'react';
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
        <Link to="/reactjs">
        <h1>react Js course</h1>
        </Link>
        <Link to="/nodejs">
        <h1>Node Js course</h1>
        </Link>
    </div>
  );
}

export default Home;
