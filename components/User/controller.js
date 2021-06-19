const store = require('./store');

const getUser = async (id) => {
    try {
        const user = await store.get(id);
        return user;
    } catch (error) {
        return error;
    }
}

const getUsers = async () => {
    try {
        const users = await store.getAll();
        return users
    } catch (error) {
        return error;
    }
}

const createUser = async (username, email, password) => {
    try {
        const user = await store.create(username, email, password)
        return user;
    } catch (error) {
        return error;
    }
}

const deleteUser = async (id) => {
    try {
        const user = await store.delete(id);
        return user;
    } catch (error) {
        return error;
    }
}

const addFavorite = async (id, shop) => {
    try {
        const user = await store.addFav(id, shop);
        return user
    } catch (error) {
        return error;
    }
}

const removeFavorite = async (id, shopIndex) => {
    try {
        const user = await store.removeFav(id, shopIndex);
        user.favorites.splice(shopIndex, 1);
        user.save({ new: true });
        return user;
    } catch (error) {
        return error;
    }
}

const getFavorites = async (id) => {
    try {
        const favorite = await store.getFav(id);
        return favorite
    } catch (error) {
        return error;
    }

}

module.exports = {
    getUser, getUsers, createUser,
    deleteUser, addFavorite, getFavorites,
    removeFavorite
}