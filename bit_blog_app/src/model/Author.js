
class Author {
    constructor(authorData) {

        this.id = authorData.id;
        this.name = authorData.name;
        this.username = authorData.username;
        this.email = authorData.email;
        this.website = authorData.website;
        this.street = authorData.address.street;
        this.city = authorData.address.city;
        this.zip = authorData.address.zipcode;
        this.latitude = authorData.address.geo.lat;
        this.longitude = authorData.address.geo.lng;
        this.phone = authorData.phone;
        this.companyName = authorData.company.name;
        this.companySlogan = authorData.company.catchPhrase;


    }
}


export default Author