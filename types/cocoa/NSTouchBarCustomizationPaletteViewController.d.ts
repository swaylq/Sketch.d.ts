/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTouchBarCustomizationPaletteLayoutDelegateProtocol, NSCollectionViewDataSourceProtocol {
    visualCenterXOffset<R = number>(): R;
    setVisualCenterXOffset<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTouchBarCustomizationPaletteViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTouchBarCustomizationPaletteLayoutDelegateProtocol, NSCollectionViewDataSourceProtocol {
      alloc<R = NSTouchBarCustomizationPaletteViewController>(): R;
      new: <R = NSTouchBarCustomizationPaletteViewController>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteViewController: cocoa.NSTouchBarCustomizationPaletteViewController.CLASS;
