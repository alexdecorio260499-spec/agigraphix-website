import { MOCK_SERVICES } from "./data";
import { SERVICE_PRODUCTS, ServiceProduct } from "./service-products";
import fs from "fs";
import path from "path";

export interface CapabilityInfo {
  name: string;
  slug: string;
  serviceSlug: string;
  serviceName: string;
  headline: string;
  description: string;
  features: string[];
  materials: string[];
  aliases?: string[];
}

export interface CapabilityProjectImage {
  id: string;
  title: string;
  image: string;
  category: string;
  serviceSlug: string;
}

// Convert capability display name to URL slug
export function capabilityNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// Normalize incoming slug (handling aliases and 'and' variants)
export function normalizeCapabilitySlug(slug: string): string {
  const s = slug.toLowerCase().trim();
  if (s === "pvc-acrylic-letters" || s === "pvc-and-acrylic-letters") return "pvc-and-acrylic-letters";
  if (s === "trophy-awards" || s === "trophy-and-awards") return "trophy-and-awards";
  if (s === "3d-letters" || s === "3d-event-letters") return "3d-letters";
  return s;
}

// Master Capability Definitions across all 4 services
export const CAPABILITIES_DATA: Record<string, CapabilityInfo> = {
  // 1. SIGNAGE CAPABILITIES
  "luminous-signage": {
    name: "Luminous signage",
    slug: "luminous-signage",
    serviceSlug: "signage",
    serviceName: "Signage",
    headline: "Illuminated Channel Letters & Lightbox Systems",
    description: "Engineered LED lightbox signage, backlit 3D letters, halo-illuminated logos, and energy-efficient night-visibility displays built for maximum brand presence across Mauritius.",
    features: [
      "High-grade IP65 weatherproof LEDs",
      "Energy-efficient low-voltage MeanWell drivers",
      "Opal cast acrylic diffusion faces",
      "Precision marine-grade aluminum casing"
    ],
    materials: ["Cast Acrylic", "Sheet Aluminum", "MeanWell Drivers", "Samsung LED Modules"]
  },
  "non-luminous-signage": {
    name: "Non-luminous signage",
    slug: "non-luminous-signage",
    serviceSlug: "signage",
    serviceName: "Signage",
    headline: "Architectural & Exterior Non-Illuminated Signage",
    description: "Durable exterior monument signs, building fascia panels, aluminum composite totems, and directional signboards engineered for sun, salt, and tropical weather resistance.",
    features: [
      "Alpolic / Dibond aluminum composite substrate",
      "UV-cured protective coating & anti-fade pigments",
      "Concealed fixings & robust structural framework",
      "Custom powder-coated architectural finishes"
    ],
    materials: ["Aluminum Composite Panel (ACP)", "Marine Grade Stainless Steel", "Extruded Aluminum Profiles", "Automotive 2K Paint"]
  },
  "3d-letters": {
    name: "3D letters",
    slug: "3d-letters",
    serviceSlug: "signage",
    serviceName: "Signage",
    headline: "Dimensional Channel & Architectural Lettering",
    description: "High-impact dimensional letters manufactured from acrylic, stainless steel, aluminum, and PVC. Available in halo-lit, face-lit, edge-lit, or solid architectural finishes.",
    features: [
      "CNC precision cutting with micro-millimeter tolerance",
      "Depth profiles ranging from 20mm up to 150mm",
      "Seamless folded edge fabrication",
      "Flush wall or floating standoff pin mounting"
    ],
    materials: ["Cast Acrylic (Perspex)", "Marine Grade Stainless Steel 316", "High-Density Foam PVC", "Solid Aluminum Plate"],
    aliases: ["3d-event-letters"]
  },
  "cut-out-letters": {
    name: "Cut-out letters",
    slug: "cut-out-letters",
    serviceSlug: "signage",
    serviceName: "Signage",
    headline: "Precision CNC & Laser Cut-Out Lettering",
    description: "Crisp, flat-cut and relief lettering cut to micro-millimeter precision using our high-end CNC routing and industrial laser systems for executive walls, facades, and retail.",
    features: [
      "Direct CAD-to-cut digital precision",
      "Diamond flame-polished edges",
      "Stainless steel standoff pins & concealed templates",
      "Engineered for both interior reception and exterior facades"
    ],
    materials: ["Cast Acrylic 3mm–20mm", "Forex Rigid PVC Board", "Dibond ACM", "Brushed Brass & Aluminum"]
  },
  "pvc-and-acrylic-letters": {
    name: "PVC & Acrylic letters",
    slug: "pvc-and-acrylic-letters",
    serviceSlug: "signage",
    serviceName: "Signage",
    headline: "Custom Fabricated Acrylic & High-Density PVC Letters",
    description: "Versatile, lightweight, and vibrant lettering solutions fabricated from premium European cast acrylics and rigid expanded PVC sheets, finished in gloss, matte, or corporate pantone colors.",
    features: [
      "Laser-polished crystal clear or colored acrylic",
      "Weather-resistant high-density PVC",
      "2K polyurethane color spray finish",
      "Easy, damage-free installation with mounting templates"
    ],
    materials: ["Perspex / Plexiglas Acrylic", "Expanded Foam PVC", "Double-Sided 3M VHB Tape", "Color-Matched Polyurethane"],
    aliases: ["pvc-acrylic-letters"]
  },
  "corporate-signage": {
    name: "Corporate signage",
    slug: "corporate-signage",
    serviceSlug: "signage",
    serviceName: "Signage",
    headline: "Executive Headquarters & Corporate Brand Identity Signage",
    description: "Sophisticated corporate reception signs, boardroom identity graphics, high-level skyline branding, and building monument totems crafted for leading Mauritian corporations, banks, and legal firms.",
    features: [
      "Architectural elegance designed around corporate brand guides",
      "Seamless integration with executive interior design",
      "High-end metallic, glass, and acoustic textures",
      "Turnkey management from 3D visual preview to installation"
    ],
    materials: ["Brushed Stainless Steel", "Tempered Safety Glass", "Anodized Aluminum", "Architectural Wood Veneers"]
  },
  "wayfinding": {
    name: "Wayfinding",
    slug: "wayfinding",
    serviceSlug: "signage",
    serviceName: "Signage",
    headline: "Campus, Resort & Commercial Wayfinding Systems",
    description: "Clear, intuitive navigational totems, directional arrows, room directories, and tactile safety signage for shopping centers, luxury hotels, hospitals, and corporate parks.",
    features: [
      "Modular and updateable insert systems",
      "High-contrast legible typography",
      "Reflective and luminescent night safety cues",
      "ADA and accessibility-compliant tactile options"
    ],
    materials: ["Extruded Aluminum Tracks", "Toughened Safety Glass", "Engraved Traffolyte", "High-Durability Exterior Vinyl"]
  },

  // 2. LARGE FORMAT PRINTING CAPABILITIES
  "billboards": {
    name: "Billboards",
    slug: "billboards",
    serviceSlug: "large-format-printing",
    serviceName: "Large Format Printing",
    headline: "High-Impact Outdoor Roadside & Building Billboards",
    description: "Super-wide industrial printing on heavy-duty frontlit and backlit flex PVC skins, engineered to withstand intense tropical sun, coastal salt spray, and cyclone wind ratings.",
    features: [
      "Seamless prints up to 5 meters wide",
      "UV-stabilized eco-solvent and UV inks",
      "Heavy-duty 550gsm reinforced scrim banner",
      "Turnkey tensioning & steel cable rigging service"
    ],
    materials: ["Reinforced Frontlit PVC Flex", "Backlit Translucent Banner", "Steel Cable Rigging", "Heavy-Duty Brass Eyelets"]
  },
  "vehicle-wrapping": {
    name: "Vehicle wrapping",
    slug: "vehicle-wrapping",
    serviceSlug: "large-format-printing",
    serviceName: "Large Format Printing",
    headline: "Commercial Fleet Graphics & Full Vehicle Wraps",
    description: "Turn commercial vans, trucks, buses, and corporate fleets into mobile billboards with high-conformability cast wrap vinyl and scratch-resistant cast laminates.",
    features: [
      "Cast 3D conformable wrapping vinyl",
      "Micro-air channel bubble-free technology",
      "UV cast protective overlaminate",
      "Certified skilled installation in temperature-controlled bay"
    ],
    materials: ["3M / Avery Dennison Cast Vinyl", "Cast Gloss / Matte UV Laminate", "One-Way Vision Window Film"]
  },
  "window-graphics": {
    name: "Window graphics",
    slug: "window-graphics",
    serviceSlug: "large-format-printing",
    serviceName: "Large Format Printing",
    headline: "One-Way Vision, Privacy Frosted & Promotional Window Graphics",
    description: "Transform storefronts and corporate glass partitions with custom etched privacy frosted films, perforated one-way vision graphics, and high-impact seasonal window vinyls.",
    features: [
      "Etched frosted privacy patterns & boardroom manifestations",
      "Full color perforated one-way vision for retail storefronts",
      "Optically clear window film with double-strike white ink",
      "Clean removal with zero glass residue"
    ],
    materials: ["Polymeric Frosted Crystal Film", "Perforated 60/40 Window Vinyl", "Optically Clear Polyester", "UV Block Inks"]
  },
  "wall-murals": {
    name: "Wall murals",
    slug: "wall-murals",
    serviceSlug: "large-format-printing",
    serviceName: "Large Format Printing",
    headline: "Architectural Wall Murals & Cladding Graphics",
    description: "Transform bare interior and exterior walls into stunning visual masterpieces with seamless high-resolution wall vinyl, textured wallpaper, and architectural facade cladding.",
    features: [
      "Custom dimension wall coverings cut to exact architectural surveys",
      "Textured fabric, canvas or ultra-smooth matte finishes",
      "Scratch-resistant washable surface protection",
      "Class 1 fire-rated commercial materials"
    ],
    materials: ["High-Tack Wall Vinyl", "Eco-friendly Latex Inks", "Textured Non-Woven Wallpaper", "Matte Protective Overlaminate"]
  },
  "banners": {
    name: "Banners",
    slug: "banners",
    serviceSlug: "large-format-printing",
    serviceName: "Large Format Printing",
    headline: "Heavy-Duty Vinyl, Mesh & Promotional Hanging Banners",
    description: "Heavy-duty outdoor PVC banners, wind-permeable mesh banners for construction scaffolding, and vibrant fabric hanging banners for exhibitions and retail promotions.",
    features: [
      "High-frequency welded hems & reinforced brass eyelets",
      "Wind-relief mesh perforations for windy coastal sites",
      "Vivid double-strike color vibrancy",
      "Flame-retardant B1 certification"
    ],
    materials: ["510gsm Blockout PVC Banner", "Air-Permeable Mesh Fabric", "Polyester Textile Banner", "Heavy-Duty Webbing Straps"]
  },
  "posters": {
    name: "Posters",
    slug: "posters",
    serviceSlug: "large-format-printing",
    serviceName: "Large Format Printing",
    headline: "High-Resolution Photographic & Commercial Posters",
    description: "Photographic grade poster printing on 220gsm satin paper, synthetic tear-resistant Yupo, and backlit film for retail lightbox inserts and advertising displays.",
    features: [
      "1200 DPI photographic resolution",
      "Satin, gloss or ultra-matte finishes",
      "Backlit diffusion film for lightboxes",
      "Custom sizing from A4 up to super-format rolls"
    ],
    materials: ["Photo Satin Paper 220gsm", "Backlit Polyester Duratrans", "Synthetic Polypropylene Yupo", "Crystal Clear Protective Laminate"]
  },
  "canvas-prints": {
    name: "Canvas prints",
    slug: "canvas-prints",
    serviceSlug: "large-format-printing",
    serviceName: "Large Format Printing",
    headline: "Fine Art Canvas Prints & Museum Stretchers",
    description: "Archival-grade cotton canvas prints stretched over kiln-dried solid timber frames, perfect for hotel decor, executive boardrooms, and residential showcase artwork.",
    features: [
      "100% natural cotton canvas texture",
      "Archival pigment inks resistant to fading",
      "Hand-stretched over solid wooden stretcher bars",
      "Gallery-wrapped seamless edge continuation"
    ],
    materials: ["380gsm Cotton Canvas", "Kiln-Dried Pine Stretcher Bars", "Archival Giclée Inks", "Protective Matte Art Varnish"]
  },

  // 3. DISPLAYS & FABRICATION CAPABILITIES
  "pos-displays": {
    name: "POS displays",
    slug: "pos-displays",
    serviceSlug: "displays-fabrication",
    serviceName: "Displays & Fabrication",
    headline: "Point-of-Sale Units & Merchandising Displays",
    description: "Custom engineered point-of-sale floor standing units (FSDU), counter-top displays, and promotional dump bins designed to maximize impulse retail sales across supermarkets and boutiques.",
    features: [
      "Engineered for heavy product loads & high traffic",
      "Flat-pack or fully assembled delivery",
      "Integrated LED accent lighting options",
      "Interchangeable branded header cards & shelf strips"
    ],
    materials: ["Formed Acrylic", "MDF & High-Pressure Laminate", "Powder-Coated Steel Wire", "High-Impact Polystyrene (HIPS)"]
  },
  "acrylic-fabrication": {
    name: "Acrylic fabrication",
    slug: "acrylic-fabrication",
    serviceSlug: "displays-fabrication",
    serviceName: "Displays & Fabrication",
    headline: "Bespoke Plexiglas & Acrylic Custom Fabrication",
    description: "Precision heat-bending, diamond edge polishing, solvent welding, and thermoforming of clear, frosted, and colored Perspex acrylic products in our Rose-Hill workshop.",
    features: [
      "Diamond polished crystal-clear edges",
      "Seamless bubble-free chemical bonding",
      "Precision CNC routing and line heat bending",
      "Custom prototype and short-run production capabilities"
    ],
    materials: ["Cast Acrylic Sheets 2mm–30mm", "Extruded Clear Tubing & Rods", "Specialty Frosted & Mirror Acrylic", "UV Acrylic Adhesive"]
  },
  "cnc-routing": {
    name: "CNC routing",
    slug: "cnc-routing",
    serviceSlug: "displays-fabrication",
    serviceName: "Displays & Fabrication",
    headline: "Heavy-Duty 3-Axis CNC Machining & Cutting",
    description: "Industrial computer-controlled 3-axis routing across sheet materials up to 3000mm x 2000mm, carving intricate 3D reliefs, geometric grilles, and structural components.",
    features: [
      "Multi-tool automatic changing spindle",
      "Micro-tolerances down to 0.1mm",
      "3D relief carving, grooving and bevelling",
      "Nesting optimization software to minimize material waste"
    ],
    materials: ["Aluminum Composite Panel (ACP)", "Solid Hardwoods & Marine Plywood", "High-Density Polyethylene (HDPE)", "Expanded Rigid PVC"]
  },
  "laser-cutting": {
    name: "Laser cutting",
    slug: "laser-cutting",
    serviceSlug: "displays-fabrication",
    serviceName: "Displays & Fabrication",
    headline: "High-Precision CO2 Laser Cutting & Engraving",
    description: "Ultra-fine non-contact laser beam cutting providing immaculate flame-polished edges on acrylic, intricate stencil patterns, and permanent laser engraving on trophies and architectural materials.",
    features: [
      "Narrow kerf for microscopic intricate detail",
      "Flame-polished acrylic edges with zero post-processing",
      "Deep laser raster engraving and vector scoring",
      "Direct CAD file import for rapid prototypes"
    ],
    materials: ["Cast Acrylic (Perspex)", "MDF & Wood Veneers", "Engraving Laminates (Traffolyte)", "Custom Leather & Cardboard"]
  },
  "custom-metalwork": {
    name: "Custom metalwork",
    slug: "custom-metalwork",
    serviceSlug: "displays-fabrication",
    serviceName: "Displays & Fabrication",
    headline: "Architectural Steel & Aluminum Metalwork Fabrication",
    description: "In-house metal fabrication, TIG/MIG welding, structural framing, and electrostatic powder coating for massive monument signs, entrance gates, and display kiosks.",
    features: [
      "Heavy-duty structural engineering to withstand cyclonic conditions",
      "Anti-corrosion hot-dip galvanizing and zinc-rich primers",
      "Durable electrostatic powder coat finishes in RAL colors",
      "Certified structural weldments and load verification"
    ],
    materials: ["Mild Steel Sections & Tubing", "Grade 316 Marine Stainless Steel", "Structural Architectural Aluminum", "Zinc-Rich Epoxy Primers"]
  },
  "retail-stands": {
    name: "Retail stands",
    slug: "retail-stands",
    serviceSlug: "displays-fabrication",
    serviceName: "Displays & Fabrication",
    headline: "Permanent Retail Display Stands & Gondolas",
    description: "Architectural retail shelving, island fixtures, fashion rails, and cosmetic display stands designed for department stores, shopping malls, and brand boutiques.",
    features: [
      "Heavy load-bearing capacity for retail stock",
      "Modular adjustable shelving height system",
      "Integrated LED spotlighting & halo effects",
      "Premium wood, glass, and metal combinations"
    ],
    materials: ["Solid Timber & Premium Veneers", "Brushed Brass & Stainless Steel", "Tempered Safety Glass", "Formica High-Pressure Laminates"]
  },
  "trophy-and-awards": {
    name: "Trophy & awards",
    slug: "trophy-and-awards",
    serviceSlug: "displays-fabrication",
    serviceName: "Displays & Fabrication",
    headline: "Corporate Trophies, Plaques & Recognition Awards",
    description: "Bespoke recognition awards, prestige commemorative plaques, and custom corporate trophies combining diamond-cut crystal acrylic, hardwood, and laser engraved brass.",
    features: [
      "Custom sculpted 3D shapes representing brand logos",
      "Sub-surface laser engraving & full-color UV printing",
      "Solid weighted metal or hardwood bases",
      "Individual recipient personalization and luxury gift packaging"
    ],
    materials: ["Optical Crystal Cast Acrylic", "Solid Indigenous Teak / Mahogany", "Gold & Silver Anodized Aluminum Plates", "Polished Black Granite"],
    aliases: ["trophy-awards"]
  },

  // 4. EVENTS & EXHIBITIONS CAPABILITIES
  "modular-exhibition-stands": {
    name: "Modular exhibition stands",
    slug: "modular-exhibition-stands",
    serviceSlug: "events-exhibitions",
    serviceName: "Events & Exhibitions",
    headline: "Reconfigurable Modular Expo & Trade Fair Stands",
    description: "Smart, sustainable modular aluminum frame systems featuring seamless tension fabric graphics that can be reconfigured for different booth dimensions across multiple trade shows.",
    features: [
      "Tool-less rapid assembly and teardown",
      "Seamless continuous silicon-edge fabric graphics (SEG)",
      "Compact transport footprint reducing logistics costs",
      "Cost-effective multi-event reuse across SVICC and hotel venues"
    ],
    materials: ["Anodized Aluminum Modular Extrusions", "Dye-Sublimated Stretch Fabric", "LED Exhibition Arm Spotlights", "Modular Lockable Storage Counters"]
  },
  "custom-booths": {
    name: "Custom booths",
    slug: "custom-booths",
    serviceSlug: "events-exhibitions",
    serviceName: "Events & Exhibitions",
    headline: "Bespoke Custom-Built Exhibition Pavilions",
    description: "Show-stopping custom-built exhibition stands crafted from the ground up to captivate visitors at SVICC, hotel conventions, and international expos across the Indian Ocean.",
    features: [
      "Full architectural concept & 3D render preview",
      "Raised platform flooring with integrated cable management",
      "Suspended ceiling banners & truss structures",
      "Interactive audiovisual touchpoints and VIP lounge spaces"
    ],
    materials: ["Custom Carpentry & Spray Finish", "Illuminated Tension Fabric", "Raised Melamine Flooring", "Suspended Aluminum Rigging"]
  },
  "backdrops": {
    name: "Backdrops",
    slug: "backdrops",
    serviceSlug: "events-exhibitions",
    serviceName: "Events & Exhibitions",
    headline: "Press Conference, Photo & Stage Backdrops",
    description: "Matte-finish, glare-free photo backdrops, step-and-repeat logo walls, and massive conference media walls designed specifically for high-definition photography and live TV broadcasts.",
    features: [
      "Zero-glare ultra-matte finish designed for camera flashes",
      "Seamless continuous widths up to 20 meters",
      "Free-standing stable steel support framing",
      "Double-sided branding options for open-plan events"
    ],
    materials: ["Blockout Fabric & Heavy Canvas", "Collapsible Pop-Up & Truss Frames", "Low-Reflectance Anti-Glare Inks"]
  },
  "event-signage": {
    name: "Event signage",
    slug: "event-signage",
    serviceSlug: "events-exhibitions",
    serviceName: "Events & Exhibitions",
    headline: "Event Navigation, Registration & Branding Signage",
    description: "Complete event branding packages including entrance archways, conference schedule totems, directional floor stickers, VIP lanyard stations, and branded barricades.",
    features: [
      "Rapid 24-hour turnaround for fast-moving events",
      "High-visibility directional cues for large attendee flow",
      "Temporary weather-resistant outdoor materials",
      "Full delivery, on-site setup and post-event removal service"
    ],
    materials: ["Corflute / Foam PVC Boards", "Removable Floor Vinyl Graphics", "Branded Stretch Barrier Covers", "Aluminum Easels & Sign Stands"]
  },
  "branded-counters": {
    name: "Branded counters",
    slug: "branded-counters",
    serviceSlug: "events-exhibitions",
    serviceName: "Events & Exhibitions",
    headline: "Registration Podiums, Welcome Desks & Bar Counters",
    description: "Sleek, branded reception desks, event registration podiums, and illuminated pop-up bar counters that create an authoritative, welcoming first impression for your guests.",
    features: [
      "Internal lockable storage shelving for collateral",
      "Optional LED ambient under-glow and edge-lighting",
      "Interchangeable front graphic panels for multiple sponsors",
      "Heavy-duty counter-top surfaces resistant to wear"
    ],
    materials: ["Laminated MDF & Marine Plywood", "Illuminated Acrylic Facings", "Lightweight Transport Casters"]
  },
  "roll-up-banners": {
    name: "Roll-up banners",
    slug: "roll-up-banners",
    serviceSlug: "events-exhibitions",
    serviceName: "Events & Exhibitions",
    headline: "Premium Retractable Pull-Up Banner Stands",
    description: "Heavy-duty aluminum retractable pull-up banners with curl-free blockout films, weighted stable bases, and padded protective carry bags for traveling reps and event spaces.",
    features: [
      "Anti-curl stay-flat grey-back PET film",
      "Heavy-duty teardrop aluminum cassette with stable feet",
      "High-resolution 1440 DPI vibrant print",
      "Instant 30-second tool-free setup"
    ],
    materials: ["Non-Curling Polyester Film", "Extruded Aluminum Base", "Shock-Cord Support Pole", "Padded Oxford Carrying Bag"]
  },
  "stage-graphics": {
    name: "Stage graphics",
    slug: "stage-graphics",
    serviceSlug: "events-exhibitions",
    serviceName: "Events & Exhibitions",
    headline: "Main Stage Sets, Podium Branding & Screen Fascias",
    description: "Transform conference stages, awards auditoriums, and live entertainment stages with branded podium wraps, large screen surrounds, 3D stage logos, and dynamic stage sets.",
    features: [
      "Acoustically transparent textile options",
      "Precision-cut dimensional 3D stage logos",
      "Seamless screen framing & speaker podium branding",
      "Stage lighting compatible non-glare surfaces"
    ],
    materials: ["Matte Tension Fabric", "Lightweight Cut Foam PVC", "Non-Reflective Backing Boards", "Curved Truss Cladding"]
  }
};

// Curated vehicle wrapping assets from public/images/AGIGRAPHIX IMAGES/WRAPPING
const WRAPPING_IMAGES: CapabilityProjectImage[] = [
  {
    id: "wrap-1",
    title: "Commercial Fleet Van Full Graphic Wrap & Corporate Livery",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20201030-WA0000.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-2",
    title: "High-Impact Commercial Vehicle Fleet Wrap Installation",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20201030-WA0001.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-3",
    title: "Precision Bodywork Vinyl Application on Commercial Fleet",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20201030-WA0002.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-4",
    title: "Full Contour Commercial Truck & Delivery Van Branding",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20201030-WA0003.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-5",
    title: "Corporate Fleet Vehicle Rear & Side Branding Application",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20201214-WA0003.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-6",
    title: "Cast Film Automotive Vinyl Wrap & Precision Edge Trimming",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20201214-WA0004.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-7",
    title: "Commercial Van Branding in Agigraphix Workshop Bay",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20201214-WA0005.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-8",
    title: "Full Commercial Vehicle Partial Wrap & Door Graphics",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20190216-WA0001.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-9",
    title: "Company Car Fleet Decal & Logo Application",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20190821-WA0036.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-10",
    title: "Commercial Delivery Van Vinyl Lettering & Graphic Package",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20190905-WA0030.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-11",
    title: "High-Gloss UV Protective Vehicle Overlaminate Finish",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20190905-WA0032.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-12",
    title: "Multi-Surface Vehicle Branding & Window Perforated Graphics",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20190905-WA0033.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-13",
    title: "Utility Truck Bed & Cabin Custom Branded Vinyl Wrap",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20200826-WA0021.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-14",
    title: "Automotive Showroom Vehicle Accent Wrap Installation",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20200907-WA0004.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  },
  {
    id: "wrap-15",
    title: "Corporate Service Van Graphic Livery & Emergency Fleet Markings",
    image: "/images/AGIGRAPHIX IMAGES/WRAPPING/IMG-20200908-WA0005.jpg",
    category: "Vehicle Wrapping",
    serviceSlug: "large-format-printing"
  }
];

// Helper to filter SERVICE_PRODUCTS and convert to CapabilityProjectImage
function filterProducts(predicate: (p: ServiceProduct) => boolean, categoryLabel: string): CapabilityProjectImage[] {
  return SERVICE_PRODUCTS.filter(predicate).map((p) => ({
    id: p.id,
    title: p.title,
    image: p.image,
    category: categoryLabel,
    serviceSlug: p.serviceSlug
  }));
}

// Get all capability images for a specific capability slug
export function getCapabilityImages(capabilitySlug: string): CapabilityProjectImage[] {
  const slug = normalizeCapabilitySlug(capabilitySlug);

  switch (slug) {
    // 1. SIGNAGE CAPABILITIES
    case "luminous-signage": {
      return filterProducts(
        (p) => p.serviceSlug === "signage" && p.subcategoryId === "luminous",
        "Luminous Signage"
      );
    }
    case "non-luminous-signage": {
      return filterProducts(
        (p) => p.serviceSlug === "signage" && p.subcategoryId === "non-luminous",
        "Non-Luminous Signage"
      );
    }
    case "3d-letters": {
      // 3D event letters + Cut-out letters + illuminated 3D letters from luminous
      const event3d = filterProducts(
        (p) => p.subcategoryId === "3d-letters" || p.image.includes("3D_Letters"),
        "3D Letters"
      );
      const cutOuts = filterProducts(
        (p) => p.subcategoryId === "cut-out-letters",
        "3D Letters"
      );
      const luminous3d = filterProducts(
        (p) => p.serviceSlug === "signage" && /3d|channel letter|raised letter|letter/i.test(p.title),
        "3D Letters"
      );
      const combined = [...event3d, ...cutOuts, ...luminous3d];
      const seen = new Set<string>();
      return combined.filter((item) => {
        if (seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
      });
    }
    case "cut-out-letters": {
      const direct = filterProducts(
        (p) => p.subcategoryId === "cut-out-letters",
        "Cut-Out Letters"
      );
      const dimensional = filterProducts(
        (p) => /cut-out|cut out|flat cut/i.test(p.title) || p.image.includes("Cut_Out"),
        "Cut-Out Letters"
      );
      const combined = [...direct, ...dimensional];
      const seen = new Set<string>();
      return combined.filter((item) => {
        if (seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
      });
    }
    case "pvc-and-acrylic-letters": {
      const letters = filterProducts(
        (p) =>
          p.image.includes("3D_Letters_PVC_Acrylic") ||
          p.image.includes("Cut_Out") ||
          /acrylic|pvc|perspex/i.test(p.title),
        "PVC & Acrylic Letters"
      );
      return letters;
    }
    case "corporate-signage": {
      return filterProducts(
        (p) =>
          p.serviceSlug === "signage" &&
          (/corporate|office|reception|building|headquarters|facade|bank|business|monument|totem|wall/i.test(p.title) ||
            p.subcategoryId === "non-luminous" ||
            p.subcategoryId === "luminous"),
        "Corporate Signage"
      );
    }
    case "wayfinding": {
      return filterProducts(
        (p) =>
          p.serviceSlug === "signage" &&
          (/wayfinding|directional|totem|directory|pylon|signpost|guidance|entrance|parking|information/i.test(p.title) ||
            p.subcategoryId === "non-luminous"),
        "Wayfinding"
      );
    }

    // 2. LARGE FORMAT PRINTING CAPABILITIES
    case "billboards": {
      const lfpWall = filterProducts(
        (p) => p.serviceSlug === "large-format-printing" && p.subcategoryId === "wall-cladding",
        "Billboards & Hoardings"
      );
      const signageExt = filterProducts(
        (p) => p.serviceSlug === "signage" && /monument|facade|large|exterior|pylon/i.test(p.title),
        "Billboards & Hoardings"
      );
      return [...lfpWall, ...signageExt];
    }
    case "vehicle-wrapping": {
      return WRAPPING_IMAGES;
    }
    case "window-graphics": {
      const frosted = filterProducts(
        (p) => p.subcategoryId === "frosted-glass",
        "Window Graphics"
      );
      const otherWindow = filterProducts(
        (p) => /window|glass|frosted|vision|film|glazing/i.test(p.title),
        "Window Graphics"
      );
      const combined = [...frosted, ...otherWindow];
      const seen = new Set<string>();
      return combined.filter((item) => {
        if (seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
      });
    }
    case "wall-murals": {
      return filterProducts(
        (p) =>
          p.subcategoryId === "wall-cladding" ||
          (p.serviceSlug === "large-format-printing" && /wall|mural|cladding|interior vinyl/i.test(p.title)),
        "Wall Murals"
      );
    }
    case "banners": {
      const rollups = filterProducts(
        (p) => p.subcategoryId === "roll-up-banners",
        "Banners"
      );
      const backdrops = filterProducts(
        (p) => p.subcategoryId === "backdrops",
        "Banners"
      );
      return [...rollups, ...backdrops];
    }
    case "posters": {
      const posters = filterProducts(
        (p) => p.subcategoryId === "poster-holders",
        "Posters & Prints"
      );
      const lfp = filterProducts(
        (p) => p.serviceSlug === "large-format-printing",
        "Posters & Prints"
      );
      const combined = [...posters, ...lfp];
      const seen = new Set<string>();
      return combined.filter((item) => {
        if (seen.has(item.id)) return false;
        seen.add(item.id);
        return true;
      });
    }
    case "canvas-prints": {
      return filterProducts(
        (p) =>
          p.serviceSlug === "large-format-printing" ||
          p.subcategoryId === "poster-holders" ||
          /canvas|art|framed|print/i.test(p.title),
        "Canvas Prints"
      );
    }

    // 3. DISPLAYS & FABRICATION CAPABILITIES
    case "pos-displays": {
      return filterProducts(
        (p) =>
          p.serviceSlug === "displays-fabrication" ||
          /pos|point of sale|display|stand|counter|merchandise/i.test(p.title),
        "POS Displays"
      );
    }
    case "acrylic-fabrication": {
      return filterProducts(
        (p) =>
          p.subcategoryId === "acrylic-tables" ||
          p.subcategoryId === "poster-holders" ||
          p.subcategoryId === "price-holders" ||
          /acrylic|perspex|plexiglas/i.test(p.title),
        "Acrylic Fabrication"
      );
    }
    case "cnc-routing": {
      return filterProducts(
        (p) =>
          p.subcategoryId === "cut-out-letters" ||
          p.serviceSlug === "displays-fabrication" ||
          /cnc|routed|carved|cut-out|wood/i.test(p.title),
        "CNC Routing"
      );
    }
    case "laser-cutting": {
      return filterProducts(
        (p) =>
          p.subcategoryId === "cut-out-letters" ||
          p.subcategoryId === "poster-holders" ||
          /laser|acrylic|precision|engrav/i.test(p.title),
        "Laser Cutting"
      );
    }
    case "custom-metalwork": {
      return filterProducts(
        (p) =>
          p.serviceSlug === "displays-fabrication" ||
          (p.serviceSlug === "signage" && /monument|totem|metal|frame|steel|structure/i.test(p.title)),
        "Custom Metalwork"
      );
    }
    case "retail-stands": {
      return filterProducts(
        (p) =>
          p.subcategoryId === "reception-desks" ||
          p.subcategoryId === "price-holders" ||
          /stand|display|retail|kiosk|reception/i.test(p.title),
        "Retail Stands"
      );
    }
    case "trophy-and-awards": {
      return filterProducts(
        (p) =>
          p.subcategoryId === "price-holders" ||
          p.subcategoryId === "poster-holders" ||
          p.subcategoryId === "acrylic-tables" ||
          /award|trophy|plaque|acrylic|engrav/i.test(p.title),
        "Trophy & Awards"
      );
    }

    // 4. EVENTS & EXHIBITIONS CAPABILITIES
    case "modular-exhibition-stands": {
      return filterProducts(
        (p) => p.subcategoryId === "booths",
        "Modular Exhibition Stands"
      );
    }
    case "custom-booths": {
      return filterProducts(
        (p) => p.subcategoryId === "booths",
        "Custom Booths"
      );
    }
    case "backdrops": {
      return filterProducts(
        (p) => p.subcategoryId === "backdrops",
        "Backdrops & Media Walls"
      );
    }
    case "event-signage": {
      const letters = filterProducts(
        (p) => p.subcategoryId === "3d-letters",
        "Event Signage"
      );
      const backdrops = filterProducts(
        (p) => p.subcategoryId === "backdrops",
        "Event Signage"
      );
      const signage = filterProducts(
        (p) => p.serviceSlug === "signage" && /event|stage|conference|summit/i.test(p.title),
        "Event Signage"
      );
      return [...letters, ...backdrops, ...signage];
    }
    case "branded-counters": {
      return filterProducts(
        (p) => p.subcategoryId === "reception-desks",
        "Branded Counters"
      );
    }
    case "roll-up-banners": {
      return filterProducts(
        (p) => p.subcategoryId === "roll-up-banners",
        "Roll-Up Banners"
      );
    }
    case "stage-graphics": {
      const backdrops = filterProducts(
        (p) => p.subcategoryId === "backdrops",
        "Stage Graphics"
      );
      const letters = filterProducts(
        (p) => p.subcategoryId === "3d-letters",
        "Stage Graphics"
      );
      return [...backdrops, ...letters];
    }

    default:
      return [];
  }
}

// Retrieve complete capability page data
export function getCapabilityData(serviceSlug: string, capabilitySlug: string) {
  // Normalize service slug
  const normalizedServiceSlug =
    serviceSlug === "events" ? "events-exhibitions" : serviceSlug;

  const service = MOCK_SERVICES.find(
    (s) => s.slug === normalizedServiceSlug || (normalizedServiceSlug === "events-exhibitions" && s.slug === "events")
  );

  const normalizedCapSlug = normalizeCapabilitySlug(capabilitySlug);
  const capability = CAPABILITIES_DATA[normalizedCapSlug];

  if (!capability || !service) {
    return null;
  }

  // Get matching images
  const images = getCapabilityImages(normalizedCapSlug);

  // Get sibling capabilities from the same service for navigation
  const relatedCapabilities = service.capabilities
    .map((capName) => {
      const cSlug = capabilityNameToSlug(capName);
      const normSlug = normalizeCapabilitySlug(cSlug);
      const capData = CAPABILITIES_DATA[normSlug];
      const count = getCapabilityImages(normSlug).length;
      return {
        name: capName,
        slug: cSlug,
        count
      };
    })
    .filter((c) => normalizeCapabilitySlug(c.slug) !== normalizedCapSlug);

  return {
    capability,
    service: {
      name: service.name,
      slug: serviceSlug // Keep the URL-requested slug (e.g., 'events' or 'events-exhibitions')
    },
    images,
    relatedCapabilities
  };
}

// Generate all params for static export
export function getAllCapabilityParams(): { slug: string; capabilitySlug: string }[] {
  const params: { slug: string; capabilitySlug: string }[] = [];

  for (const service of MOCK_SERVICES) {
    const serviceSlugs = [service.slug];
    if (service.slug === "events-exhibitions") {
      serviceSlugs.push("events");
    }

    for (const sSlug of serviceSlugs) {
      for (const capName of service.capabilities) {
        const primarySlug = capabilityNameToSlug(capName);
        params.push({ slug: sSlug, capabilitySlug: primarySlug });

        // If there are aliases (like pvc-acrylic-letters alongside pvc-and-acrylic-letters), include them too
        const normalized = normalizeCapabilitySlug(primarySlug);
        const info = CAPABILITIES_DATA[normalized];
        if (info && info.aliases) {
          for (const alias of info.aliases) {
            params.push({ slug: sSlug, capabilitySlug: alias });
          }
        }
      }
    }
  }

  return params;
}
