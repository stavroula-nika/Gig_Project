import Gig from "./components/Gig";

function App() {
  return (
    <>
      <Gig
        name="Fleetwood Mac"
        image="https://yt3.googleusercontent.com/pTa9CSj4p2bCopIiKZDhYV5ABd2YYhtEfh7bAB3FL0G8SfGj6cTUAtdjXdsXpGNOKpHnMv1z2g=s900-c-k-c0x00ffffff-no-rj"
        description="A tribute concert featuring the band's most-loved songs, performed by a live band with a focus on capturing the iconic sound and emotion of the original group's golden era."
        timedate="25/10/2026 20:00"
        location="Royal Albert Hall, Kensington Gore, South Kensington, London, SW7 2AP"
      />
      
      <Gig
        name="The Rolling Stones"
        image="https://hips.hearstapps.com/hmg-prod/images/_the-rolling-stones-london-1963-left-to-right-mick-jagger-charlie-watts-brian-jones-keith-richards-and-bill-wyman-photo-by-terry-oneill_iconic-images_getty-images.jpg?crop=0.8854285352576277xw:1xh;center,top&resize=1200:*"
        description="A legendary rock band performing their greatest hits live in concert."
        timedate="10/11/2026 19:00"
        location="O2 Arena, Peninsula Square, London, SE10 0DX"
      />
    </>
  );
}

export default App;
