const store = require('./store');

const createShop = async (name,
    email,
    address,
    phone,
    openNow,
    hot,
    promo,
    stars,
    avgPrice,
    schedule) => {

    const shop = store.create(name,
        email,
        address,
        phone,
        openNow,
        hot,
        promo,
        stars,
        avgPrice,
        schedule);

    return shop;

}

const deleteShop = async (id) => {
    const shop = store.delete(id);
    return shop;
}

const getShop = async (id) => {
    const shop = store.get(id);
    return shop;
}


const getShops = async () => {
    const shops = store.getAll();
    return shops;
}

const updateShop = async (id, name, email, address) => {
    const shop = store.update(id, name, email, address)
    return shop;
}

module.exports = {
    create: createShop,
    delete: deleteShop,
    get: getShop,
    getAll: getShops,
    update: updateShop
}