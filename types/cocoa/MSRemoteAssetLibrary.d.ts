/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRemoteAssetLibrary<T0 = void, T1 = void, T2 = void> extends MSAssetLibrary {
    assetLibraryUpdated<R = void>(): R;
    name<R = unknown>(): R;
    previewURL<R = unknown>(): R;
    libraryType<R = number>(): R;
    initWithName_appcastURL_version_infoText<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithName: P0, _appcastURL: P1, _version: P2, _infoText: P3): R;
    displayName<R = NSString>(): R;
    setDisplayName<R = void, P0 = NSString>(_v: P0): R;
    updatingInfo<R = MSAssetLibraryUpdatingInfo>(): R;
    setUpdatingInfo<R = void, P0 = MSAssetLibraryUpdatingInfo>(_v: P0): R;
    newUpdatingInfo<R = boolean>(): R;
    setNewUpdatingInfo<R = void, P0 = boolean>(_v: P0): R;
    infoText<R = NSString>(): R;
    setInfoText<R = void, P0 = NSString>(_v: P0): R;
    originalName<R = NSString>(): R;
    setOriginalName<R = void, P0 = NSString>(_v: P0): R;
    libraryVersion<R = NSString>(): R;
    setLibraryVersion<R = void, P0 = NSString>(_v: P0): R;
    appcastURL<R = NSURL>(): R;
    setAppcastURL<R = void, P0 = NSURL>(_v: P0): R;
    fileName<R = NSString>(): R;
    downloadAvailable<R = boolean>(): R;
    updateAvailable<R = boolean>(): R;
  }
  namespace MSRemoteAssetLibrary {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSAssetLibrary {
      alloc<R = MSRemoteAssetLibrary>(): R;
      new: <R = MSRemoteAssetLibrary>() => R;
      URLForApplicationSupportLibraryNamed<R = unknown, P0 = unknown>(_URLForApplicationSupportLibraryNamed: P0): R;
      assetLibraryFolder<R = unknown>(): R;
    }
  }
}

declare const MSRemoteAssetLibrary: cocoa.MSRemoteAssetLibrary.CLASS;
