// 1-2. Create a component called Gig, which contains information about a gig on the website. It should contain:

// A h3 (heading) element listing the name of the band
// A img (image) element for an image of the band, using the src attribute to link to an image.
// A p (paragraph) element containing a description of the event
// A p element containing the time and date of the event
// A p element containing the location of the event

//4. Refactor your Gig component, so that instead of hard-coding the event details, they are passed in as props from the App component.

const Gig = (props) => {
    return (
        <div className="Gig">
            <h3>{props.name}</h3>
            <img 
                src={props.image} 
                alt={`${props.name} performing live`} 
            />
            <p id="Description">{props.description}</p>
            <p id="TimeDate">{props.timedate}</p>
            <p id="Location">{props.location}</p>
        </div>
    );
};

export default Gig;