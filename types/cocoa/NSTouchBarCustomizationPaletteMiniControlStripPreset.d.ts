/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteMiniControlStripPreset<T0 = void, T1 = void, T2 = void> extends NSTouchBarCustomizationPalettePreset {}
  namespace NSTouchBarCustomizationPaletteMiniControlStripPreset {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarCustomizationPalettePreset {
      alloc<R = NSTouchBarCustomizationPaletteMiniControlStripPreset>(): R;
      new: <R = NSTouchBarCustomizationPaletteMiniControlStripPreset>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteMiniControlStripPreset: cocoa.NSTouchBarCustomizationPaletteMiniControlStripPreset.CLASS;
