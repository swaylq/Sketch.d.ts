/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOPointerValue<T0 = void, T1 = void, T2 = void> extends NSObject {
    initWithPointerValue_typeEncoding<R = unknown, P0 = void, P1 = NSString>(_initWithPointerValue: P0, _typeEncoding: P1): R;
    pointerValue<R = void>(): R;
    typeEncoding<R = NSString>(): R;
  }
  namespace MOPointerValue {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOPointerValue>(): R;
      new: <R = MOPointerValue>() => R;
    }
  }
}

declare const MOPointerValue: cocoa.MOPointerValue.CLASS;
