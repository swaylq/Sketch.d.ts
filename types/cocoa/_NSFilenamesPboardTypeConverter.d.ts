/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFilenamesPboardTypeConverter<T0 = void, T1 = void, T2 = void> extends _NSPboardTypeConverter {}
  namespace _NSFilenamesPboardTypeConverter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSPboardTypeConverter {
      alloc<R = _NSFilenamesPboardTypeConverter>(): R;
      new: <R = _NSFilenamesPboardTypeConverter>() => R;
      _getConvertedDataFromPasteboard_securityScoped<R = unknown, P0 = unknown, P1 = boolean>(__getConvertedDataFromPasteboard: P0, _securityScoped: P1): R;
      _setConvertedData_pboard_generation_inItem<R = void, P0 = unknown, P1 = __CFPasteboard, P2 = number, P3 = void>(__setConvertedData: P0, _pboard: P1, _generation: P2, _inItem: P3): R;
    }
  }
}
