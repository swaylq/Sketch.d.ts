/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUnkeyedPortCoder<T0 = void, T1 = void, T2 = void> extends NSConcretePortCoder {
    decodeRetainedObject<R = unknown>(): R;
    encodeObject_isBycopy_isByref<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(_encodeObject: P0, _isBycopy: P1, _isByref: P2): R;
    decodeReturnValue<R = void, P0 = unknown>(_decodeReturnValue: P0): R;
    encodeReturnValue<R = void, P0 = unknown>(_encodeReturnValue: P0): R;
    decodeInvocation<R = unknown>(): R;
    encodeInvocation<R = void, P0 = unknown>(_encodeInvocation: P0): R;
    _proxyForLocalObject<R = unknown, P0 = unknown>(__proxyForLocalObject: P0): R;
    importObject<R = void, P0 = unknown>(_importObject: P0): R;
    importedObjects<R = unknown>(): R;
    finishedComponents<R = unknown>(): R;
    components<R = unknown>(): R;
    invalidate<R = void>(): R;
    debugDescription<R = unknown>(): R;
  }
  namespace NSUnkeyedPortCoder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSConcretePortCoder {
      alloc<R = NSUnkeyedPortCoder>(): R;
      new: <R = NSUnkeyedPortCoder>() => R;
      _enableLogging<R = void, P0 = boolean>(__enableLogging: P0): R;
    }
  }
}

declare const NSUnkeyedPortCoder: cocoa.NSUnkeyedPortCoder.CLASS;
