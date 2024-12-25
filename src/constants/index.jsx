import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

import domestic1 from "../assets/product-pictures/domestic/KU6-Borewell.webp"
import domestic2 from "../assets/product-pictures/domestic/KUI6.webp"
import domestic3 from "../assets/product-pictures/domestic/Eterna.webp"
import domestic4 from "../assets/product-pictures/domestic/cutter.webp"
import domestic5 from "../assets/product-pictures/domestic/KCIL.webp"

import industrial1 from "../assets/product-pictures/industrial/Process.webp"
import industrial2 from "../assets/product-pictures/industrial/Splitcase.webp"
import industrial3 from "../assets/product-pictures/industrial/Utility.webp"
import industrial4 from "../assets/product-pictures/industrial/Vaccum.webp"

import system1 from "../assets/product-pictures/system/fire_hydrant.webp"
import system2 from "../assets/product-pictures/system/hydro_pneumatic.webp"

export const navItems = [
  { label: "Home", href: "/#" },
  { label: "Products", href: "/products", dropdown: {
      productType: [
        { label: "Industrial Range", href: "/product-details/product-type-industrial" },
        { label: "Domestic Range", href: "#",dropdown:{
          domesticType:[
            {label:"Domestic Submersible",href:"/product-details/product-type-domestic/domestic-submersible"},
            {label:"Domestic Dewatering",href:"/product-details/product-type-domestic/domestic-dewatering"},
            {label:"Domestic Vertical Inline",href:"/product-details/product-type-domestic/domestic-vertical-inline"}
              ]
            } 
          },
        { label: "Systems", href: "/product-details/product-type-systems/1" },
      ],
    }
  },
  { 
    label: "Services", 
    href: "/services", 
    
  },
];
export const products = {
  "product-type-industrial": [
    {
      id: 1,
      title: "Process",
      description: "Description of Product 1A.",
      image: industrial1,
    },
    {
      id: 2,
      title: "Splitcase",
      description: "Description of Product 1B.",
      image: industrial2,
    },
    {
      id: 3,
      title: "Utility",
      description: "Description of Product 1B.",
      image: industrial3,
    },
    {
      id: 4,
      title: "Vaccum",
      description: "Description of Product 1B.",
      image: industrial4,
    },
  ],
  "product-type-domestic/domestic-submersible": [
    {
      id: 1,
      title: "KU6-Borewell Oilfilled Submersible Pumps",
      description: "Description of Product 2A.",
      image: domestic1,
    },
    {
      id: 2,
      title: "Borewell Submersible Pump - KU6i",
      description: "Description of Product 2B.",
      image: domestic2,
    },
  ],
  "product-type-domestic/domestic-dewatering": [
    {
      id: 1,
      title: "Eterna",
      description: "Description of Product 2A.",
      image: domestic3,
    },
    {
      id: 2,
      title: "Cutter",
      description: "Description of Product 2B.",
      image: domestic4,
    },
  ],
  "product-type-domestic/domestic-vertical-inline": [
    {
      id: 1,
      title: "KCIL",
      description: "Description of Product 2A.",
      image: domestic5,
    },
  ],
};
export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features1 = [
  {
    image: domestic1,
    text: "Dewatering /Sump Pumps",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book.",
  },
  {
    image: domestic2,
    text: "Monoblock Pumps",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book.",
  },
  {
    image: domestic3,
    text: "Submersible Pumps",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book.",
 },
 {
  image: domestic4,
  text: "Vertical Inline Pumps",
  description:
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book.",
 }
];

export const features2 =[
  {
    image: industrial1,
    text: "Process Pumps",
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book.",
  },
  {
    image: industrial2,
    text: "Split Case Pumps",
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book.",
  },
  {
    image: industrial3,
    text: "Utility Pumps",
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book.",
  },
  {
    image: industrial4,
    text: "Vaccum Pumps",
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book.",
  },
];
export const features3 =[
  {
    image: system1,
    text: "Fire Hydrant Systems",
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book.",
  },
  {
    image: system2,
    text: "Hydro-Pneumatic Systems",
    description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to  make a type specimen book.",
  },
];
export const checklistItems = [
  {
    title: "Right pump selection.",
    description:
      "Ensure you choose the appropriate pump for your specific application to maximize efficiency and performance.",
  },
  {
    title: "Timely delivery.",
    description:
      "Guarantee that your pump is delivered on time to avoid any disruptions in your operations or projects.",
  },
  {
    title: "Competitive pricing.",
    description:
      "Offer pumps at prices that are competitive in the market, ensuring value for money without compromising on quality.",
  },
  {
    title: "24/7 availability on call.",
    description:
      "Provide round-the-clock customer support to address any issues or queries you might have regarding the pumps.",
  },
  {
    title: "Range of applications.",
    description:
      "Cover a wide range of applications, ensuring the pumps can be used in various industries and for different purposes.",
  },
];


export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];