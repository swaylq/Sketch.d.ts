/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSGraphicsContextSettings<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    hasDefaultValues<R = boolean>(): R;
    opacity<R = number>(): R;
    setOpacity<R = void, P0 = number>(_v: P0): R;
    blendMode<R = number>(): R;
    setBlendMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSGraphicsContextSettings {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSGraphicsContextSettings>(): R;
      new: <R = _MSGraphicsContextSettings>() => R;
    }
  }
}
