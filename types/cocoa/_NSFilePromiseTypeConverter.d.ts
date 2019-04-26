/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFilePromiseTypeConverter<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSFilePromiseTypeConverter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSFilePromiseTypeConverter>(): R;
      new: <R = _NSFilePromiseTypeConverter>() => R;
      _getConvertedDataFromPasteboard<R = unknown, P0 = unknown>(__getConvertedDataFromPasteboard: P0): R;
    }
  }
}
