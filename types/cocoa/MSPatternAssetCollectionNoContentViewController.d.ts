/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPatternAssetCollectionNoContentViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {}
  namespace MSPatternAssetCollectionNoContentViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSPatternAssetCollectionNoContentViewController>(): R;
      new: <R = MSPatternAssetCollectionNoContentViewController>() => R;
    }
  }
}

declare const MSPatternAssetCollectionNoContentViewController: cocoa.MSPatternAssetCollectionNoContentViewController.CLASS;
