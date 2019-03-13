/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableViewListCellMockElement<T = any> extends NSTableViewCellMockElement {
    accessibilityIsIndexAttributeSettable<R = boolean>(): R;
    accessibilityIndexAttribute<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTableViewListCellMockElement<T = any> extends NSTableViewCellMockElement {
      alloc<R = NSTableViewListCellMockElement>(): R;
      new: <R = NSTableViewListCellMockElement>() => R;
    }
  }
}

declare const NSTableViewListCellMockElement: cocoa.classes.NSTableViewListCellMockElement;