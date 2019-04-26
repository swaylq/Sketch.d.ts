/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPromiseContentsTypeConverter<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSPromiseContentsTypeConverter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSPromiseContentsTypeConverter>(): R;
      new: <R = _NSPromiseContentsTypeConverter>() => R;
      _getConvertedDataFromPasteboard_securityScoped<R = unknown, P0 = unknown, P1 = boolean>(__getConvertedDataFromPasteboard: P0, _securityScoped: P1): R;
    }
  }
}
