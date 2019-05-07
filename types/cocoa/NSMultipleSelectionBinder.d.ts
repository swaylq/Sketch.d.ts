/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMultipleSelectionBinder<T0 = void, T1 = void, T2 = void> extends NSSelectionBinder {}
  namespace NSMultipleSelectionBinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSelectionBinder {
      alloc<R = NSMultipleSelectionBinder>(): R;
      new: <R = NSMultipleSelectionBinder>() => R;
    }
  }
}

declare const NSMultipleSelectionBinder: cocoa.NSMultipleSelectionBinder.CLASS;
