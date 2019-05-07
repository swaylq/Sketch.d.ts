/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteExpandedControlStripPreset<T0 = void, T1 = void, T2 = void> extends NSTouchBarCustomizationPalettePreset {}
  namespace NSTouchBarCustomizationPaletteExpandedControlStripPreset {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarCustomizationPalettePreset {
      alloc<R = NSTouchBarCustomizationPaletteExpandedControlStripPreset>(): R;
      new: <R = NSTouchBarCustomizationPaletteExpandedControlStripPreset>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteExpandedControlStripPreset: cocoa.NSTouchBarCustomizationPaletteExpandedControlStripPreset.CLASS;
