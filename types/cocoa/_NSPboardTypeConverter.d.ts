/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPboardTypeConverter<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSPboardTypeConverter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSPboardTypeConverter>(): R;
      new: <R = _NSPboardTypeConverter>() => R;
      pasteboard_provideDataForType<R = void, P0 = unknown, P1 = unknown>(_pasteboard: P0, _provideDataForType: P1): R;
      dataForType_fromPasteboard<R = unknown, P0 = unknown, P1 = unknown>(_dataForType: P0, _fromPasteboard: P1): R;
    }
  }
}
