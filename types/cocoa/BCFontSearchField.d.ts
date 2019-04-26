/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCFontSearchField<T0 = void, T1 = void, T2 = void> extends NSSearchField, NSTextViewDelegateProtocol {
    cxx_destruct<R = void>(): R;
    moveFocusToTableView<R = void>(): R;
    searchResults<R = NSTableView>(): R;
    setSearchResults<R = void, P0 = NSTableView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCFontSearchField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSearchField, NSTextViewDelegateProtocol {
      alloc<R = BCFontSearchField>(): R;
      new: <R = BCFontSearchField>() => R;
    }
  }
}

declare const BCFontSearchField: cocoa.BCFontSearchField.CLASS;
