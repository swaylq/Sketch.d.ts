/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteCollectionView<T0 = void, T1 = void, T2 = void> extends NSCollectionView {}
  namespace NSTouchBarCustomizationPaletteCollectionView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionView {
      alloc<R = NSTouchBarCustomizationPaletteCollectionView>(): R;
      new: <R = NSTouchBarCustomizationPaletteCollectionView>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteCollectionView: cocoa.NSTouchBarCustomizationPaletteCollectionView.CLASS;
