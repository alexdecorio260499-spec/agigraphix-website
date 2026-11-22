export interface ServiceGalleryImage {
  url: string;
  title: string;
  category: string;
}

export const SERVICE_GALLERIES: Record<string, ServiceGalleryImage[]> = {
  signage: [
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Cut_Out_Letters/signage-cut-out-letters-015.webp",
      title: "'ONE' Red 3D Dimensional Letters on Concrete",
      category: "Architectural Signage",
    },
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-005.webp",
      title: "'HAMC' 3D Illuminated Reception Lobby Signage",
      category: "Luminous Signage",
    },
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Cut_Out_Letters/signage-cut-out-letters-005.webp",
      title: "'Alalila' Natural Stone Wall Dimensional Signage",
      category: "Hospitality Signage",
    },
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Cut_Out_Letters/signage-cut-out-letters-011.webp",
      title: "'TELESIO' Executive Boardroom 3D Metal Signage",
      category: "Corporate Signage",
    },
  ],
  "large-format-printing": [
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Wall_Cladding_Sticker_Application/large-format-wall-cladding-010.webp",
      title: "Panoramic Landscape Wall Mural Cladding",
      category: "Wall Cladding",
    },
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Frosted_Sticker_Glass/large-format-frosted-glass-002.webp",
      title: "'CHANEL' Storefront Frosted Window Branding",
      category: "Frosted Glass",
    },
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Wall_Cladding_Sticker_Application/large-format-wall-cladding-001.webp",
      title: "Architectural Heritage Photo Collage Mural",
      category: "Wall Murals",
    },
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/02_LARGE_FORMAT_PRINTING/Roll_Up_Banners/large-format-roll-up-001.webp",
      title: "Porsche 'Cayenne' Double Pull-Up Totem Banners",
      category: "Roll-Up Banners",
    },
  ],
  "displays-fabrication": [
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/03_DISPLAYS_FURNITURE/Reception_Desks/display-reception-desk-004.webp",
      title: "'MITSUBISHI MOTORS' Automotive Stage Podium & Desk",
      category: "Custom Furniture",
    },
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/03_DISPLAYS_FURNITURE/Reception_Desks/display-reception-desk-003.webp",
      title: "'Sanex' Illuminated Curved Consultation Counter",
      category: "Illuminated Displays",
    },
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/03_DISPLAYS_FURNITURE/Acrylic_Coffee_Tables/display-acrylic-coffee-table-001.webp",
      title: "'BENTLEY' Precision Engraved Acrylic Table",
      category: "Acrylic Fabrication",
    },
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/03_DISPLAYS_FURNITURE/Price_Holders/display-price-holder-002.webp",
      title: "'YSL Libre' Luxury Retail Mall Podium Display",
      category: "Retail POS Displays",
    },
  ],
  events: [
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Booths/events-booth-008.webp",
      title: "'Sanex' Experiential Mall Activation Booth",
      category: "Exhibition Booths",
    },
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/3D_Letters_PVC_Acrylic/events-3d-letters-002.webp",
      title: "Chanel Monumental 3D Illuminated 'CC' Sculpture",
      category: "3D Event Sculptures",
    },
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Backdrops/events-backdrop-001.webp",
      title: "'AFRICA RE@50' International Conference Media Backdrop",
      category: "Stage Backdrops",
    },
    {
      url: "/images/AGIGRAPHIX_WEBSITE_ASSETS/04_EVENTS_EXHIBITIONS/Booths/events-booth-002.webp",
      title: "'Bagatelle Mall 15 ans' Retail Activation Structure",
      category: "Event Architecture",
    },
  ],
};

// Aliases
SERVICE_GALLERIES["events-exhibitions"] = SERVICE_GALLERIES["events"];

export function getServiceGallery(slug: string): ServiceGalleryImage[] {
  return SERVICE_GALLERIES[slug] || SERVICE_GALLERIES["signage"];
}
