/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollectionNoContentViewPreviewPlaceholder<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSAssetCollectionNoContentViewPreviewPlaceholder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSAssetCollectionNoContentViewPreviewPlaceholder>(): R;
      new: <R = MSAssetCollectionNoContentViewPreviewPlaceholder>() => R;
    }
  }
}

declare const MSAssetCollectionNoContentViewPreviewPlaceholder: cocoa.MSAssetCollectionNoContentViewPreviewPlaceholder.CLASS;
