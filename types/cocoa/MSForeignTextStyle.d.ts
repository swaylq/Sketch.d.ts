/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignTextStyle<T0 = void, T1 = void, T2 = void> extends _MSForeignTextStyle {
    tooltipForObject_MSAssetSyncSheetObject<R = unknown, P0 = unknown>(_tooltipForObject_MSAssetSyncSheetObject: P0): R;
    type_MSAssetSyncSheetObject<R = number>(): R;
    // + MSForeignTextStyle(MSAssetSyncSheetObject): 
    tooltipForObject_MSAssetSyncSheetObject<R = unknown, P0 = unknown>(_tooltipForObject_MSAssetSyncSheetObject: P0): R;
    type_MSAssetSyncSheetObject<R = number>(): R;
  }
  namespace MSForeignTextStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSForeignTextStyle {
      alloc<R = MSForeignTextStyle>(): R;
      new: <R = MSForeignTextStyle>() => R;
  
  }
  }
}

declare const MSForeignTextStyle: cocoa.MSForeignTextStyle.CLASS;
