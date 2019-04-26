/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarColorPickerFavoritesCollectionView<T0 = void, T1 = void, T2 = void> extends NSCollectionView {}
  namespace NSTouchBarColorPickerFavoritesCollectionView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionView {
      alloc<R = NSTouchBarColorPickerFavoritesCollectionView>(): R;
      new: <R = NSTouchBarColorPickerFavoritesCollectionView>() => R;
    }
  }
}

declare const NSTouchBarColorPickerFavoritesCollectionView: cocoa.NSTouchBarColorPickerFavoritesCollectionView.CLASS;
