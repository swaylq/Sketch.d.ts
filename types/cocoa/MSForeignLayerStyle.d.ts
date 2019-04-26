/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignLayerStyle<T0 = void, T1 = void, T2 = void> extends _MSForeignLayerStyle {
    tooltipForObject_MSAssetSyncSheetObject<R = unknown, P0 = MSModelObject>(_tooltipForObject_MSAssetSyncSheetObject: P0): R;
    type_MSAssetSyncSheetObject<R = number>(): R;
    // + MSForeignLayerStyle(MSAssetSyncSheetObject): 
    tooltipForObject_MSAssetSyncSheetObject<R = unknown, P0 = MSModelObject>(_tooltipForObject_MSAssetSyncSheetObject: P0): R;
    type_MSAssetSyncSheetObject<R = number>(): R;
  }
  namespace MSForeignLayerStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSForeignLayerStyle {
      alloc<R = MSForeignLayerStyle>(): R;
      new: <R = MSForeignLayerStyle>() => R;
  
  }
  }
}

declare const MSForeignLayerStyle: cocoa.MSForeignLayerStyle.CLASS;
