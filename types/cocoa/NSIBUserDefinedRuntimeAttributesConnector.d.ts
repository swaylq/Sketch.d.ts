/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSIBUserDefinedRuntimeAttributesConnector<T0 = void, T1 = void, T2 = void> extends NSObject {
    instantiateWithObjectInstantiator<R = void, P0 = unknown>(_instantiateWithObjectInstantiator: P0): R;
    establishConnection<R = void>(): R;
    replaceObject_withObject<R = void, P0 = unknown, P1 = unknown>(_replaceObject: P0, _withObject: P1): R;
    setLabel<R = void, P0 = unknown>(_setLabel: P0): R;
    label<R = unknown>(): R;
    setDestination<R = void, P0 = unknown>(_setDestination: P0): R;
    destination<R = unknown>(): R;
    setSource<R = void, P0 = unknown>(_setSource: P0): R;
    source<R = unknown>(): R;
    setObject<R = void, P0 = unknown>(_setObject: P0): R;
    object<R = unknown>(): R;
    setValues<R = void, P0 = unknown>(_setValues: P0): R;
    values<R = unknown>(): R;
    setKeyPaths<R = void, P0 = unknown>(_setKeyPaths: P0): R;
    keyPaths<R = unknown>(): R;
    dealloc<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
  }
  namespace NSIBUserDefinedRuntimeAttributesConnector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSIBUserDefinedRuntimeAttributesConnector>(): R;
      new: <R = NSIBUserDefinedRuntimeAttributesConnector>() => R;
    }
  }
}

declare const NSIBUserDefinedRuntimeAttributesConnector: cocoa.NSIBUserDefinedRuntimeAttributesConnector.CLASS;
