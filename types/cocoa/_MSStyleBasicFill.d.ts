/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSStyleBasicFill<T0 = void, T1 = void, T2 = void> extends MSStylePart {
    gradient<R = MSGradient>(): R;
    setGradient<R = void, P0 = MSGradient>(_v: P0): R;
    contextSettings<R = MSGraphicsContextSettings>(): R;
    setContextSettings<R = void, P0 = MSGraphicsContextSettings>(_v: P0): R;
    color<R = MSColor>(): R;
    setColor<R = void, P0 = MSColor>(_v: P0): R;
    fillType<R = number>(): R;
    setFillType<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSStyleBasicFill {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSStylePart {
      alloc<R = _MSStyleBasicFill>(): R;
      new: <R = _MSStyleBasicFill>() => R;
    }
  }
}
