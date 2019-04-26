/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSURLPboardTypeConverter<T0 = void, T1 = void, T2 = void> extends _NSPboardTypeConverter {}
  namespace _NSURLPboardTypeConverter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSPboardTypeConverter {
      alloc<R = _NSURLPboardTypeConverter>(): R;
      new: <R = _NSURLPboardTypeConverter>() => R;
      _getConvertedDataFromPasteboard_securityScoped<R = unknown, P0 = unknown, P1 = boolean>(__getConvertedDataFromPasteboard: P0, _securityScoped: P1): R;
    }
  }
}
