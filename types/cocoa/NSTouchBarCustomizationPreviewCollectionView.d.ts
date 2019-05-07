/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewCollectionView<T0 = void, T1 = void, T2 = void> extends NSCollectionView {}
  namespace NSTouchBarCustomizationPreviewCollectionView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionView {
      alloc<R = NSTouchBarCustomizationPreviewCollectionView>(): R;
      new: <R = NSTouchBarCustomizationPreviewCollectionView>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewCollectionView: cocoa.NSTouchBarCustomizationPreviewCollectionView.CLASS;
