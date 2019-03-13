/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComboBoxDataSourceProtocol<T = any> extends NSObjectProtocol {
    comboBox_completedString<R = NSString, P0 = NSComboBox, P1 = NSString>(_comboBox: P0, _completedString: P1): R;
    comboBox_indexOfItemWithStringValue<R = number, P0 = NSComboBox, P1 = NSString>(_comboBox: P0, _indexOfItemWithStringValue: P1): R;
    comboBox_objectValueForItemAtIndex<R = unknown, P0 = NSComboBox, P1 = number>(_comboBox: P0, _objectValueForItemAtIndex: P1): R;
    numberOfItemsInComboBox<R = number, P0 = NSComboBox>(_numberOfItemsInComboBox: P0): R;
  }
  namespace classes {
    export interface NSComboBoxDataSourceProtocol<T = any> extends NSObjectProtocol {  }
  }
}
