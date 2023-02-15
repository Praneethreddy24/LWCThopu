import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';

const COLUMNS = [
  { fieldName: 'Name' },
  { fieldName: 'Email' }
];

export default class contactreords extends LightningElement {
  contacts = [];

  @wire(getListUi, { objectApiName: CONTACT_OBJECT, listViewApiName: 'AllContacts', pageSize: 10, columns: COLUMNS })
  wiredContacts({ data, error }) {
    if (data) {
      this.contacts = data.records.records;
    } else if (error) {
      console.error(error);
    }
  }

  handleShowContactIds() {
    const contactIds = this.contacts.map(contact => contact.Id);
    console.log(contactIds);
  }
}