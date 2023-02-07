public with sharing class AccountManager {
    
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
       return[Select Id,Name,Phone From Account Limit 10];

    }
}