let ids = [];

export class Subscription {
    constructor (name="Subscription", price=9.99, currency="$ USD", billing="year", description="", link="", image="/default.jpg") {
        this.name = name;
        this.price = price;
        this.currency = currency;
        this.billing = billing;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}