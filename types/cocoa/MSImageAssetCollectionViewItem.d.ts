/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageAssetCollectionViewItem<T0 = void, T1 = void, T2 = void> extends MSAssetCollectionViewItem {
    imageData<R = unknown>(): R;
  }
  namespace MSImageAssetCollectionViewItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAssetCollectionViewItem {
      alloc<R = MSImageAssetCollectionViewItem>(): R;
      new: <R = MSImageAssetCollectionViewItem>() => R;
    }
  }
}

declare const MSImageAssetCollectionViewItem: cocoa.MSImageAssetCollectionViewItem.CLASS;
