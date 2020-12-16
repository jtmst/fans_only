import React, { useState, useEffect } from 'react';
import HomeIcon from '@material-ui/icons/Home';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

function Sidebar(props) {
  return (
    <div>
      <div id="nav">
        <p className="nav-elements">{<HomeIcon />} Home</p>
        <p className="nav-elements">{<BookmarksIcon />} Saved</p>
        <p className="nav-elements">{<LocalOfferIcon />} Tags</p>
      </div>
      <div className="my-tags">
        <h3 id="tag-header">My Tags</h3>
        <p className="tag">#fan</p>
        <p className="tag">#fans</p>
        <p className="tag">#fanmaintenance</p>
        <p className="tag">#fanlifestyle</p>
        <p className="tag">#fannsfw</p>
        <p className="tag">#fansonly</p>
        <p className="tag">#fancareers</p>
        <p className="tag">#bestof</p>
        <p className="tag">#topposts</p>
        <p className="tag">#onlyfans</p>
        <p className="tag">#productivity</p>
        <p className="tag">#fansoffans</p>
        <p className="tag">#thisweek</p>
      </div>
    </div>
  );
}

export default Sidebar;
