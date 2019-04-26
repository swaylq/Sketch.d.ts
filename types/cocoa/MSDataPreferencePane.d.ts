/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataPreferencePane<T0 = void, T1 = void, T2 = void> extends MSPreferencePane, MSDropableViewDelegateProtocol, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol, NSTextFieldDelegateProtocol {
    setSelectedIndexesFromSelectionIdentifierArray<R = void>(): R;
    setSelectionIdentifierArrayFromSelectionIndexes<R = void>(): R;
    selectionDidChange<R = void>(): R;
    reloadData<R = void>(): R;
    learnMore<R = void, P0 = unknown>(_learnMore: P0): R;
    showContextMenu<R = void, P0 = unknown>(_showContextMenu: P0): R;
    menuForEvent<R = unknown, P0 = unknown>(_menuForEvent: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    validateShowPluginMenuItem<R = boolean, P0 = unknown>(_validateShowPluginMenuItem: P0): R;
    validateRevealInFinderMenuItem<R = boolean, P0 = unknown>(_validateRevealInFinderMenuItem: P0): R;
    revealInFinder<R = void, P0 = unknown>(_revealInFinder: P0): R;
    showPlugin<R = void, P0 = unknown>(_showPlugin: P0): R;
    revealLocalDataItemInFinder<R = void, P0 = unknown>(_revealLocalDataItemInFinder: P0): R;
    revealInFinderAction<R = void, P0 = unknown>(_revealInFinderAction: P0): R;
    draggedURLsFromPasteboard<R = unknown, P0 = unknown>(_draggedURLsFromPasteboard: P0): R;
    validateRemoveDataMenuItem<R = boolean, P0 = unknown>(_validateRemoveDataMenuItem: P0): R;
    alertMessageTextForRemovingDataSuppliers<R = unknown, P0 = unknown>(_alertMessageTextForRemovingDataSuppliers: P0): R;
    removeDataAction<R = void, P0 = unknown>(_removeDataAction: P0): R;
    importLocalData<R = void, P0 = unknown>(_importLocalData: P0): R;
    showAddLocalDataErrorWithMessage_info<R = void, P0 = unknown, P1 = unknown>(_showAddLocalDataErrorWithMessage: P0, _info: P1): R;
    showFailedToAddDataSupplierFromURL<R = void, P0 = unknown>(_showFailedToAddDataSupplierFromURL: P0): R;
    showDataSupplierGroupAlreadyAddedMessage<R = void, P0 = unknown>(_showDataSupplierGroupAlreadyAddedMessage: P0): R;
    removeLocalDataSupplierGroupsContainedByURL<R = void, P0 = unknown>(_removeLocalDataSupplierGroupsContainedByURL: P0): R;
    addLocalDataFromURLs<R = void, P0 = unknown>(_addLocalDataFromURLs: P0): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    searchString<R = unknown>(): R;
    activateSearchField<R = void, P0 = unknown>(_activateSearchField: P0): R;
    dataFilterPredicate<R = NSPredicate>(): R;
    setDataFilterPredicate<R = void, P0 = NSPredicate>(_v: P0): R;
    filterTextField<R = NSSearchField>(): R;
    setFilterTextField<R = void, P0 = NSSearchField>(_v: P0): R;
    spyglassFilterButton<R = NSButton>(): R;
    setSpyglassFilterButton<R = void, P0 = NSButton>(_v: P0): R;
    selectedItemIdentifiers<R = NSArray>(): R;
    setSelectedItemIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    chooseDataPanelWindow<R = NSWindow>(): R;
    setChooseDataPanelWindow<R = void, P0 = NSWindow>(_v: P0): R;
    data<R = NSArray>(): R;
    setData<R = void, P0 = NSArray>(_v: P0): R;
    enableShowInFinder<R = boolean>(): R;
    setEnableShowInFinder<R = void, P0 = boolean>(_v: P0): R;
    shouldEnableCogMenu<R = boolean>(): R;
    setShouldEnableCogMenu<R = void, P0 = boolean>(_v: P0): R;
    contextMenu<R = NSMenu>(): R;
    setContextMenu<R = void, P0 = NSMenu>(_v: P0): R;
    dataArrayController<R = NSArrayController>(): R;
    setDataArrayController<R = void, P0 = NSArrayController>(_v: P0): R;
    tableView<R = MSDataTableView>(): R;
    setTableView<R = void, P0 = MSDataTableView>(_v: P0): R;
    selectedData<R = NSArray>(): R;
    dataSupplierManager<R = MSDataSupplierManager>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSDataPreferencePane {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPreferencePane, MSDropableViewDelegateProtocol, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol, NSTextFieldDelegateProtocol {
      alloc<R = MSDataPreferencePane>(): R;
      new: <R = MSDataPreferencePane>() => R;
    }
  }
}

declare const MSDataPreferencePane: cocoa.MSDataPreferencePane.CLASS;
