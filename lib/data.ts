export type Project = {
  id: string;
  title: string;
  slug: string;
  client: string;
  location: string;
  year: string;
  description: string;
  category: string;
  industry: string;
  coverImage: string;
  galleryImages: string[];
  services: string[];
  featured: boolean;
};

export const MOCK_PROJECTS: Project[] = [
  {
    id: "1",
    title: "LUX* & Coastal Resort Signage",
    slug: "lux-grand-baie-signage",
    client: "LUX* Resorts & Hotels",
    location: "Grand Baie, Mauritius",
    year: "2023",
    description: "Complete external and internal architectural signage solution for luxury coastal resorts. The project included precision-cut stone wall lettering, illuminated wayfinding, and large-scale architectural monument signage engineered to withstand demanding coastal weather conditions.",
    category: "Signage",
    industry: "Hospitality",
    coverImage: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Cut_Out_Letters/signage-cut-out-letters-005.webp",
    galleryImages: [
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Non_Luminous/signage-non-luminous-005.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-015.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Non_Luminous/signage-non-luminous-008.webp"
    ],
    services: ["Architectural Cut-Out Letters", "Monument Signage", "Wayfinding & Interpretive Totems"],
    featured: true
  },
  {
    id: "2",
    title: "Tribeca Central Retail & Food Court",
    slug: "tribeca-mall-retail",
    client: "Tribeca Central",
    location: "Trianon, Mauritius",
    year: "2024",
    description: "Large-format printing, illuminated overhead food court lightboxes, and custom acrylic fabrication across major retail corridors, delivering maximum brand visibility and seamless visual communication.",
    category: "Printing",
    industry: "Retail",
    coverImage: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-011.webp",
    galleryImages: [
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Booths/events-booth-004.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/03_DISPLAYS_FURNITURE/Reception_Desks/display-reception-desk-004.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-014.webp"
    ],
    services: ["Illuminated Food Court Lightboxes", "Experiential Retail Activations", "3D Channel Letters"],
    featured: true
  },
  {
    id: "3",
    title: "Rogers Capital & Corporate HQ",
    slug: "mcb-corporate-hq",
    client: "Rogers Capital",
    location: "Port Louis & Ebene, Mauritius",
    year: "2023",
    description: "Large-scale building facade architectural cladding, high-level corporate rooftop signage, and interior executive reception 3D lettering for corporate headquarters.",
    category: "Displays",
    industry: "Corporate",
    coverImage: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Non_Luminous/signage-non-luminous-029.webp",
    galleryImages: [
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-008.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Cut_Out_Letters/signage-cut-out-letters-010.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Wall_Cladding_Sticker_Application/large-format-wall-cladding-008.webp"
    ],
    services: ["Building Facade Cladding", "Corporate 3D Letters", "Heritage Museum Wall Cladding"],
    featured: true
  },
  {
    id: "4",
    title: "Indian Ocean Summit & Conferences",
    slug: "tech-conference-exhibition",
    client: "Indian Ocean Commission",
    location: "SVICC, Mauritius",
    year: "2024",
    description: "End-to-end design, fabrication, and installation of major regional conference stage backdrops, dual pull-up banner totems, registration counters, and speaker media walls.",
    category: "Events",
    industry: "Events",
    coverImage: "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Backdrops/events-backdrop-006.webp",
    galleryImages: [
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Backdrops/events-backdrop-001.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Roll_Up_Banners/large-format-roll-up-002.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Backdrops/events-backdrop-012.webp"
    ],
    services: ["Stage Media Backdrops", "Conference Roll-Up Totems", "Registration Counters"],
    featured: true
  },
  {
    id: "5",
    title: "Automotive Showroom Portals & Canopy",
    slug: "automotive-showroom-branding",
    client: "GAC & Hyundai Mauritius",
    location: "Pailles, Mauritius",
    year: "2024",
    description: "High-impact automotive showroom entrance portals, brushed metal 3D canopy logos, and illuminated freestanding showroom floor lettering for premier automotive dealerships.",
    category: "Signage",
    industry: "Retail",
    coverImage: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-017.webp",
    galleryImages: [
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-023.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-026.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-027.webp"
    ],
    services: ["Illuminated Showroom Portals", "3D Metal Canopy Logos", "Floor Luminous Letters"],
    featured: false
  },
  {
    id: "6",
    title: "UTMB Trail Running Finish Line Gantry",
    slug: "utmb-sports-events",
    client: "UTMB Mauritius by HOKA",
    location: "Bel Ombre, Mauritius",
    year: "2024",
    description: "Massive outdoor illuminated trail running finish line gantry structure with integrated track spotlights, branding towers, and sports event perimeter banners.",
    category: "Events",
    industry: "Events",
    coverImage: "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Backdrops/events-backdrop-014.webp",
    galleryImages: [
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Backdrops/events-backdrop-003.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/3D_Letters_PVC_Acrylic/events-3d-letters-003.webp"
    ],
    services: ["Illuminated Finish Line Gantry", "Golf & Sports Branding", "3D Event Letters"],
    featured: false
  },
  {
    id: "7",
    title: "Bentley Luxury Acrylic Fabrication",
    slug: "bentley-luxury-fabrication",
    client: "Bentley Motors",
    location: "Mauritius",
    year: "2023",
    description: "Bespoke clear acrylic furniture with laser-engraved luxury branding, CNC-machined acrylic display lettering, and illuminated bottle glorifiers crafted to the highest luxury standards.",
    category: "Displays",
    industry: "Corporate",
    coverImage: "/images/AGIGRAPHIX_WEBSITE_ASSETS/03_DISPLAYS_FURNITURE/Acrylic_Coffee_Tables/display-acrylic-coffee-table-001.webp",
    galleryImages: [
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Cut_Out_Letters/signage-cut-out-letters-009.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/03_DISPLAYS_FURNITURE/Price_Holders/display-price-holder-003.webp"
    ],
    services: ["Acrylic Coffee Tables", "Laser & CNC Acrylic Cutting", "Illuminated POS Displays"],
    featured: false
  },
  {
    id: "8",
    title: "Healthcare Specialized Wall Murals",
    slug: "healthcare-interior-cladding",
    client: "Clinique & Imaging Centers",
    location: "Curepipe, Mauritius",
    year: "2023",
    description: "High-resolution architectural vinyl wall cladding and specialized panoramic landscape murals designed for medical imaging environments and hospitality suites.",
    category: "Printing",
    industry: "Hospitality",
    coverImage: "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Wall_Cladding_Sticker_Application/large-format-wall-cladding-009.webp",
    galleryImages: [
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Wall_Cladding_Sticker_Application/large-format-wall-cladding-001.webp",
      "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Wall_Cladding_Sticker_Application/large-format-wall-cladding-003.webp"
    ],
    services: ["Large Format Wall Cladding", "Interior Murals", "Window & Door Vinyls"],
    featured: false
  }
];

export const MOCK_SERVICES = [
  {
    id: "1",
    name: "Signage",
    slug: "signage",
    description: "Make your brand impossible to miss with bespoke outdoor and indoor signage solutions.",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-015.webp",
    capabilities: [
      "Luminous signage",
      "Non-luminous signage",
      "3D letters",
      "Cut-out letters",
      "PVC & Acrylic letters",
      "Corporate signage",
      "Wayfinding"
    ]
  },
  {
    id: "2",
    name: "Large Format Printing",
    slug: "large-format-printing",
    description: "High-resolution, large-scale prints that capture attention from a distance.",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Wall_Cladding_Sticker_Application/large-format-wall-cladding-005.webp",
    capabilities: [
      "Billboards",
      "Vehicle wrapping",
      "Window graphics",
      "Wall murals",
      "Banners",
      "Posters",
      "Canvas prints"
    ]
  },
  {
    id: "3",
    name: "Displays & Fabrication",
    slug: "displays-fabrication",
    description: "Custom-built point-of-sale displays and architectural elements crafted with precision.",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/03_DISPLAYS_FURNITURE/Reception_Desks/display-reception-desk-002.webp",
    capabilities: [
      "POS displays",
      "Acrylic fabrication",
      "CNC routing",
      "Laser cutting",
      "Custom metalwork",
      "Retail stands",
      "Trophy & awards"
    ]
  },
  {
    id: "4",
    name: "Events & Exhibitions",
    slug: "events-exhibitions",
    description: "Turn any empty space into a branded experience for trade shows, launches, and events.",
    image: "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Booths/events-booth-004.webp",
    capabilities: [
      "Modular exhibition stands",
      "Custom booths",
      "Backdrops",
      "Event signage",
      "Branded counters",
      "Roll-up banners",
      "Stage graphics"
    ]
  }
];
