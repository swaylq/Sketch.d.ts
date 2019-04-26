/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSGradientStop<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    color<R = MSColor>(): R;
    setColor<R = void, P0 = MSColor>(_v: P0): R;
    position<R = number>(): R;
    setPosition<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSGradientStop {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSGradientStop>(): R;
      new: <R = _MSGradientStop>() => R;
    }
  }
}
