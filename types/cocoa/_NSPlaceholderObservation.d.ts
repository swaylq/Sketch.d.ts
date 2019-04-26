/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPlaceholderObservation<T0 = void, T1 = void, T2 = void> extends NSObservation {}
  namespace _NSPlaceholderObservation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObservation {
      alloc<R = _NSPlaceholderObservation>(): R;
      new: <R = _NSPlaceholderObservation>() => R;
    }
  }
}
