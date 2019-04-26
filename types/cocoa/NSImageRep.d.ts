/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImageRep<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol, NSCodingProtocol {
    _bitmapImageRepsForTIFFRepresentation<R = unknown>(): R;
    _imageRepsForEncodingWithCoder<R = unknown, P0 = unknown>(__imageRepsForEncodingWithCoder: P0): R;
    _bitmapImageReps<R = unknown>(): R;
    _setCGImageRef<R = void, P0 = CGImage>(__setCGImageRef: P0): R;
    _CGImageRef<R = CGImage>(): R;
    CGImageForProposedRect_context_hints_flipped<R = CGImage, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = boolean>(_CGImageForProposedRect: P0, _context: P1, _hints: P2, _flipped: P3): R;
    CGImageForProposedRect_context_hints<R = CGImage, P0 = CGRect, P1 = unknown, P2 = unknown>(_CGImageForProposedRect: P0, _context: P1, _hints: P2): R;
    _newCGImageForProposedRect_context_hints_flipped<R = CGImage, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = boolean>(__newCGImageForProposedRect: P0, _context: P1, _hints: P2, _flipped: P3): R;
    description<R = unknown>(): R;
    _loadDataIfNotYetLoaded<R = boolean>(): R;
    replacementObjectForCoder<R = unknown, P0 = unknown>(_replacementObjectForCoder: P0): R;
    _drawOnlyUsesOneDrawingOperation<R = boolean>(): R;
    _wantsToBeCachedForFlippedness<R = boolean, P0 = boolean>(__wantsToBeCachedForFlippedness: P0): R;
    _setInternalLayoutDirectionFromCUILayoutDirection<R = void, P0 = number>(__setInternalLayoutDirectionFromCUILayoutDirection: P0): R;
    _internalLayoutDirection<R = number>(): R;
    _pixelsHighOrResolutionIndependent<R = number>(): R;
    _pixelsWideOrResolutionIndependent<R = number>(): R;
    _numberOfColorComponentsNotIncludingAlpha<R = number>(): R;
    _imageRep_setColorSpaceName<R = void, P0 = unknown>(__imageRep_setColorSpaceName: P0): R;
    _imageRep_colorSpaceName<R = unknown>(): R;
    setColorSpace<R = void, P0 = unknown>(_setColorSpace: P0): R;
    colorSpace<R = unknown>(): R;
    _createPatternForRect_context<R = void, P0 = CGRect, P1 = unknown>(__createPatternForRect: P0, _context: P1): R;
    _isValid<R = boolean>(): R;
    _uncachedSize<R = number>(): R;
    drawInRect_fromRect_operation_fraction_respectFlipped_hints<R = boolean, P0 = CGRect, P1 = CGRect, P2 = number, P3 = number, P4 = boolean, P5 = unknown>(_drawInRect: P0, _fromRect: P1, _operation: P2, _fraction: P3, _respectFlipped: P4, _hints: P5): R;
    _drawFromRect_toRect_operation_alpha_compositing_flipped_ignoreContext<R = boolean, P0 = CGRect, P1 = CGRect, P2 = number, P3 = number, P4 = boolean, P5 = boolean, P6 = boolean>(__drawFromRect: P0, _toRect: P1, _operation: P2, _alpha: P3, _compositing: P4, _flipped: P5, _ignoreContext: P6): R;
    _processedHintsForHints_includeOnlyIfAvailable<R = unknown, P0 = unknown, P1 = boolean>(__processedHintsForHints: P0, _includeOnlyIfAvailable: P1): R;
    _defaultImageHintsIncludeOnlyIfAvailable<R = unknown, P0 = boolean>(__defaultImageHintsIncludeOnlyIfAvailable: P0): R;
    draw<R = boolean>(): R;
    drawInRect<R = boolean, P0 = CGRect>(_drawInRect: P0): R;
    drawAtPoint<R = boolean, P0 = CGPoint>(_drawAtPoint: P0): R;
    dealloc<R = void>(): R;
    _appearanceName<R = NSString>(): R;
    set_appearanceName<R = void, P0 = NSString>(_v: P0): R;
    pixelsHigh<R = number>(): R;
    setPixelsHigh<R = void, P0 = number>(_v: P0): R;
    pixelsWide<R = number>(): R;
    setPixelsWide<R = void, P0 = number>(_v: P0): R;
    bitsPerSample<R = number>(): R;
    setBitsPerSample<R = void, P0 = number>(_v: P0): R;
    opaque<R = boolean>(): R;
    setOpaque<R = void, P0 = boolean>(_v: P0): R;
    alpha<R = boolean>(): R;
    setAlpha<R = void, P0 = boolean>(_v: P0): R;
    layoutDirection<R = number>(): R;
    setLayoutDirection<R = void, P0 = number>(_v: P0): R;
    colorSpaceName<R = NSString>(): R;
    setColorSpaceName<R = void, P0 = NSString>(_v: P0): R;
    size<R = CGSize>(): R;
    setSize<R = void, P0 = CGSize>(_v: P0): R;
    // + NSImageRep(Alpha): 
    repSupportsAlpha<R = boolean>(): R;
    // + NSImageRep(MSSmallerArchiving): 
    dataForArchiving<R = unknown>(): R;
    hasEPSRepresentation<R = boolean>(): R;
    hasPDFRepresentation<R = boolean>(): R;
  }
  namespace NSImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSImageRep>(): R;
      new: <R = NSImageRep>() => R;
      _deprecated_hasReversedFlippednessInFlippedImages<R = boolean>(): R;
      _preferFilter<R = boolean>(): R;
      imageRepClassForData<R = unknown, P0 = unknown>(_imageRepClassForData: P0): R;
      imageRepClassForPasteboardType<R = unknown, P0 = unknown>(_imageRepClassForPasteboardType: P0): R;
      imageRepClassForFileType<R = unknown, P0 = unknown>(_imageRepClassForFileType: P0): R;
      _imageRepClassForFileNameExtension_andHFSFileType<R = unknown, P0 = unknown, P1 = unknown>(__imageRepClassForFileNameExtension: P0, _andHFSFileType: P1): R;
      imageRepClassForType<R = unknown, P0 = unknown>(_imageRepClassForType: P0): R;
      registeredImageRepClasses<R = unknown>(): R;
      unregisterImageRepClass<R = void, P0 = unknown>(_unregisterImageRepClass: P0): R;
      registerImageRepClass<R = void, P0 = unknown>(_registerImageRepClass: P0): R;
      _imageRepsWithData_fileType_hfsType_expandImageContentNow<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(__imageRepsWithData: P0, _fileType: P1, _hfsType: P2, _expandImageContentNow: P3): R;
      imageRepWithContentsOfURL<R = unknown, P0 = unknown>(_imageRepWithContentsOfURL: P0): R;
      imageRepsWithContentsOfURL<R = unknown, P0 = unknown>(_imageRepsWithContentsOfURL: P0): R;
      imageRepWithPasteboard<R = unknown, P0 = unknown>(_imageRepWithPasteboard: P0): R;
      imageRepsWithPasteboard<R = unknown, P0 = unknown>(_imageRepsWithPasteboard: P0): R;
      imageRepWithContentsOfFile<R = unknown, P0 = unknown>(_imageRepWithContentsOfFile: P0): R;
      _imageRepsWithContentsOfFile_expandImageContentNow<R = unknown, P0 = unknown, P1 = boolean>(__imageRepsWithContentsOfFile: P0, _expandImageContentNow: P1): R;
      _imageRepsWithContentsOfURL_expandImageContentNow_giveUpOnNetworkURLsWithoutGoodExtensions<R = unknown, P0 = unknown, P1 = boolean, P2 = boolean>(__imageRepsWithContentsOfURL: P0, _expandImageContentNow: P1, _giveUpOnNetworkURLsWithoutGoodExtensions: P2): R;
      _imageRepsWithContentsOfURL_expandImageContentNow<R = unknown, P0 = unknown, P1 = boolean>(__imageRepsWithContentsOfURL: P0, _expandImageContentNow: P1): R;
      imageRepsWithContentsOfFile<R = unknown, P0 = unknown>(_imageRepsWithContentsOfFile: P0): R;
      canInitWithPasteboard<R = boolean, P0 = unknown>(_canInitWithPasteboard: P0): R;
      imageFileTypes<R = unknown>(): R;
      _imageFileTypesNoCaching<R = unknown>(): R;
      imagePasteboardTypes<R = unknown>(): R;
      _imagePasteboardTypesNoCaching<R = unknown>(): R;
      imageTypes<R = unknown>(): R;
      _imageTypesNoCaching<R = unknown>(): R;
      imageUnfilteredPasteboardTypes<R = unknown>(): R;
      imageUnfilteredFileTypes<R = unknown>(): R;
      imageUnfilteredTypes<R = unknown>(): R;
      canInitWithData<R = boolean, P0 = unknown>(_canInitWithData: P0): R;
      initialize<R = void>(): R;
  
  }
  }
}

declare const NSImageRep: cocoa.NSImageRep.CLASS;
