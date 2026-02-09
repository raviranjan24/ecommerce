export const LINK = "/categories/100";

interface Department {
  department: string;
  image: string;
  categories?: {
    title: string;
    items: string[];
  }[];
  items?: any[];
}

export const finalCategory: Department[] = [
  {
    department: "Furniture",
    image: "Furniture",
    items: []
  },
  {
    department: "Living Room",
    image: "Living Room",
    categories: [
      {
        title: "Sofas",
        items: [
          "3 Seater Sofas",
          "2 Seater Sofas",
          "1 Seater Sofas",
          "Sofa Sets",
          "Sofa Cum Beds",
          "Corner Sofas",
        ],
      },
      {
        title: "Recliners",
        items: [
          "3 Seater Recliners",
          "2 Seater Recliners",
          "1 Seater Recliners",
          "Recliner Sets",
        ],
      },
      {
        title: "Occasional Chairs",
        items: ["Accent Chairs", "Folding Chairs", "Cafe Chairs"],
      },
      {
        title: "Benches & Stools",
        items: ["Benches", "Stools"],
      },
      {
        title: "Bean Bags & Pouffes",
        items: ["Pouffes", "Bean Bags"],
      },
      {
        title: "Tables",
        items: ["Centre Tables", "End Tables", "Console Tables", "Nesting Tables"],
      },
      {
        title: "TV & Media Units",
        items: ["TV Consoles", "TV Units"],
      },
      {
        title: "Shelves",
        items: ["Wall Shelves", "Corner Shelves"],
      },
      {
        title: "Shoe Racks",
        items: ["Shoe Cabinets", "Open Shoe Racks"],
      },
      {
        title: "Study & Work",
        items: ["Study & Office Tables", "Study & Office Chairs"],
      },
      {
        title: "Book Cases & Cabinets",
        items: ["Book Cabinets", "Open Book Shelves"],
      },
      {
        title: "Outdoor Furniture",
        items: ["Outdoor Seating & Tables"],
      },
      {
        title: "Customized Furniture",
        items: ["1 Seater Sofas", "2 Seater Sofas", "3 Seater Sofas"],
      },
      { title: "Ottomans", items: [] },
      { title: "Tea Sets", items: [] },
    ],
  },
  {
    department: "Bedroom",
    image: "Bedroom",
    categories: [
      {
        title: "Beds",
        items: ["King Beds", "Queen Beds", "Single Beds", "Bunk Beds"],
      },
      {
        title: "Wardrobes",
        items: ["2 Door Wardrobes", "3 Door Wardrobes", "4 Door Wardrobes", "Sliding Wardrobes"],
      },
      {
        title: "Mattresses",
        items: ["King Mattresses", "Queen Mattresses", "Single Mattresses"],
      },
      { title: "Bed Side Tables", items: [] },
      { title: "Chest of Drawers", items: [] },
      { title: "Dresser Mirrors", items: [] },
    ],
  },
  {
    department: "Dining Room",
    image: "Dining Room",
    categories: [
      {
        title: "Dining Sets",
        items: ["4 Seater Dining Sets", "6 Seater Dining Sets", "8 Seater Dining Sets"],
      },
      {
        title: "Dining Tables",
        items: ["4 Seater Dining Tables", "6 Seater Dining Tables", "8 Seater Dining Tables"],
      },
      {
        title: "Bar Furniture",
        items: ["Bar Cabinet-Curios", "Bar Stools & Chairs", "Serving Trolleys"],
      },
      { title: "Dining Chairs", items: [] },
      { title: "Dining Benches", items: [] },
      { title: "Crockery Units", items: [] },
    ],
  },
  {
    department: "Decor",
    image: "Decor",
    categories: [
      {
        title: "Home Accessories",
        items: [
          "Figurines",
          "Vases",
          "Table Accents",
          "Candle Holders & Lanterns",
          "Potpourri Bowls & Platters",
          "Clocks",
          "Desk Accessories",
          "Gift Accessories",
        ],
      },
      {
        title: "Lighting",
        items: [
          "Table Lamps",
          "Wall Lamps",
          "Hanging Lamps",
          "Floor Lamps",
          "Decorative Lights",
          "String Lights",
          "Bulbs",
        ],
      },
      {
        title: "Wall Decor",
        items: ["Wall Accents", "Decorative Mirrors", "Photo Frames", "Posters & Paintings"],
      },
      {
        title: "Home Fragrances",
        items: ["Candles", "Fragrances & Potpourris", "Diffusers", "Aroma Oils", "Room & Car Sprays"],
      },
      {
        title: "Garden",
        items: ["Artificial Plants & Flowers", "Pots & Planters", "Fountains"],
      },
    ],
  },
  {
    department: "Furnishings",
    image: "Furnishings",
    categories: [
      {
        title: "Bedding",
        items: [
          "Double Bedsheets",
          "Single Bedsheets",
          "Bedding Sets",
          "Pillows & Pillow Covers",
          "Blankets & Quilts",
          "Comforters",
          "Throws",
          "Duvets & Duvet Covers",
          "Dohars",
          "Bed Covers",
          "Mattress Protectors & Toppers",
        ],
      },
      {
        title: "Cushions",
        items: ["Cushion Covers", "Filled Cushions", "Cushion Fillers", "Floor Cushions"],
      },
      {
        title: "Curtains & Blinds",
        items: ["Door Curtains", "Window Curtains", "Blinds", "Rods & Accessories"],
      },
      {
        title: "Accessories",
        items: ["Bags", "Pads & Mats", "Sofa Covers"],
      },
      {
        title: "Floor Coverings",
        items: ["Carpets & Rugs", "Dhurries", "Doormats"],
      },
    ],
  },
  {
    department: "Kitchen",
    image: "Kitchen",
    categories: [
      {
        title: "Storage & Containers",
        items: [
          "Containers & Jars",
          "Bottles",
          "Flasks",
          "Lunch Boxes & Bags",
          "Kitchen Organisers",
        ],
      },
      {
        title: "Cookware",
        items: [
          "Cookware Sets",
          "Pots & Pans",
          "Kadhai & Woks",
          "Grill Pans & Griddles",
          "Pressure Cookers",
          "Tawas",
        ],
      },
      {
        title: "Kitchenware",
        items: [
          "Kitchen Trolleys",
          "Knives & Scissors",
          "Casseroles",
          "Oil & Vinegar Servers",
          "Utensil Holders",
          "Chopping Boards",
          "Dish Racks",
          "Fruit Baskets",
          "Strainers & Colanders",
          "Tools & Gadgets",
        ],
      },
      {
        title: "Kitchen Linens",
        items: ["Aprons", "Pot Holders & Mittens", "Kitchen Towels"],
      },
      { title: "Bakeware", items: [] },
      { title: "Kitchen Appliances", items: [] },
    ],
  },
  {
    department: "Tableware",
    image: "Tableware",
    categories: [
      {
        title: "Serving",
        items: [
          "Trays & Platters",
          "Glasses & Jugs",
          "Bar Accessories",
          "Salt & Pepper Shakers",
          "Chip & Dip",
        ],
      },
      {
        title: "Crockery",
        items: ["Bowls", "Plates", "Mugs", "Cups & Saucers", "Pots & Kettles", "Dinner Sets"],
      },
      {
        title: "Cutlery",
        items: ["Cutlery & Cutlery Sets", "Cutlery Holders"],
      },
      {
        title: "Table Linens",
        items: [
          "Placemats",
          "Table Runners",
          "Table Cloths",
          "Trivets & Coasters",
          "Tissue Holders",
        ],
      },
    ],
  },
  {
    department: "Bath & Laundry",
    image: "Bath & Laundry",
    categories: [
      {
        title: "Bath Linen",
        items: ["Towels", "Robes", "Bathmats"],
      },
      {
        title: "Bath Accessories",
        items: [
          "Holders & Tumblers",
          "Soap Dispensers",
          "Soap Dishes",
          "Bath Sets",
          "Storage & Mirrors",
          "Towel Holders",
          "Toilet Accessories",
          "Shower Curtains",
          "Bath Stools",
        ],
      },
      {
        title: "Laundry",
        items: [
          "Laundry Storage & Baskets",
          "Cleaning Accessories",
          "Cloth Dryers",
          "Hangers & Hooks",
        ],
      },
    ],
  },
  {
    department: "Gifting",
    image: "Gifting",
    categories: [
      { title: "Housewarming Gifts", items: [] },
      { title: "Wedding Gifts", items: [] },
      { title: "Anniversary Gifts", items: [] },
      { title: "Birthday Gifts", items: [] },
      { title: "Gifts for Him", items: [] },
      { title: "Gifts for Her", items: [] },
      {
        title: "Festive Gifts",
        items: ["New Year Gifts"],
      },
      {
        title: "Special Occasions",
        items: ["Valentine’s Day Gifts"],
      },
      {
        title: "Shop by Price",
        items: [
          "Gifts under ₹200",
          "Gifts under ₹500",
          "Gifts under ₹1000",
          "Gifts under ₹1500",
          "Gifts under ₹2000",
          "Gifts above ₹2000",
        ],
      },
    ],
  },
];