# Lightning staeful datatable with paggination 
This lightning component presents simple data table with selectable rows and pagination.

# How to use it?
Basically all you need to worry about is how to build `lightning:datatable`, and set up amount record per page default is `6`.

List of attributes which you would like to customize for yourself:
- data `{!v.data}` - this attribute determinate data returned form Apex controller
- columns `{!v.columns}` - this attribute determinate columns displayed in your table
- amountRecordPerPage `{!v.amountRecordPerPage}` - this attribute determinate how many record should be displayed on the page

# Demo
![](captured.gif)
