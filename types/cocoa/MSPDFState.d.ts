/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFState<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    stringFromTransform<R = unknown, P0 = unknown>(_stringFromTransform: P0): R;
    transformedClippingPath<R = unknown>(): R;
    updateClippingWithTextPath<R = void, P0 = unknown>(_updateClippingWithTextPath: P0): R;
    updateClipping<R = void>(): R;
    transformStruct<R = unknown>(): R;
    transformBezierPath<R = unknown, P0 = unknown>(_transformBezierPath: P0): R;
    transformSize<R = CGSize, P0 = CGSize>(_transformSize: P0): R;
    transformPoint<R = CGPoint, P0 = CGPoint>(_transformPoint: P0): R;
    appendTransform<R = void, P0 = unknown>(_appendTransform: P0): R;
    resetTransform<R = void, P0 = unknown>(_resetTransform: P0): R;
    resetFlipped<R = void>(): R;
    lastLayer<R = unknown>(): R;
    layerWithEnclosingGroup<R = unknown, P0 = boolean>(_layerWithEnclosingGroup: P0): R;
    makeArtboardGroup<R = unknown>(): R;
    optimiseClipLayerInGroup<R = boolean, P0 = unknown>(_optimiseClipLayerInGroup: P0): R;
    addLayer<R = void, P0 = unknown>(_addLayer: P0): R;
    initWithScanner<R = unknown, P0 = unknown>(_initWithScanner: P0): R;
    flippedTransform<R = NSAffineTransform>(): R;
    setFlippedTransform<R = void, P0 = NSAffineTransform>(_v: P0): R;
    transform<R = NSAffineTransform>(): R;
    setTransform<R = void, P0 = NSAffineTransform>(_v: P0): R;
    scanner<R = MSPDFScanner>(): R;
    setScanner<R = void, P0 = MSPDFScanner>(_v: P0): R;
    transformedPath<R = NSBezierPath>(): R;
    setTransformedPath<R = void, P0 = NSBezierPath>(_v: P0): R;
    text<R = MSPDFTextState>(): R;
    setText<R = void, P0 = MSPDFTextState>(_v: P0): R;
    renderingIntent<R = number>(): R;
    setRenderingIntent<R = void, P0 = number>(_v: P0): R;
    pathWasRect<R = boolean>(): R;
    setPathWasRect<R = void, P0 = boolean>(_v: P0): R;
    pathUsed<R = boolean>(): R;
    setPathUsed<R = void, P0 = boolean>(_v: P0): R;
    pathClosed<R = boolean>(): R;
    setPathClosed<R = void, P0 = boolean>(_v: P0): R;
    path<R = NSBezierPath>(): R;
    setPath<R = void, P0 = NSBezierPath>(_v: P0): R;
    layers<R = NSMutableArray>(): R;
    setLayers<R = void, P0 = NSMutableArray>(_v: P0): R;
    fillGradient<R = PDFPattern>(): R;
    setFillGradient<R = void, P0 = PDFPattern>(_v: P0): R;
    fillColorSpaceMapping<R = PDFFunction>(): R;
    setFillColorSpaceMapping<R = void, P0 = PDFFunction>(_v: P0): R;
    fillColorSpace<R = NSColorSpace>(): R;
    setFillColorSpace<R = void, P0 = NSColorSpace>(_v: P0): R;
    fillColor<R = NSColor>(): R;
    setFillColor<R = void, P0 = NSColor>(_v: P0): R;
    fillAlphaConstant<R = number>(): R;
    setFillAlphaConstant<R = void, P0 = number>(_v: P0): R;
    currentPoint<R = CGPoint>(): R;
    setCurrentPoint<R = void, P0 = CGPoint>(_v: P0): R;
    containsClippedItems<R = boolean>(): R;
    setContainsClippedItems<R = void, P0 = boolean>(_v: P0): R;
    clippingUpdated<R = boolean>(): R;
    setClippingUpdated<R = void, P0 = boolean>(_v: P0): R;
    clippingPath<R = NSBezierPath>(): R;
    setClippingPath<R = void, P0 = NSBezierPath>(_v: P0): R;
    clippingMode<R = number>(): R;
    setClippingMode<R = void, P0 = number>(_v: P0): R;
    borderThickness<R = number>(): R;
    setBorderThickness<R = void, P0 = number>(_v: P0): R;
    borderJoinStyle<R = number>(): R;
    setBorderJoinStyle<R = void, P0 = number>(_v: P0): R;
    borderGradient<R = PDFPattern>(): R;
    setBorderGradient<R = void, P0 = PDFPattern>(_v: P0): R;
    borderCapStyle<R = number>(): R;
    setBorderCapStyle<R = void, P0 = number>(_v: P0): R;
    borderDashes<R = NSArray>(): R;
    setBorderDashes<R = void, P0 = NSArray>(_v: P0): R;
    borderColorSpaceMapping<R = PDFFunction>(): R;
    setBorderColorSpaceMapping<R = void, P0 = PDFFunction>(_v: P0): R;
    borderColorSpace<R = NSColorSpace>(): R;
    setBorderColorSpace<R = void, P0 = NSColorSpace>(_v: P0): R;
    borderColor<R = NSColor>(): R;
    setBorderColor<R = void, P0 = NSColor>(_v: P0): R;
    borderAlphaConstant<R = number>(): R;
    setBorderAlphaConstant<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSPDFState {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = MSPDFState>(): R;
      new: <R = MSPDFState>() => R;
    }
  }
}

declare const MSPDFState: cocoa.MSPDFState.CLASS;
