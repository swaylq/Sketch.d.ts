/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollectionNoContentViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {}
  namespace MSAssetCollectionNoContentViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSAssetCollectionNoContentViewController>(): R;
      new: <R = MSAssetCollectionNoContentViewController>() => R;
    }
  }
}

declare const MSAssetCollectionNoContentViewController: cocoa.MSAssetCollectionNoContentViewController.CLASS;
