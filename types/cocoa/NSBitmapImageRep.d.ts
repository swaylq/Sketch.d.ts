/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBitmapImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep, NSSecureCodingProtocol {
    colorizeByMappingGray_toColor_blackMapping_whiteMapping<R = void, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(_colorizeByMappingGray: P0, _toColor: P1, _blackMapping: P2, _whiteMapping: P3): R;
    TIFFRepresentationUsingCompression_factor<R = unknown, P0 = number, P1 = number>(_TIFFRepresentationUsingCompression: P0, _factor: P1): R;
    setCompression_factor<R = void, P0 = number, P1 = number>(_setCompression: P0, _factor: P1): R;
    getCompression_factor<R = void, P0 = number, P1 = number>(_getCompression: P0, _factor: P1): R;
    canBeCompressedUsing<R = boolean, P0 = number>(_canBeCompressedUsing: P0): R;
    setRespectOrientation<R = void, P0 = boolean>(_setRespectOrientation: P0): R;
    respectOrientation<R = boolean>(): R;
    getPixel_atX_y<R = void, P0 = number, P1 = number, P2 = number>(_getPixel: P0, _atX: P1, _y: P2): R;
    setPixel_atX_y<R = void, P0 = number, P1 = number, P2 = number>(_setPixel: P0, _atX: P1, _y: P2): R;
    colorAtX_y<R = unknown, P0 = number, P1 = number>(_colorAtX: P0, _y: P1): R;
    setColor_atX_y<R = void, P0 = unknown, P1 = number, P2 = number>(_setColor: P0, _atX: P1, _y: P2): R;
    getBitmapDataPlanes<R = void, P0 = string>(_getBitmapDataPlanes: P0): R;
    setSize<R = void, P0 = CGSize>(_setSize: P0): R;
    _freeImage<R = void>(): R;
    _freeData<R = void>(): R;
    _setSharedIdentifier<R = void, P0 = number>(__setSharedIdentifier: P0): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    _loadData<R = boolean>(): R;
    incrementalLoadFromData_complete<R = number, P0 = unknown, P1 = boolean>(_incrementalLoadFromData: P0, _complete: P1): R;
    initWithCIImage<R = unknown, P0 = unknown>(_initWithCIImage: P0): R;
    initWithFocusedViewRect<R = unknown, P0 = CGRect>(_initWithFocusedViewRect: P0): R;
    initWithBitmapDataPlanes_pixelsWide_pixelsHigh_bitsPerSample_samplesPerPixel_hasAlpha_isPlanar_colorSpaceName_bytesPerRow_bitsPerPixel<R = unknown, P0 = string, P1 = number, P2 = number, P3 = number, P4 = number, P5 = boolean, P6 = boolean, P7 = unknown, P8 = number, P9 = number>(_initWithBitmapDataPlanes: P0, _pixelsWide: P1, _pixelsHigh: P2, _bitsPerSample: P3, _samplesPerPixel: P4, _hasAlpha: P5, _isPlanar: P6, _colorSpaceName: P7, _bytesPerRow: P8, _bitsPerPixel: P9): R;
    _initWithSharedBitmap_rect<R = unknown, P0 = void, P1 = CGRect>(__initWithSharedBitmap: P0, _rect: P1): R;
    _initWithImageSource_imageNumber_properties<R = unknown, P0 = void, P1 = number, P2 = __CFDictionary>(__initWithImageSource: P0, _imageNumber: P1, _properties: P2): R;
    initForIncrementalLoad<R = unknown>(): R;
    initWithCGImage<R = unknown, P0 = CGImage>(_initWithCGImage: P0): R;
    initWithBitmapDataPlanes_pixelsWide_pixelsHigh_bitsPerSample_samplesPerPixel_hasAlpha_isPlanar_colorSpaceName_bitmapFormat_bytesPerRow_bitsPerPixel<R = unknown, P0 = string, P1 = number, P2 = number, P3 = number, P4 = number, P5 = boolean, P6 = boolean, P7 = unknown, P8 = number, P9 = number, P10 = number>(_initWithBitmapDataPlanes: P0, _pixelsWide: P1, _pixelsHigh: P2, _bitsPerSample: P3, _samplesPerPixel: P4, _hasAlpha: P5, _isPlanar: P6, _colorSpaceName: P7, _bitmapFormat: P8, _bytesPerRow: P9, _bitsPerPixel: P10): R;
    _loadTierTwoInfoIfNotYetLoaded<R = boolean>(): R;
    _loadTierTwoInfoWithCGImage<R = void, P0 = CGImage>(__loadTierTwoInfoWithCGImage: P0): R;
    _loadTierOneInfoWithCGImage<R = boolean, P0 = CGImage>(__loadTierOneInfoWithCGImage: P0): R;
    _loadTierOneInfoWithImageSource_imageNumber_properties<R = boolean, P0 = CGImageSource, P1 = number, P2 = __CFDictionary>(__loadTierOneInfoWithImageSource: P0, _imageNumber: P1, _properties: P2): R;
    bitmapImageRepByRetaggingWithColorSpace<R = unknown, P0 = unknown>(_bitmapImageRepByRetaggingWithColorSpace: P0): R;
    bitmapImageRepByConvertingToColorSpace_renderingIntent<R = unknown, P0 = unknown, P1 = number>(_bitmapImageRepByConvertingToColorSpace: P0, _renderingIntent: P1): R;
    setColorSpaceName<R = void, P0 = unknown>(_setColorSpaceName: P0): R;
    colorSpaceName<R = unknown>(): R;
    _bitmapImageRep_setColorSpaceName<R = void, P0 = unknown>(__bitmapImageRep_setColorSpaceName: P0): R;
    _retagBackingWithColorSpace<R = void, P0 = unknown>(__retagBackingWithColorSpace: P0): R;
    _bitmapFormat<R = number>(): R;
    _colorSpaceModel<R = number>(): R;
    _performBlockUsingBackingMutableData<R = void, P0 = CDUnknownBlockType>(__performBlockUsingBackingMutableData: P0): R;
    _withoutChangingBackingPerformBlockUsingBackingMutableData<R = void, P0 = CDUnknownBlockType>(__withoutChangingBackingPerformBlockUsingBackingMutableData: P0): R;
    _fromCGImage_performBlockUsingMutableData<R = void, P0 = CGImage, P1 = CDUnknownBlockType>(__fromCGImage: P0, _performBlockUsingMutableData: P1): R;
    _captureDrawing<R = void, P0 = CDUnknownBlockType>(__captureDrawing: P0): R;
    _performBlockUsingBackingCGImage<R = void, P0 = CDUnknownBlockType>(__performBlockUsingBackingCGImage: P0): R;
    _becomeBackedByCGImage<R = void, P0 = CGImage>(__becomeBackedByCGImage: P0): R;
    _withoutChangingBackingPerformBlockUsingBackingCGImage<R = void, P0 = CDUnknownBlockType>(__withoutChangingBackingPerformBlockUsingBackingCGImage: P0): R;
    _performBlockUsingBacking<R = void, P0 = CDUnknownBlockType>(__performBlockUsingBacking: P0): R;
    _setImageNumber<R = void, P0 = number>(__setImageNumber: P0): R;
    _imageNumber<R = number>(): R;
    valueForProperty<R = unknown, P0 = unknown>(_valueForProperty: P0): R;
    setProperty_withValue<R = void, P0 = unknown, P1 = unknown>(_setProperty: P0, _withValue: P1): R;
    representationUsingType_properties<R = unknown, P0 = number, P1 = unknown>(_representationUsingType: P0, _properties: P1): R;
    _getCGImageRefCreateIfNecessary<R = CGImage>(): R;
    _acquireRetainedCGImageRef<R = CGImage>(): R;
    _backing<R = unknown>(): R;
    set_backing<R = void, P0 = unknown>(_v: P0): R;
    TIFFRepresentation<R = NSData>(): R;
    bitmapData<R = string>(): R;
    CGImage<R = CGImage>(): R;
    colorSpace<R = NSColorSpace>(): R;
    bitmapFormat<R = number>(): R;
    bytesPerRow<R = number>(): R;
    bytesPerPlane<R = number>(): R;
    bitsPerPixel<R = number>(): R;
    numberOfPlanes<R = number>(): R;
    samplesPerPixel<R = number>(): R;
    planar<R = boolean>(): R;
    // + NSBitmapImageRep(Alpha): 
    repSupportsAlpha<R = boolean>(): R;
    // + NSBitmapImageRep(CHBitmapRepAdditions): 
    hasTransparentPixels<R = boolean>(): R;
    bitSafeBitmapImageRep<R = unknown>(): R;
    bitmapImageRepByFlippingVertical<R = unknown>(): R;
    bitmapImageRepByCroppingToRect<R = unknown, P0 = CGRect>(_bitmapImageRepByCroppingToRect: P0): R;
    bitSafeFastRectForTrimming<R = CGRect, P0 = string>(_bitSafeFastRectForTrimming: P0): R;
    rectForTrimming<R = CGRect, P0 = string>(_rectForTrimming: P0): R;
    PNGRepresentationWithInterlaced_includeAlpha<R = unknown, P0 = boolean, P1 = boolean>(_PNGRepresentationWithInterlaced: P0, _includeAlpha: P1): R;
    PNGRepresentationWithInterlaced<R = unknown, P0 = boolean>(_PNGRepresentationWithInterlaced: P0): R;
    JPGRepresentationWithCompression_progressive<R = unknown, P0 = number, P1 = boolean>(_JPGRepresentationWithCompression: P0, _progressive: P1): R;
    // + NSBitmapImageRep(MSSmallerArchiving): 
    dataForArchiving<R = unknown>(): R;
  }
  namespace NSBitmapImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep, NSSecureCodingProtocol {
      alloc<R = NSBitmapImageRep>(): R;
      new: <R = NSBitmapImageRep>() => R;
      TIFFRepresentationOfImageRepsInArray_usingCompression_factor<R = unknown, P0 = unknown, P1 = number, P2 = number>(_TIFFRepresentationOfImageRepsInArray: P0, _usingCompression: P1, _factor: P2): R;
      TIFFRepresentationOfImageRepsInArray<R = unknown, P0 = unknown>(_TIFFRepresentationOfImageRepsInArray: P0): R;
      localizedNameForTIFFCompressionType<R = unknown, P0 = number>(_localizedNameForTIFFCompressionType: P0): R;
      getTIFFCompressionTypes_count<R = void, P0 = number, P1 = number>(_getTIFFCompressionTypes: P0, _count: P1): R;
      withCurrentThreadRespectingOrientation_performBlock<R = void, P0 = boolean, P1 = CDUnknownBlockType>(_withCurrentThreadRespectingOrientation: P0, _performBlock: P1): R;
      currentThreadRespectOrientation<R = boolean>(): R;
      setDefaultRespectOrientation<R = void, P0 = boolean>(_setDefaultRespectOrientation: P0): R;
      defaultRespectOrientation<R = boolean>(): R;
      _imageRepWithData_hfsFileType_extension<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__imageRepWithData: P0, _hfsFileType: P1, _extension: P2): R;
      _imageRepsWithData_hfsFileType_extension_expandImageContentNow<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = boolean>(__imageRepsWithData: P0, _hfsFileType: P1, _extension: P2, _expandImageContentNow: P3): R;
      imageRepWithData<R = unknown, P0 = unknown>(_imageRepWithData: P0): R;
      imageRepsWithData<R = unknown, P0 = unknown>(_imageRepsWithData: P0): R;
      _imagesFromURL_forImage_fileType_extension<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(__imagesFromURL: P0, _forImage: P1, _fileType: P2, _extension: P3): R;
      _imagesFromIcon_inApp_zone<R = unknown, P0 = unknown, P1 = unknown, P2 = _NSZone>(__imagesFromIcon: P0, _inApp: P1, _zone: P2): R;
      _imagesWithData_hfsFileType_extension_zone_expandImageContentNow_includeAllReps<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = _NSZone, P4 = boolean, P5 = boolean>(__imagesWithData: P0, _hfsFileType: P1, _extension: P2, _zone: P3, _expandImageContentNow: P4, _includeAllReps: P5): R;
      _imagesWithData_hfsFileType_extension_zone_expandImageContentNow<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = _NSZone, P4 = boolean>(__imagesWithData: P0, _hfsFileType: P1, _extension: P2, _zone: P3, _expandImageContentNow: P4): R;
      representationOfImageRepsInArray_usingType_properties<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_representationOfImageRepsInArray: P0, _usingType: P1, _properties: P2): R;
      _setEnableFlippedImageFix<R = void, P0 = boolean>(__setEnableFlippedImageFix: P0): R;
      // + NSBitmapImageRep(CHBitmapRepAdditions): 
      bitmapImageRepWithSize_pixelSize_flags_colorSpace_drawingBlock<R = unknown, P0 = CGSize, P1 = CGSize, P2 = number, P3 = unknown, P4 = CDUnknownBlockType>(_bitmapImageRepWithSize: P0, _pixelSize: P1, _flags: P2, _colorSpace: P3, _drawingBlock: P4): R;
      bitmapImageRepWithSize_flags_colorSpace_drawingBlock<R = unknown, P0 = CGSize, P1 = number, P2 = unknown, P3 = CDUnknownBlockType>(_bitmapImageRepWithSize: P0, _flags: P1, _colorSpace: P2, _drawingBlock: P3): R;
    }
  }
}

declare const NSBitmapImageRep: cocoa.NSBitmapImageRep.CLASS;
