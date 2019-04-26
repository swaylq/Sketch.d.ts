/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCRGBFlexibleColor<T0 = void, T1 = void, T2 = void> extends BCFlexibleColor {
    light<R = number>(): R;
    sat<R = number>(): R;
    hue<R = number>(): R;
  }
  namespace BCRGBFlexibleColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCFlexibleColor {
      alloc<R = BCRGBFlexibleColor>(): R;
      new: <R = BCRGBFlexibleColor>() => R;
    }
  }
}

declare const BCRGBFlexibleColor: cocoa.BCRGBFlexibleColor.CLASS;
