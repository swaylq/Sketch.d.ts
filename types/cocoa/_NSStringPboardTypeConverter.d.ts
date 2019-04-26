/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStringPboardTypeConverter<T0 = void, T1 = void, T2 = void> extends _NSPboardTypeConverter {}
  namespace _NSStringPboardTypeConverter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSPboardTypeConverter {
      alloc<R = _NSStringPboardTypeConverter>(): R;
      new: <R = _NSStringPboardTypeConverter>() => R;
      _getConvertedDataFromPasteboard_atIndex<R = unknown, P0 = unknown, P1 = number>(__getConvertedDataFromPasteboard: P0, _atIndex: P1): R;
    }
  }
}
