/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradientAssetCollectionViewItem<T0 = void, T1 = void, T2 = void> extends MSAssetCollectionViewItem {
    gradient<R = unknown>(): R;
  }
  namespace MSGradientAssetCollectionViewItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAssetCollectionViewItem {
      alloc<R = MSGradientAssetCollectionViewItem>(): R;
      new: <R = MSGradientAssetCollectionViewItem>() => R;
    }
  }
}

declare const MSGradientAssetCollectionViewItem: cocoa.MSGradientAssetCollectionViewItem.CLASS;
