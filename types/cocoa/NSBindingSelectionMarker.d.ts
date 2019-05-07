/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBindingSelectionMarker<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {}
  namespace NSBindingSelectionMarker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSBindingSelectionMarker>(): R;
      new: <R = NSBindingSelectionMarker>() => R;
      notApplicableSelectionMarker<R = unknown>(): R;
      noSelectionMarker<R = unknown>(): R;
      multipleValuesSelectionMarker<R = unknown>(): R;
    }
  }
}

declare const NSBindingSelectionMarker: cocoa.NSBindingSelectionMarker.CLASS;
