/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIBHelpConnector<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    instantiateWithObjectInstantiator<R = void, P0 = unknown>(_instantiateWithObjectInstantiator: P0): R;
    establishConnection<R = void>(): R;
    replaceObject_withObject<R = void, P0 = unknown, P1 = unknown>(_replaceObject: P0, _withObject: P1): R;
    setMarker<R = void, P0 = unknown>(_setMarker: P0): R;
    marker<R = unknown>(): R;
    setFile<R = void, P0 = unknown>(_setFile: P0): R;
    file<R = unknown>(): R;
    setLabel<R = void, P0 = unknown>(_setLabel: P0): R;
    label<R = unknown>(): R;
    setDestination<R = void, P0 = unknown>(_setDestination: P0): R;
    destination<R = unknown>(): R;
    setSource<R = void, P0 = unknown>(_setSource: P0): R;
    source<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace NSIBHelpConnector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSIBHelpConnector>(): R;
      new: <R = NSIBHelpConnector>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSIBHelpConnector: cocoa.NSIBHelpConnector.CLASS;
