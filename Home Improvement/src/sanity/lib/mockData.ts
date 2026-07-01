export interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  excerpt: string;
  mainImage: string;
  publishedAt: string;
  author: {
    name: string;
    image?: string;
    bio?: string;
  };
  categories: Array<{
    _id: string;
    title: string;
  }>;
  body: any[];
}

export const MOCK_POSTS: Post[] = [
  {
    _id: "mock-1",
    title: "The Homeowner's Guide to Energy-Efficient Windows: Style Meets Sustainability",
    slug: { current: "homeowners-guide-to-energy-efficient-windows" },
    excerpt: "Eliminate drafts, maximize savings, and upgrade your home's modern appeal. Learn how advanced double-glazing retrofits can transform your living space.",
    publishedAt: "2026-06-25T12:00:00Z",
    mainImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBZivK1z528ePjmTaELFHE9Te32BVIxX3zGpNWoadxoo3ncE-8A8U2fm83pV8acqYk67RTAhw2s08h25O36iu_a5psd6mX8M-aZZ1phZb1qY-pzsQ6w8wRYmaBhuzrio_gnc6eEqZYzxl2NJ4nSNAhdux9sm_Miztt8Ca8pK30rv0LBMFL7lmp4SxhOZQyeZglz4qKVTjIswh8-ru1GVlofihAuj6rCT6wpwBtXq5D9JYS5uIIUGCWXHJeyK1KpAhjcMtXzbUZpJRo",
    author: {
      name: "Sarah Chen",
      bio: "Sarah is a sustainable design specialist with over a decade of experience in residential renovations.",
    },
    categories: [{ _id: "cat-1", title: "Windows" }],
    body: [
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Choosing Your Windows" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Sustainability is at the core of premium residential remodeling. When you upgrade to energy-efficient windows, you're not just reducing your monthly utility bill—you're also enhancing the natural beauty, comfort, and noise insulation of your home.",
          },
        ],
      },
      {
        _type: "block",
        style: "blockquote",
        children: [
          {
            _type: "span",
            text: "Energy-efficient windows don't just reduce your footprint; they enhance the natural beauty and comfort of your home.",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "The Benefits of Double Glazing" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Double-pane windows feature a sealed space between two layers of glass, filled with argon gas. This creates a highly effective thermal barrier that prevents winter heat from escaping and summer heat from invading. Unlike single-pane windows, double-glazed systems maintain a consistent surface temperature, drastically reducing condensation and drafts.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Here are some of the key parameters to keep in mind when choosing windows:",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "• U-Factor: Measures how well the window prevents heat from escaping. Lower is better.",
          },
        ],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "• SHGC (Solar Heat Gain Coefficient): Measures how much heat from the sun enters. Lower is better in warm climates.",
          },
        ],
      },
    ],
  },
  {
    _id: "mock-2",
    title: "Choosing the Perfect Sliding Patio Doors for Your Home",
    slug: { current: "choosing-perfect-sliding-patio-doors" },
    excerpt: "Maximize natural light and open your home to outdoor living. Discover the difference between multi-slide and custom French patio doors.",
    publishedAt: "2026-06-20T12:00:00Z",
    mainImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    author: {
      name: "Marcus Aurelius",
      bio: "Marcus is an architectural engineer specializing in indoor-outdoor transitions and luxury patio configurations.",
    },
    categories: [{ _id: "cat-2", title: "Doors" }],
    body: [
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Opening Up Your Living Space" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Modern home design revolves around the transition between indoor comfort and outdoor serenity. Sliding patio doors act as dynamic glass walls, framing your backyard view while providing seamless architectural access.",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "Multi-Slide vs. Traditional Sliders" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "While traditional two-panel sliders are highly functional and space-saving, multi-slide doors stack multiple panels neatly or tuck them away into pocket walls. This allows for massive, open-air apertures that instantly double your entertaining and living area.",
          },
        ],
      },
    ],
  },
  {
    _id: "mock-3",
    title: "5 Crucial Signs Your Home Needs a Roof Replacement",
    slug: { current: "5-signs-your-home-needs-roof-replacement" },
    excerpt: "Don't wait for a leak to compromise your ceiling. Look out for these five indicators of shingle decay and learn about advanced modern roofing materials.",
    publishedAt: "2026-06-15T12:00:00Z",
    mainImage: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&q=80",
    author: {
      name: "David Miller",
      bio: "David is the Lead Exterior Contractor at Adler Remodeling, with 15+ years of experience protecting homes from severe weather.",
    },
    categories: [{ _id: "cat-3", title: "Roofing" }],
    body: [
      {
        _type: "block",
        style: "h2",
        children: [{ _type: "span", text: "Preventing Water Damage Early" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "Your roof is the first line of defense against the elements. Waiting for an active leak in your living room to address roofing damage can lead to structural rot, toxic mold, and high renovation costs.",
          },
        ],
      },
      {
        _type: "block",
        style: "h3",
        children: [{ _type: "span", text: "What to Look Out For" }],
      },
      {
        _type: "block",
        style: "normal",
        children: [
          {
            _type: "span",
            text: "1. Curling or Buckling Shingles: Shingles that are curling or losing their granules indicate they have reached the end of their functional lifespan.\n2. Balding Spots: Check your gutters for asphalt granules; excessive shedding indicates advanced wear.\n3. Damaged Flashing: Flashing around chimneys and vents can crack, letting moisture directly into the attic.",
          },
        ],
      },
    ],
  },
];

export function getMockPostBySlug(slug: string): Post | undefined {
  return MOCK_POSTS.find((p) => p.slug.current === slug);
}
