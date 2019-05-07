/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibraryDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    assetLibraryEnableStateChanged<R = void, P0 = MSAssetLibrary>(_assetLibraryEnableStateChanged: P0): R;
    assetLibraryChangedOnDisk<R = void, P0 = MSAssetLibrary>(_assetLibraryChangedOnDisk: P0): R;
  }
  namespace MSAssetLibraryDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
