/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _MSDocumentData<T0 = void, T1 = void, T2 = void> extends MSModelObject {
    movePageIndex_toIndex<R = void, P0 = number, P1 = number>(_movePageIndex: P0, _toIndex: P1): R;
    removeAllPages<R = void>(): R;
    removePagesAtIndexes<R = void, P0 = unknown>(_removePagesAtIndexes: P0): R;
    removePageAtIndex<R = void, P0 = number>(_removePageAtIndex: P0): R;
    removePage<R = void, P0 = unknown>(_removePage: P0): R;
    insertPages_afterPage<R = void, P0 = unknown, P1 = unknown>(_insertPages: P0, _afterPage: P1): R;
    insertPage_afterPage<R = void, P0 = unknown, P1 = unknown>(_insertPage: P0, _afterPage: P1): R;
    insertPages_beforePage<R = void, P0 = unknown, P1 = unknown>(_insertPages: P0, _beforePage: P1): R;
    insertPage_beforePage<R = void, P0 = unknown, P1 = unknown>(_insertPage: P0, _beforePage: P1): R;
    insertPage_atIndex<R = void, P0 = unknown, P1 = number>(_insertPage: P0, _atIndex: P1): R;
    addPages<R = void, P0 = unknown>(_addPages: P0): R;
    addPage<R = void, P0 = unknown>(_addPage: P0): R;
    moveForeignTextStyleIndex_toIndex<R = void, P0 = number, P1 = number>(_moveForeignTextStyleIndex: P0, _toIndex: P1): R;
    removeAllForeignTextStyles<R = void>(): R;
    removeForeignTextStylesAtIndexes<R = void, P0 = unknown>(_removeForeignTextStylesAtIndexes: P0): R;
    removeForeignTextStyleAtIndex<R = void, P0 = number>(_removeForeignTextStyleAtIndex: P0): R;
    removeForeignTextStyle<R = void, P0 = unknown>(_removeForeignTextStyle: P0): R;
    insertForeignTextStyles_afterForeignTextStyle<R = void, P0 = unknown, P1 = unknown>(_insertForeignTextStyles: P0, _afterForeignTextStyle: P1): R;
    insertForeignTextStyle_afterForeignTextStyle<R = void, P0 = unknown, P1 = unknown>(_insertForeignTextStyle: P0, _afterForeignTextStyle: P1): R;
    insertForeignTextStyles_beforeForeignTextStyle<R = void, P0 = unknown, P1 = unknown>(_insertForeignTextStyles: P0, _beforeForeignTextStyle: P1): R;
    insertForeignTextStyle_beforeForeignTextStyle<R = void, P0 = unknown, P1 = unknown>(_insertForeignTextStyle: P0, _beforeForeignTextStyle: P1): R;
    insertForeignTextStyle_atIndex<R = void, P0 = unknown, P1 = number>(_insertForeignTextStyle: P0, _atIndex: P1): R;
    addForeignTextStyles<R = void, P0 = unknown>(_addForeignTextStyles: P0): R;
    addForeignTextStyle<R = void, P0 = unknown>(_addForeignTextStyle: P0): R;
    moveForeignSymbolIndex_toIndex<R = void, P0 = number, P1 = number>(_moveForeignSymbolIndex: P0, _toIndex: P1): R;
    removeAllForeignSymbols<R = void>(): R;
    removeForeignSymbolsAtIndexes<R = void, P0 = unknown>(_removeForeignSymbolsAtIndexes: P0): R;
    removeForeignSymbolAtIndex<R = void, P0 = number>(_removeForeignSymbolAtIndex: P0): R;
    removeForeignSymbol<R = void, P0 = unknown>(_removeForeignSymbol: P0): R;
    insertForeignSymbols_afterForeignSymbol<R = void, P0 = unknown, P1 = unknown>(_insertForeignSymbols: P0, _afterForeignSymbol: P1): R;
    insertForeignSymbol_afterForeignSymbol<R = void, P0 = unknown, P1 = unknown>(_insertForeignSymbol: P0, _afterForeignSymbol: P1): R;
    insertForeignSymbols_beforeForeignSymbol<R = void, P0 = unknown, P1 = unknown>(_insertForeignSymbols: P0, _beforeForeignSymbol: P1): R;
    insertForeignSymbol_beforeForeignSymbol<R = void, P0 = unknown, P1 = unknown>(_insertForeignSymbol: P0, _beforeForeignSymbol: P1): R;
    insertForeignSymbol_atIndex<R = void, P0 = unknown, P1 = number>(_insertForeignSymbol: P0, _atIndex: P1): R;
    addForeignSymbols<R = void, P0 = unknown>(_addForeignSymbols: P0): R;
    addForeignSymbol<R = void, P0 = unknown>(_addForeignSymbol: P0): R;
    moveForeignLayerStyleIndex_toIndex<R = void, P0 = number, P1 = number>(_moveForeignLayerStyleIndex: P0, _toIndex: P1): R;
    removeAllForeignLayerStyles<R = void>(): R;
    removeForeignLayerStylesAtIndexes<R = void, P0 = unknown>(_removeForeignLayerStylesAtIndexes: P0): R;
    removeForeignLayerStyleAtIndex<R = void, P0 = number>(_removeForeignLayerStyleAtIndex: P0): R;
    removeForeignLayerStyle<R = void, P0 = unknown>(_removeForeignLayerStyle: P0): R;
    insertForeignLayerStyles_afterForeignLayerStyle<R = void, P0 = unknown, P1 = unknown>(_insertForeignLayerStyles: P0, _afterForeignLayerStyle: P1): R;
    insertForeignLayerStyle_afterForeignLayerStyle<R = void, P0 = unknown, P1 = unknown>(_insertForeignLayerStyle: P0, _afterForeignLayerStyle: P1): R;
    insertForeignLayerStyles_beforeForeignLayerStyle<R = void, P0 = unknown, P1 = unknown>(_insertForeignLayerStyles: P0, _beforeForeignLayerStyle: P1): R;
    insertForeignLayerStyle_beforeForeignLayerStyle<R = void, P0 = unknown, P1 = unknown>(_insertForeignLayerStyle: P0, _beforeForeignLayerStyle: P1): R;
    insertForeignLayerStyle_atIndex<R = void, P0 = unknown, P1 = number>(_insertForeignLayerStyle: P0, _atIndex: P1): R;
    addForeignLayerStyles<R = void, P0 = unknown>(_addForeignLayerStyles: P0): R;
    addForeignLayerStyle<R = void, P0 = unknown>(_addForeignLayerStyle: P0): R;
    hasDefaultValues<R = boolean>(): R;
    pages<R = NSArray>(): R;
    setPages<R = void, P0 = NSArray>(_v: P0): R;
    layerTextStyles<R = MSSharedTextStyleContainer>(): R;
    setLayerTextStyles<R = void, P0 = MSSharedTextStyleContainer>(_v: P0): R;
    layerSymbols<R = MSSymbolContainer>(): R;
    setLayerSymbols<R = void, P0 = MSSymbolContainer>(_v: P0): R;
    layerStyles<R = MSSharedStyleContainer>(): R;
    setLayerStyles<R = void, P0 = MSSharedStyleContainer>(_v: P0): R;
    foreignTextStyles<R = NSArray>(): R;
    setForeignTextStyles<R = void, P0 = NSArray>(_v: P0): R;
    foreignSymbols<R = NSArray>(): R;
    setForeignSymbols<R = void, P0 = NSArray>(_v: P0): R;
    foreignLayerStyles<R = NSArray>(): R;
    setForeignLayerStyles<R = void, P0 = NSArray>(_v: P0): R;
    assets<R = MSAssetCollection>(): R;
    setAssets<R = void, P0 = MSAssetCollection>(_v: P0): R;
    userInfo<R = NSDictionary>(): R;
    setUserInfo<R = void, P0 = NSDictionary>(_v: P0): R;
    currentPageIndex<R = number>(): R;
    setCurrentPageIndex<R = void, P0 = number>(_v: P0): R;
    colorSpace<R = number>(): R;
    setColorSpace<R = void, P0 = number>(_v: P0): R;
  }
  namespace _MSDocumentData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSModelObject {
      alloc<R = _MSDocumentData>(): R;
      new: <R = _MSDocumentData>() => R;
    }
  }
}
