/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarSearchField<T0 = void, T1 = void, T2 = void> extends NSSearchField {
    _mouseDownEventIsInSearchButton<R = boolean, P0 = unknown>(__mouseDownEventIsInSearchButton: P0): R;
    recentAttributedSearchStrings<R = NSArray>(): R;
    setRecentAttributedSearchStrings<R = void, P0 = NSArray>(_v: P0): R;
    statusString<R = NSString>(): R;
    setStatusString<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSTextFinderBarSearchField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSearchField {
      alloc<R = NSTextFinderBarSearchField>(): R;
      new: <R = NSTextFinderBarSearchField>() => R;
    }
  }
}

declare const NSTextFinderBarSearchField: cocoa.NSTextFinderBarSearchField.CLASS;
