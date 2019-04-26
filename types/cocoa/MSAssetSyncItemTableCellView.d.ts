/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetSyncItemTableCellView<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
    setBackgroundStyle<R = void, P0 = number>(_setBackgroundStyle: P0): R;
  }
  namespace MSAssetSyncItemTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView {
      alloc<R = MSAssetSyncItemTableCellView>(): R;
      new: <R = MSAssetSyncItemTableCellView>() => R;
    }
  }
}

declare const MSAssetSyncItemTableCellView: cocoa.MSAssetSyncItemTableCellView.CLASS;
