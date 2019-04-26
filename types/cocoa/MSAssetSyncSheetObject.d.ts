/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetSyncSheetObject<T0 = void, T1 = void, T2 = void> extends NSObject, MSAssetSyncSheetItemProtocol {
    shouldSync<R = boolean>(): R;
    setShouldSync<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSAssetSyncSheetObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSAssetSyncSheetItemProtocol {
      alloc<R = MSAssetSyncSheetObject>(): R;
      new: <R = MSAssetSyncSheetObject>() => R;
    }
  }
}

declare const MSAssetSyncSheetObject: cocoa.MSAssetSyncSheetObject.CLASS;
