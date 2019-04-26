/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MOAllocator<T0 = void, T1 = void, T2 = void> extends NSObject {
    objectClass<R = unknown>(): R;
    setObjectClass<R = void, P0 = unknown>(_v: P0): R;
  }
  namespace MOAllocator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MOAllocator>(): R;
      new: <R = MOAllocator>() => R;
      allocator<R = MOAllocator>(): R;
    }
  }
}

declare const MOAllocator: cocoa.MOAllocator.CLASS;
