/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBindingAdaptor<T0 = void, T1 = void, T2 = void> extends NSObject {
    controller_didChangeToFilterPredicate<R = void, P0 = unknown, P1 = unknown>(_controller: P0, _didChangeToFilterPredicate: P1): R;
    controller_didChangeToSortDescriptors<R = void, P0 = unknown, P1 = unknown>(_controller: P0, _didChangeToSortDescriptors: P1): R;
    controller_didChangeToSelectionIndexPaths<R = void, P0 = unknown, P1 = unknown>(_controller: P0, _didChangeToSelectionIndexPaths: P1): R;
    controller_didChangeToSelectionIndexes<R = void, P0 = unknown, P1 = unknown>(_controller: P0, _didChangeToSelectionIndexes: P1): R;
    setEnabledStateForToolbarItem<R = boolean, P0 = unknown>(_setEnabledStateForToolbarItem: P0): R;
    enabledStateForMenuItem<R = boolean, P0 = unknown>(_enabledStateForMenuItem: P0): R;
    searchMenuTemplate<R = unknown>(): R;
    updateInvalidatedTextColor_forObject<R = unknown, P0 = unknown, P1 = unknown>(_updateInvalidatedTextColor: P0, _forObject: P1): R;
    updateInvalidatedFont_forObject<R = unknown, P0 = unknown, P1 = unknown>(_updateInvalidatedFont: P0, _forObject: P1): R;
    updateInvalidatedObjectValue_forObject<R = unknown, P0 = unknown, P1 = unknown>(_updateInvalidatedObjectValue: P0, _forObject: P1): R;
    searchFieldCellOrControlDidClearRecents<R = void, P0 = unknown>(_searchFieldCellOrControlDidClearRecents: P0): R;
    selectionMechanismWasDismissed<R = void, P0 = unknown>(_selectionMechanismWasDismissed: P0): R;
    defaultSortDescriptorPrototypeForTableColumn<R = unknown, P0 = unknown>(_defaultSortDescriptorPrototypeForTableColumn: P0): R;
    tableColumn_didChangeToWidth<R = void, P0 = unknown, P1 = number>(_tableColumn: P0, _didChangeToWidth: P1): R;
    tableColumn_willDisplayCell_row<R = void, P0 = unknown, P1 = unknown, P2 = number>(_tableColumn: P0, _willDisplayCell: P1, _row: P2): R;
    outlineView_willCollapseItem<R = void, P0 = unknown, P1 = unknown>(_outlineView: P0, _willCollapseItem: P1): R;
    outlineView_didExpandItem<R = void, P0 = unknown, P1 = unknown>(_outlineView: P0, _didExpandItem: P1): R;
    outlineColumn_willDisplayCell_row<R = void, P0 = unknown, P1 = unknown, P2 = number>(_outlineColumn: P0, _willDisplayCell: P1, _row: P2): R;
    outlineColumn_willDisplayOutlineCell_row<R = void, P0 = unknown, P1 = unknown, P2 = number>(_outlineColumn: P0, _willDisplayOutlineCell: P1, _row: P2): R;
    tableView_updateVisibleRowInformation<R = void, P0 = unknown, P1 = _NSRange>(_tableView: P0, _updateVisibleRowInformation: P1): R;
    tableView_didChangeToSelectedRowIndexes<R = void, P0 = unknown, P1 = unknown>(_tableView: P0, _didChangeToSelectedRowIndexes: P1): R;
    tableView_didChangeToSortDescriptors<R = void, P0 = unknown, P1 = unknown>(_tableView: P0, _didChangeToSortDescriptors: P1): R;
    tableView_willDisplayCell_forTableColumn_row<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_tableView: P0, _willDisplayCell: P1, _forTableColumn: P2, _row: P3): R;
    tableView_shouldEditTableColumn_row<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_tableView: P0, _shouldEditTableColumn: P1, _row: P2): R;
    tableView_objectValueForRow<R = unknown, P0 = unknown, P1 = number>(_tableView: P0, _objectValueForRow: P1): R;
    numberOfRowsInTableView<R = number, P0 = unknown>(_numberOfRowsInTableView: P0): R;
    collectionView_didChangeToSelectionIndexes<R = void, P0 = unknown, P1 = unknown>(_collectionView: P0, _didChangeToSelectionIndexes: P1): R;
    drawer_didChangeToState<R = void, P0 = unknown, P1 = boolean>(_drawer: P0, _didChangeToState: P1): R;
    window_didSetTitle<R = void, P0 = unknown, P1 = unknown>(_window: P0, _didSetTitle: P1): R;
    windowDidResize<R = void, P0 = unknown>(_windowDidResize: P0): R;
    window_didChangeToVisibleState<R = void, P0 = unknown, P1 = boolean>(_window: P0, _didChangeToVisibleState: P1): R;
    browser_willDisplayCell_atRow_column<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_browser: P0, _willDisplayCell: P1, _atRow: P2, _column: P3): R;
    browser_createRowsForColumn_inMatrix<R = void, P0 = unknown, P1 = number, P2 = unknown>(_browser: P0, _createRowsForColumn: P1, _inMatrix: P2): R;
    browser_selectRow_inColumn<R = boolean, P0 = unknown, P1 = number, P2 = number>(_browser: P0, _selectRow: P1, _inColumn: P2): R;
    outlineView_willDisplayCell_forTableColumn_row<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_outlineView: P0, _willDisplayCell: P1, _forTableColumn: P2, _row: P3): R;
    outlineView_willDisplayOutlineCell_forTableColumn_row<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_outlineView: P0, _willDisplayOutlineCell: P1, _forTableColumn: P2, _row: P3): R;
    outlineView_numberOfChildrenOfItem<R = number, P0 = unknown, P1 = unknown>(_outlineView: P0, _numberOfChildrenOfItem: P1): R;
    boundOutlineView_isItemExpandable<R = number, P0 = unknown, P1 = unknown>(_boundOutlineView: P0, _isItemExpandable: P1): R;
    outlineView_child_ofItem<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_outlineView: P0, _child: P1, _ofItem: P2): R;
    tabView_didSelectTabViewItem<R = void, P0 = unknown, P1 = unknown>(_tabView: P0, _didSelectTabViewItem: P1): R;
    validateAndCommitValueInEditor_editingIsEnding_errorUserInterfaceHandled<R = boolean, P0 = unknown, P1 = boolean, P2 = string>(_validateAndCommitValueInEditor: P0, _editingIsEnding: P1, _errorUserInterfaceHandled: P2): R;
    _validateAndCommitValueInEditor_editingIsEnding_errorUserInterfaceHandled_bindingAdaptor<R = boolean, P0 = unknown, P1 = boolean, P2 = string, P3 = unknown>(__validateAndCommitValueInEditor: P0, _editingIsEnding: P1, _errorUserInterfaceHandled: P2, _bindingAdaptor: P3): R;
    handleValidationError_description_inEditor_errorUserInterfaceHandled<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string>(_handleValidationError: P0, _description: P1, _inEditor: P2, _errorUserInterfaceHandled: P3): R;
    _handleValidationError_description_inEditor_errorUserInterfaceHandled_bindingAdaptor<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string, P4 = unknown>(__handleValidationError: P0, _description: P1, _inEditor: P2, _errorUserInterfaceHandled: P3, _bindingAdaptor: P4): R;
    editorDidEndEditing<R = void, P0 = unknown>(_editorDidEndEditing: P0): R;
    editorDidBeginEditing<R = void, P0 = unknown>(_editorDidBeginEditing: P0): R;
    _editor_didChangeEditingState_bindingAdaptor<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__editor: P0, _didChangeEditingState: P1, _bindingAdaptor: P2): R;
    objectDidTriggerAction<R = void, P0 = unknown>(_objectDidTriggerAction: P0): R;
    objectDidTriggerDoubleClickAction<R = void, P0 = unknown>(_objectDidTriggerDoubleClickAction: P0): R;
    _objectDidTriggerAction_bindingAdaptor<R = void, P0 = unknown, P1 = unknown>(__objectDidTriggerAction: P0, _bindingAdaptor: P1): R;
    _discardEditingForAllBinders<R = void>(): R;
    contentBinder<R = unknown>(): R;
    referenceBinder<R = unknown>(): R;
    editableBinder<R = unknown>(): R;
    resumeBinderObserving<R = void>(): R;
    suspendBinderObserving<R = void>(): R;
    binders<R = unknown>(): R;
    removeBinder<R = void, P0 = unknown>(_removeBinder: P0): R;
    addBinder<R = void, P0 = unknown>(_addBinder: P0): R;
    dealloc<R = void>(): R;
  }
  namespace _NSBindingAdaptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSBindingAdaptor>(): R;
      new: <R = _NSBindingAdaptor>() => R;
      reconnectBindings<R = void, P0 = unknown>(_reconnectBindings: P0): R;
      returnDisconnectedBindingsOfObject<R = unknown, P0 = unknown>(_returnDisconnectedBindingsOfObject: P0): R;
      copyBindingsFromObject_toObject<R = void, P0 = unknown, P1 = unknown>(_copyBindingsFromObject: P0, _toObject: P1): R;
    }
  }
}
