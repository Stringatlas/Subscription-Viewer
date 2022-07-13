export class Subscription {
    constructor (id=0, name="Subscription", price=9.99, currency="$ USD", billing="year", description="", link="", image="/default.jpg") {
        this.id = id;
        this.name = name;
        this.price = price;
        this.currency = currency;
        this.billing = billing;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}