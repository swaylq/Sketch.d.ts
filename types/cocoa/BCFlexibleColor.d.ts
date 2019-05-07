/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCFlexibleColor<T0 = void, T1 = void, T2 = void> extends NSObject {
    description<R = unknown>(): R;
    colorForColorSpace<R = unknown, P0 = unknown>(_colorForColorSpace: P0): R;
    alpha<R = number>(): R;
    setAlpha<R = void, P0 = number>(_v: P0): R;
    light<R = number>(): R;
    setLight<R = void, P0 = number>(_v: P0): R;
    sat<R = number>(): R;
    setSat<R = void, P0 = number>(_v: P0): R;
    hue<R = number>(): R;
    setHue<R = void, P0 = number>(_v: P0): R;
    blue<R = number>(): R;
    setBlue<R = void, P0 = number>(_v: P0): R;
    green<R = number>(): R;
    setGreen<R = void, P0 = number>(_v: P0): R;
    red<R = number>(): R;
    setRed<R = void, P0 = number>(_v: P0): R;
  }
  namespace BCFlexibleColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCFlexibleColor>(): R;
      new: <R = BCFlexibleColor>() => R;
      colorWithHue_sat_light_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithHue: P0, _sat: P1, _light: P2, _alpha: P3): R;
      colorWithRed_green_blue_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number>(_colorWithRed: P0, _green: P1, _blue: P2, _alpha: P3): R;
    }
  }
}

declare const BCFlexibleColor: cocoa.BCFlexibleColor.CLASS;
