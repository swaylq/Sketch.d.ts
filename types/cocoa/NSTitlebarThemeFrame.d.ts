/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarThemeFrame<T0 = void, T1 = void, T2 = void> extends NSThemeFrame {
    _shadowRect<R = CGRect>(): R;
    _ensureShadowImage<R = void>(): R;
    shadowAlpha<R = number>(): R;
    setShadowAlpha<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTitlebarThemeFrame {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSThemeFrame {
      alloc<R = NSTitlebarThemeFrame>(): R;
      new: <R = NSTitlebarThemeFrame>() => R;
    }
  }
}

declare const NSTitlebarThemeFrame: cocoa.NSTitlebarThemeFrame.CLASS;
