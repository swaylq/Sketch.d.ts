/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryTableView<T0 = void, T1 = void, T2 = void> extends BCKeyEventActionTableView {}
  namespace MSAssetLibraryTableView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCKeyEventActionTableView {
      alloc<R = MSAssetLibraryTableView>(): R;
      new: <R = MSAssetLibraryTableView>() => R;
    }
  }
}

declare const MSAssetLibraryTableView: cocoa.MSAssetLibraryTableView.CLASS;
