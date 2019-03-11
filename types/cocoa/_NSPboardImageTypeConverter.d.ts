/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPboardImageTypeConverter<T = any> extends cocoa.NSObject {
    pasteboard_provideDataForType<R = void, P0 = unknown, P1 = unknown>(_pasteboard: P0, _provideDataForType: P1): R;
    _convertImageData_toDataOfType<R = unknown, P0 = unknown, P1 = unknown>(__convertImageData: P0, _toDataOfType: P1): R;
    dealloc<R = void>(): R;
    initWithType<R = unknown, P0 = unknown>(_initWithType: P0): R;
  }
  namespace classes {
    export interface _NSPboardImageTypeConverter<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSPboardImageTypeConverter>(): R;
      new: <R = _NSPboardImageTypeConverter>() => R;
      imageTypeConverterForType<R = unknown, P0 = unknown>(_imageTypeConverterForType: P0): R;
    }
  }
}
