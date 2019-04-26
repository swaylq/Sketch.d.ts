/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDynamicNamedColor<T0 = void, T1 = void, T2 = void> extends NSCatalogColor {
    resolvedColor<R = NSColor>(): R;
  }
  namespace NSDynamicNamedColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCatalogColor {
      alloc<R = NSDynamicNamedColor>(): R;
      new: <R = NSDynamicNamedColor>() => R;
    }
  }
}

declare const NSDynamicNamedColor: cocoa.NSDynamicNamedColor.CLASS;
