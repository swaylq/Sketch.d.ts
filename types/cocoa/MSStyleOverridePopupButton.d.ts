/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleOverridePopupButton<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {
    cxx_destruct<R = void>(): R;
    buildMenuForOverride_withMenuBuilder_document_imageCallback<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_buildMenuForOverride: P0, _withMenuBuilder: P1, _document: P2, _imageCallback: P3): R;
    setupResetMenuForPrimaryOverride_document<R = void, P0 = unknown, P1 = unknown>(_setupResetMenuForPrimaryOverride: P0, _document: P1): R;
    applyPreviewImage<R = void, P0 = unknown>(_applyPreviewImage: P0): R;
    setupButtonTitleWithPrimaryOverride_document_imageCallback<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_setupButtonTitleWithPrimaryOverride: P0, _document: P1, _imageCallback: P2): R;
    addMenuItemForStyle_withName_document_imageCallback<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(_addMenuItemForStyle: P0, _withName: P1, _document: P2, _imageCallback: P3): R;
    importableDefaultSharedStyle<R = MSSharedStyleReference>(): R;
    setImportableDefaultSharedStyle<R = void, P0 = MSSharedStyleReference>(_v: P0): R;
    symbolDefaultSharedStyle<R = MSSharedStyleReference>(): R;
    setSymbolDefaultSharedStyle<R = void, P0 = MSSharedStyleReference>(_v: P0): R;
    currentSharedStyle<R = MSSharedStyleReference>(): R;
    setCurrentSharedStyle<R = void, P0 = MSSharedStyleReference>(_v: P0): R;
    originalSharedStyle<R = MSSharedStyleReference>(): R;
    setOriginalSharedStyle<R = void, P0 = MSSharedStyleReference>(_v: P0): R;
    menuBuilder<R = MSForeignObjectMenuBuilder>(): R;
    setMenuBuilder<R = void, P0 = MSForeignObjectMenuBuilder>(_v: P0): R;
    libraryController<R = MSAssetLibraryController>(): R;
  }
  namespace MSStyleOverridePopupButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopUpButton {
      alloc<R = MSStyleOverridePopupButton>(): R;
      new: <R = MSStyleOverridePopupButton>() => R;
    }
  }
}

declare const MSStyleOverridePopupButton: cocoa.MSStyleOverridePopupButton.CLASS;
