export interface RideInfo {
    banner: string;
    logo: string;
    background: string;
    buttonData: ButtonData[];
}

export interface ButtonData {
    title: string;
    icon: string;
    description: string
}

const rideInfo: RideInfo = {
    banner: "https://static.wixstatic.com/media/08ba9f223a3e4b7f9f9dc727d1786d40.jpg/v1/fill/w_1960,h_880,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/08ba9f223a3e4b7f9f9dc727d1786d40.jpg",
    logo: "stable-logo.png",
    background: "horse-background.jpg",
    buttonData: [
      { 
        title: "Please Be Kind", 
        icon: "/images/kindness.png", 
        description: "Please treat the horses and guides with kindness and respect during your ride. Horses are xxx" 
      },
      { 
        title: "Reserve Your Spot", 
        icon: "/images/appointment.png", 
        description: "Appointments are recommended, especially in summer. Walk-ins are welcome, but availability is not guaranteed without a reservation." 
      },
      { 
        title: "Safety First", 
        icon: "/images/safety.png", 
        description: "We prioritize safety. Helmets are strongly encouraged. We advise you bring your own fitted helmet, or if needed, we have ASTM/SEI certified helmets available in various sizes. " 
      },
      { 
        title: "Beginners Welcomed", 
        icon: "/images/beginnerIcon.png", 
        description: "While all of our horses are gentle and experienced with riders, we make sure to match our riders with the right horse based on your riding experience." 
      }
    ]
  };
  
  export default rideInfo