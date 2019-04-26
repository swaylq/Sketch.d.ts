/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPath<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    cxx_destruct<R = void>(): R;
    isEqualToPath_epsilon<R = boolean, P0 = unknown, P1 = number>(_isEqualToPath: P0, _epsilon: P1): R;
    isEqualToPath<R = boolean, P0 = unknown>(_isEqualToPath: P0): R;
    elementAtIndex<R = unknown, P0 = number>(_elementAtIndex: P0): R;
    pathByRearrangingSubPathsIfNecessary<R = unknown>(): R;
    pathByReplacingMoveToByLineToComponents<R = unknown>(): R;
    pointsInRect<R = unknown, P0 = CGRect>(_pointsInRect: P0): R;
    pathByApplyingModifierBlock<R = unknown, P0 = CDUnknownBlockType>(_pathByApplyingModifierBlock: P0): R;
    _initCachedProperties<R = MSPathCachedProperties>(): R;
    _calculateCachedProperies<R = MSPathCachedProperties>(): R;
    bezierIndexForPoint_tolerance<R = number, P0 = CGPoint, P1 = number>(_bezierIndexForPoint: P0, _tolerance: P1): R;
    pathFromIndex_toIndex<R = unknown, P0 = number, P1 = number>(_pathFromIndex: P0, _toIndex: P1): R;
    endPoint<R = CGPoint>(): R;
    startPoint<R = CGPoint>(): R;
    pathByTrimmingToLength_withMaximumError<R = unknown, P0 = number, P1 = number>(_pathByTrimmingToLength: P0, _withMaximumError: P1): R;
    length<R = number>(): R;
    lengthWithMaximumError<R = number, P0 = number>(_lengthWithMaximumError: P0): R;
    pathByTrimmingToLength<R = unknown, P0 = number>(_pathByTrimmingToLength: P0): R;
    pointOnPathAtLength<R = CGPoint, P0 = number>(_pointOnPathAtLength: P0): R;
    isClosed<R = boolean>(): R;
    pointAtIndex<R = CGPoint, P0 = number>(_pointAtIndex: P0): R;
    containsPoint<R = boolean, P0 = CGPoint>(_containsPoint: P0): R;
    outlinePathWithWidth_lineCap_lineJoin<R = unknown, P0 = number, P1 = number, P2 = number>(_outlinePathWithWidth: P0, _lineCap: P1, _lineJoin: P2): R;
    outlinePathWithWidth<R = unknown, P0 = number>(_outlinePathWithWidth: P0): R;
    _pathByScalingToBounds<R = unknown, P0 = CGRect>(__pathByScalingToBounds: P0): R;
    pathByScalingToBounds<R = unknown, P0 = CGRect>(_pathByScalingToBounds: P0): R;
    pathByCuttingBeforeIndex<R = unknown, P0 = number>(_pathByCuttingBeforeIndex: P0): R;
    pathByJoiningWithPath<R = unknown, P0 = unknown>(_pathByJoiningWithPath: P0): R;
    pathByReplacingElementAtIndexWithMoveTo<R = unknown, P0 = number>(_pathByReplacingElementAtIndexWithMoveTo: P0): R;
    pathByReplacingClosePathByLineToComponents<R = unknown>(): R;
    pathByRemovingSubsequentMoveToComponents<R = unknown>(): R;
    pathWithInset_joinStrategy<R = unknown, P0 = number, P1 = number>(_pathWithInset: P0, _joinStrategy: P1): R;
    pathWithInset<R = unknown, P0 = number>(_pathWithInset: P0): R;
    reversedPath<R = unknown>(): R;
    debugQuickLookObject<R = unknown>(): R;
    transformedPathUsingMapBlock<R = unknown, P0 = CDUnknownBlockType>(_transformedPathUsingMapBlock: P0): R;
    transformedPathUsingAffineTransform<R = unknown, P0 = CGAffineTransform>(_transformedPathUsingAffineTransform: P0): R;
    createContours<R = unknown>(): R;
    initWithPoints_pointCount_close<R = unknown, P0 = CGPoint, P1 = number, P2 = boolean>(_initWithPoints: P0, _pointCount: P1, _close: P2): R;
    initWithCurveFromPoint_to_controlPoint1_controlPoint2<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint, P3 = CGPoint>(_initWithCurveFromPoint: P0, _to: P1, _controlPoint1: P2, _controlPoint2: P3): R;
    initWithLineFrom_to<R = unknown, P0 = CGPoint, P1 = CGPoint>(_initWithLineFrom: P0, _to: P1): R;
    initWithEllipseInRect<R = unknown, P0 = CGRect>(_initWithEllipseInRect: P0): R;
    initWithSquircleInRect_radius<R = unknown, P0 = CGRect, P1 = number>(_initWithSquircleInRect: P0, _radius: P1): R;
    initWithRoundedRect_radius<R = unknown, P0 = CGRect, P1 = number>(_initWithRoundedRect: P0, _radius: P1): R;
    initWithRect<R = unknown, P0 = CGRect>(_initWithRect: P0): R;
    initWithBezierPath<R = unknown, P0 = unknown>(_initWithBezierPath: P0): R;
    dealloc<R = void>(): R;
    initWithContours<R = unknown, P0 = unknown>(_initWithContours: P0): R;
    initWithCGPath<R = unknown, P0 = CGPath>(_initWithCGPath: P0): R;
    shadowPathWithSpread_borderOptions_strokeType_lineWidth<R = unknown, P0 = number, P1 = unknown, P2 = number, P3 = number>(_shadowPathWithSpread: P0, _borderOptions: P1, _strokeType: P2, _lineWidth: P3): R;
    shadowPathWithSpread<R = unknown, P0 = number>(_shadowPathWithSpread: P0): R;
    shadowPathForStrokeType_lineWidth<R = unknown, P0 = number, P1 = number>(_shadowPathForStrokeType: P0, _lineWidth: P1): R;
    lineWidthForOutliningWithBorder<R = number, P0 = unknown>(_lineWidthForOutliningWithBorder: P0): R;
    outlinedSubpathWithBorder_options<R = unknown, P0 = unknown, P1 = unknown>(_outlinedSubpathWithBorder: P0, _options: P1): R;
    outlinedPathWithBorder_options<R = unknown, P0 = unknown, P1 = unknown>(_outlinedPathWithBorder: P0, _options: P1): R;
    booleanExclusiveOrWith<R = unknown, P0 = unknown>(_booleanExclusiveOrWith: P0): R;
    booleanSubtractWith<R = unknown, P0 = unknown>(_booleanSubtractWith: P0): R;
    booleanIntersectWith<R = unknown, P0 = unknown>(_booleanIntersectWith: P0): R;
    booleanUnionWith<R = unknown, P0 = unknown>(_booleanUnionWith: P0): R;
    booleanOp_withPath<R = unknown, P0 = number, P1 = unknown>(_booleanOp: P0, _withPath: P1): R;
    shadowPathWithSpread_borderOptions_strokeType_lineWidth_cacheObject_context<R = unknown, P0 = number, P1 = unknown, P2 = number, P3 = number, P4 = unknown, P5 = unknown>(_shadowPathWithSpread: P0, _borderOptions: P1, _strokeType: P2, _lineWidth: P3, _cacheObject: P4, _context: P5): R;
    shadowPathWithSpread_cacheObject_context<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_shadowPathWithSpread: P0, _cacheObject: P1, _context: P2): R;
    shadowPathForStrokeType_lineWidth_cacheObject_context<R = unknown, P0 = number, P1 = number, P2 = unknown, P3 = unknown>(_shadowPathForStrokeType: P0, _lineWidth: P1, _cacheObject: P2, _context: P3): R;
    outlinePathWithLineWidth_borderOptions<R = unknown, P0 = number, P1 = unknown>(_outlinePathWithLineWidth: P0, _borderOptions: P1): R;
    pathByGrowingBy<R = unknown, P0 = number>(_pathByGrowingBy: P0): R;
    insetPathBy_borderOptions<R = unknown, P0 = number, P1 = unknown>(_insetPathBy: P0, _borderOptions: P1): R;
    insetPathBy<R = unknown, P0 = number>(_insetPathBy: P0): R;
    pathWithOuterPathOfSize<R = unknown, P0 = number>(_pathWithOuterPathOfSize: P0): R;
    outerPathWithRect<R = unknown, P0 = CGRect>(_outerPathWithRect: P0): R;
    pathWithDashPattern<R = unknown, P0 = unknown>(_pathWithDashPattern: P0): R;
    addClipForWindingRule_context<R = void, P0 = number, P1 = CGContext>(_addClipForWindingRule: P0, _context: P1): R;
    clipContext_windingRule_inBlock<R = void, P0 = CGContext, P1 = number, P2 = CDUnknownBlockType>(_clipContext: P0, _windingRule: P1, _inBlock: P2): R;
    contours<R = NSArray>(): R;
    setContours<R = void, P0 = NSArray>(_v: P0): R;
    CGPath<R = CGPath>(): R;
    subpaths<R = NSArray>(): R;
    elementCount<R = number>(): R;
    isEmpty<R = boolean>(): R;
    isRectangular<R = boolean>(): R;
    controlPointBounds<R = CGRect>(): R;
    bounds<R = CGRect>(): R;
    safeBounds<R = CGRect>(): R;
    // + MSPath(Rendering): 
    shadowPathWithSpread_borderOptions_strokeType_lineWidth_cacheObject_context<R = unknown, P0 = number, P1 = unknown, P2 = number, P3 = number, P4 = unknown, P5 = unknown>(_shadowPathWithSpread: P0, _borderOptions: P1, _strokeType: P2, _lineWidth: P3, _cacheObject: P4, _context: P5): R;
    shadowPathWithSpread_cacheObject_context<R = unknown, P0 = number, P1 = unknown, P2 = unknown>(_shadowPathWithSpread: P0, _cacheObject: P1, _context: P2): R;
    shadowPathForStrokeType_lineWidth_cacheObject_context<R = unknown, P0 = number, P1 = number, P2 = unknown, P3 = unknown>(_shadowPathForStrokeType: P0, _lineWidth: P1, _cacheObject: P2, _context: P3): R;
    outlinePathWithLineWidth_borderOptions<R = unknown, P0 = number, P1 = unknown>(_outlinePathWithLineWidth: P0, _borderOptions: P1): R;
    pathByGrowingBy<R = unknown, P0 = number>(_pathByGrowingBy: P0): R;
    insetPathBy_borderOptions<R = unknown, P0 = number, P1 = unknown>(_insetPathBy: P0, _borderOptions: P1): R;
    insetPathBy<R = unknown, P0 = number>(_insetPathBy: P0): R;
    pathWithOuterPathOfSize<R = unknown, P0 = number>(_pathWithOuterPathOfSize: P0): R;
    outerPathWithRect<R = unknown, P0 = CGRect>(_outerPathWithRect: P0): R;
    pathWithDashPattern<R = unknown, P0 = unknown>(_pathWithDashPattern: P0): R;
    addClipForWindingRule_context<R = void, P0 = number, P1 = CGContext>(_addClipForWindingRule: P0, _context: P1): R;
    clipContext_windingRule_inBlock<R = void, P0 = CGContext, P1 = number, P2 = CDUnknownBlockType>(_clipContext: P0, _windingRule: P1, _inBlock: P2): R;
  }
  namespace MSPath {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = MSPath>(): R;
      new: <R = MSPath>() => R;
      pathWithPoints_pointCount_close<R = unknown, P0 = CGPoint, P1 = number, P2 = boolean>(_pathWithPoints: P0, _pointCount: P1, _close: P2): R;
      pathWithCurveFromPoint_to_controlPoint1_controlPoint2<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint, P3 = CGPoint>(_pathWithCurveFromPoint: P0, _to: P1, _controlPoint1: P2, _controlPoint2: P3): R;
      pathWithLineFrom_to<R = unknown, P0 = CGPoint, P1 = CGPoint>(_pathWithLineFrom: P0, _to: P1): R;
      pathWithBezierPath<R = unknown, P0 = unknown>(_pathWithBezierPath: P0): R;
      pathWithCGPath<R = unknown, P0 = CGPath>(_pathWithCGPath: P0): R;
      pathWithEllipseInRect<R = unknown, P0 = CGRect>(_pathWithEllipseInRect: P0): R;
      pathWithRect<R = unknown, P0 = CGRect>(_pathWithRect: P0): R;
      pathWithContours<R = unknown, P0 = unknown>(_pathWithContours: P0): R;
      pathWithSubpaths<R = unknown, P0 = unknown>(_pathWithSubpaths: P0): R;
  
  }
  }
}

declare const MSPath: cocoa.MSPath.CLASS;
