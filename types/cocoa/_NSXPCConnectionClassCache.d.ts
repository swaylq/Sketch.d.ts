/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSXPCConnectionClassCache<T0 = void, T1 = void, T2 = void> extends NSObject {
    clear<R = void>(): R;
    addClass<R = void, P0 = unknown>(_addClass: P0): R;
    containsClass<R = boolean, P0 = unknown>(_containsClass: P0): R;
    dealloc<R = void>(): R;
  }
  namespace _NSXPCConnectionClassCache {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSXPCConnectionClassCache>(): R;
      new: <R = _NSXPCConnectionClassCache>() => R;
    }
  }
}
