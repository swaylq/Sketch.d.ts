/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollectionViewItemBackgroundView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    item<R = MSAssetCollectionViewItem>(): R;
    setItem<R = void, P0 = MSAssetCollectionViewItem>(_v: P0): R;
  }
  namespace MSAssetCollectionViewItemBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSAssetCollectionViewItemBackgroundView>(): R;
      new: <R = MSAssetCollectionViewItemBackgroundView>() => R;
    }
  }
}

declare const MSAssetCollectionViewItemBackgroundView: cocoa.MSAssetCollectionViewItemBackgroundView.CLASS;
