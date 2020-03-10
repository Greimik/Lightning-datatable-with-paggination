public with sharing class GRE_PaginationController {
    @AuraEnabled
    public static List<Account> getAccounts() {
        return [
                SELECT
                        Id,Name,AccountNumber,BillingAddress,Type
                FROM Account
        ];
    }
}