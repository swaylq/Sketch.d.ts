/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollectionModifiedIndicator<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSAssetCollectionModifiedIndicator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSAssetCollectionModifiedIndicator>(): R;
      new: <R = MSAssetCollectionModifiedIndicator>() => R;
    }
  }
}

declare const MSAssetCollectionModifiedIndicator: cocoa.MSAssetCollectionModifiedIndicator.CLASS;
