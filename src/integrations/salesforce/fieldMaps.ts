// Salesforce field mappings for integration
export const ACCOUNT_FIELD_MAPPING = {
// Standard fields
Id: 'Id',
Name: 'Name',
AnnualRevenue: 'AnnualRevenue',
Industry: 'Industry',
// Custom fields - Updated to match current Salesforce schema
// Removed: Custom_Plan_Type__c: 'Custom_Plan_Type__c' (field no longer exists)
Plan_Type__c: 'Plan_Type__c', // Updated field name
AccountSource: 'AccountSource',
BillingCity: 'BillingCity',
BillingCountry: 'BillingCountry',
BillingState: 'BillingState',
BillingStreet: 'BillingStreet',
BillingPostalCode: 'BillingPostalCode',
Phone: 'Phone',
Website: 'Website',
CreatedDate: 'CreatedDate',
LastModifiedDate: 'LastModifiedDate'
};

export const CONTACT_FIELD_MAPPING = {
Id: 'Id',
FirstName: 'FirstName',
LastName: 'LastName',
Email: 'Email',
Phone: 'Phone',
Title: 'Title',
MailingStreet: 'MailingStreet',
MailingCity: 'MailingCity',
MailingState: 'MailingState',
MailingPostalCode: 'MailingPostalCode',
MailingCountry: 'MailingCountry',
AccountId: 'AccountId',
CreatedDate: 'CreatedDate',
LastModifiedDate: 'LastModifiedDate'
};