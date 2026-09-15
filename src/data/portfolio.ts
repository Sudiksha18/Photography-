export type PortfolioCategory =
  | "Wedding"
  | "Newborn"
  | "Maternity"
  | "Models"
  | "Portraits";

export type PortfolioImage = {
  id: string;
  category: PortfolioCategory;
  title: string;
  src: string;
  orientation: "portrait" | "landscape" | "square";
  description?: string;
};

export const portfolioImages: PortfolioImage[] = [
  // Weddings
  { id: "w1", category: "Wedding", title: "Royal Courtyard Vows", src: "/images/portfolio/wedding-01.jpg", orientation: "portrait", description: "Regal couple portrait during golden sunset" },
  { id: "w2", category: "Wedding", title: "Joyful Garland Ritual", src: "/images/portfolio/wedding-02.jpg", orientation: "landscape", description: "Spontaneous laughter during the varmala ritual" },
  { id: "w3", category: "Wedding", title: "Sunset Palace Walk", src: "/images/portfolio/wedding-03.jpg", orientation: "landscape", description: "Intimate walk under the evening sky" },
  { id: "w4", category: "Wedding", title: "Sacred Fire Emotions", src: "/images/portfolio/wedding-04.jpg", orientation: "portrait", description: "Soulful rituals around the ceremonial mandap" },
  { id: "w5", category: "Wedding", title: "The Grand Reception", src: "/images/portfolio/wedding-05.jpg", orientation: "landscape", description: "Euphoric celebration with family and friends" },
  { id: "w6", category: "Wedding", title: "Bridal Elegance", src: "/images/portfolio/wedding-06.jpg", orientation: "portrait", description: "Timeless portrait capturing bespoke gold bridal jewelry" },

  // Maternity
  { id: "m1", category: "Maternity", title: "Sunlit Botanical Motherhood", src: "/images/portfolio/maternity-01.jpg", orientation: "portrait", description: "Warm afternoon light celebrating new life" },
  { id: "m2", category: "Maternity", title: "Serene Studio Silhouette", src: "/images/portfolio/maternity-02.jpg", orientation: "landscape", description: "Sculptural lighting highlighting the maternal form" },
  { id: "m3", category: "Maternity", title: "Embraced in Soft Light", src: "/images/portfolio/maternity-03.jpg", orientation: "portrait", description: "Gentle motherly connection and peace" },
  { id: "m4", category: "Maternity", title: "Whispers of Tomorrow", src: "/images/portfolio/maternity-04.jpg", orientation: "landscape", description: "Outdoor golden hour couple portrait" },

  // Newborn
  { id: "n1", category: "Newborn", title: "Rustic Bowl Slumber", src: "/images/portfolio/newborn-01.jpg", orientation: "landscape", description: "Warm mohair knitted wrap in hand-carved wood" },
  { id: "n2", category: "Newborn", title: "Tender Tiny Dreams", src: "/images/portfolio/newborn-02.jpg", orientation: "portrait", description: "Peaceful sleep in soothing cream tones" },
  { id: "n3", category: "Newborn", title: "Little Hands, Big World", src: "/images/portfolio/newborn-03.jpg", orientation: "landscape", description: "Close-up macro detail of baby toes and fingers" },
  { id: "n4", category: "Newborn", title: "Safe in Gentle Arms", src: "/images/portfolio/newborn-04.jpg", orientation: "portrait", description: "Intimate parent and baby bonding moment" },

  // Models & Fashion
  { id: "mo1", category: "Models", title: "Vogue Cover Editorial", src: "/images/portfolio/model-01.jpg", orientation: "portrait", description: "High-contrast editorial portrait with striking poise" },
  { id: "mo2", category: "Models", title: "Urban Haute Couture", src: "/images/portfolio/model-02.jpg", orientation: "landscape", description: "Contemporary styling with moody ambient light" },
  { id: "mo3", category: "Models", title: "Dramatic Studio Shadows", src: "/images/portfolio/model-03.jpg", orientation: "portrait", description: "Sculpted rim lighting and editorial gaze" },
  { id: "mo4", category: "Models", title: "Golden Hour Fashion Walk", src: "/images/portfolio/model-04.jpg", orientation: "landscape", description: "Effortless fluid movement and vibrant textures" },
  { id: "mo5", category: "Models", title: "Minimalist Monochromatic", src: "/images/portfolio/model-05.jpg", orientation: "portrait", description: "Clean high-fashion portfolio study" },

  // Portraits
  { id: "p1", category: "Portraits", title: "Natural Soul", src: "/images/portfolio/portrait-01.jpg", orientation: "square", description: "Authentic unposed gaze in diffused natural light" },
  { id: "p2", category: "Portraits", title: "Between Frames", src: "/images/portfolio/portrait-02.jpg", orientation: "portrait", description: "Artistic monochrome portrait with quiet expression" },
  { id: "p3", category: "Portraits", title: "Golden Reminiscence", src: "/images/portfolio/portrait-03.jpg", orientation: "landscape", description: "Warm sunset ambient tones in outdoor setting" },
  { id: "p4", category: "Portraits", title: "Radiant Expression", src: "/images/portfolio/portrait-04.jpg", orientation: "portrait", description: "Luminous, vibrant studio beauty portrait" },
];

export const portfolioCategories: (PortfolioCategory | "All")[] = [
  "All",
  "Wedding",
  "Newborn",
  "Maternity",
  "Models",
  "Portraits",
];
