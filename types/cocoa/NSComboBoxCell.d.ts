/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBoxCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    setFormatter<R = void, P0 = unknown>(_setFormatter: P0): R;
    _initWithTypedStreamCoder_NSComboBoxCell<R = unknown, P0 = unknown>(__initWithTypedStreamCoder_NSComboBoxCell: P0): R;
    _old_encodeWithCoder_NSComboBoxCell<R = void, P0 = unknown>(__old_encodeWithCoder_NSComboBoxCell: P0): R;
    _complete<R = void, P0 = unknown>(__complete: P0): R;
    _completeNoRecursion<R = void, P0 = unknown>(__completeNoRecursion: P0): R;
    _unregisterForCompletion<R = void, P0 = unknown>(__unregisterForCompletion: P0): R;
    _registerForCompletion<R = void, P0 = unknown>(__registerForCompletion: P0): R;
    _noteLengthAndSelectedRange<R = void, P0 = unknown>(__noteLengthAndSelectedRange: P0): R;
    _updateLengthAndSelectedRange<R = void, P0 = unknown>(__updateLengthAndSelectedRange: P0): R;
    completedString<R = unknown, P0 = unknown>(_completedString: P0): R;
    comboBoxTextDidEndEditing<R = void, P0 = unknown>(_comboBoxTextDidEndEditing: P0): R;
    synchronizeTableViewSelectionWithText<R = void, P0 = unknown>(_synchronizeTableViewSelectionWithText: P0): R;
    synchronizeTableViewSelectionWithStringValue<R = void, P0 = unknown>(_synchronizeTableViewSelectionWithStringValue: P0): R;
    scrollItemAtIndexToVisible<R = void, P0 = number>(_scrollItemAtIndexToVisible: P0): R;
    scrollItemAtIndexToTop<R = void, P0 = number>(_scrollItemAtIndexToTop: P0): R;
    _controlView_textView_doCommandBySelector<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(__controlView: P0, _textView: P1, _doCommandBySelector: P2): R;
    moveDown<R = void, P0 = unknown>(_moveDown: P0): R;
    popUp<R = void, P0 = unknown>(_popUp: P0): R;
    _numberOfRowsDidChangeInComboBoxTableView<R = void, P0 = unknown>(__numberOfRowsDidChangeInComboBoxTableView: P0): R;
    _updatePopUpWindowFrameFirstTimeInSession<R = void, P0 = boolean>(__updatePopUpWindowFrameFirstTimeInSession: P0): R;
    frameForPopUpWithOldFrame_cellFrame_controlView<R = CGRect, P0 = CGRect, P1 = CGRect, P2 = unknown>(_frameForPopUpWithOldFrame: P0, _cellFrame: P1, _controlView: P2): R;
    orderOutPopUpWindow<R = void, P0 = unknown>(_orderOutPopUpWindow: P0): R;
    dismissPopUp<R = void, P0 = unknown>(_dismissPopUp: P0): R;
    filterEvents<R = void, P0 = unknown>(_filterEvents: P0): R;
    _combobox_windowWillBeginSheet<R = void, P0 = unknown>(__combobox_windowWillBeginSheet: P0): R;
    _windowWillOrderOut<R = void, P0 = unknown>(__windowWillOrderOut: P0): R;
    _combobox_windowDidBecomeKey<R = void, P0 = unknown>(__combobox_windowDidBecomeKey: P0): R;
    _appWillTerminate<R = void, P0 = unknown>(__appWillTerminate: P0): R;
    _isFilteringEvents<R = boolean>(): R;
    _shouldRegisterForEditingNotifications<R = boolean>(): R;
    shouldEdit_inRect_ofView<R = boolean, P0 = unknown, P1 = CGRect, P2 = unknown>(_shouldEdit: P0, _inRect: P1, _ofView: P2): R;
    _textVerticalAdjust<R = number>(): R;
    _textVerticalInset<R = number>(): R;
    _coreUIDrawOptionsWithFrame_inView<R = __CFDictionary, P0 = CGRect, P1 = unknown>(__coreUIDrawOptionsWithFrame: P0, _inView: P1): R;
    _computeBezelRectWithTextCellFrame_inView_topLeft_bottomLeft_left_right_top_bottom<R = void, P0 = CGRect, P1 = unknown, P2 = CGRect, P3 = CGRect, P4 = CGRect, P5 = CGRect, P6 = CGRect, P7 = CGRect>(__computeBezelRectWithTextCellFrame: P0, _inView: P1, _topLeft: P2, _bottomLeft: P3, _left: P4, _right: P5, _top: P6, _bottom: P7): R;
    boundsForButtonCell<R = CGRect, P0 = CGRect>(_boundsForButtonCell: P0): R;
    boundsForTextCell<R = CGRect, P0 = CGRect>(_boundsForTextCell: P0): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    delegate<R = unknown>(): R;
    setAlignment<R = void, P0 = number>(_setAlignment: P0): R;
    setBaseWritingDirection<R = void, P0 = number>(_setBaseWritingDirection: P0): R;
    indexOfItemWithObjectValue<R = number, P0 = unknown>(_indexOfItemWithObjectValue: P0): R;
    itemObjectValueAtIndex<R = unknown, P0 = number>(_itemObjectValueAtIndex: P0): R;
    selectItemWithObjectValue<R = void, P0 = unknown>(_selectItemWithObjectValue: P0): R;
    removeAllItems<R = void>(): R;
    removeItemAtIndex<R = void, P0 = number>(_removeItemAtIndex: P0): R;
    removeItemWithObjectValue<R = void, P0 = unknown>(_removeItemWithObjectValue: P0): R;
    insertItemWithObjectValue_atIndex<R = void, P0 = unknown, P1 = number>(_insertItemWithObjectValue: P0, _atIndex: P1): R;
    addItemsWithObjectValues<R = void, P0 = unknown>(_addItemsWithObjectValues: P0): R;
    addItemWithObjectValue<R = void, P0 = unknown>(_addItemWithObjectValue: P0): R;
    noteNumberOfItemsChanged<R = void>(): R;
    deselectItemAtIndex<R = void, P0 = number>(_deselectItemAtIndex: P0): R;
    selectItemAtIndex<R = void, P0 = number>(_selectItemAtIndex: P0): R;
    reloadData<R = void>(): R;
    _setDataSource<R = void, P0 = unknown>(__setDataSource: P0): R;
    _isButtonBordered<R = boolean>(): R;
    _setButtonBordered<R = void, P0 = boolean>(__setButtonBordered: P0): R;
    _buttonHeight<R = number>(): R;
    _buttonWidth<R = number>(): R;
    _cellFrame<R = CGRect>(): R;
    _setCellFrame<R = void, P0 = CGRect>(__setCellFrame: P0): R;
    _initializeButtonCell<R = void>(): R;
    initPopUpWindow<R = void>(): R;
    tableViewAction<R = void, P0 = unknown>(_tableViewAction: P0): R;
    tableView_objectValueForTableColumn_row<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_tableView: P0, _objectValueForTableColumn: P1, _row: P2): R;
    numberOfRowsInTableView<R = number, P0 = unknown>(_numberOfRowsInTableView: P0): R;
    tableViewSelectionDidChange<R = void, P0 = unknown>(_tableViewSelectionDidChange: P0): R;
    tableViewSelectionIsChanging<R = void, P0 = unknown>(_tableViewSelectionIsChanging: P0): R;
    _suppressNonTitleDrawing<R = boolean>(): R;
    _accessibilityButtonRect<R = CGRect>(): R;
    _accessibilityButtonUIElement<R = unknown>(): R;
    accessibilitySetExpandedAttribute<R = void, P0 = unknown>(_accessibilitySetExpandedAttribute: P0): R;
    accessibilityIsExpandedAttributeSettable<R = boolean>(): R;
    accessibilityExpandedAttribute<R = unknown>(): R;
    completes<R = boolean>(): R;
    setCompletes<R = void, P0 = boolean>(_v: P0): R;
    objectValues<R = NSArray>(): R;
    objectValueOfSelectedItem<R = unknown>(): R;
    numberOfItems<R = number>(): R;
    indexOfSelectedItem<R = number>(): R;
    dataSource<R = NSComboBoxCellDataSource>(): R;
    setDataSource<R = void, P0 = NSComboBoxCellDataSource>(_v: P0): R;
    usesDataSource<R = boolean>(): R;
    setUsesDataSource<R = void, P0 = boolean>(_v: P0): R;
    numberOfVisibleItems<R = number>(): R;
    setNumberOfVisibleItems<R = void, P0 = number>(_v: P0): R;
    itemHeight<R = number>(): R;
    setItemHeight<R = void, P0 = number>(_v: P0): R;
    buttonBordered<R = boolean>(): R;
    setButtonBordered<R = void, P0 = boolean>(_v: P0): R;
    intercellSpacing<R = CGSize>(): R;
    setIntercellSpacing<R = void, P0 = CGSize>(_v: P0): R;
    hasVerticalScroller<R = boolean>(): R;
    setHasVerticalScroller<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSComboBoxCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSComboBoxCell>(): R;
      new: <R = NSComboBoxCell>() => R;
      automaticTextCompletionEnabled<R = boolean>(): R;
    }
  }
}

declare const NSComboBoxCell: cocoa.NSComboBoxCell.CLASS;
