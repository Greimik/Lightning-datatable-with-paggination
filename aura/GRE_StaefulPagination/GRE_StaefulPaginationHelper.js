({
    doInit: function (component, event) {
        const columns = [{
            label: 'Account Name', fieldName: 'Name'
        }, {
            label: 'Account Number', fieldName: 'AccountNumber'
        }, {
            label: 'Billing Address', fieldName: 'BillingAddress'
        }, {
            label: 'Type', fieldName: 'Type'
        }];
        let action = component.get("c.getAccounts");
        action.setCallback(this, function (response) {
            let state = response.getState();
            if (state === 'SUCCESS') {
                const data = response.getReturnValue();
                component.set("v.allData", data);
                component.set("v.totalRecords", data.length);
                component.set("v.data", data.slice(0, pageSize));
            }
        });
        $A.enqueueAction(action);
        let pageSize = component.get('v.amountRecordPerPage');
        component.set("v.columns", columns);
        component.set("v.endPage", pageSize - 1);
        let state = {
            selectedRows: []
        };
        component.set("v.state", state);
    },
    saveToState: function (component, event) {
        let selectedRows = component.get("v.selectedRows");
        let state = component.get("v.state");
        selectedRows.forEach(record => {
            state.selectedRows.push(record)
        });
        const uniqueIds = state.selectedRows.reduce((unique, item) =>
            unique.includes(item) ? unique : [...unique, item], []);
        state.selectedRows = uniqueIds;
        component.set("v.state", state);
    },
    rerenderFromState: function (component, event) {
        let newState = component.get("v.state");
        component.set('v.selectedRows', newState.selectedRows);
    }
});