/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSRTFPboardTypeConverter<T0 = void, T1 = void, T2 = void> extends _NSPboardTypeConverter, NSPasteboardItemDataProviderProtocol {
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSRTFPboardTypeConverter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSPboardTypeConverter, NSPasteboardItemDataProviderProtocol {
      alloc<R = _NSRTFPboardTypeConverter>(): R;
      new: <R = _NSRTFPboardTypeConverter>() => R;
      _getConvertedDataFromPasteboard_atIndex<R = unknown, P0 = unknown, P1 = number>(__getConvertedDataFromPasteboard: P0, _atIndex: P1): R;
    }
  }
}
