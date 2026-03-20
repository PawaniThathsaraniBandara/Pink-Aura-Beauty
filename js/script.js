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

  // ---- FACE ----
  {
    id: 9, category: 'face',
    img: 'https://monabella.store/cdn/shop/files/Serum-Foundation-Shell-101.png?v=1707265598&width=1100',
    name: 'Glow Serum Foundation',
    price: 9500, oldPrice: 12000,
    rating: 5.0, reviews: 89,
    badge: 'New', badgeColor: 'bg-success',
    description: 'Lightweight serum foundation with SPF 30. 40 skin-inclusive shades for a dewy, glass-skin finish.',
    shades: ['#FDBCB4', '#EEA590', '#D2886F', '#C06D40', '#8D4A26', '#5C2E00']
  },
  {
    id: 10, category: 'face',
    img: 'https://d1ak51zwgmtslz.cloudfront.net/PRODUCTS_EN/8682536081658_1.jpg',
    name: 'Invisible Setting Powder',
    price: 6500, oldPrice: null,
    rating: 4.6, reviews: 145,
    badge: null, badgeColor: '',
    description: 'Finely milled translucent powder that sets makeup for 16+ hours. Blurs pores and controls shine.',
    shades: ['#F5E6D3', '#E8D5B5', '#C4A882']
  },
  {
    id: 11, category: 'face',
    img: 'https://kaleidocosmetics.com/cdn/shop/products/skinluminate1.jpg?v=1663143623&width=823',
    name: 'Peachy Blush Palette',
    price: 5200, oldPrice: null,
    rating: 4.8, reviews: 167,
    badge: 'New', badgeColor: 'bg-success',
    description: '6 harmonious blush shades from soft peach to deep berry. Infused with vitamin E and rose extract.',
    shades: ['#FFB7A5', '#E91E8C', '#FF6B6B', '#C2185B']
  },
  {
    id: 12, category: 'face',
    img: 'https://static.beautytocare.com/cdn-cgi/image/width=1440,height=1200,f=auto/media/catalog/product//m/a/maybelline-face-studio-strobing-stick-illuminating-highlighter-100-light-iridescent-9g.jpg',
    name: 'Strobing Highlighter',
    price: 4800, oldPrice: null,
    rating: 4.7, reviews: 98,
    badge: 'Bestseller', badgeColor: 'bg-warning text-dark',
    description: 'Blinding highlight in 4 luminous shades. Multi-reflective pearls capture light from every angle.',
    shades: ['#FFD700', '#FFDBB5', '#FFB6C1', '#C0C0C0']
  },

  // ---- SKINCARE ----
  {
    id: 13, category: 'skincare',
    img: 'https://www.merfuorganics.com/cdn/shop/files/8cde5162-b30e-4fc3-a568-8d3070c2595a_fd3a6db0-3b1f-4d11-a80d-8da41f6ef182.png?v=1766794319&width=1445',
    name: 'Rose Glow Serum',
    price: 8500, oldPrice: null,
    rating: 4.5, reviews: 203,
    badge: 'New', badgeColor: 'bg-success',
    description: 'Rose-infused serum with hyaluronic acid, vitamin C, and retinol. Brightens and plumps in just 2 weeks.',
    shades: null
  },
  {
    id: 14, category: 'skincare',
    img: 'https://www.saintandserenity.com/cdn/shop/files/Cloud_Cleanser_22.png?v=1751472183&width=1200',
    name: 'Cloud Foam Cleanser',
    price: 4200, oldPrice: null,
    rating: 4.7, reviews: 189,
    badge: null, badgeColor: '',
    description: 'Gentle foaming cleanser that removes makeup and excess oil. pH-balanced with aloe vera and chamomile.',
    shades: null
  },
  {
    id: 15, category: 'skincare',
    img: 'https://i0.wp.com/post.healthline.com/wp-content/uploads/2022/01/1826371-Neutrogena-Hydro-Boost-Water-Gel-Review-1296x728-Header-c0dcdf.jpg?w=1575',
    name: 'Hydra-Boost Moisturizer',
    price: 7800, oldPrice: null,
    rating: 4.8, reviews: 156,
    badge: 'Bestseller', badgeColor: 'bg-warning text-dark',
    description: '72-hour hydration moisturizer with ceramides, peptides, and hyaluronic acid.',
    shades: null
  },
  {
    id: 16, category: 'skincare',
    img: 'https://www.blushme.lk/cdn/shop/files/MEDICUBE-Deep-Lifting-Peptide-Eye-Cream-for-Face-1_800x_1d87ea30-9498-4a95-b441-410932fb25b8.png?v=1762490933&width=1080',
    name: 'Peptide Eye Cream',
    price: 9200, oldPrice: 11000,
    rating: 4.6, reviews: 94,
    badge: 'Sale', badgeColor: 'bg-danger',
    description: 'Targets dark circles, puffiness, and fine lines. Cooling applicator tip for instant de-puffing.',
    shades: null
  },

  // ---- FRAGRANCE ----
  {
    id: 17, category: 'fragrance',
    img: 'https://elansor.com/cdn/shop/files/Imperial_Aura_by_Elansor_100ml_Vanilla_Rose_Perfume_for_Women_lansor.jpg?v=1738140321',
    name: 'Aura Rose EDP',
    price: 18500, oldPrice: null,
    rating: 4.9, reviews: 67,
    badge: 'New', badgeColor: 'bg-success',
    description: 'Intoxicating blend of Bulgarian rose, peony, and sandalwood. A feminine floral-oriental scent that lasts 8+ hours.',
    shades: null
  },
  {
    id: 18, category: 'fragrance',
    img: 'https://kallos.co/cdn/shop/files/Nuoc_Hoa_HERA_Velvet_Night_Eau_De_Parfum_For_Women_1.jpg?v=1730891468&width=1200',
    name: 'Velvet Night EDT',
    price: 15200, oldPrice: 19000,
    rating: 4.7, reviews: 43,
    badge: 'Sale', badgeColor: 'bg-danger',
    description: 'Notes of black cherry, jasmine, and amber musk. Sensual, sophisticated, and unforgettable.',
    shades: null
  },
  {
    id: 19, category: 'fragrance',
    img: 'https://teonaparfum.com/storage/2023/12/pink-sugar.jpg',
    name: 'Pink Sugar Body Mist',
    price: 3500, oldPrice: null,
    rating: 4.5, reviews: 112,
    badge: null, badgeColor: '',
    description: 'Pink sugar, vanilla, and white musk. Light and playful – perfect for everyday freshness.',
    shades: null
  }
];

/* ---- State ---- */
let cart = JSON.parse(localStorage.getItem('pinkAuraCart')) || [];
let activeFilter = 'all';
let activeSort = 'featured';
let modalProduct = null;
let currentUser = JSON.parse(localStorage.getItem('pinkAuraUser')) || null;

/* ---- Auth ---- */
function handleLogin(e) {
  e.preventDefault();
  const email   = document.getElementById('loginEmail').value.trim().toLowerCase();
  const pass    = document.getElementById('loginPassword').value;
  const errorEl = document.getElementById('loginError');
  if (errorEl) errorEl.style.display = 'none';

  const fd = new FormData();
  fd.append('loginEmail', email);
  fd.append('loginPassword', pass);

  fetch('auth/login.php', { method: 'POST', body: fd, headers: { 'X-Requested-With': 'XMLHttpRequest' } })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        localStorage.setItem('pinkAuraUser', JSON.stringify(data.user));
        window.location.href = 'products.html';
      } else {
        if (errorEl) { errorEl.textContent = data.message || 'Invalid email or password.'; errorEl.style.display = 'block'; }
      }
    })
    .catch(() => {
      // Offline fallback: check localStorage
      let users = JSON.parse(localStorage.getItem('pinkAuraUsers')) || [];
      let user  = users.find(u => u.email.toLowerCase() === email && u.password === pass);
      if (user) {
        localStorage.setItem('pinkAuraUser', JSON.stringify(user));
        window.location.href = 'products.html';
      } else {
        if (errorEl) { errorEl.textContent = 'Invalid email or password.'; errorEl.style.display = 'block'; }
      }
    });
}

function handleRegister(e) {
  e.preventDefault();
  const name    = document.getElementById('regName').value.trim();
  const email   = document.getElementById('regEmail').value.trim().toLowerCase();
  const phone   = document.getElementById('regPhone').value.trim();
  const address = document.getElementById('regAddress').value.trim();
  const pass    = document.getElementById('regPassword').value;
  const errorEl = document.getElementById('regError');

  if (errorEl) errorEl.style.display = 'none';

  // Client-side validation
  if (!name || !email || !phone || !address || !pass) {
    if (errorEl) { errorEl.textContent = 'Please fill in all fields.'; errorEl.style.display = 'block'; } return;
  }
  if (pass.length < 6) {
    if (errorEl) { errorEl.textContent = 'Password must be at least 6 characters.'; errorEl.style.display = 'block'; } return;
  }

  const fd = new FormData();
  fd.append('regName', name);
  fd.append('regEmail', email);
  fd.append('regPhone', phone);
  fd.append('regAddress', address);
  fd.append('regPassword', pass);

  const btn = document.querySelector('#registerForm button[type="submit"]');
  if (btn) { btn.textContent = '⏳ Saving...'; btn.disabled = true; }

  fetch('auth/register.php', { method: 'POST', body: fd, headers: { 'X-Requested-With': 'XMLHttpRequest' } })
    .then(res => res.json())
    .then(data => {
      if (btn) { btn.textContent = 'Create Account'; btn.disabled = false; }
      if (data.success) {
        // Save to localStorage so nav updates immediately
        localStorage.setItem('pinkAuraUser', JSON.stringify(data.user));
        window.location.href = 'products.html';
      } else {
        if (errorEl) { errorEl.textContent = data.message || 'Registration failed.'; errorEl.style.display = 'block'; }
      }
    })
    .catch(() => {
      if (btn) { btn.textContent = 'Create Account'; btn.disabled = false; }
      // Offline fallback: save to localStorage only
      let users = JSON.parse(localStorage.getItem('pinkAuraUsers')) || [];
      if (users.find(u => u.email.toLowerCase() === email)) {
        if (errorEl) { errorEl.textContent = 'This email is already registered!'; errorEl.style.display = 'block'; } return;
      }
      let newUser = { name, email, phone, address, password: pass };
      users.push(newUser);
      localStorage.setItem('pinkAuraUsers', JSON.stringify(users));
      localStorage.setItem('pinkAuraUser', JSON.stringify(newUser));
      window.location.href = 'products.html';
    });
}

function handleLogout() {
  localStorage.removeItem('pinkAuraUser');
  currentUser = null;
  fetch('auth/logout.php').catch(() => {});
  window.location.href = 'index.html';
}

/* ---- Cart ---- */
function addToCart(name) {
  if (!currentUser) {
    window.location.href = 'login.html?msg=login_required';
    return;
  }
  const product = PRODUCTS.find(p => p.name === name);
  if (!product) return;

  const existing = cart.find(item => item.id === product.id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      img: product.img,
      qty: 1
    });
  }
  saveCart();
  updateCart();
  showToast(name + ' added to cart!');
}

function saveCart() {
  localStorage.setItem('pinkAuraCart', JSON.stringify(cart));
}

function updateCart() {
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  document.querySelectorAll('#cartCount').forEach(el => el.textContent = count);
  renderCart();
  renderFullCart(); // For the dedicated cart page
}

function renderCart() {
  const container = document.getElementById('cartItems');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = '<div class="text-center py-4 text-muted">Your cart is empty.</div>';
    if (document.getElementById('cartTotal')) document.getElementById('cartTotal').textContent = 'Rs.0';
    if (document.getElementById('cartSubtotal')) document.getElementById('cartSubtotal').textContent = 'Rs.0';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img src="${item.img}" class="cart-item-img" alt="${item.name}">
      <div class="cart-item-info">
        <h6>${item.name}</h6>
        <div class="price">Rs.${item.price.toLocaleString()}</div>
        <div class="cart-qty-ctrl mt-1">
          <button onclick="updateCartQty(${item.id}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="updateCartQty(${item.id}, 1)">+</button>
        </div>
      </div>
      <div class="remove-item" onclick="removeFromCart(${item.id})">
        <i class="fas fa-trash-alt"></i>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  if (document.getElementById('cartSubtotal')) document.getElementById('cartSubtotal').textContent = 'Rs.' + subtotal.toLocaleString();
  if (document.getElementById('cartTotal')) document.getElementById('cartTotal').textContent = 'Rs.' + subtotal.toLocaleString();
}

function renderFullCart() {
  const container = document.getElementById('fullCartItems');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="text-center py-5">
        <div style="font-size: 4rem; opacity: 0.2; margin-bottom: 20px;">🛒</div>
        <h4>Your cart is empty</h4>
        <p class="text-muted">Looks like you haven't added anything to your cart yet.</p>
        <a href="products.html" class="btn-pink mt-3">Start Shopping</a>
      </div>`;
    if (document.getElementById('pageSubtotal')) document.getElementById('pageSubtotal').textContent = 'Rs.0';
    if (document.getElementById('pageTotal')) document.getElementById('pageTotal').textContent = 'Rs.0';
    return;
  }

  container.innerHTML = cart.map(item => `
    <div class="card mb-3 p-3 border-0 shadow-sm" style="border-radius: 15px;">
      <div class="row align-items-center g-3">
        <div class="col-3 col-md-2">
          <img src="${item.img}" class="img-fluid rounded" alt="${item.name}">
        </div>
        <div class="col-6 col-md-6">
          <h6 class="mb-1">${item.name}</h6>
          <div class="price text-pink fw-bold">Rs.${item.price.toLocaleString()}</div>
        </div>
        <div class="col-3 col-md-4 d-flex align-items-center justify-content-end gap-3 flex-wrap">
          <div class="cart-qty-ctrl">
            <button onclick="updateCartQty(${item.id}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="updateCartQty(${item.id}, 1)">+</button>
          </div>
          <div class="remove-item ms-3" onclick="removeFromCart(${item.id})" style="cursor: pointer; color: #bbb;">
            <i class="fas fa-trash-alt"></i>
          </div>
        </div>
      </div>
    </div>
  `).join('');

  const subtotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  if (document.getElementById('pageSubtotal')) document.getElementById('pageSubtotal').textContent = 'Rs.' + subtotal.toLocaleString();
  if (document.getElementById('pageTotal')) document.getElementById('pageTotal').textContent = 'Rs.' + subtotal.toLocaleString();

  // Update checkout preview if on cart page
  const preview = document.getElementById('checkoutPreview');
  if (preview) {
    preview.innerHTML = cart.map(item => `
      <div class="d-flex justify-content-between small mb-1">
        <span>${item.name} (x${item.qty})</span>
        <span>Rs.${(item.price * item.qty).toLocaleString()}</span>
      </div>
    `).join('');
    document.getElementById('checkoutTotal').textContent = 'Rs.' + subtotal.toLocaleString();
  }
}

/* ---- Checkout Flow ---- */
function showCheckout() {
  if (cart.length === 0) {
    showToast('Your cart is empty!');
    return;
  }
  document.getElementById('cartMainView').classList.add('d-none');
  document.getElementById('checkoutView').classList.remove('d-none');
  window.scrollTo(0, 0);
}

function hideCheckout() {
  document.getElementById('checkoutView').classList.add('d-none');
  document.getElementById('cartMainView').classList.remove('d-none');
  window.scrollTo(0, 0);
}

function placeOrder() {
  const form = document.getElementById('checkoutForm');
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const subtotal   = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const storedUser = JSON.parse(localStorage.getItem('pinkAuraUser') || 'null');

  const btn = document.querySelector('#checkoutView button.btn-pink');
  const originalText = btn ? btn.textContent : '';
  if (btn) { btn.textContent = '⏳ Processing...'; btn.disabled = true; }

  const fd = new FormData();
  fd.append('total_amount', subtotal);
  if (storedUser && storedUser.id) fd.append('user_id', storedUser.id);

  function finishOrder(orderLabel) {
    const displayId = document.getElementById('displayOrderId');
    if (displayId) displayId.textContent = orderLabel;
    cart = [];
    saveCart();
    updateCart();
    document.getElementById('checkoutView').classList.add('d-none');
    document.getElementById('orderSuccessView').classList.remove('d-none');
    window.scrollTo(0, 0);
    if (btn) { btn.textContent = originalText; btn.disabled = false; }
  }

  fetch('place_order.php', {
    method: 'POST',
    body: fd,
    headers: { 'X-Requested-With': 'XMLHttpRequest' }
  })
  .then(res => res.json())
  .then(data => {
    if (data.success) {
      finishOrder('#PAB-' + (data.order_id || Math.floor(Math.random() * 90000 + 10000)));
    } else {
      alert(data.message || 'Error placing order. Please try again.');
      if (btn) { btn.textContent = originalText; btn.disabled = false; }
    }
  })
  .catch(() => {
    // Offline / no-server fallback: simulate success
    finishOrder('#PAB-' + Math.floor(Math.random() * 90000 + 10000));
  });
}


function updateCartQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty < 1) {
    removeFromCart(id);
  } else {
    saveCart();
    updateCart();
  }
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  updateCart();
}

function openCart() {
  const modal = new bootstrap.Modal(document.getElementById('cartModal'));
  modal.show();
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMsg');
  if (!toast) return;
  toastMsg.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ---- Scroll events ---- */
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (nav) nav.style.boxShadow = window.scrollY > 30 ? '0 4px 20px rgba(0,0,0,0.1)' : '';
  // const btn = document.getElementById('backTop');
  // if (btn) btn.classList.toggle('show', window.scrollY > 350);
});

/* ---- Newsletter ---- */
function initNewsletter() {
  const form = document.getElementById('newsletterForm');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('nlEmail').value.trim();
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
    showToast('Subscribed! Check inbox for 15% off.');
    form.reset();
  });
}

/* ---- Stars helper ---- */
function starsHtml(rating) {
  let s = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= Math.floor(rating)) s += '★';
    else if (i - rating < 1) s += '½';
    else s += '☆';
  }
  return s;
}

/* ---- Build product card with image ---- */
function buildCard(p) {
  const badge = p.badge
    ? `<span class="badge ${p.badgeColor}" style="position:absolute;top:10px;left:10px;font-size:0.7rem;z-index:2;">${p.badge}</span>`
    : '';
  const oldPrice = p.oldPrice
    ? `<span class="old-price">Rs.${p.oldPrice.toLocaleString()}</span>`
    : '';
  return `
    <div class="col-6 col-md-4 col-lg-3 product-item" data-cat="${p.category}">
      <div class="product-card">
        <div class="product-img" onclick="openModal(${p.id})" style="cursor:pointer; position:relative; padding:0; overflow:hidden;">
          <img src="${p.img}" alt="${p.name}" 
               style="width:100%;height:180px;object-fit:cover;display:block;"
               onerror="this.style.display='none';this.parentElement.style.fontSize='3.5rem';this.parentElement.innerHTML+='🌸';" />
          ${badge}
        </div>
        <div class="product-body">
          <div class="cat-tag">${p.category.charAt(0).toUpperCase() + p.category.slice(1)}</div>
          <h5 onclick="openModal(${p.id})" style="cursor:pointer;">${p.name}</h5>
          <div class="stars">${starsHtml(p.rating)} <span>(${p.reviews})</span></div>
          <div class="d-flex align-items-center justify-content-between">
            <div><span class="price">Rs.${p.price.toLocaleString()}</span>${oldPrice}</div>
            <button class="add-btn" onclick="addToCart('${p.name.replace(/'/g, "\\'")}')">+ Add</button>
          </div>
        </div>
      </div>
    </div>`;
}

/* ---- Render products ---- */
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  const emptyState = document.getElementById('emptyState');
  const visibleCount = document.getElementById('visibleCount');
  if (!grid) return;

  let list = activeFilter === 'all' ? [...PRODUCTS] : PRODUCTS.filter(p => p.category === activeFilter);

  if (activeSort === 'price-low') list.sort((a, b) => a.price - b.price);
  else if (activeSort === 'price-high') list.sort((a, b) => b.price - a.price);
  else if (activeSort === 'rating') list.sort((a, b) => b.rating - a.rating);

  grid.innerHTML = list.map(buildCard).join('');
  if (emptyState) emptyState.style.display = list.length ? 'none' : 'block';
  if (visibleCount) visibleCount.textContent = list.length;
}

/* ---- Filter & Sort ---- */
function initFilters() {
  const tabs = document.querySelectorAll('.filter-tab');
  if (!tabs.length) return;

  const urlParams = new URLSearchParams(window.location.search);
  const cat = urlParams.get('cat');
  if (cat) activeFilter = cat;

  tabs.forEach(tab => {
    if (tab.getAttribute('data-filter') === activeFilter) {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
    }
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activeFilter = tab.getAttribute('data-filter');
      renderProducts();
    });
  });

  const sortEl = document.getElementById('sortSelect');
  if (sortEl) {
    sortEl.addEventListener('change', () => {
      activeSort = sortEl.value;
      renderProducts();
    });
  }

  renderProducts();
}

/* ---- Product Modal ---- */
function openModal(productId) {
  const p = PRODUCTS.find(x => x.id === productId);
  if (!p) return;
  modalProduct = p;

  document.getElementById('mTitle').textContent = p.name;

  // Modal image
  const mImg = document.getElementById('mImg');
  if (mImg) {
    mImg.src = p.img;
    mImg.alt = p.name;
  }

  document.getElementById('mBrand').textContent = 'PINK AURA';
  document.getElementById('mName').textContent = p.name;
  document.getElementById('mStars').textContent = starsHtml(p.rating) + ' (' + p.reviews + ' reviews)';
  document.getElementById('mPrice').textContent = 'Rs.' + p.price.toLocaleString();

  const oldEl = document.getElementById('mOld');
  if (oldEl) oldEl.textContent = p.oldPrice ? 'Rs.' + p.oldPrice.toLocaleString() : '';

  document.getElementById('mDesc').textContent = p.description;

  const shadesWrap = document.getElementById('mShadesWrap');
  const shadesEl = document.getElementById('mShades');
  if (shadesWrap && shadesEl) {
    if (p.shades && p.shades.length) {
      shadesWrap.style.display = '';
      shadesEl.innerHTML = p.shades.map((c, i) =>
        `<span class="shade-dot ${i === 0 ? 'active' : ''}" style="background:${c};"
          onclick="document.querySelectorAll('.shade-dot').forEach(d=>d.classList.remove('active'));this.classList.add('active');"
          title="${c}"></span>`
      ).join('');
    } else {
      shadesWrap.style.display = 'none';
    }
  }

  document.getElementById('qtyVal').value = 1;
  const modal = new bootstrap.Modal(document.getElementById('productModal'));
  modal.show();
}

function changeQty(delta) {
  const input = document.getElementById('qtyVal');
  let val = parseInt(input.value) + delta;
  if (val < 1) val = 1;
  if (val > 10) val = 10;
  input.value = val;
}

function modalAddCart() {
  if (!currentUser) {
    window.location.href = 'login.html?msg=login_required';
    return;
  }
  if (!modalProduct) return;
  const qty = parseInt(document.getElementById('qtyVal').value);

  const existing = cart.find(item => item.id === modalProduct.id);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      id: modalProduct.id,
      name: modalProduct.name,
      price: modalProduct.price,
      img: modalProduct.img,
      qty: qty
    });
  }

  updateCart();
  showToast(modalProduct.name + ' (×' + qty + ') added to cart!');
  bootstrap.Modal.getInstance(document.getElementById('productModal')).hide();
}


/* ---- Contact Form Validation ---- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const msg = document.getElementById('message');
  const charCount = document.getElementById('charCount');
  if (msg && charCount) {
    msg.addEventListener('input', () => {
      const len = msg.value.length;
      charCount.textContent = len + ' / 500';
      if (len > 500) msg.value = msg.value.substring(0, 500);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: 'firstName', errId: 'firstNameErr', check: v => v.trim().length >= 2 },
      { id: 'lastName', errId: 'lastNameErr', check: v => v.trim().length >= 2 },
      { id: 'email', errId: 'emailErr', check: v => /\S+@\S+\.\S+/.test(v) },
      { id: 'subject', errId: 'subjectErr', check: v => v !== '' },
      { id: 'message', errId: 'messageErr', check: v => v.trim().length >= 10 }
    ];

    fields.forEach(f => {
      const el = document.getElementById(f.id);
      const errEl = document.getElementById(f.errId);
      if (!el || !errEl) return;
      const ok = f.check(el.value);
      el.classList.toggle('error', !ok);
      errEl.classList.toggle('show', !ok);
      if (!ok) valid = false;
    });

    const priv = document.getElementById('privacyCheck');
    const privErr = document.getElementById('privacyErr');
    if (priv && privErr) {
      const ok = priv.checked;
      privErr.classList.toggle('show', !ok);
      if (!ok) valid = false;
    }

    if (!valid) return;

    const btn = document.getElementById('submitBtn');
    btn.textContent = '⏳ Sending...';
    btn.disabled = true;

    const fd = new FormData();
    fd.append('firstName', document.getElementById('firstName').value);
    fd.append('lastName', document.getElementById('lastName').value);
    fd.append('email', document.getElementById('email').value);
    fd.append('subject', document.getElementById('subject').value);
    fd.append('message', document.getElementById('message').value);

    fetch('contact.php', {
      method: 'POST',
      body: fd,
      headers: { 'X-Requested-With': 'XMLHttpRequest' }
    })
    .then(res => res.json())
    .then(data => {
      btn.textContent = '📩 Send Message';
      btn.disabled = false;
      if (data.success) {
        form.reset();
        if (charCount) charCount.textContent = '0 / 500';
        const successMsg = document.getElementById('successMsg');
        if (successMsg) {
          successMsg.classList.remove('d-none');
          setTimeout(() => successMsg.classList.add('d-none'), 5000);
        }
      } else {
        alert(data.message || 'Error saving message. Please try again.');
      }
    })
    .catch(err => {
      console.error('Contact form error:', err);
      btn.textContent = '📩 Send Message';
      btn.disabled = false;
      alert('Error connecting to the server. Please check your connection.');
    });
  });
}

function clearForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;
  form.reset();
  form.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('error'));
  form.querySelectorAll('.error-msg').forEach(el => el.classList.remove('show'));
  const successMsg = document.getElementById('successMsg');
  if (successMsg) successMsg.classList.add('d-none');
  const cc = document.getElementById('charCount');
  if (cc) cc.textContent = '0 / 500';
}

/* ---- Home page featured cards ---- */
function initHomeCards() {
  // Update featured cards to use images
  const featuredData = [
    { id: 1, img: 'https://images.unsplash.com/photo-1586717791821-3f44a563cc4c?q=80&w=600&auto=format&fit=crop' },
    { id: 9, img: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=600&auto=format&fit=crop' },
    { id: 5, img: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?q=80&w=600&auto=format&fit=crop' },
    { id: 13, img: 'https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?q=80&w=600&auto=format&fit=crop' }
  ];

  featuredData.forEach((item, i) => {
    const imgContainer = document.querySelector(`.product-card[data-id="${i}"] .product-img`);
    if (imgContainer) {
      imgContainer.innerHTML = `<img src="${item.img}" alt="product" style="width:100%;height:180px;object-fit:cover;display:block;" />`;
      imgContainer.style.cursor = 'pointer';
      imgContainer.onclick = () => openModal(item.id);
    }
  });
}

/* ---- Navigation Auth Toggle ---- */
function updateNavAuth() {
  const navs = document.querySelectorAll('.navbar-nav');
  navs.forEach(nav => {
    let authItem = nav.querySelector('#authNavItem');
    if (authItem) authItem.remove();

    const authHTML = currentUser
      ? `<li class="nav-item ms-2" id="authNavItem"><a href="#" onclick="handleLogout()" class="nav-link fw-bold text-danger"><i class="fas fa-sign-out-alt"></i> Logout</a></li>`
      : `<li class="nav-item ms-2" id="authNavItem"><a href="login.html" class="nav-link fw-bold" style="color: #c2185b;"><i class="fas fa-user"></i> Login</a></li>`;

    const cartLi = nav.querySelector('li:last-child');
    if (cartLi) {
      cartLi.insertAdjacentHTML('beforebegin', authHTML);
    }
  });
}

/* ---- DOMContentLoaded ---- */
document.addEventListener('DOMContentLoaded', function () {
  updateCart();
  updateNavAuth();
  initNewsletter();
  initFilters();
  initContactForm();
});

/* ---- Globals ---- */
window.addToCart = addToCart;
window.openModal = openModal;
window.changeQty = changeQty;
window.modalAddCart = modalAddCart;
window.clearForm = clearForm;
window.openCart = openCart;
window.updateCartQty = updateCartQty;
window.removeFromCart = removeFromCart;
window.showCheckout = showCheckout;
window.hideCheckout = hideCheckout;
window.placeOrder = placeOrder;
window.handleLogin = handleLogin;
window.handleRegister = handleRegister;
window.handleLogout = handleLogout;

