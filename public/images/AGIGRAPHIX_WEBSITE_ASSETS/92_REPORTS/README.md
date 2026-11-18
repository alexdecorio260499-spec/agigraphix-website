# Agigraphix Mauritius — Curated Website Assets & Portfolio Library

This directory contains the professionally curated, classified, and optimized photographic assets for the Agigraphix corporate showcase website.

The source library of **340 original photographs** was audited, reviewed, and organized into standardized, website-ready assets. Original source images remain untouched in `public/images/AGIGRAPHIX IMAGES/`.

---

## 1. Quick Access Tools

- **Interactive Visual Gallery**: [Open Gallery in Browser](http://localhost:3001/images/AGIGRAPHIX_WEBSITE_ASSETS/gallery.html)
  *(Filter by category, search by brand/keyword, and inspect 1600×1200 full-res previews with metadata)*
- **Complete Inventory CSV**: [`image_manifest.csv`](./image_manifest.csv)
- **High-Resolution Category Contact Sheets**: Located in [`91_CONTACT_SHEETS/`](./91_CONTACT_SHEETS/)

---

## 2. Directory Structure & Asset Inventory

```
AGIGRAPHIX_WEBSITE_ASSETS/
│
├── 01_SIGNAGE/                                     (95 Assets)
│   ├── Luminous/                                  (37 Assets)   e.g. signage-luminous-001.webp
│   ├── Non_Luminous/                              (39 Assets)   e.g. signage-non-luminous-001.webp
│   └── Cut_Out_Letters/                           (19 Assets)   e.g. signage-cut-out-letters-001.webp
│
├── 02_LARGE_FORMAT_PRINTING/                       (24 Assets)
│   ├── Wall_Cladding_Sticker_Application/         (17 Assets)   e.g. large-format-wall-cladding-001.webp
│   ├── Frosted_Sticker_Glass/                     (2 Assets)    e.g. large-format-frosted-glass-001.webp
│   ├── Roll_Up_Banners/                           (5 Assets)    e.g. large-format-roll-up-001.webp
│   ├── One_Way_Vision/                            (Reserved)
│   └── Printed_Canvas/                            (Reserved)
│
├── 03_DISPLAYS_FURNITURE/                          (32 Assets)
│   ├── Reception_Desks/                           (18 Assets)   e.g. display-reception-desk-001.webp
│   ├── Poster_Holders/                            (6 Assets)    e.g. display-poster-holder-001.webp
│   ├── Price_Holders/                             (5 Assets)    e.g. display-price-holder-001.webp
│   ├── Chairs/                                    (2 Assets)    e.g. display-chair-001.webp (branded drum seats/cubes)
│   ├── Acrylic_Coffee_Tables/                     (1 Asset)     e.g. display-acrylic-coffee-table-001.webp (Bentley table)
│   └── Brochure_Holders/                          (Reserved)
│
├── 04_EVENTS_EXHIBITIONS/                          (72 Assets)
│   ├── Booths/                                    (46 Assets)   e.g. events-booth-001.webp
│   ├── Backdrops/                                 (20 Assets)   e.g. events-backdrop-001.webp
│   └── 3D_Letters_PVC_Acrylic/                    (6 Assets)    e.g. events-3d-letters-001.webp
│
├── 90_NEEDS_REVIEW/                                (22 Assets)   e.g. review-vehicle-wrap-001.webp
│   ├── 14 Vehicle & Fleet Wraps (Trucks, Vans, Cars)
│   ├── 2 Architectural Bus Shelters ("BIS STOP")
│   ├── 4 Custom Acrylic/Wood Trophies & Awards
│   └── 2 Custom Acrylic Raffle Drums ("Lottotech")
│
├── 91_CONTACT_SHEETS/                              (5 High-Res Overview JPEGs)
│   ├── contact_sheet_01_signage.jpg               (95 items)
│   ├── contact_sheet_02_large_format.jpg          (24 items)
│   ├── contact_sheet_03_displays_furniture.jpg    (32 items)
│   ├── contact_sheet_04_events_exhibitions.jpg    (72 items)
│   └── contact_sheet_90_needs_review.jpg          (22 items)
│
├── 92_REPORTS/
│   ├── image_manifest.csv
│   ├── image_manifest.json
│   ├── gallery.html
│   └── README.md
│
├── image_manifest.csv
└── gallery.html
```

---

## 3. Curation & Optimization Standards

1. **Standardized Aspect Ratio & Resolution**:
   - Every selected photograph has been standardized to a consistent **4:3 landscape ratio** at **1600 × 1200 pixels**.
   - **Subject-Aware Framing**: Crops were calculated to maintain the product as the primary focal point, avoiding clipping of signage lettering, edges, or architectural context.
   - **Non-Destructive Canvas Extension**: Tall vertical signage (totems, pylons, upright displays) were preserved at 100% of their original visual detail using subtle, softly blurred neutral background wings rather than cropping off key branding text.

2. **Color Correction & Photographic Polish**:
   - Calibrated exposure to brighten underexposed venue lighting (+4% to +8% luminance boost where needed).
   - Applied subtle micro-contrast enhancement (+4%) to highlight acrylic edges, vinyl finishes, and metallic cut-outs.
   - Applied gentle unsharp masking (radius 1.2px) to enhance readability of typography and fabricated contours without introducing noise or artifacts.
   - Strictly preserved all authentic brand colors, logos, and materials (no heavy filters, no AI hallucination).

3. **WebP Optimization**:
   - Converted to sRGB color space.
   - Exported as WebP (`quality=88`, `method=6`), delivering high fidelity at small file sizes (~150 KB – 350 KB per asset).

4. **SEO & Clean Naming Convention**:
   - All filenames use lowercase alphanumeric characters with descriptive category hyphens (e.g. `signage-luminous-001.webp`).
   - Every exported asset is mapped back to its original WhatsApp image filename in `image_manifest.csv`.

---

## 4. Summary of Audit Statistics

| Status | Count | Description |
| :--- | :---: | :--- |
| **Selected (Website-Ready)** | **223** | Processed to 1600×1200 WebP and filed into service categories |
| **Needs Review** | **22** | High-quality candidates for client decision (e.g. Vehicle Wraps, Awards) |
| **Excluded** | **95** | Duplicate angles, blurred, obstructed, or irrelevant shots |
| **Total Source Audited** | **340** | Original files preserved without modification |

---

## 5. How to Use in the Website

In Next.js components or pages, reference any asset using its relative public URL:

```tsx
// Example in a Service or Portfolio component:
<Image 
  src="/images/AGIGRAPHIX_WEBSITE_ASSETS/01_SIGNAGE/Luminous/signage-luminous-001.webp" 
  alt="Agigraphix Luminous Signage" 
  width={1600} 
  height={1200} 
/>
```
