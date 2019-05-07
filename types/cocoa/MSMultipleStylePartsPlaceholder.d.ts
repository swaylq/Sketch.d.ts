/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleStylePartsPlaceholder<T0 = void, T1 = void, T2 = void> extends MSStylePart {}
  namespace MSMultipleStylePartsPlaceholder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStylePart {
      alloc<R = MSMultipleStylePartsPlaceholder>(): R;
      new: <R = MSMultipleStylePartsPlaceholder>() => R;
    }
  }
}

declare const MSMultipleStylePartsPlaceholder: cocoa.MSMultipleStylePartsPlaceholder.CLASS;
