class CartItemModel {
    constructor(productId, quantity, productPrice, productName, image) {
        this.id = productId;
        this.quantity = quantity;
        this.price = productPrice;
        this.name = productName;
        this.img = image;
        this.company = 'Shop n Stitch';
        this.perPrice = productPrice;
        this.totalPrice = quantity * productPrice;
    }
}

export default CartItemModel;
