/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBoxCellDataSourceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    comboBoxCell_completedString<R = NSString, P0 = NSComboBoxCell, P1 = NSString>(_comboBoxCell: P0, _completedString: P1): R;
    comboBoxCell_indexOfItemWithStringValue<R = number, P0 = NSComboBoxCell, P1 = NSString>(_comboBoxCell: P0, _indexOfItemWithStringValue: P1): R;
    comboBoxCell_objectValueForItemAtIndex<R = unknown, P0 = NSComboBoxCell, P1 = number>(_comboBoxCell: P0, _objectValueForItemAtIndex: P1): R;
    numberOfItemsInComboBoxCell<R = number, P0 = NSComboBoxCell>(_numberOfItemsInComboBoxCell: P0): R;
  }
  namespace NSComboBoxCellDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
