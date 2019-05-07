/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCHSLFlexibleColor<T0 = void, T1 = void, T2 = void> extends BCFlexibleColor {
    blue<R = number>(): R;
    green<R = number>(): R;
    red<R = number>(): R;
  }
  namespace BCHSLFlexibleColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCFlexibleColor {
      alloc<R = BCHSLFlexibleColor>(): R;
      new: <R = BCHSLFlexibleColor>() => R;
    }
  }
}

declare const BCHSLFlexibleColor: cocoa.BCHSLFlexibleColor.CLASS;
