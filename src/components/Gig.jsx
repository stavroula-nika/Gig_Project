//1-2. Create a component called Gig, which contains information about a gig on the website. It should contain:

//A h3 (heading) element listing the name of the band
//A img (image) element for an image of the band, using the src attribute to link to an image.
//A p (paragraph) element containing a description of the event
//A p element containing the time and date of the event
//A p element containing the location of the event


import React from "react";

const Gig = () => {
    return (
        <div className="Gig">
            <h3 className="gig-title">Fleetwood Mac</h3>
            <img 
                className="gig-image"
                src="https://yt3.googleusercontent.com/pTa9CSj4p2bCopIiKZDhYV5ABd2YYhtEfh7bAB3FL0G8SfGj6cTUAtdjXdsXpGNOKpHnMv1z2g=s900-c-k-c0x00ffffff-no-rj" 
                alt="Fleetwood Mac performing live" 
            />
            <p className="gig-description" id="Description">A tribute concert featuring the band's most-loved songs, performed by a live band with a focus on capturing the iconic sound and emotion of the original group's golden era.</p>
            <p className="gig-time-date" id="TimeDate">20:00 25/10/2026</p>
            <p className="gig-location" id="Location">Royal Albert Hall, Kensington Gore, South Kensington, London, SW7 2AP</p>
        </div>
    );
};

export default Gig;
