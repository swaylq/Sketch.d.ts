/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyle<T0 = void, T1 = void, T2 = void> extends _MSStyle, MSSharedObjectInstanceProtocol, NSCopyingProtocol {
    addStylePartOfType<R = unknown, P0 = number>(_addStylePartOfType: P0): R;
    stylePartsOfType<R = unknown, P0 = number>(_stylePartsOfType: P0): R;
    hasTextStyle<R = boolean>(): R;
    parentStyle<R = unknown>(): R;
    parentLayer<R = unknown>(): R;
    supportsAdvancedBorderSettings<R = boolean>(): R;
    multiplyBy<R = void, P0 = number>(_multiplyBy: P0): R;
    setTextStyle<R = void, P0 = unknown>(_setTextStyle: P0): R;
    firstEnabledShadow<R = unknown>(): R;
    firstEnabledFill<R = unknown>(): R;
    firstEnabledBorder<R = unknown>(): R;
    enabledInnerShadows<R = unknown>(): R;
    enabledShadows<R = unknown>(): R;
    enabledBorders<R = unknown>(): R;
    enabledFills<R = unknown>(): R;
    disableAllInnerShadows<R = void>(): R;
    disableAllShadows<R = void>(): R;
    disableAllFills<R = void>(): R;
    disableAllBorders<R = void>(): R;
    determineMaskingMode<R = number>(): R;
    prepareAsMask<R = void>(): R;
    generatePreviewWithImageSize_previewSize_colorSpace_backingScale_completionBlock<R = void, P0 = CGSize, P1 = CGSize, P2 = unknown, P3 = number, P4 = CDUnknownBlockType>(_generatePreviewWithImageSize: P0, _previewSize: P1, _colorSpace: P2, _backingScale: P3, _completionBlock: P4): R;
    prepareForPreviewingWithImageSize_previewSize<R = void, P0 = CGSize, P1 = CGSize>(_prepareForPreviewingWithImageSize: P0, _previewSize: P1): R;
    shapeForPreviewWithSize<R = unknown, P0 = CGSize>(_shapeForPreviewWithSize: P0): R;
    primitiveSharedObjectID<R = NSString>(): R;
    setPrimitiveSharedObjectID<R = void, P0 = NSString>(_v: P0): R;
    thickestInnerStroke<R = number>(): R;
    hasMarkers<R = boolean>(): R;
    thickestStroke<R = number>(): R;
    hasEnabledBackgroundBlur<R = boolean>(): R;
    primitiveTextStyle<R = MSTextStyle>(): R;
    setPrimitiveTextStyle<R = void, P0 = MSTextStyle>(_v: P0): R;
    hasBlending<R = boolean>(): R;
    hasEnabledBorder<R = boolean>(): R;
    hasMoreThanOneEnabledFill<R = boolean>(): R;
    hasEnabledFill<R = boolean>(): R;
    hasEnabledShadow<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + MSStyle(MSPreviewGeneration): 
    debugQuickLookObject<R = unknown>(): R;
    generatePreviewWithImageSize_previewSize_colorSpace_backingScale_completionBlock<R = void, P0 = CGSize, P1 = CGSize, P2 = unknown, P3 = number, P4 = CDUnknownBlockType>(_generatePreviewWithImageSize: P0, _previewSize: P1, _colorSpace: P2, _backingScale: P3, _completionBlock: P4): R;
    prepareForPreviewingWithImageSize_previewSize<R = void, P0 = CGSize, P1 = CGSize>(_prepareForPreviewingWithImageSize: P0, _previewSize: P1): R;
    shapeForPreviewWithSize<R = unknown, P0 = CGSize>(_shapeForPreviewWithSize: P0): R;
    // + MSStyle(MaskWithShape): 
    determineMaskingMode<R = number>(): R;
    prepareAsMask<R = void>(): R;
  }
  namespace MSStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSStyle, MSSharedObjectInstanceProtocol, NSCopyingProtocol {
      alloc<R = MSStyle>(): R;
      new: <R = MSStyle>() => R;
  
  }
  }
}

declare const MSStyle: cocoa.MSStyle.CLASS;
