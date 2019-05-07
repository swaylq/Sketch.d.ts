/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewListCellProxy<T0 = void, T1 = void, T2 = void> extends NSTableViewCellProxy {
    accessibilitySetSelectedAttribute<R = void, P0 = unknown>(_accessibilitySetSelectedAttribute: P0): R;
    accessibilityIsSelectedAttributeSettable<R = boolean>(): R;
    accessibilitySelectedAttribute<R = unknown>(): R;
    _canDeselect<R = boolean>(): R;
  }
  namespace NSTableViewListCellProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableViewCellProxy {
      alloc<R = NSTableViewListCellProxy>(): R;
      new: <R = NSTableViewListCellProxy>() => R;
    }
  }
}

declare const NSTableViewListCellProxy: cocoa.NSTableViewListCellProxy.CLASS;
