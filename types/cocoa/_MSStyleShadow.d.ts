/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyleShadow<T0 = void, T1 = void, T2 = void> extends MSStylePart {
    contextSettings<R = MSGraphicsContextSettings>(): R;
    setContextSettings<R = void, P0 = MSGraphicsContextSettings>(_v: P0): R;
    color<R = MSColor>(): R;
    setColor<R = void, P0 = MSColor>(_v: P0): R;
    spread<R = number>(): R;
    setSpread<R = void, P0 = number>(_v: P0): R;
    offsetY<R = number>(): R;
    setOffsetY<R = void, P0 = number>(_v: P0): R;
    offsetX<R = number>(): R;
    setOffsetX<R = void, P0 = number>(_v: P0): R;
    blurRadius<R = number>(): R;
    setBlurRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSStyleShadow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStylePart {
      alloc<R = _MSStyleShadow>(): R;
      new: <R = _MSStyleShadow>() => R;
    }
  }
}
