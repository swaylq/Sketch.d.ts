/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSImage<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol, NSPasteboardReadingProtocol, NSPasteboardWritingProtocol {
    layerContentsForContentsScale<R = unknown, P0 = number>(_layerContentsForContentsScale: P0): R;
    recommendedLayerContentsScale<R = number, P0 = number>(_recommendedLayerContentsScale: P0): R;
    TIFFRepresentationUsingCompression_factor<R = unknown, P0 = number, P1 = number>(_TIFFRepresentationUsingCompression: P0, _factor: P1): R;
    _imageByBadgingWithImage_rect<R = unknown, P0 = unknown, P1 = CGRect>(__imageByBadgingWithImage: P0, _rect: P1): R;
    hitTestPoint_withImageDestinationRect_context_hints<R = boolean, P0 = CGPoint, P1 = CGRect, P2 = unknown, P3 = unknown>(_hitTestPoint: P0, _withImageDestinationRect: P1, _context: P2, _hints: P3): R;
    hitTestRect_withImageDestinationRect_context_hints<R = boolean, P0 = CGRect, P1 = CGRect, P2 = unknown, P3 = unknown>(_hitTestRect: P0, _withImageDestinationRect: P1, _context: P2, _hints: P3): R;
    hitTestRect_withImageDestinationRect_context_hints_flipped<R = boolean, P0 = CGRect, P1 = CGRect, P2 = unknown, P3 = unknown, P4 = boolean>(_hitTestRect: P0, _withImageDestinationRect: P1, _context: P2, _hints: P3, _flipped: P4): R;
    lockFocus<R = void>(): R;
    lockFocusFlipped<R = void, P0 = boolean>(_lockFocusFlipped: P0): R;
    lockFocusWithRect_context_hints_flipped<R = void, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = boolean>(_lockFocusWithRect: P0, _context: P1, _hints: P2, _flipped: P3): R;
    unlockFocus<R = void>(): R;
    _lockFocusOnRepresentation_rect_context_hints_flipped<R = void, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown, P4 = boolean>(__lockFocusOnRepresentation: P0, _rect: P1, _context: P2, _hints: P3, _flipped: P4): R;
    drawRepresentation_inRect<R = boolean, P0 = unknown, P1 = CGRect>(_drawRepresentation: P0, _inRect: P1): R;
    _drawRepresentation_inRect_withScaling<R = boolean, P0 = unknown, P1 = CGRect, P2 = boolean>(__drawRepresentation: P0, _inRect: P1, _withScaling: P2): R;
    _whenDrawn_fills<R = boolean, P0 = unknown, P1 = CGRect>(__whenDrawn: P0, _fills: P1): R;
    drawAtPoint_fromRect_operation_fraction<R = void, P0 = CGPoint, P1 = CGRect, P2 = number, P3 = number>(_drawAtPoint: P0, _fromRect: P1, _operation: P2, _fraction: P3): R;
    drawInRect_fromRect_operation_fraction<R = void, P0 = CGRect, P1 = CGRect, P2 = number, P3 = number>(_drawInRect: P0, _fromRect: P1, _operation: P2, _fraction: P3): R;
    drawInRect_fromRect_operation_fraction_hints<R = void, P0 = CGRect, P1 = CGRect, P2 = number, P3 = number, P4 = unknown>(_drawInRect: P0, _fromRect: P1, _operation: P2, _fraction: P3, _hints: P4): R;
    _createPatternForContext<R = void, P0 = unknown>(__createPatternForContext: P0): R;
    _dispatchImageDidNotDraw<R = void, P0 = unknown>(__dispatchImageDidNotDraw: P0): R;
    _imageDidNotDrawHandlerRep<R = unknown>(): R;
    CGImageForProposedRect_context_hints<R = CGImage, P0 = CGRect, P1 = unknown, P2 = unknown>(_CGImageForProposedRect: P0, _context: P1, _hints: P2): R;
    _drawMappingAlignmentRectToRect_withState_backgroundStyle_operation_fraction_flip_hints<R = void, P0 = CGRect, P1 = number, P2 = number, P3 = number, P4 = number, P5 = boolean, P6 = unknown>(__drawMappingAlignmentRectToRect: P0, _withState: P1, _backgroundStyle: P2, _operation: P3, _fraction: P4, _flip: P5, _hints: P6): R;
    drawInRect<R = void, P0 = CGRect>(_drawInRect: P0): R;
    drawInRect_fromRect_operation_fraction_respectFlipped_hints<R = void, P0 = CGRect, P1 = CGRect, P2 = number, P3 = number, P4 = boolean, P5 = unknown>(_drawInRect: P0, _fromRect: P1, _operation: P2, _fraction: P3, _respectFlipped: P4, _hints: P5): R;
    _dumpFullImageInfo<R = void>(): R;
    _providedAccessibilityDescription<R = unknown>(): R;
    _accessibilityDescriptionBackingForArchiving<R = unknown>(): R;
    _accessibilityDescriptionBackingForCopying<R = unknown>(): R;
    _setAccessibilityDescriptionBacking<R = void, P0 = unknown>(__setAccessibilityDescriptionBacking: P0): R;
    _accessibilityDescriptionBacking<R = unknown>(): R;
    _applyAsContentsToLayer<R = void, P0 = unknown>(__applyAsContentsToLayer: P0): R;
    _defaultAccessibilityDescription<R = unknown>(): R;
    _setDefaultAccessibilityDescription<R = void, P0 = unknown>(__setDefaultAccessibilityDescription: P0): R;
    _setAlignmentRectInNormalizedCoordinates<R = void, P0 = CGRect>(__setAlignmentRectInNormalizedCoordinates: P0): R;
    _alignmentRectInNormalizedCoordinates<R = CGRect>(): R;
    _hasMultipleStates<R = boolean>(): R;
    hasAlpha<R = boolean>(): R;
    _antialiased<R = boolean>(): R;
    _setAntialiased<R = void, P0 = boolean>(__setAntialiased: P0): R;
    _setPrefersResolutionMatch<R = void, P0 = boolean>(__setPrefersResolutionMatch: P0): R;
    _prefersResolutionMatch<R = boolean>(): R;
    _imageLevel_setBackgroundColor<R = void, P0 = unknown>(__imageLevel_setBackgroundColor: P0): R;
    _imageLevel_backgroundColor<R = unknown>(): R;
    name<R = unknown>(): R;
    setName<R = boolean, P0 = unknown>(_setName: P0): R;
    cancelIncrementalLoad<R = void>(): R;
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    dealloc<R = void>(): R;
    _deallocAuxiliaryStorage<R = void>(): R;
    _allocAuxiliaryStorage<R = void>(): R;
    _failsafeAllocAuxiliaryStorage<R = void>(): R;
    initWithISIcon<R = unknown, P0 = unknown>(_initWithISIcon: P0): R;
    initWithIconRef<R = unknown, P0 = OpaqueIconRef>(_initWithIconRef: P0): R;
    _initWithIconRef<R = unknown, P0 = void>(__initWithIconRef: P0): R;
    _initWithData_fileType_hfsType<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__initWithData: P0, _fileType: P1, _hfsType: P2): R;
    initWithPasteboard<R = unknown, P0 = unknown>(_initWithPasteboard: P0): R;
    initFromImage_rect<R = unknown, P0 = unknown, P1 = CGRect>(_initFromImage: P0, _rect: P1): R;
    initWithImageRep<R = unknown, P0 = unknown>(_initWithImageRep: P0): R;
    initWithCGImage_size<R = unknown, P0 = CGImage, P1 = CGSize>(_initWithCGImage: P0, _size: P1): R;
    initWithSize<R = unknown, P0 = CGSize>(_initWithSize: P0): R;
    initWithDataIgnoringOrientation<R = unknown, P0 = unknown>(_initWithDataIgnoringOrientation: P0): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    initByReferencingURLs<R = unknown, P0 = unknown>(_initByReferencingURLs: P0): R;
    initByReferencingURL<R = unknown, P0 = unknown>(_initByReferencingURL: P0): R;
    initWithContentsOfURL<R = unknown, P0 = unknown>(_initWithContentsOfURL: P0): R;
    initWithContentsOfFile<R = unknown, P0 = unknown>(_initWithContentsOfFile: P0): R;
    initByReferencingFile<R = unknown, P0 = unknown>(_initByReferencingFile: P0): R;
    bestRepresentationForDevice<R = unknown, P0 = unknown>(_bestRepresentationForDevice: P0): R;
    _usingBestRepresentationForRect_context_hints_body<R = void, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = CDUnknownBlockType>(__usingBestRepresentationForRect: P0, _context: P1, _hints: P2, _body: P3): R;
    _usingBestRepresentationAmongRepresentations_forRect_context_hints_body<R = void, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown, P4 = CDUnknownBlockType>(__usingBestRepresentationAmongRepresentations: P0, _forRect: P1, _context: P2, _hints: P3, _body: P4): R;
    bestRepresentationForRect_context_hints<R = unknown, P0 = CGRect, P1 = unknown, P2 = unknown>(_bestRepresentationForRect: P0, _context: P1, _hints: P2): R;
    bestRepresentationAmongRepresentations_forRect_context_hints<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown>(_bestRepresentationAmongRepresentations: P0, _forRect: P1, _context: P2, _hints: P3): R;
    _legacyAddRepresentationsForIconNamed_fromIconSectionInAppBinary<R = boolean, P0 = unknown, P1 = unknown>(__legacyAddRepresentationsForIconNamed: P0, _fromIconSectionInAppBinary: P1): R;
    _replaceRepsWithRep<R = void, P0 = unknown>(__replaceRepsWithRep: P0): R;
    addRepresentation<R = void, P0 = unknown>(_addRepresentation: P0): R;
    removeRepresentation<R = void, P0 = unknown>(_removeRepresentation: P0): R;
    addRepresentations<R = void, P0 = unknown>(_addRepresentations: P0): R;
    _addRepresentations<R = void, P0 = unknown>(__addRepresentations: P0): R;
    _setRepProviderWithRepresentationsArray<R = void, P0 = unknown>(__setRepProviderWithRepresentationsArray: P0): R;
    _setRepProviderWithISIcon<R = void, P0 = unknown>(__setRepProviderWithISIcon: P0): R;
    _setRepProviderWithIconRef<R = void, P0 = OpaqueIconRef>(__setRepProviderWithIconRef: P0): R;
    _setRepProviderWithReferencingURLs<R = void, P0 = unknown>(__setRepProviderWithReferencingURLs: P0): R;
    _setRepProviderWithReferencingURL<R = void, P0 = unknown>(__setRepProviderWithReferencingURL: P0): R;
    _usingRepresentationsPerformBlock<R = void, P0 = CDUnknownBlockType>(__usingRepresentationsPerformBlock: P0): R;
    _usingRepProviderPerformBlock<R = void, P0 = CDUnknownBlockType>(__usingRepProviderPerformBlock: P0): R;
    _setRepProvider<R = void, P0 = unknown>(__setRepProvider: P0): R;
    _processedHintsForHints_includeOnlyIfAvailable<R = unknown, P0 = unknown, P1 = boolean>(__processedHintsForHints: P0, _includeOnlyIfAvailable: P1): R;
    _defaultImageHintsAndOnlyIfAvailable<R = unknown, P0 = boolean>(__defaultImageHintsAndOnlyIfAvailable: P0): R;
    _snapshotRepForRep_rect_context_processedHints<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown>(__snapshotRepForRep: P0, _rect: P1, _context: P2, _processedHints: P3): R;
    _newSnapshotRepForRep_rect_context_processedHints<R = unknown, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown>(__newSnapshotRepForRep: P0, _rect: P1, _context: P2, _processedHints: P3): R;
    _newSnapshotRepForCGImage_drawingRect_applicableForRect_context_processedHints<R = unknown, P0 = CGImage, P1 = CGRect, P2 = CGRect, P3 = unknown, P4 = unknown>(__newSnapshotRepForCGImage: P0, _drawingRect: P1, _applicableForRect: P2, _context: P3, _processedHints: P4): R;
    _shouldCacheWhenDrawingRep_rect_context_processedHints<R = boolean, P0 = unknown, P1 = CGRect, P2 = unknown, P3 = unknown>(__shouldCacheWhenDrawingRep: P0, _rect: P1, _context: P2, _processedHints: P3): R;
    recache<R = void>(): R;
    _hasCacheRep<R = boolean>(): R;
    _isCachedToRep<R = boolean, P0 = unknown>(__isCachedToRep: P0): R;
    _usingCacheRepPerformBlock<R = void, P0 = CDUnknownBlockType>(__usingCacheRepPerformBlock: P0): R;
    _setCacheRep<R = void, P0 = unknown>(__setCacheRep: P0): R;
    lockFocusOnRepresentation<R = void, P0 = unknown>(_lockFocusOnRepresentation: P0): R;
    _composite_delta_fromRect_toPoint<R = boolean, P0 = number, P1 = number, P2 = CGRect, P3 = CGPoint>(__composite: P0, _delta: P1, _fromRect: P2, _toPoint: P3): R;
    _compositeFlipped_atPoint_fromRect_operation_fraction<R = void, P0 = boolean, P1 = CGPoint, P2 = CGRect, P3 = number, P4 = number>(__compositeFlipped: P0, _atPoint: P1, _fromRect: P2, _operation: P3, _fraction: P4): R;
    _compositeFlipped_inRect_fromRect_operation_fraction<R = void, P0 = boolean, P1 = CGRect, P2 = CGRect, P3 = number, P4 = number>(__compositeFlipped: P0, _inRect: P1, _fromRect: P2, _operation: P3, _fraction: P4): R;
    _compositeToPoint_fromRect_operation_fraction<R = void, P0 = CGPoint, P1 = CGRect, P2 = number, P3 = number>(__compositeToPoint: P0, _fromRect: P1, _operation: P2, _fraction: P3): R;
    _compositeToPoint_operation_fraction<R = void, P0 = CGPoint, P1 = number, P2 = number>(__compositeToPoint: P0, _operation: P1, _fraction: P2): R;
    compositeToPoint_fromRect_operation_fraction<R = void, P0 = CGPoint, P1 = CGRect, P2 = number, P3 = number>(_compositeToPoint: P0, _fromRect: P1, _operation: P2, _fraction: P3): R;
    compositeToPoint_operation_fraction<R = void, P0 = CGPoint, P1 = number, P2 = number>(_compositeToPoint: P0, _operation: P1, _fraction: P2): R;
    dissolveToPoint_fromRect_fraction<R = void, P0 = CGPoint, P1 = CGRect, P2 = number>(_dissolveToPoint: P0, _fromRect: P1, _fraction: P2): R;
    compositeToPoint_fromRect_operation<R = void, P0 = CGPoint, P1 = CGRect, P2 = number>(_compositeToPoint: P0, _fromRect: P1, _operation: P2): R;
    dissolveToPoint_fraction<R = void, P0 = CGPoint, P1 = number>(_dissolveToPoint: P0, _fraction: P1): R;
    compositeToPoint_operation<R = void, P0 = CGPoint, P1 = number>(_compositeToPoint: P0, _operation: P1): R;
    cacheDepthMatchesImageDepth<R = boolean>(): R;
    setCacheDepthMatchesImageDepth<R = void, P0 = boolean>(_setCacheDepthMatchesImageDepth: P0): R;
    isCachedSeparately<R = boolean>(): R;
    setCachedSeparately<R = void, P0 = boolean>(_setCachedSeparately: P0): R;
    isDataRetained<R = boolean>(): R;
    setDataRetained<R = void, P0 = boolean>(_setDataRetained: P0): R;
    scalesWhenResized<R = boolean>(): R;
    setScalesWhenResized<R = void, P0 = boolean>(_setScalesWhenResized: P0): R;
    isFlipped<R = boolean>(): R;
    setFlipped<R = void, P0 = boolean>(_setFlipped: P0): R;
    NS_needsRecommitOnDefaultContentsScaleChange<R = boolean>(): R;
    CA_copyRenderValue<R = void>(): R;
    CA_prepareRenderValue<R = void>(): R;
    replacementObjectForCoder<R = unknown, P0 = unknown>(_replacementObjectForCoder: P0): R;
    _flatImageWithColor<R = unknown, P0 = unknown>(__flatImageWithColor: P0): R;
    _safari_imageWithBackgroundColor_compositingOperation<R = unknown, P0 = unknown, P1 = number>(__safari_imageWithBackgroundColor: P0, _compositingOperation: P1): R;
    _imageByScalingToSize_withImageInterpolation_imageScaling<R = unknown, P0 = CGSize, P1 = number, P2 = number>(__imageByScalingToSize: P0, _withImageInterpolation: P1, _imageScaling: P2): R;
    _imageByScalingToSize_withImageInterpolation<R = unknown, P0 = CGSize, P1 = number>(__imageByScalingToSize: P0, _withImageInterpolation: P1): R;
    _imageByApplyingShadowForDragging<R = unknown>(): R;
    _reps<R = unknown>(): R;
    set_reps<R = void, P0 = unknown>(_v: P0): R;
    TIFFRepresentation<R = NSData>(): R;
    valid<R = boolean>(): R;
    description<R = NSString>(): R;
    accessibilityDescription<R = NSString>(): R;
    setAccessibilityDescription<R = void, P0 = NSString>(_v: P0): R;
    imageInterpolation<R = number>(): R;
    setImageInterpolation<R = void, P0 = number>(_v: P0): R;
    _imageInterpolation<R = number>(): R;
    set_imageInterpolation<R = void, P0 = number>(_v: P0): R;
    resizingMode<R = number>(): R;
    setResizingMode<R = void, P0 = number>(_v: P0): R;
    capInsets<R = NSEdgeInsets>(): R;
    setCapInsets<R = void, P0 = NSEdgeInsets>(_v: P0): R;
    alignmentRect<R = CGRect>(): R;
    setAlignmentRect<R = void, P0 = CGRect>(_v: P0): R;
    template<R = boolean>(): R;
    setTemplate<R = void, P0 = boolean>(_v: P0): R;
    matchesOnlyOnBestFittingAxis<R = boolean>(): R;
    setMatchesOnlyOnBestFittingAxis<R = void, P0 = boolean>(_v: P0): R;
    matchesOnMultipleResolution<R = boolean>(): R;
    setMatchesOnMultipleResolution<R = void, P0 = boolean>(_v: P0): R;
    prefersColorMatch<R = boolean>(): R;
    setPrefersColorMatch<R = void, P0 = boolean>(_v: P0): R;
    usesEPSOnResolutionMismatch<R = boolean>(): R;
    setUsesEPSOnResolutionMismatch<R = void, P0 = boolean>(_v: P0): R;
    cacheMode<R = number>(): R;
    setCacheMode<R = void, P0 = number>(_v: P0): R;
    size<R = CGSize>(): R;
    setSize<R = void, P0 = CGSize>(_v: P0): R;
    delegate<R = NSImageDelegate>(): R;
    setDelegate<R = void, P0 = NSImageDelegate>(_v: P0): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    representations<R = NSArray>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + NSImage(Alpha): 
    imageHasAlpha<R = boolean>(): R;
    // + NSImage(Asset): 
    isAssetEqual<R = boolean, P0 = unknown>(_isAssetEqual: P0): R;
    assetType<R = number>(): R;
    // + NSImage(Chocolat): 
    thumbWithSize_cornerRadius<R = unknown, P0 = CGSize, P1 = number>(_thumbWithSize: P0, _cornerRadius: P1): R;
    imageWithShadow_padding<R = unknown, P0 = unknown, P1 = number>(_imageWithShadow: P0, _padding: P1): R;
    pixelSize<R = CGSize>(): R;
    isImageSizeLargerThan<R = boolean, P0 = CGSize>(_isImageSizeLargerThan: P0): R;
    imageWithPadding<R = unknown, P0 = number>(_imageWithPadding: P0): R;
    isVectorImage<R = boolean>(): R;
    drawInRect_fromRect_fraction_respectFlipped_colorSpace<R = void, P0 = CGRect, P1 = CGRect, P2 = number, P3 = boolean, P4 = unknown>(_drawInRect: P0, _fromRect: P1, _fraction: P2, _respectFlipped: P3, _colorSpace: P4): R;
    bitSafeBitmapImageRep<R = unknown>(): R;
    firstBitmapImageRep<R = unknown>(): R;
    firstBitmapImageRepOfScale<R = unknown, P0 = number>(_firstBitmapImageRepOfScale: P0): R;
    firstBitmapImageRepOrCreateIfNecessaryPreservingPixelSize<R = unknown, P0 = boolean>(_firstBitmapImageRepOrCreateIfNecessaryPreservingPixelSize: P0): R;
    firstBitmapImageRepOrCreateIfNecessary<R = unknown>(): R;
    drawFlippedAtPoint_fraction<R = void, P0 = CGPoint, P1 = number>(_drawFlippedAtPoint: P0, _fraction: P1): R;
    drawFlippedAtPoint<R = void, P0 = CGPoint>(_drawFlippedAtPoint: P0): R;
    verticallyFlipped<R = unknown>(): R;
    horizontallyFlipped<R = unknown>(): R;
    tintedWithColor_forOwner<R = unknown, P0 = unknown, P1 = unknown>(_tintedWithColor: P0, _forOwner: P1): R;
    tintedWithColor_compositingOperation<R = unknown, P0 = unknown, P1 = number>(_tintedWithColor: P0, _compositingOperation: P1): R;
    tintedWithColor<R = unknown, P0 = unknown>(_tintedWithColor: P0): R;
    highlightImage<R = unknown>(): R;
    altImage<R = unknown>(): R;
    pressedImage<R = unknown>(): R;
    hoverImage<R = unknown>(): R;
    selectedImage<R = unknown>(): R;
    drawProportionallyInRect_operation_fraction<R = void, P0 = CGRect, P1 = number, P2 = number>(_drawProportionallyInRect: P0, _operation: P1, _fraction: P2): R;
    scaledImageToSize<R = unknown, P0 = CGSize>(_scaledImageToSize: P0): R;
    drawInRect_fraction<R = void, P0 = CGRect, P1 = number>(_drawInRect: P0, _fraction: P1): R;
    drawAtPoint_fraction<R = void, P0 = CGPoint, P1 = number>(_drawAtPoint: P0, _fraction: P1): R;
    drawAtPoint<R = void, P0 = CGPoint>(_drawAtPoint: P0): R;
    // + NSImage(LayerListPreviewIconBadging): 
    badgedWithImage_maskImage_offset_forOwner<R = unknown, P0 = unknown, P1 = unknown, P2 = CGPoint, P3 = unknown>(_badgedWithImage: P0, _maskImage: P1, _offset: P2, _forOwner: P3): R;
    badgedWithImageNamed_maskImageNamed_offset_forOwner<R = unknown, P0 = unknown, P1 = unknown, P2 = CGPoint, P3 = unknown>(_badgedWithImageNamed: P0, _maskImageNamed: P1, _offset: P2, _forOwner: P3): R;
    badgedAs_forOwner<R = unknown, P0 = number, P1 = unknown>(_badgedAs: P0, _forOwner: P1): R;
    // + NSImage(MSSmallerArchiving): 
    PDFImageRep<R = unknown>(): R;
    EPSImageRep<R = unknown>(): R;
    hasEPSData<R = boolean>(): R;
    bitmapData<R = unknown>(): R;
    hasPDFData<R = boolean>(): R;
    dataForArchiving<R = unknown>(): R;
    // + NSImage(SidebarTinting): 
    tintedAsMenuItemImageForOwner<R = unknown, P0 = unknown>(_tintedAsMenuItemImageForOwner: P0): R;
    tintedAsSelectedImageForOwner_inActiveWindow<R = unknown, P0 = unknown, P1 = boolean>(_tintedAsSelectedImageForOwner: P0, _inActiveWindow: P1): R;
    tintedAsUnselectedImageForOwner_isSharedObject<R = unknown, P0 = unknown, P1 = boolean>(_tintedAsUnselectedImageForOwner: P0, _isSharedObject: P1): R;
    tintedAsUnselectedImageForOwner<R = unknown, P0 = unknown>(_tintedAsUnselectedImageForOwner: P0): R;
    // + NSImage(SketchSVG): 
    embeddedXlinkValue<R = unknown>(): R;
    // + NSImage(TreeAsDictionarySupport): 
    treeAsDictionary<R = unknown>(): R;
  }
  namespace NSImage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol, NSPasteboardReadingProtocol, NSPasteboardWritingProtocol {
      alloc<R = NSImage>(): R;
      new: <R = NSImage>() => R;
      imageUnfilteredPasteboardTypes<R = unknown>(): R;
      imageUnfilteredFileTypes<R = unknown>(): R;
      imagePasteboardTypes<R = unknown>(): R;
      imageFileTypes<R = unknown>(): R;
      imageUnfilteredTypes<R = unknown>(): R;
      imageTypes<R = unknown>(): R;
      _invalidateImageTypeCaches<R = void>(): R;
      _requireDefaultEndianPremultipliedLastForTIFFDataFromSnapshotReps<R = boolean>(): R;
      imageWithSize_drawHandler<R = unknown, P0 = CGSize, P1 = CDUnknownBlockType>(_imageWithSize: P0, _drawHandler: P1): R;
      imageWithSize_drawingIsFlipped_drawHandler<R = unknown, P0 = CGSize, P1 = boolean, P2 = CDUnknownBlockType>(_imageWithSize: P0, _drawingIsFlipped: P1, _drawHandler: P2): R;
      imageWithSize_flipped_drawingHandler<R = unknown, P0 = CGSize, P1 = boolean, P2 = CDUnknownBlockType>(_imageWithSize: P0, _flipped: P1, _drawingHandler: P2): R;
      _catalogImageWithName_bundle<R = unknown, P0 = unknown, P1 = unknown>(__catalogImageWithName: P0, _bundle: P1): R;
      _catalogIconImageWithName_bundle<R = unknown, P0 = unknown, P1 = unknown>(__catalogIconImageWithName: P0, _bundle: P1): R;
      _searchForSystemImageNamed<R = unknown, P0 = unknown>(__searchForSystemImageNamed: P0): R;
      _searchForImageNamed<R = unknown, P0 = unknown>(__searchForImageNamed: P0): R;
      imageNamed<R = unknown, P0 = unknown>(_imageNamed: P0): R;
      _coreUIImageWithName<R = unknown, P0 = unknown>(__coreUIImageWithName: P0): R;
      _systemIconImageWithName<R = unknown, P0 = unknown>(__systemIconImageWithName: P0): R;
      _touchBarSiriCompositeImage<R = unknown>(): R;
      _allNames<R = unknown>(): R;
      _imageNamed<R = unknown, P0 = unknown>(__imageNamed: P0): R;
      canInitWithPasteboard<R = boolean, P0 = unknown>(_canInitWithPasteboard: P0): R;
      _canInitWithPasteboard_allowMultipleFiles<R = boolean, P0 = unknown, P1 = boolean>(__canInitWithPasteboard: P0, _allowMultipleFiles: P1): R;
      imageWithImageRep<R = unknown, P0 = unknown>(_imageWithImageRep: P0): R;
      initialize<R = void>(): R;
      _templateImageWithImage<R = unknown, P0 = unknown>(__templateImageWithImage: P0): R;
      _emblemForCount<R = unknown, P0 = number>(__emblemForCount: P0): R;
      // + NSImage(Chocolat): 
      pngDataByFixingInvalidGamma<R = unknown, P0 = unknown>(_pngDataByFixingInvalidGamma: P0): R;
      pngDataByInvertingGammaInData<R = unknown, P0 = unknown>(_pngDataByInvertingGammaInData: P0): R;
      PDFImageWithSize_flipped_drawingHandler<R = unknown, P0 = CGSize, P1 = boolean, P2 = CDUnknownBlockType>(_PDFImageWithSize: P0, _flipped: P1, _drawingHandler: P2): R;
      bundledImageNamed<R = unknown, P0 = unknown>(_bundledImageNamed: P0): R;
      // + NSImage(MSSmallerArchiving): 
      imageFromDataArchive<R = unknown, P0 = unknown>(_imageFromDataArchive: P0): R;
      // + NSImage(NSImageBlocksDrawing): 
      drawImageFlipped_withSize_withBlock<R = unknown, P0 = boolean, P1 = CGSize, P2 = CDUnknownBlockType>(_drawImageFlipped: P0, _withSize: P1, _withBlock: P2): R;
      drawImageFlippedWithSize_withBlock<R = unknown, P0 = CGSize, P1 = CDUnknownBlockType>(_drawImageFlippedWithSize: P0, _withBlock: P1): R;
      drawImageWithSize_withBlock<R = unknown, P0 = CGSize, P1 = CDUnknownBlockType>(_drawImageWithSize: P0, _withBlock: P1): R;
      // + NSImage(WebP): 
      imageWithWebPURL<R = unknown, P0 = unknown>(_imageWithWebPURL: P0): R;
      imageWithWebPData<R = unknown, P0 = unknown>(_imageWithWebPData: P0): R;
    }
  }
}

declare const NSImage: cocoa.NSImage.CLASS;
