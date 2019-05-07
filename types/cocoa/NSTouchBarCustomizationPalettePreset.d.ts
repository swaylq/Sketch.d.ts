/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPalettePreset<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    cleanUpPaletteViewAfterSnapshot<R = void, P0 = unknown>(_cleanUpPaletteViewAfterSnapshot: P0): R;
    makePaletteViewForSnapshot<R = unknown>(): R;
    maxSize<R = CGSize>(): R;
    minSize<R = CGSize>(): R;
    dealloc<R = void>(): R;
    visualCenterXOffset<R = number>(): R;
    setVisualCenterXOffset<R = void, P0 = number>(_v: P0): R;
    representedItemTree<R = NSTouchBarItemTree>(): R;
    presetSnapshot<R = NSImage>(): R;
  }
  namespace NSTouchBarCustomizationPalettePreset {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSTouchBarCustomizationPalettePreset>(): R;
      new: <R = NSTouchBarCustomizationPalettePreset>() => R;
      presetForItemTree_inBarWithSize<R = unknown, P0 = unknown, P1 = CGSize>(_presetForItemTree: P0, _inBarWithSize: P1): R;
    }
  }
}

declare const NSTouchBarCustomizationPalettePreset: cocoa.NSTouchBarCustomizationPalettePreset.CLASS;
