/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConcreteDateInterval<T0 = void, T1 = void, T2 = void> extends NSDateInterval {
    duration<R = number>(): R;
    startDate<R = unknown>(): R;
    endDate<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSConcreteDateInterval {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDateInterval {
      alloc<R = _NSConcreteDateInterval>(): R;
      new: <R = _NSConcreteDateInterval>() => R;
    }
  }
}
