/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObjectStylingProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    applyStyleToMenuItem_withColorSpace<R = void, P0 = NSMenuItem, P1 = NSColorSpace>(_applyStyleToMenuItem: P0, _withColorSpace: P1): R;
    generatePreviewForSyncSheetWithSize_backingScale_shadow_colorSpace_completionBlock<R = void, P0 = CGSize, P1 = number, P2 = boolean, P3 = NSColorSpace, P4 = CDUnknownBlockType>(_generatePreviewForSyncSheetWithSize: P0, _backingScale: P1, _shadow: P2, _colorSpace: P3, _completionBlock: P4): R;
    generatePreviewForManageSheetWithBackingScale_completionBlock<R = NSImage, P0 = number, P1 = CDUnknownBlockType>(_generatePreviewForManageSheetWithBackingScale: P0, _completionBlock: P1): R;
    generatePreviewForPopup_backingScale_completionBlock<R = NSImage, P0 = NSPopUpButtonCell, P1 = number, P2 = CDUnknownBlockType>(_generatePreviewForPopup: P0, _backingScale: P1, _completionBlock: P2): R;
    generatePreviewForMenuItem_withColorSpace_backingScale_completionBlock<R = NSImage, P0 = NSMenuItem, P1 = NSColorSpace, P2 = number, P3 = CDUnknownBlockType>(_generatePreviewForMenuItem: P0, _withColorSpace: P1, _backingScale: P2, _completionBlock: P3): R;
  }
  namespace MSSharedObjectStylingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
