// =========================================================
// BASE DE DATOS DE PRODUCTOS
// =========================================================

const products = [

    {
        id: 1,
        name: "Caja de Bombones & Trufas Gourmet",
        category: "chocolates",
        badge: "Especialidad 🍫",
        badgeColor: "bg-amber-600 text-white",
        price: 14500,
        unit: "caja x 12 u.",
        desc: "Surtido artesanal de bombones rellenos de gianduja, caramelo salado, trufas 70% cacao y frambuesa.",
        image: "imagenes/caja_de_bombones_trufas_etc.webp"
    },

    {
        id: 2,
        name: "Alfajor Bañado Chocolate Negro",
        category: "alfajores",
        badge: "+1000 Aura ✨",
        badgeColor: "bg-cacao-800 text-amber-300",
        price: 1350,
        unit: "unidad",
        desc: "Relleno super abundante de dulce de leche repostero premium, baño grueso de cobertura 70% cacao.",
        image: "imagenes/alfajor_banado_chocolate.webp"
    },

    {
        id: 3,
        name: "Alfajorcitos de Maicena Tradicionales",
        category: "alfajores",
        badge: "Clásico Artesanal",
        badgeColor: "bg-amber-100 text-amber-800",
        price: 9500,
        unit: "docena",
        desc: "Masa suave que se deshace en la boca, generoso dulce de leche artesanal y lluvia de coco rallado.",
        image: "imagenes/alfajores_maicena.webp"
    },

    {
        id: 4,
        name: "Combo Mesa Dulce Temática",
        category: "mesas-dulces",
        badge: "Ideal Cumpleaños",
        badgeColor: "bg-pink-100 text-pink-800",
        price: 28000,
        unit: "combo 20 pers.",
        desc: "Incluye 12 cupcakes temáticos decorados + 12 galletas personalizadas + 12 alfajorcitos.",
        image: "imagenes/mesa_tematica.webp"
    },

    {
        id: 5,
        name: "Vaso Shots Dulces Variados",
        category: "mesas-dulces",
        badge: "Super Popular",
        badgeColor: "bg-rose-500 text-white",
        price: 16000,
        unit: "docena",
        desc: "Vasitos individuales en cristal: Chocotorta, Lemon Pie, Cheesecake de Frutilla y Mousse de Choco.",
        image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 6,
        name: "Sándwiches de Miga Especiales",
        category: "salados",
        badge: "Mesa Salada",
        badgeColor: "bg-emerald-600 text-white",
        price: 18000,
        unit: "docena",
        desc: "Triples súper frescos: Jamón y queso, pollo con ciboulette y lomito ahumado con huevo.",
        image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=600&q=80"
    },

    {
        id: 7,
        name: "Chipá Artesanal Calentito",
        category: "salados",
        badge: "Recién Horneado",
        badgeColor: "bg-amber-500 text-cacao-900",
        price: 11000,
        unit: "docena",
        desc: "Bolitas de queso elaboradas con tres quesos seleccionados y fécula de mandioca pura.",
        image: "imagenes/chipa.webp"
    },

    {
        id: 8,
        name: "Box Regalo Merienda Completa",
        category: "boxes",
        badge: "Regalo Sorpresa",
        badgeColor: "bg-purple-600 text-white",
        price: 22000,
        unit: "caja regalo",
        desc: "Incluye bebida/infusión, sándwiches de miga, alfajor bañado, chipás y cookies artesanales.",
        image: "imagenes/mesa_dulce.webp"
    }

];


// =========================================================
// CARRITO
// =========================================================

let cart = [];


// =========================================================
// RENDERIZADO DE PRODUCTOS
// =========================================================

function renderProducts(items) {

    const grid = document.getElementById("products-grid");

    if (!grid) return;


    grid.innerHTML = items.map(product => `

        <div class="bg-white rounded-2xl overflow-hidden border border-cacao-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group">

            <div>

                <div class="relative h-48 overflow-hidden bg-cacao-50">

                    <img
                        src="${product.image}"
                        alt="${product.name}"
                        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=600&q=80';"
                    >

                    <span class="absolute top-3 left-3 ${product.badgeColor} text-[11px] font-bold px-2.5 py-1 rounded-full shadow">

                        ${product.badge}

                    </span>

                </div>


                <div class="p-4">

                    <h3 class="font-serif font-bold text-base text-cacao-900 group-hover:text-amber-600 transition-colors">

                        ${product.name}

                    </h3>


                    <p class="text-xs text-cacao-500 mt-1 line-clamp-2">

                        ${product.desc}

                    </p>

                </div>

            </div>


            <div class="p-4 pt-0 flex items-center justify-between gap-3 border-t border-cacao-50 mt-2">

                <div class="min-w-0">

                    <span class="text-xs text-cacao-400">
                        Precio / ${product.unit}
                    </span>

                    <p class="font-bold text-cacao-900 text-lg">
                        $${product.price.toLocaleString("es-AR")}
                    </p>

                </div>


                <button
                    onclick="addToCart(${product.id})"
                    class="shrink-0 bg-cacao-800 hover:bg-amber-600 text-white text-xs font-bold px-3.5 py-2 rounded-xl transition-colors flex items-center gap-1.5 shadow"
                >

                    <i class="fa-solid fa-plus text-xs"></i>

                    AGREGAR

                </button>

            </div>

        </div>

    `).join("");

}


// =========================================================
// FILTRADO
// =========================================================

function filterCategory(category, event) {

    document.querySelectorAll("#category-tabs button").forEach(button => {

        button.className =
            "cat-btn px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all bg-cacao-50 text-cacao-800 hover:bg-cacao-100";

    });


    if (event && event.currentTarget) {

        event.currentTarget.className =
            "cat-btn active px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all bg-cacao-800 text-amber-300 shadow-md";

    }


    if (category === "todos") {

        renderProducts(products);

    } else {

        const filtered = products.filter(
            product => product.category === category
        );

        renderProducts(filtered);

    }

}


// =========================================================
// AGREGAR AL CARRITO
// =========================================================

function addToCart(productId) {

    const product = products.find(
        product => product.id === productId
    );

    if (!product) return;


    const existing = cart.find(
        item => item.id === productId
    );


    if (existing) {

        existing.qty++;

    } else {

        cart.push({
            ...product,
            qty: 1
        });

    }


    updateCartUI();

    openCartModal();

}


// =========================================================
// ACTUALIZAR CANTIDAD
// =========================================================

function updateCartQty(productId, delta) {

    const item = cart.find(
        product => product.id === productId
    );


    if (!item) return;


    item.qty += delta;


    if (item.qty <= 0) {

        cart = cart.filter(
            product => product.id !== productId
        );

    }


    updateCartUI();

}


// =========================================================
// ACTUALIZAR INTERFAZ DEL CARRITO
// =========================================================

function updateCartUI() {

    const counter = document.getElementById("cart-counter");
    const container = document.getElementById("cart-items-container");
    const totalElement = document.getElementById("cart-total-price");


    if (!counter || !container || !totalElement) return;


    const totalItems = cart.reduce(
        (total, item) => total + item.qty,
        0
    );


    counter.innerText = totalItems;


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="text-center py-12 text-cacao-400 space-y-2">

                <i class="fa-solid fa-basket-shopping text-4xl text-cacao-200"></i>

                <p class="text-sm font-medium">
                    Tu carrito está vacío
                </p>

                <p class="text-xs">
                    ¡Elegí algo rico para sumar a tu lista!
                </p>

            </div>

        `;

    } else {

        container.innerHTML = cart.map(item => `

            <div class="flex items-center justify-between gap-3 bg-cacao-50 p-3 rounded-xl border border-cacao-100">

                <div class="flex items-center gap-3 min-w-0">

                    <img
                        src="${item.image}"
                        alt="${item.name}"
                        class="w-12 h-12 shrink-0 rounded-lg object-cover"
                        onerror="this.style.display='none'"
                    >

                    <div class="min-w-0">

                        <p class="font-bold text-xs text-cacao-900">
                            ${item.name}
                        </p>

                        <p class="text-[11px] text-cacao-500">
                            $${item.price.toLocaleString("es-AR")} c/u
                        </p>

                    </div>

                </div>


                <div class="flex items-center gap-2 shrink-0">

                    <button
                        onclick="updateCartQty(${item.id}, -1)"
                        class="w-6 h-6 rounded-md bg-white border border-cacao-200 text-cacao-800 text-xs font-bold"
                    >
                        -
                    </button>

                    <span class="text-xs font-bold w-4 text-center">
                        ${item.qty}
                    </span>

                    <button
                        onclick="updateCartQty(${item.id}, 1)"
                        class="w-6 h-6 rounded-md bg-white border border-cacao-200 text-cacao-800 text-xs font-bold"
                    >
                        +
                    </button>

                </div>

            </div>

        `).join("");

    }


    const totalPrice = cart.reduce(
        (total, item) => total + (item.price * item.qty),
        0
    );


    totalElement.innerText =
        `$${totalPrice.toLocaleString("es-AR")}`;

}


// =========================================================
// ABRIR CARRITO
// =========================================================

function openCartModal() {

    const modal = document.getElementById("cart-modal");

    if (modal) {

        modal.classList.remove("hidden");

        document.body.classList.add("overflow-hidden");

    }

}


// =========================================================
// CERRAR CARRITO
// =========================================================

function closeCartModal() {

    const modal = document.getElementById("cart-modal");

    if (modal) {

        modal.classList.add("hidden");

        document.body.classList.remove("overflow-hidden");

    }

}


// =========================================================
// ENVIAR CARRITO A WHATSAPP
// =========================================================

function sendCartToWhatsApp() {

    if (cart.length === 0) {

        alert("Agregá al menos un producto al carrito");

        return;

    }


    let msg =
        "¡Hola Dulzura & Co.! 🍫 Quisiera realizar el siguiente pedido:\n\n";


    let total = 0;


    cart.forEach(item => {

        const subtotal = item.price * item.qty;

        total += subtotal;


        msg +=
            `• ${item.name} x${item.qty} (${item.unit}) -> $${subtotal.toLocaleString("es-AR")}\n`;

    });


    msg +=
        `\n*Total Estimado: $${total.toLocaleString("es-AR")}*`;


    msg +=
        "\n\n¿Tienen disponibilidad para la fecha de mi evento?";


    window.open(
        `https://wa.me/?text=${encodeURIComponent(msg)}`,
        "_blank"
    );

}


// =========================================================
// CALCULADORA
// =========================================================

function updateGuestsLabel(value) {

    const label = document.getElementById("guests-val");

    if (label) {

        label.innerText = value;

    }


    recalculateBudget();

}


// =========================================================
// RECALCULAR PRESUPUESTO
// =========================================================

function recalculateBudget() {

    const guestsInput =
        document.getElementById("calc-guests");


    if (!guestsInput) return;


    const guests =
        parseInt(guestsInput.value);


    const recommendedDozens =
        Math.max(
            2,
            Math.ceil((guests * 2.5) / 12)
        );


    let selectedCount = 0;

    let pricePerDozenSum = 0;


    const alfajores =
        document.getElementById("item-alfajores");

    const shots =
        document.getElementById("item-shots");

    const cupcakes =
        document.getElementById("item-cupcakes");

    const salado =
        document.getElementById("item-salado");


    if (alfajores && alfajores.checked) {

        selectedCount++;

        pricePerDozenSum += 12500;

    }


    if (shots && shots.checked) {

        selectedCount++;

        pricePerDozenSum += 16000;

    }


    if (cupcakes && cupcakes.checked) {

        selectedCount++;

        pricePerDozenSum += 15000;

    }


    if (salado && salado.checked) {

        selectedCount++;

        pricePerDozenSum += 18000;

    }


    if (selectedCount === 0) {

        pricePerDozenSum = 12500;

        selectedCount = 1;

    }


    const averagePrice =
        pricePerDozenSum / selectedCount;


    const totalPrice =
        Math.round(
            recommendedDozens * averagePrice
        );


    const summaryGuests =
        document.getElementById("summary-guests");

    const summaryDozens =
        document.getElementById("summary-dozens");

    const summaryItems =
        document.getElementById("summary-items-count");

    const totalElement =
        document.getElementById("calc-total-price");


    if (summaryGuests) {

        summaryGuests.innerText =
            `${guests} personas`;

    }


    if (summaryDozens) {

        summaryDozens.innerText =
            `${recommendedDozens} docenas combinadas`;

    }


    if (summaryItems) {

        summaryItems.innerText =
            `${selectedCount} variedades`;

    }


    if (totalElement) {

        totalElement.innerText =
            `$${totalPrice.toLocaleString("es-AR")}`;

    }

}


// =========================================================
// ENVIAR COTIZACIÓN
// =========================================================

function sendCalculatedBudgetToWhatsApp() {

    const guests =
        document.getElementById("calc-guests").value;


    const eventType =
        document.getElementById("calc-event-type").value;


    const totalPrice =
        document.getElementById("calc-total-price").innerText;


    const items = [];


    if (document.getElementById("item-alfajores").checked) {

        items.push("Alfajores Mixtos");

    }


    if (document.getElementById("item-shots").checked) {

        items.push("Shots & Vasitos");

    }


    if (document.getElementById("item-cupcakes").checked) {

        items.push("Cupcakes Temáticos");

    }


    if (document.getElementById("item-salado").checked) {

        items.push("Combo Salado");

    }


    let msg =
        `¡Hola! 👋 Coticé una Mesa para mi evento a través de la web:\n\n`;


    msg +=
        `🎉 *Tipo de Evento:* ${eventType}\n`;

    msg +=
        `👥 *Invitados:* ${guests} personas\n`;

    msg +=
        `🍰 *Variedades deseadas:* ${items.length ? items.join(", ") : "A definir"}\n`;

    msg +=
        `💰 *Presupuesto Estimado:* ${totalPrice}\n\n`;

    msg +=
        `¿Podemos coordinar la fecha y los detalles del diseño?`;


    window.open(
        `https://wa.me/?text=${encodeURIComponent(msg)}`,
        "_blank"
    );

}


// =========================================================
// MENÚ MOBILE
// =========================================================

function toggleMobileMenu() {

    const menu =
        document.getElementById("mobile-menu");

    const icon =
        document.getElementById("mobile-menu-icon");


    if (!menu) return;


    menu.classList.toggle("hidden");


    if (icon) {

        if (menu.classList.contains("hidden")) {

            icon.className =
                "fa-solid fa-bars";

        } else {

            icon.className =
                "fa-solid fa-xmark";

        }

    }

}


// =========================================================
// CERRAR MENÚ MOBILE AL TOCAR UN LINK
// =========================================================

document.addEventListener("click", function(event) {

    const menu =
        document.getElementById("mobile-menu");

    if (!menu) return;


    const link =
        event.target.closest("#mobile-menu a");


    if (link) {

        menu.classList.add("hidden");

        const icon =
            document.getElementById("mobile-menu-icon");

        if (icon) {

            icon.className =
                "fa-solid fa-bars";

        }

    }

});


// =========================================================
// INICIALIZACIÓN
// =========================================================

window.addEventListener("DOMContentLoaded", function() {

    renderProducts(products);

    updateCartUI();

    recalculateBudget();

});