/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDynamicModifiedColor<T0 = void, T1 = void, T2 = void> extends NSDynamicNamedColor {
    resolvedColor<R = unknown>(): R;
    initWithBaseColor_modifiers<R = unknown, P0 = unknown, P1 = unknown>(_initWithBaseColor: P0, _modifiers: P1): R;
  }
  namespace NSDynamicModifiedColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDynamicNamedColor {
      alloc<R = NSDynamicModifiedColor>(): R;
      new: <R = NSDynamicModifiedColor>() => R;
    }
  }
}

declare const NSDynamicModifiedColor: cocoa.NSDynamicModifiedColor.CLASS;
