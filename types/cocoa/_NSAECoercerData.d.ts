/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSAECoercerData<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithCoercer_selector<R = unknown, P0 = unknown, P1 = string>(_initWithCoercer: P0, _selector: P1): R;
  }
  namespace _NSAECoercerData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSAECoercerData>(): R;
      new: <R = _NSAECoercerData>() => R;
    }
  }
}
