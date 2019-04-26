/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibOutletCollectionConnector<T0 = void, T1 = void, T2 = void> extends NSNibConnector {
    addsContentToExistingCollection<R = boolean>(): R;
    setAddsContentToExistingCollection<R = void, P0 = boolean>(_v: P0): R;
    runtimeCollectionClassName<R = NSString>(): R;
    setRuntimeCollectionClassName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSNibOutletCollectionConnector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSNibConnector {
      alloc<R = NSNibOutletCollectionConnector>(): R;
      new: <R = NSNibOutletCollectionConnector>() => R;
    }
  }
}

declare const NSNibOutletCollectionConnector: cocoa.NSNibOutletCollectionConnector.CLASS;
