import moment from "moment";

class OrderModel {
    constructor(id, items, totalAmount, date) {
        this.id = id; // it's not the product id
        this.items = items;
        this.totalAmount = totalAmount;
        this.date = date;
    }

    get formatDate () {
        // return this.date.toLocaleDateString('en-EN', {
        //     year: 'numeric',
        //     month: 'long',
        //     day: 'numeric',
        //     hour: '2-digit',
        //     minute: '2-digit'
        // })

        return moment(this.date).format('MMMM Do YYYY, hh:mm')
    }
}

export default OrderModel;
