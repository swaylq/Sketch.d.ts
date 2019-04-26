/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSShadow<T0 = void, T1 = void, T2 = void> {
    // + NSShadow(CHShadowExtensions):
    blurRadius<R = number>(): R;
    setBlurRadius<R = void, P0 = number>(_v: P0): R;
    offsetY<R = number>(): R;
    setOffsetY<R = void, P0 = number>(_v: P0): R;
    offsetX<R = number>(): R;
    setOffsetX<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSShadow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSShadow(CHShadowExtensions): 
      clearShadow<R = void>(): R;
      shadowWithColor_offset_blur<R = unknown, P0 = unknown, P1 = CGSize, P2 = number>(_shadowWithColor: P0, _offset: P1, _blur: P2): R;
    }
  }
}

declare const NSShadow: cocoa.NSShadow.CLASS;
