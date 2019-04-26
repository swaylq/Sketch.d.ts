/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarSearchFieldCell<T0 = void, T1 = void, T2 = void> extends NSSearchFieldCell {
    statusStringFieldRectForBounds<R = CGRect, P0 = CGRect>(_statusStringFieldRectForBounds: P0): R;
    _searchFieldDoRecentPattern<R = void, P0 = unknown>(__searchFieldDoRecentPattern: P0): R;
    _commonTextFinderInit<R = void>(): R;
    statusString<R = NSString>(): R;
    setStatusString<R = void, P0 = NSString>(_v: P0): R;
    recentAttributedSearchStrings<R = NSArray>(): R;
    setRecentAttributedSearchStrings<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace NSTextFinderBarSearchFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSearchFieldCell {
      alloc<R = NSTextFinderBarSearchFieldCell>(): R;
      new: <R = NSTextFinderBarSearchFieldCell>() => R;
    }
  }
}

declare const NSTextFinderBarSearchFieldCell: cocoa.NSTextFinderBarSearchFieldCell.CLASS;
