/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNibAXAttributeConnector<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    setLabel<R = void, P0 = unknown>(_setLabel: P0): R;
    label<R = unknown>(): R;
    instantiateWithObjectInstantiator<R = void, P0 = unknown>(_instantiateWithObjectInstantiator: P0): R;
    establishConnection<R = void>(): R;
    replaceObject_withObject<R = void, P0 = unknown, P1 = unknown>(_replaceObject: P0, _withObject: P1): R;
    setDestination<R = void, P0 = unknown>(_setDestination: P0): R;
    destination<R = unknown>(): R;
    setSource<R = void, P0 = unknown>(_setSource: P0): R;
    source<R = unknown>(): R;
    setAttributeValue<R = void, P0 = unknown>(_setAttributeValue: P0): R;
    attributeValue<R = unknown>(): R;
    setAttributeType<R = void, P0 = unknown>(_setAttributeType: P0): R;
    attributeType<R = unknown>(): R;
    dealloc<R = void>(): R;
    _isAXConnector<R = boolean>(): R;
  }
  namespace NSNibAXAttributeConnector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSNibAXAttributeConnector>(): R;
      new: <R = NSNibAXAttributeConnector>() => R;
    }
  }
}

declare const NSNibAXAttributeConnector: cocoa.NSNibAXAttributeConnector.CLASS;
