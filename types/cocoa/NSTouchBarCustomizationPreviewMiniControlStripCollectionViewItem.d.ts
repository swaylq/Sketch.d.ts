/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPreviewMiniControlStripCollectionViewItem<T0 = void, T1 = void, T2 = void> extends NSTouchBarCustomizationPreviewCollectionViewItem {}
  namespace NSTouchBarCustomizationPreviewMiniControlStripCollectionViewItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarCustomizationPreviewCollectionViewItem {
      alloc<R = NSTouchBarCustomizationPreviewMiniControlStripCollectionViewItem>(): R;
      new: <R = NSTouchBarCustomizationPreviewMiniControlStripCollectionViewItem>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPreviewMiniControlStripCollectionViewItem: cocoa.NSTouchBarCustomizationPreviewMiniControlStripCollectionViewItem.CLASS;
