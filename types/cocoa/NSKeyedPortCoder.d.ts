/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyedPortCoder<T0 = void, T1 = void, T2 = void> extends NSConcretePortCoder {
    decodeReturnValueOfInvocation_forKey<R = void, P0 = unknown, P1 = unknown>(_decodeReturnValueOfInvocation: P0, _forKey: P1): R;
    encodeReturnValueOfInvocation_forKey<R = void, P0 = unknown, P1 = unknown>(_encodeReturnValueOfInvocation: P0, _forKey: P1): R;
    decodeInvocation<R = unknown>(): R;
    encodeInvocation<R = void, P0 = unknown>(_encodeInvocation: P0): R;
    _decodeObjectNoKey<R = unknown>(): R;
    _encodeObjectNoKey<R = void, P0 = unknown>(__encodeObjectNoKey: P0): R;
    _setByref<R = void, P0 = boolean>(__setByref: P0): R;
    _setBycopy<R = void, P0 = boolean>(__setBycopy: P0): R;
    decodePortObjectForKey<R = unknown, P0 = unknown>(_decodePortObjectForKey: P0): R;
    decodeDataObjectForKey<R = unknown, P0 = unknown>(_decodeDataObjectForKey: P0): R;
    _getOutOfLineObjectForKey<R = unknown, P0 = unknown>(__getOutOfLineObjectForKey: P0): R;
    _decodePropertyListForKey<R = unknown, P0 = unknown>(__decodePropertyListForKey: P0): R;
    _getObjectFromTopForKey<R = unknown, P0 = unknown>(__getObjectFromTopForKey: P0): R;
    encodePortObject_forKey<R = void, P0 = unknown, P1 = unknown>(_encodePortObject: P0, _forKey: P1): R;
    encodeDataObject_forKey<R = void, P0 = unknown, P1 = unknown>(_encodeDataObject: P0, _forKey: P1): R;
    _addOutOfLineObject_forKey<R = void, P0 = unknown, P1 = unknown>(__addOutOfLineObject: P0, _forKey: P1): R;
    _encodePropertyList_forKey<R = void, P0 = unknown, P1 = unknown>(__encodePropertyList: P0, _forKey: P1): R;
    _finishUpObject<R = void>(): R;
    _prepareToEncodeObjectForKey<R = void, P0 = unknown>(__prepareToEncodeObjectForKey: P0): R;
    _addObjectToTop_forKey<R = void, P0 = unknown, P1 = unknown>(__addObjectToTop: P0, _forKey: P1): R;
    _topContainer<R = unknown>(): R;
    importObject<R = void, P0 = unknown>(_importObject: P0): R;
    importedObjects<R = unknown>(): R;
    _proxyForLocalObject<R = unknown, P0 = unknown>(__proxyForLocalObject: P0): R;
    finishedComponents<R = unknown>(): R;
    _buildMainData<R = void>(): R;
    debugDescription<R = unknown>(): R;
    invalidate<R = void>(): R;
  }
  namespace NSKeyedPortCoder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSConcretePortCoder {
      alloc<R = NSKeyedPortCoder>(): R;
      new: <R = NSKeyedPortCoder>() => R;
    }
  }
}

declare const NSKeyedPortCoder: cocoa.NSKeyedPortCoder.CLASS;
