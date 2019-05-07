/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSImmutableDocumentData<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
    hasDefaultValues<R = boolean>(): R;
    pages<R = NSArray>(): R;
    setPages<R = void, P0 = NSArray>(_v: P0): R;
    layerTextStyles<R = MSImmutableSharedTextStyleContainer>(): R;
    setLayerTextStyles<R = void, P0 = MSImmutableSharedTextStyleContainer>(_v: P0): R;
    layerSymbols<R = MSImmutableSymbolContainer>(): R;
    setLayerSymbols<R = void, P0 = MSImmutableSymbolContainer>(_v: P0): R;
    layerStyles<R = MSImmutableSharedStyleContainer>(): R;
    setLayerStyles<R = void, P0 = MSImmutableSharedStyleContainer>(_v: P0): R;
    foreignTextStyles<R = NSArray>(): R;
    setForeignTextStyles<R = void, P0 = NSArray>(_v: P0): R;
    foreignSymbols<R = NSArray>(): R;
    setForeignSymbols<R = void, P0 = NSArray>(_v: P0): R;
    foreignLayerStyles<R = NSArray>(): R;
    setForeignLayerStyles<R = void, P0 = NSArray>(_v: P0): R;
    assets<R = MSImmutableAssetCollection>(): R;
    setAssets<R = void, P0 = MSImmutableAssetCollection>(_v: P0): R;
    userInfo<R = NSDictionary>(): R;
    setUserInfo<R = void, P0 = NSDictionary>(_v: P0): R;
    currentPageIndex<R = number>(): R;
    setCurrentPageIndex<R = void, P0 = number>(_v: P0): R;
    colorSpace<R = number>(): R;
    setColorSpace<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSImmutableDocumentData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImmutableModelObject {
      alloc<R = _MSImmutableDocumentData>(): R;
      new: <R = _MSImmutableDocumentData>() => R;
    }
  }
}
