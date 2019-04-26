/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarAuxiliary<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
  }
  namespace _NSTouchBarAuxiliary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTouchBarAuxiliary>(): R;
      new: <R = _NSTouchBarAuxiliary>() => R;
    }
  }
}
