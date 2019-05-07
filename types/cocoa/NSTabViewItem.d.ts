/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabViewItem<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {}
  namespace NSTabViewItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSTabViewItem>(): R;
      new: <R = NSTabViewItem>() => R;
      _labelCell<R = unknown>(): R;
    }
  }
}

declare const NSTabViewItem: cocoa.NSTabViewItem.CLASS;
