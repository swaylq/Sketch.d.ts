/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibConnector<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    instantiateWithObjectInstantiator<R = void, P0 = unknown>(_instantiateWithObjectInstantiator: P0): R;
    establishConnection<R = void>(): R;
    replaceObject_withObject<R = void, P0 = unknown, P1 = unknown>(_replaceObject: P0, _withObject: P1): R;
    dealloc<R = void>(): R;
    label<R = NSString>(): R;
    setLabel<R = void, P0 = NSString>(_v: P0): R;
    destination<R = unknown>(): R;
    setDestination<R = void, P0 = unknown>(_v: P0): R;
    source<R = unknown>(): R;
    setSource<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace NSNibConnector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSNibConnector>(): R;
      new: <R = NSNibConnector>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSNibConnector: cocoa.NSNibConnector.CLASS;
