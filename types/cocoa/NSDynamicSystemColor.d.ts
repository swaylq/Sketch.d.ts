/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDynamicSystemColor<T0 = void, T1 = void, T2 = void> extends NSDynamicNamedColor {
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
    resolvedColor<R = unknown>(): R;
    recacheColor<R = void>(): R;
    initWithSelector_tintedWithColor<R = unknown, P0 = string, P1 = unknown>(_initWithSelector: P0, _tintedWithColor: P1): R;
    initWithSelector<R = unknown, P0 = string>(_initWithSelector: P0): R;
  }
  namespace NSDynamicSystemColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDynamicNamedColor {
      alloc<R = NSDynamicSystemColor>(): R;
      new: <R = NSDynamicSystemColor>() => R;
      alternateSecondarySelectedControlColor<R = unknown>(): R;
      recacheAllColors<R = void, P0 = unknown>(_recacheAllColors: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSDynamicSystemColor: cocoa.NSDynamicSystemColor.CLASS;
