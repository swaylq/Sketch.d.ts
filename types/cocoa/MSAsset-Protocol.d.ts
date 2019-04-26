/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSCopyingProtocol {
    isAssetEqual<R = boolean, P0 = MSAsset>(_isAssetEqual: P0): R;
    assetType<R = number>(): R;
  }
  namespace MSAssetProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol, NSCopyingProtocol {}
  }
}
