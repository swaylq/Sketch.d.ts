/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetPickerCollectionView<T0 = void, T1 = void, T2 = void> extends NSCollectionView {
    cxx_destruct<R = void>(): R;
    handleDoubleClick<R = void, P0 = unknown>(_handleDoubleClick: P0): R;
    invalidateDoubleClickMonitor<R = void>(): R;
    installTemporaryDoubleClickMonitor<R = void>(): R;
    doubleClickMonitor<R = unknown>(): R;
    setDoubleClickMonitor<R = void, P0 = unknown>(_v: P0): R;
    delegate<R = MSAssetPickerCollectionViewDelegate>(): R;
    setDelegate<R = void, P0 = MSAssetPickerCollectionViewDelegate>(_v: P0): R;
  }
  namespace MSAssetPickerCollectionView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionView {
      alloc<R = MSAssetPickerCollectionView>(): R;
      new: <R = MSAssetPickerCollectionView>() => R;
    }
  }
}

declare const MSAssetPickerCollectionView: cocoa.MSAssetPickerCollectionView.CLASS;
