/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableStyleShadow<T0 = void, T1 = void, T2 = void> extends MSImmutableStylePart {
    contextSettings<R = MSImmutableGraphicsContextSettings>(): R;
    setContextSettings<R = void, P0 = MSImmutableGraphicsContextSettings>(_v: P0): R;
    color<R = MSImmutableColor>(): R;
    setColor<R = void, P0 = MSImmutableColor>(_v: P0): R;
    spread<R = number>(): R;
    setSpread<R = void, P0 = number>(_v: P0): R;
    offsetY<R = number>(): R;
    setOffsetY<R = void, P0 = number>(_v: P0): R;
    offsetX<R = number>(): R;
    setOffsetX<R = void, P0 = number>(_v: P0): R;
    blurRadius<R = number>(): R;
    setBlurRadius<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableStyleShadow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableStylePart {
      alloc<R = _MSImmutableStyleShadow>(): R;
      new: <R = _MSImmutableStyleShadow>() => R;
    }
  }
}
