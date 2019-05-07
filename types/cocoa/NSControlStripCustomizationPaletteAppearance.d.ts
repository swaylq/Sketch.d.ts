/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSControlStripCustomizationPaletteAppearance<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {}
  namespace NSControlStripCustomizationPaletteAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {
      alloc<R = NSControlStripCustomizationPaletteAppearance>(): R;
      new: <R = NSControlStripCustomizationPaletteAppearance>() => R;
    }
  }
}

declare const NSControlStripCustomizationPaletteAppearance: cocoa.NSControlStripCustomizationPaletteAppearance.CLASS;
