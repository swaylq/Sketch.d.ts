/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObservationSource<T0 = void, T1 = void, T2 = void> extends NSObject, NSObservableProtocol {
    dealloc<R = void>(): R;
    _observerStorageOfSize<R = void, P0 = number>(__observerStorageOfSize: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSObservationSource {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSObservableProtocol {
      alloc<R = NSObservationSource>(): R;
      new: <R = NSObservationSource>() => R;
    }
  }
}

declare const NSObservationSource: cocoa.NSObservationSource.CLASS;
