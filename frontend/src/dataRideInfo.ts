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
        icon: "🤗", 
        description: "Treat the horses and guides with kindness and respect during your ride." 
      },
      { 
        title: "Tip Your Guide", 
        icon: "💰", 
        description: "Our guides work hard to ensure your safety and enjoyment—tips are greatly appreciated!" 
      },
      { 
        title: "Safety", 
        icon: "⚠️", 
        description: "We prioritize safety—helmets are recommended, and our guides are here to help." 
      },
      { 
        title: "Beginners Welcomed", 
        icon: "🐴", 
        description: "No experience? No problem! Our horses are gentle, and we’ll match you with the right one." 
      }
    ]
  };
  
  export default rideInfo