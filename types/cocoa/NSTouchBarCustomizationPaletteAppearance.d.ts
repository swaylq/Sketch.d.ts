/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteAppearance<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {}
  namespace NSTouchBarCustomizationPaletteAppearance {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSBuiltinAppearance {
      alloc<R = NSTouchBarCustomizationPaletteAppearance>(): R;
      new: <R = NSTouchBarCustomizationPaletteAppearance>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteAppearance: cocoa.NSTouchBarCustomizationPaletteAppearance.CLASS;
