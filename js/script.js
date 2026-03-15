/* ============================================
   Pink Aura Beauty – Main JavaScript
   ============================================ */

/* ---- Product Data (no gift sets) ---- */
const PRODUCTS = [
  // ---- LIPS ----
  {
    id: 1, category: 'lips',
    img: 'https://armafbeaute.com/cdn/shop/files/6294015176988-2_c6fecf88-4978-420e-b274-3db20f69746e.jpg?v=1766735794',
    name: 'Velvet Matte Lipstick',
    price: 3500, oldPrice: null,
    rating: 4.5, reviews: 124,
    badge: 'Bestseller', badgeColor: 'bg-warning text-dark',
    description: 'Long-lasting velvet matte formula for up to 12 hours of wear. Enriched with vitamin E and jojoba oil for comfortable all-day wear.',
    shades: ['#E91E8C', '#C2185B', '#AD1457', '#C74B50', '#8B0000', '#FF6B6B']
  },
  {
    id: 2, category: 'lips',
    img: 'https://diff-land.com/cdn/shop/products/Lip_gloss_Plump_Shine_LAB_color_322_750x.jpg?v=1658865452',
    name: 'Plump & Shine Lip Gloss',
    price: 2800, oldPrice: null,
    rating: 4.8, reviews: 89,
    badge: 'New', badgeColor: 'bg-success',
    description: 'High-shine gloss with a plumping peptide complex. Gives lips a fuller, juicier look instantly. Non-sticky and ultra-comfortable.',
    shades: ['#FFB7C5', '#FF8FAB', '#E91E8C', '#FFC0CB']
  },
  {
    id: 3, category: 'lips',
    img: 'https://www.revolutionbeauty.com/dw/image/v2/BCZJ_PRD/on/demandware.static/-/Sites-revbe-master-catalog/default/dw3154041e/images/hi-res/1180177_Revolution%20Satin%20Kiss%20Lipliner%202.jpg',
    name: 'Satin Lip Liner',
    price: 1800, oldPrice: null,
    rating: 4.6, reviews: 67,
    badge: null, badgeColor: '',
    description: 'Creamy, precise lip liner that defines and shapes lips. Waterproof formula prevents feathering all day.',
    shades: ['#C2185B', '#8B0000', '#E91E8C', '#FF6B6B']
  },
  {
    id: 4, category: 'lips',
    img: 'https://www.conecosmetics.com/thumbnail/49/97/6f/1636379234/Velvet%20Matte%20Liquid%20Lipstick%20-%20Raspberry%20-%201000px_1920x1920.jpg',
    name: 'Cushion Liquid Lipstick',
    price: 3200, oldPrice: 3800,
    rating: 4.3, reviews: 51,
    badge: 'Sale', badgeColor: 'bg-danger',
    description: 'Lightweight liquid lipstick with a cushiony feel. Buildable color from sheer to opaque. Infused with hyaluronic acid.',
    shades: ['#E91E8C', '#FF6B9D', '#C2185B', '#AD1457']
  },
  // ---- EYES ----
  {
    id: 5, category: 'eyes',
    img: 'https://dukaan.b-cdn.net/700x700/webp/media/27d62fd8-f2e2-413b-b5b4-d2383f1578d9.jpg',
    name: 'Midnight Glam Palette',
    price: 12500, oldPrice: 15000,
    rating: 4.4, reviews: 67,
    badge: 'Sale', badgeColor: 'bg-danger',
    description: '18 ultra-pigmented shades ranging from everyday naturals to dramatic evening glam. Buttery smooth formula.',
    shades: ['#2C2C2C', '#8B4513', '#D2B48C', '#FFD700', '#9C27B0', '#1A237E']
  },
  {
    id: 6, category: 'eyes',
    img: 'https://sdcdn.io/cl/cl_sku_V4R301_2400x2400_0.jpg',
    name: 'Waterproof Gel Eyeliner',
    price: 4500, oldPrice: null,
    rating: 4.7, reviews: 203,
    badge: 'Bestseller', badgeColor: 'bg-warning text-dark',
    description: 'Intense, waterproof gel eyeliner with a precision brush tip. Budge-proof formula lasts all day.',
    shades: ['#000000', '#3D2B1F', '#1A237E', '#4A0080']
  },
  {
    id: 7, category: 'eyes',
    img: 'https://www.hauslabs.com/cdn/shop/files/Mdsngoiuehrg_8_1944x.jpg?v=1762283586',
    name: 'Lengthening Mascara',
    price: 5800, oldPrice: null,
    rating: 4.9, reviews: 312,
    badge: 'Bestseller', badgeColor: 'bg-warning text-dark',
    description: 'Dramatic lengthening formula that adds up to 50% more length and volume. Fan-like lash effect.',
    shades: ['#000000', '#3D2B1F']
  },
  {
    id: 8, category: 'eyes',
    img: 'https://files.sophie.co.ke/2023/05/1663066892_6996-1_5678.jpg',
    name: 'Glitter Eyeshadow Kit',
    price: 7500, oldPrice: 9000,
    rating: 4.5, reviews: 78,
    badge: 'Sale', badgeColor: 'bg-danger',
    description: '12 intensely glittery shades. Festival-ready, long-lasting formula with primer and setting spray.',
    shades: ['#FFD700', '#C0C0C0', '#E91E8C', '#9C27B0', '#1A237E']
  },
