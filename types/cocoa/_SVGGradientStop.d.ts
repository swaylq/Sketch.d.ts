/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _SVGGradientStop<T0 = void, T1 = void, T2 = void> extends SVGElement {
    position<R = number>(): R;
    setPosition<R = void, P0 = number>(_v: P0): R;
    color<R = MSImmutableColor>(): R;
    setColor<R = void, P0 = MSImmutableColor>(_v: P0): R;
  }
  namespace _SVGGradientStop {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends SVGElement {
      alloc<R = _SVGGradientStop>(): R;
      new: <R = _SVGGradientStop>() => R;
    }
  }
}
