/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPeriodicEventSource<T0 = void, T1 = void, T2 = void> extends NSObject {
    addTimerToModes<R = void>(): R;
  }
  namespace _NSPeriodicEventSource {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSPeriodicEventSource>(): R;
      new: <R = _NSPeriodicEventSource>() => R;
    }
  }
}
