/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBox<T0 = void, T1 = void, T2 = void> extends NSTextField {
    indexOfItemWithObjectValue<R = number, P0 = unknown>(_indexOfItemWithObjectValue: P0): R;
    itemObjectValueAtIndex<R = unknown, P0 = number>(_itemObjectValueAtIndex: P0): R;
    selectItemWithObjectValue<R = void, P0 = unknown>(_selectItemWithObjectValue: P0): R;
    removeAllItems<R = void>(): R;
    removeItemAtIndex<R = void, P0 = number>(_removeItemAtIndex: P0): R;
    removeItemWithObjectValue<R = void, P0 = unknown>(_removeItemWithObjectValue: P0): R;
    insertItemWithObjectValue_atIndex<R = void, P0 = unknown, P1 = number>(_insertItemWithObjectValue: P0, _atIndex: P1): R;
    addItemsWithObjectValues<R = void, P0 = unknown>(_addItemsWithObjectValues: P0): R;
    addItemWithObjectValue<R = void, P0 = unknown>(_addItemWithObjectValue: P0): R;
    deselectItemAtIndex<R = void, P0 = number>(_deselectItemAtIndex: P0): R;
    selectItemAtIndex<R = void, P0 = number>(_selectItemAtIndex: P0): R;
    scrollItemAtIndexToVisible<R = void, P0 = number>(_scrollItemAtIndexToVisible: P0): R;
    scrollItemAtIndexToTop<R = void, P0 = number>(_scrollItemAtIndexToTop: P0): R;
    noteNumberOfItemsChanged<R = void>(): R;
    reloadData<R = void>(): R;
    comboBoxCell_completedString<R = unknown, P0 = unknown, P1 = unknown>(_comboBoxCell: P0, _completedString: P1): R;
    comboBoxCell_indexOfItemWithStringValue<R = number, P0 = unknown, P1 = unknown>(_comboBoxCell: P0, _indexOfItemWithStringValue: P1): R;
    comboBoxCell_objectValueForItemAtIndex<R = unknown, P0 = unknown, P1 = number>(_comboBoxCell: P0, _objectValueForItemAtIndex: P1): R;
    numberOfItemsInComboBoxCell<R = number, P0 = unknown>(_numberOfItemsInComboBoxCell: P0): R;
    comboBoxCellWillDismiss<R = void, P0 = unknown>(_comboBoxCellWillDismiss: P0): R;
    comboBoxCellWillPopUp<R = void, P0 = unknown>(_comboBoxCellWillPopUp: P0): R;
    comboBoxCellSelectionIsChanging<R = void, P0 = unknown>(_comboBoxCellSelectionIsChanging: P0): R;
    comboBoxCellSelectionDidChange<R = void, P0 = unknown>(_comboBoxCellSelectionDidChange: P0): R;
    objectValues<R = NSArray>(): R;
    objectValueOfSelectedItem<R = unknown>(): R;
    numberOfItems<R = number>(): R;
    indexOfSelectedItem<R = number>(): R;
    delegate<R = NSComboBoxDelegate>(): R;
    setDelegate<R = void, P0 = NSComboBoxDelegate>(_v: P0): R;
    usesDataSource<R = boolean>(): R;
    setUsesDataSource<R = void, P0 = boolean>(_v: P0): R;
    dataSource<R = NSComboBoxDataSource>(): R;
    setDataSource<R = void, P0 = NSComboBoxDataSource>(_v: P0): R;
    completes<R = boolean>(): R;
    setCompletes<R = void, P0 = boolean>(_v: P0): R;
    buttonBordered<R = boolean>(): R;
    setButtonBordered<R = void, P0 = boolean>(_v: P0): R;
    numberOfVisibleItems<R = number>(): R;
    setNumberOfVisibleItems<R = void, P0 = number>(_v: P0): R;
    itemHeight<R = number>(): R;
    setItemHeight<R = void, P0 = number>(_v: P0): R;
    intercellSpacing<R = CGSize>(): R;
    setIntercellSpacing<R = void, P0 = CGSize>(_v: P0): R;
    hasVerticalScroller<R = boolean>(): R;
    setHasVerticalScroller<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSComboBox {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = NSComboBox>(): R;
      new: <R = NSComboBox>() => R;
    }
  }
}

declare const NSComboBox: cocoa.NSComboBox.CLASS;
