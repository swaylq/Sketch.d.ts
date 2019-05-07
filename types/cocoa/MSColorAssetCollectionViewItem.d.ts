/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorAssetCollectionViewItem<T0 = void, T1 = void, T2 = void> extends MSAssetCollectionViewItem {
    copyToClipboard<R = void, P0 = unknown>(_copyToClipboard: P0): R;
    nsColor<R = unknown>(): R;
    color<R = unknown>(): R;
  }
  namespace MSColorAssetCollectionViewItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAssetCollectionViewItem {
      alloc<R = MSColorAssetCollectionViewItem>(): R;
      new: <R = MSColorAssetCollectionViewItem>() => R;
      stringForColor_representation<R = unknown, P0 = unknown, P1 = number>(_stringForColor: P0, _representation: P1): R;
    }
  }
}

declare const MSColorAssetCollectionViewItem: cocoa.MSColorAssetCollectionViewItem.CLASS;
