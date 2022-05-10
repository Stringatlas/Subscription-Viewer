let ids = [];

export class Subscription {
    constructor (name="Subscription", price=9.99, billing="Year", description="", image="/default.jpg", link=""){
        this.name = name;
        this.price = price;
        this.billing = billing;
        this.description = description;
        this.link = link;
        this.image = image;
    }
}