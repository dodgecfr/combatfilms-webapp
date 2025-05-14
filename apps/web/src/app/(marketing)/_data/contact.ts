
// This file was manually created based on data from combatfilms.com/contact.html
export interface Address {
  street: string;
  suite: string;
  city: string;
  state: string;
  zip: string;
}

export interface Phone {
  office: string;
  fax: string;
}

export interface ContactInfo {
  address: Address;
  phone: Phone;
  email: string;
}

export const contactInfo: ContactInfo = {
  "address": {
    "street": "825 North 300 West",
    "suite": "Suite W311",
    "city": "Salt Lake City",
    "state": "UT",
    "zip": "84103"
  },
  "phone": {
    "office": "801-521-7737",
    "fax": "801-521-6714"
  },
  "email": "info@combatfilms.com"
};
