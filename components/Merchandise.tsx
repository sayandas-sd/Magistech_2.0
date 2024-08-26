
import image1 from "../public/tshirt Background Removed.png";

const WhatsNew = () => (
  <div className="container mx-auto">
    <div className="grid grid-cols-1 mt-10 md:grid-cols-2 ">
        <div className="flex justify-center items-center">
        <img src={image1.src} />
        </div>
    
        <div className="italic poppins-bold flex text-lg ml-4 md:mx-10 md:text-3xl justify-center md:justify-center items-center md:items-center  text-white ">
    T-shirt that is not only fashionable but also a great 
        
        way to connect with like-minded individuals who share 
        your passion for this event.
        <br />
        <br />
        <br />
        Be the volunteer & get this Marchandise.
        </div>
    </div>
  </div>
);

export default WhatsNew;
