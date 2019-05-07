/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSClrDat<T0 = void, T1 = void, T2 = void> extends NSConcreteData {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    _allowsDirectEncoding<R = boolean>(): R;
    _canReplaceWithDispatchDataForXPCCoder<R = boolean>(): R;
  }
  namespace _NSClrDat {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSConcreteData {}
  }
}
