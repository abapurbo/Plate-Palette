const getLocalstorageCart = () => {
    const cart = localStorage.getItem('add-desserts')
    if (cart) {
        return JSON.parse(cart)
    }
    return []
}
const saveDessertCart = cart => {
    const saveCart = JSON.stringify(cart)
    localStorage.setItem('add-desserts', saveCart)
}
const addLocalStorageCart = category => {
    const getItemCart = getLocalstorageCart()
    getItemCart.push(category)
    saveDessertCart(getItemCart)
}
export { getLocalstorageCart ,addLocalStorageCart}