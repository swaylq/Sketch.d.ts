/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteLayoutSectionAccessibility<T0 = void, T1 = void, T2 = void> extends NSCollectionViewSectionAccessibility {}
  namespace NSTouchBarCustomizationPaletteLayoutSectionAccessibility {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewSectionAccessibility {
      alloc<R = NSTouchBarCustomizationPaletteLayoutSectionAccessibility>(): R;
      new: <R = NSTouchBarCustomizationPaletteLayoutSectionAccessibility>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteLayoutSectionAccessibility: cocoa.NSTouchBarCustomizationPaletteLayoutSectionAccessibility.CLASS;
