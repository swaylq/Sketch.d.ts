/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarTextFieldCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    statusStringFieldRectForBounds<R = CGRect, P0 = CGRect>(_statusStringFieldRectForBounds: P0): R;
    _commonTextFinderInit<R = void>(): R;
    statusString<R = NSString>(): R;
    setStatusString<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSTextFinderBarTextFieldCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSTextFinderBarTextFieldCell>(): R;
      new: <R = NSTextFinderBarTextFieldCell>() => R;
    }
  }
}

declare const NSTextFinderBarTextFieldCell: cocoa.NSTextFinderBarTextFieldCell.CLASS;
