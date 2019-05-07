/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetSyncSheetHeader<T0 = void, T1 = void, T2 = void> extends NSObject, MSAssetSyncSheetItemProtocol {
    cxx_destruct<R = void>(): R;
    library<R = MSAssetLibrary>(): R;
    setLibrary<R = void, P0 = MSAssetLibrary>(_v: P0): R;
    shouldSync<R = boolean>(): R;
    modifiedDateString<R = NSString>(): R;
    displayName<R = NSString>(): R;
    type<R = number>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSAssetSyncSheetHeader {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSAssetSyncSheetItemProtocol {
      alloc<R = MSAssetSyncSheetHeader>(): R;
      new: <R = MSAssetSyncSheetHeader>() => R;
    }
  }
}

declare const MSAssetSyncSheetHeader: cocoa.MSAssetSyncSheetHeader.CLASS;
