import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';

export default class recordFormEdit extends LightningElement {
  @api recordId;

  @wire(getRecord, { recordId: '$recordId', fields: ['Account.Name', 'Account.Industry'] })
  account;

  handleSubmit(event) {
    event.preventDefault();
    const fields = event.detail.fields;
    this.template.querySelector('lightning-record-edit-form').submit(fields);
  }
}