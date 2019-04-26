/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableGraphicsContextSettings<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    opacity<R = number>(): R;
    setOpacity<R = void, P0 = number>(_v: P0): R;
    blendMode<R = number>(): R;
    setBlendMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableGraphicsContextSettings {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableGraphicsContextSettings>(): R;
      new: <R = _MSImmutableGraphicsContextSettings>() => R;
    }
  }
}
