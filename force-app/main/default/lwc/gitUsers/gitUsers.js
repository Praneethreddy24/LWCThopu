import {  api,LightningElement } from 'lwc';

export default class GitUsers extends LightningElement {
    @api retrivedUser;
//on click of this handleclick button the details of the user that are selected Should be passed to the parent(By custom event)
   handlebuttonClick(){
        const selectedEvent = new CustomEvent('userclicked', { detail: this.retrivedUser.login });

        // Dispatches the event.
        this.dispatchEvent(selectedEvent);
    }
}