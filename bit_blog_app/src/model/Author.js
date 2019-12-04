
class Author {
    constructor(authorData) {

        this.id = authorData.id;
        this.name = authorData.name;
        this.username = authorData.username;
        this.email = authorData.email;
        this.website = authorData.website;

        // this.address = new Address(apiAddress);

        // this.company = new Company(apiCompany);

    }
}

class Address {
    constructor(apiAddress) {
        this.street = apiAddress.street;
        this.city = apiAddress.city;
        this.zip = apiAddress.zipcode;
        this.latitude = apiAddress.geo.lat;
        this.longitude = apiAddress.geo.lng;
        this.phone = apiAddress.phone;
    }
}

class Company {
    constructor(apiCompany) {
        this.companyname = apiCompany.name;
        this.companyslogan = apiCompany.catchPhrase;

    }
}
export default Author