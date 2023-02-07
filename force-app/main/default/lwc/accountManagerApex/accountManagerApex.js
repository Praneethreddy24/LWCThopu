import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountManager.getAccounts'

export default class AccountManagerApex extends LightningElement {
@wire(getAccount)
accounts;
get responserecieved(){
    if (this.accounts){
        return true;

    }
    return false;
}

}