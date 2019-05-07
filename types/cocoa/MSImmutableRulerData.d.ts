/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImmutableRulerData<T0 = void, T1 = void, T2 = void> extends _MSImmutableRulerData {}
  namespace MSImmutableRulerData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSImmutableRulerData {
      alloc<R = MSImmutableRulerData>(): R;
      new: <R = MSImmutableRulerData>() => R;
    }
  }
}

declare const MSImmutableRulerData: cocoa.MSImmutableRulerData.CLASS;
