/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEagerTrackingCell<T0 = void, T1 = void, T2 = void> extends NSCell {}
  namespace NSEagerTrackingCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCell {
      alloc<R = NSEagerTrackingCell>(): R;
      new: <R = NSEagerTrackingCell>() => R;
    }
  }
}

declare const NSEagerTrackingCell: cocoa.NSEagerTrackingCell.CLASS;
