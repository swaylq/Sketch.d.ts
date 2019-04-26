/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFindPanel<T0 = void, T1 = void, T2 = void> extends NSPanel, NSWindowDelegateProtocol {
    setSubstringMatchType<R = void, P0 = number>(_setSubstringMatchType: P0): R;
    substringMatchType<R = number>(): R;
    searchOptions<R = number>(): R;
    setSearchOptions<R = void, P0 = number>(_setSearchOptions: P0): R;
    _setDefaultSubstringMatchType<R = void, P0 = number>(__setDefaultSubstringMatchType: P0): R;
    _defaultSubstringMatchType<R = number>(): R;
    _setCaseInsensitiveSearchDefault<R = void, P0 = boolean>(__setCaseInsensitiveSearchDefault: P0): R;
    _caseInsensitiveSearchDefault<R = boolean>(): R;
    _restoreDefaultSearchOptions<R = void>(): R;
    _makeCurrentSearchOptionsDefault<R = void>(): R;
    _setDefaultSearchOptions<R = void, P0 = unknown>(__setDefaultSearchOptions: P0): R;
    _findNextAndOrderFindPanelOut<R = void, P0 = unknown>(__findNextAndOrderFindPanelOut: P0): R;
    _setLastFindWasSuccessful<R = void, P0 = boolean>(__setLastFindWasSuccessful: P0): R;
    numberOfItemsInComboBox<R = number, P0 = unknown>(_numberOfItemsInComboBox: P0): R;
    comboBox_objectValueForItemAtIndex<R = unknown, P0 = unknown, P1 = number>(_comboBox: P0, _objectValueForItemAtIndex: P1): R;
    awakeFromNib<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSFindPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel, NSWindowDelegateProtocol {
      alloc<R = NSFindPanel>(): R;
      new: <R = NSFindPanel>() => R;
      _isLoaded<R = boolean>(): R;
      sharedFindPanel<R = unknown>(): R;
    }
  }
}

declare const NSFindPanel: cocoa.NSFindPanel.CLASS;
