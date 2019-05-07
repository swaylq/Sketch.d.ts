/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewListCellMockElement<T0 = void, T1 = void, T2 = void> extends NSTableViewCellMockElement {
    accessibilityIsIndexAttributeSettable<R = boolean>(): R;
    accessibilityIndexAttribute<R = unknown>(): R;
  }
  namespace NSTableViewListCellMockElement {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableViewCellMockElement {
      alloc<R = NSTableViewListCellMockElement>(): R;
      new: <R = NSTableViewListCellMockElement>() => R;
    }
  }
}

declare const NSTableViewListCellMockElement: cocoa.NSTableViewListCellMockElement.CLASS;
