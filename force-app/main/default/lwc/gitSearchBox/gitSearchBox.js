import { LightningElement,wire} from 'lwc';
import { publish, MessageContext } from 'lightning/messageService';
import searchMessage from '@salesforce/messageChannel/gitSearch__c';

export default class gitSearchBox extends LightningElement {
    @wire(MessageContext)
    messageContext;

    handleClick(event){
    let inputvalue=this.template.querySelectorAll("lightning-input")[0].value;
    const payload = { isTermvalid:true, searchTerm:inputvalue };
//Send the data between two components(publish)
        publish(this.messageContext, searchMessage, payload);
    }
    
}