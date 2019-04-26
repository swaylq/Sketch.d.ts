/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetSyncSheetItemProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    shouldSync<R = boolean>(): R;
    displayName<R = NSString>(): R;
    library<R = MSAssetLibrary>(): R;
    setLibrary<R = void, P0 = MSAssetLibrary>(_v: P0): R;
    type<R = number>(): R;
  }
  namespace MSAssetSyncSheetItemProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
