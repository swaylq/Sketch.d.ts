/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCGSSpace<T0 = void, T1 = void, T2 = void> extends NSCGSSpace {
    spaceID<R = number>(): R;
    initWithSpaceID<R = unknown, P0 = number>(_initWithSpaceID: P0): R;
    dealloc<R = void>(): R;
  }
  namespace _NSCGSSpace {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCGSSpace {
      alloc<R = _NSCGSSpace>(): R;
      new: <R = _NSCGSSpace>() => R;
    }
  }
}
