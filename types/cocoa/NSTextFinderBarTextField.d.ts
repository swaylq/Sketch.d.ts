/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarTextField<T0 = void, T1 = void, T2 = void> extends NSTextField {
    statusString<R = NSString>(): R;
    setStatusString<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSTextFinderBarTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = NSTextFinderBarTextField>(): R;
      new: <R = NSTextFinderBarTextField>() => R;
    }
  }
}

declare const NSTextFinderBarTextField: cocoa.NSTextFinderBarTextField.CLASS;
