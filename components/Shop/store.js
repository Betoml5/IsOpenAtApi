
const Shop = require('./model')

const createShop = (
    name,
    email,
    address,
    phone,
    openNow = false,
    hot = false,
    promo = false,
    stars = 0,
    avgPrice = 0,
    schedule = {
        moday: "",
        tuesday: "",
        wednesday: "",
        thursday: "",
        friday: "",
        saturday: "",
        sunday: "",
    }) => {
    try {
        const newShop = new Shop()
        newShop.name = name;
        newShop.email = email;
        newShop.address = address;
        newShop.phone = phone;
        newShop.openNow = openNow;
        newShop.hot = hot;
        newShop.promo = promo;
        newShop.stars = stars;
        newShop.avgPrice = avgPrice;
        newShop.schedule = schedule;
        newShop.save({ new: true });
        return newShop;
    } catch (error) {
        return error;
    }
}

const deleteShop = async (id) => {
    try {
        const deletedId = Shop.findOneAndDelete({ _id: id }, { new: true });
        return deletedId;
    } catch (error) {
        return error;
    }
}

const getShop = async (id) => {
    try {
        const shop = await Shop.findById(id).exec();
        return shop;
    } catch (error) {
        return error;
    }
}

const getShops = async () => {
    try {
        const shops = await Shop.find({});
        return shops;
    } catch (error) {
        return error;
    }
}

const updateShop = async (id, name, email, address) => {
    try {
        const shopId = Shop.findByIdAndUpdate(
            id,
            {
                name,
                email,
                address,
            },
            { new: true }
        ).exec();

        return shopId;
    } catch (error) {
        return error;
    }
}


module.exports = {
    create: createShop,
    delete: deleteShop,
    get: getShop,
    getAll: getShops,
    update: updateShop,


}