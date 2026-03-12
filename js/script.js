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
