import React from 'react';

export default class Header extends React.Component {
  render() {
	    return (
  <header>
    <h1 className="col">NewsApp!</h1>
    <a href="">Logout</a>
    <div>Select news service
					<select>
  <option value="">Espn</option>
					</select>
    </div>
    <form>Sort By:
	      			<label>
  <input type="radio" value="top" />
						Top
					</label>
      <label>
        <input type="radio" value="latest" />
						Latest
					</label>
      <label>
        <input type="radio" value="popular" />
						Popular
					</label>
    </form>
  </header>
	    );
  }
}

