/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOPointer<T0 = void, T1 = void, T2 = void> extends NSObject {
    initWithValue<R = unknown, P0 = unknown>(_initWithValue: P0): R;
    value<R = unknown>(): R;
    // + MOPointer(MOPointer):
    value<R = unknown>(): R;
    setValue<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace MOPointer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOPointer>(): R;
      new: <R = MOPointer>() => R;
  
  }
  }
}

declare const MOPointer: cocoa.MOPointer.CLASS;
