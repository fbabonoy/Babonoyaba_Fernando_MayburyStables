export interface Service {
    img: string;
    title: string;
    description: string;
}

export interface FAQ {
    question: string;
    answer: string;
}

export interface Review {
    name: string;
    rating: number;
    comment: string;
}

export interface ContactInfo {
    title: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    hours: {
        weekdays: string;
        weekends: string
    };
    socialMedia: {
        facebook?: string;
        instagram?: string;
        twitter?: string;
    };
    mapEmbedUrl: string;
}

export interface StableData {
    aboutUs: {
        title: string;
        description: string;
        sections: Service[];
    };
    services: {
        title: string;
        description: string;
        sections: Service[];
    };
    faq: {
        title: string;
        questions: FAQ[];
    };
    reviews: {
        title: string;
        feedback: Review[];
    };
    contactUs: ContactInfo;
}


const stableData: StableData = {
    aboutUs: {
        title: "About Us",
        description: "Our stable is dedicated to providing a safe and enjoyable equestrian experience for riders of all levels. Whether you're a beginner or an experienced rider, we welcome you to be part of our community and share in the joy of horseback riding.",
        sections: [
            {
                img: "https://example.com/meet-the-team.jpg", // Replace with an actual image URL
                title: "Meet the Team",
                description: "Get to know our experienced trainers and staff who are passionate about horses and dedicated to your riding success."
            },
            {
                img: "https://example.com/meet-the-herd.jpg", // Replace with an actual image URL
                title: "Meet the Herd",
                description: "Our horses are the heart of our stable. Learn more about each horse’s personality, breed, and riding style."
            }
        ]
    },
    services: {
        title: "Services",
        description: "We offer a variety of horseback riding experiences, from lessons to trail rides, for all skill levels.",
        sections: [
            {
                img: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/475184505_122205427514226691_7639935419546751986_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_ohc=8z3yXdxvxpYQ7kNvgGONbwg&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=A7hLfEYJt5XVVoewLTfakoc&oh=00_AYEKJ4Yn-9XVU8h83BXiIIbea-2SO8PdTIeKAFb-YWbyNA&oe=67D7CDE5", // Replace with actual image URL
                title: "Camps",
                description: "Join our seasonal horseback riding camps for an unforgettable adventure."
            },
            {
                img: "https://static.wixstatic.com/media/c66207371c96b7369ef3b2d816105e4f.jpg/v1/fit/w_1417,h_945,al_c,q_85/c66207371c96b7369ef3b2d816105e4f.jpg",
                title: "Pony Rides",
                description: "Perfect for young riders to experience their first horseback adventure."
            },
            {
                img: "https://scontent-atl3-3.xx.fbcdn.net/v/t39.30808-6/475178476_122204862242226691_3917098183587472004_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=109&ccb=1-7&_nc_sid=833d8c&_nc_ohc=GybjnjNS-GAQ7kNvgG6xJqM&_nc_zt=23&_nc_ht=scontent-atl3-3.xx&_nc_gid=AHnxAIhDB6zHpApGk1cdcz3&oh=00_AYEQSATBGts6Prr-W0y1AeKOrmaHk5ifF99XyvxrECsh1g&oe=67D7CA73",
                title: "Trail Rides",
                description: "Enjoy scenic horseback rides through beautiful landscapes."
            },
            {
                img: "https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/475008787_122204912084226691_8482655025601490622_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=TCbHzIVusicQ7kNvgHSGFQg&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&_nc_gid=ACQM81QdFuzcPAr-X5Cvigl&oh=00_AYHeat5j81_d6iTUPxhn7GwGmSUW0awdo9E9as81E3I98g&oe=67D79F87",
                title: "Riding Lessons",
                description: "Improve your riding skills with our experienced trainers."
            }
        ]
    },
    faq: {
        title: "Frequently Asked Questions",
        questions: [
            {
                question: "What should I wear for a riding lesson?",
                answer: "We recommend wearing long pants, a fitted shirt, and closed-toe shoes with a small heel. Helmets are required and provided if you don't have your own."
            },
            {
                question: "Do I need prior experience to take a lesson?",
                answer: "No experience is necessary! Our lessons are tailored to beginners and experienced riders alike."
            },
            {
                question: "Are there weight or age limits for riders?",
                answer: "For safety reasons, we have a weight limit of 250 lbs and a minimum riding age of 4 years old."
            },
            {
                question: "Do I need to book in advance?",
                answer: "Yes, we recommend booking at least 48 hours in advance to ensure availability."
            }
        ]
    },
    reviews: {
        title: "Customer Reviews",
        feedback: [
            {
                name: "Sarah L.",
                rating: 5,
                comment: "An amazing experience! The staff was friendly, and the horses were well-trained. Highly recommend!"
            },
            {
                name: "James W.",
                rating: 4,
                comment: "Beautiful trails and a great learning environment. My kids loved the pony rides!"
            },
            {
                name: "Emily R.",
                rating: 5,
                comment: "A fantastic place for both beginners and experienced riders. I’ll definitely be back!"
            }
        ]
    },
    contactUs: {
        title: "Contact Us",
        description: "Have questions or want to book a ride? Get in touch with us!",
        address: "123 Stable Road, Horseville, CO 80123",
        phone: "(123) 456-7890",
        email: "info@horsestable.com",
        hours: {
            weekdays: "9:00 AM - 6:00 PM",
            weekends: "8:00 AM - 7:00 PM"
        },
        socialMedia: {
            facebook: "https://facebook.com/horsestable",
            instagram: "https://instagram.com/horsestable",
            twitter: "https://twitter.com/horsestable"
        },
        mapEmbedUrl: "https://www.google.com/maps/embed?...your-google-map-link..."
    }
};


export default stableData