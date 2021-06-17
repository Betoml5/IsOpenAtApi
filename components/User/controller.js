const store = require('./store');

const getUser = async (id) => {
    try {
        const user = await store.getUser(id);
        return user;
    } catch (error) {
        return error;
    }
}

const getUsers = async () => {
    try {
        const users = await store.getUsers();
        return users
    } catch (error) {
        return error;
    }
}

const createUser = async (username, email, password) => {
    try {
        const user = await store.createUser(username, email, password)
        return user;
    } catch (error) {
        return error;
    }
}

const deleteUser = async (id) => {
    try {
        const user = await store.deleteUser(id);
        return user;
    } catch (error) {
        return error;
    }
}

const addFavorite = async (id, shop) => {
    try {
        const user = await store.addFavorite(id, shop);
        return user
    } catch (error) {
        return error;
    }
}

const getFavorites = async (id) => {
    try {
        const favorite = await store.getFavorites(id);
        return favorite
    } catch (error) {
        return error;
    }

}