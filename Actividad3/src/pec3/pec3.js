/**
 * Exercise 1: Basic callback usage
 * Validates cart items and aggregates totals using a Node-style callback.
 * @param {Array} cartItems
 * @param {Function} callback
 * @returns {*}
 */
function summarizeCartItems(cartItems, callback) {
    // Control de errores y validaciones
    // validación de cartItems
    if (cartItems.length === 0 || !Array.isArray(cartItems)) {
        return callback("empty array", null); 
        // juntamos la dos validaciones ya que si no es una array espera cualquier string de error
    }

    // validación de ítems nulos en la array
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
    if (cartItems.some((item) => item === null)) {
        return callback("item is null", null);
    }

    // validaciones de id en los ítems
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
    if(cartItems.some((item) => !item.hasOwnProperty('id'))) {
        return callback("missing id", null);
    }
    if(cartItems.some((item) => typeof item.id !== 'number')) {
        return callback("id not a number", null);
    }

    // validaciones de price en los ítems
    if(cartItems.some((item) => typeof item.price !== 'number')) {
        return callback("price not a number", null);
    } else {
        if(cartItems.some((item) => item.price == 0)) {
            return callback("price zero", null);
        }
        if(cartItems.some((item) => item.price < 0)) {
            return callback("price negative", null);
        }
    }
    // validaciones de quantity en los ítems
    if(cartItems.some((item) => typeof item.quantity !== 'number')) {
        return callback("quantity not a number", null);
    } else {        
        if(cartItems.some((item) => item.quantity == 0)) {
            return callback("quantity zero", null);
        }
        if(cartItems.some((item) => item.quantity < 0)) {
            return callback("quantity negative", null);
        }
    }

    // Si todo es correcto:
    let totalItems = 0;
    let totalPrice = 0;
    let itemIds = [];

    for (let item of cartItems) {
        totalItems += item.quantity;
        totalPrice += item.price * item.quantity;
        itemIds.push(item.id);
    }

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    function compareNumbers(a, b) {
        return a - b;
    }

    itemIds.sort(compareNumbers);
    
    const summary = {
        "totalItems": totalItems,
        "totalPrice": totalPrice,
        "itemIds": itemIds
    };

    return callback(null, summary);
}

/**
 * Exercise 2: Promise that executes a callback
 * Simulates fetching personalised recommendations while notifying a callback.
 * @param {number} userId
 * @param {Function} callback
 * @returns {Promise<object>}
 */
function fetchUserRecommendations(userId, callback) {    
}

/**
 * Exercise 3: Promise with resolve/reject logic
 * Authorises a payment amount with simple business rules.
 * @param {number} amount
 * @returns {Promise<object>}
 */
function authorizeOrderPayment(amount) {
}

/**
 * Exercise 4: Chaining different promises
 * Builds an onboarding payload by chaining multiple asynchronous sources.
 * @param {Function} fetchCustomerProfile
 * @param {Function} fetchSubscription
 * @param {Function} fetchWelcomePack
 * @returns {Promise<object>}
 */
function buildCustomerOnboarding(fetchCustomerProfile, fetchSubscription, fetchWelcomePack) {
}

/**
 * Exercise 5: Async/await workflow
 * Loads e-commerce fulfillment performance data using async/await syntax.
 * @param {Function} fetchMetrics
 * @param {Function} processMetrics
 * @returns {Promise<object>}
 */
async function loadPerformanceReport(fetchMetrics, processMetrics) {
}

/**
 * Exercise 6: Background process management
 * Creates an inventory scheduler that processes restock batches in the background.
 * @param {Function} fetchNextRestock
 * @param {Function} applyRestock
 * @param {number} [intervalMs=250]
 * @returns {{ start: Function, stop: Function, getStatus: Function }}
 */
function createInventoryScheduler(fetchNextRestock, applyRestock, intervalMs = 250) {
}

export {
  summarizeCartItems,
  fetchUserRecommendations,
  authorizeOrderPayment,
  buildCustomerOnboarding,
  loadPerformanceReport,
  createInventoryScheduler
};
