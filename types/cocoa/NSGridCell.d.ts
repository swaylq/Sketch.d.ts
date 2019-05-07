/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGridCell<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {}
  namespace NSGridCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSGridCell>(): R;
      new: <R = NSGridCell>() => R;
      emptyContentView<R = unknown>(): R;
    }
  }
}

declare const NSGridCell: cocoa.NSGridCell.CLASS;
