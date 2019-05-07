/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedStyle<T0 = void, T1 = void, T2 = void> extends _MSSharedStyle, MSSharedObjectStylingProtocol, MSSharedStylePastingProtocol {
    initWithName_style<R = unknown, P0 = unknown, P1 = unknown>(_initWithName: P0, _style: P1): R;
    shareableObjectReferenceClass_bc<R = unknown>(): R;
    generateTextPreviewForSyncSheettWithSize_backingScale_colorSpace_completionBlock<R = void, P0 = CGSize, P1 = number, P2 = unknown, P3 = CDUnknownBlockType>(_generateTextPreviewForSyncSheettWithSize: P0, _backingScale: P1, _colorSpace: P2, _completionBlock: P3): R;
    updateToMatch<R = void, P0 = MSModelObject>(_updateToMatch: P0): R;
    resetReferencingInstances<R = void>(): R;
    allInstances<R = unknown>(): R;
    allLayersInstances<R = unknown>(): R;
    style<R = MSStyle>(): R;
    currentObjectID_MSSharedStylePasting<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSSharedStyle(DebugQuickLook): 
    debugQuickLookObject<R = unknown>(): R;
    // + MSSharedStyle(MSShareableObjectReferenceExtention): 
    shareableObjectReferenceClass_bc<R = unknown>(): R;
    // + MSSharedStyle(MSSharedObjectStyling): 
    generatePreviewForSyncSheetWithSize_backingScale_shadow_colorSpace_completionBlock<R = void, P0 = CGSize, P1 = number, P2 = boolean, P3 = unknown, P4 = CDUnknownBlockType>(_generatePreviewForSyncSheetWithSize: P0, _backingScale: P1, _shadow: P2, _colorSpace: P3, _completionBlock: P4): R;
    generateTextPreviewForSyncSheettWithSize_backingScale_colorSpace_completionBlock<R = void, P0 = CGSize, P1 = number, P2 = unknown, P3 = CDUnknownBlockType>(_generateTextPreviewForSyncSheettWithSize: P0, _backingScale: P1, _colorSpace: P2, _completionBlock: P3): R;
    applyStyleToMenuItem_withColorSpace<R = void, P0 = unknown, P1 = unknown>(_applyStyleToMenuItem: P0, _withColorSpace: P1): R;
    generatePreviewForManageSheetWithBackingScale_completionBlock<R = unknown, P0 = number, P1 = CDUnknownBlockType>(_generatePreviewForManageSheetWithBackingScale: P0, _completionBlock: P1): R;
    generatePreviewForPopup_backingScale_completionBlock<R = unknown, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_generatePreviewForPopup: P0, _backingScale: P1, _completionBlock: P2): R;
    generatePreviewForMenuItem_withColorSpace_backingScale_completionBlock<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = CDUnknownBlockType>(_generatePreviewForMenuItem: P0, _withColorSpace: P1, _backingScale: P2, _completionBlock: P3): R;
    // + MSSharedStyle(MSSharedObjectStyling):
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSharedStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSSharedStyle, MSSharedObjectStylingProtocol, MSSharedStylePastingProtocol {
      alloc<R = MSSharedStyle>(): R;
      new: <R = MSSharedStyle>() => R;
  
  }
  }
}

declare const MSSharedStyle: cocoa.MSSharedStyle.CLASS;
