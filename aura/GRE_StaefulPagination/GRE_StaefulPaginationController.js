({
    onInit: function (component, event, helper) {
        helper.doInit(component, event);
    },
    updateSelectedRow: function (component, event, helper) {
        let selectedRows = event.getParam('selectedRows');
        if (!$A.util.isEmpty(selectedRows)) {
            const selectedIds = selectedRows.map(record => {
                return record.Id;
            });
            component.set("v.selectedRows", selectedIds);
        }
    },
    next: function (component, event, helper) {
        helper.saveToState(component, event);
        let start = component.get("v.startPage");
        let total = component.get("v.totalRecords");
        let data = component.get("v.allData");
        let size = component.get("v.amountRecordPerPage");
        let end = start + 2 * size > total ? total - 1 : start + 2 * size;
        component.set("v.data", data.slice(start + size, end));
        component.set("v.startPage", start + size);
        component.set("v.endPage", end);
        helper.rerenderFromState(component, event)
    },
    previous: function (component, event, helper) {
        helper.saveToState(component);
        let start = component.get("v.startPage");
        let data = component.get("v.allData");
        let size = component.get("v.amountRecordPerPage");
        let end = start - size <= 0 ? 0 : start - size;
        component.set("v.data", data.slice(end, start));
        component.set("v.startPage", end);
        component.set("v.endPage", start);
        helper.rerenderFromState(component, event)
    }
});