/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollectionViewItemView<T0 = void, T1 = void, T2 = void> extends NSView {
    cxx_destruct<R = void>(): R;
    item<R = MSAssetCollectionViewItem>(): R;
    setItem<R = void, P0 = MSAssetCollectionViewItem>(_v: P0): R;
  }
  namespace MSAssetCollectionViewItemView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSAssetCollectionViewItemView>(): R;
      new: <R = MSAssetCollectionViewItemView>() => R;
    }
  }
}

declare const MSAssetCollectionViewItemView: cocoa.MSAssetCollectionViewItemView.CLASS;
