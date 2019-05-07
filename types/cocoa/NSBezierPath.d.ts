/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBezierPath<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    containsPoint<R = boolean, P0 = CGPoint>(_containsPoint: P0): R;
    appendBezierPathWithRoundedRect_xRadius_yRadius<R = void, P0 = CGRect, P1 = number, P2 = number>(_appendBezierPathWithRoundedRect: P0, _xRadius: P1, _yRadius: P2): R;
    appendBezierPathWithCGGlyphs_count_inFont<R = void, P0 = number, P1 = number, P2 = unknown>(_appendBezierPathWithCGGlyphs: P0, _count: P1, _inFont: P2): R;
    appendBezierPathWithCGGlyph_inFont<R = void, P0 = number, P1 = unknown>(_appendBezierPathWithCGGlyph: P0, _inFont: P1): R;
    appendBezierPathWithNativeGlyphs_advances_count_inFont<R = void, P0 = number, P1 = CGSize, P2 = number, P3 = unknown>(_appendBezierPathWithNativeGlyphs: P0, _advances: P1, _count: P2, _inFont: P3): R;
    appendBezierPathWithArcFromPoint_toPoint_radius<R = void, P0 = CGPoint, P1 = CGPoint, P2 = number>(_appendBezierPathWithArcFromPoint: P0, _toPoint: P1, _radius: P2): R;
    appendBezierPathWithArcWithCenter_radius_startAngle_endAngle<R = void, P0 = CGPoint, P1 = number, P2 = number, P3 = number>(_appendBezierPathWithArcWithCenter: P0, _radius: P1, _startAngle: P2, _endAngle: P3): R;
    appendBezierPathWithArcWithCenter_radius_startAngle_endAngle_clockwise<R = void, P0 = CGPoint, P1 = number, P2 = number, P3 = number, P4 = boolean>(_appendBezierPathWithArcWithCenter: P0, _radius: P1, _startAngle: P2, _endAngle: P3, _clockwise: P4): R;
    _appendArcSegmentWithCenter_radius_angle1_angle2<R = void, P0 = CGPoint, P1 = number, P2 = number, P3 = number>(__appendArcSegmentWithCenter: P0, _radius: P1, _angle1: P2, _angle2: P3): R;
    appendBezierPathWithOvalInRect<R = void, P0 = CGRect>(_appendBezierPathWithOvalInRect: P0): R;
    appendBezierPathWithPoints_count<R = void, P0 = CGPoint, P1 = number>(_appendBezierPathWithPoints: P0, _count: P1): R;
    appendBezierPathWithRect<R = void, P0 = CGRect>(_appendBezierPathWithRect: P0): R;
    appendBezierPath<R = void, P0 = unknown>(_appendBezierPath: P0): R;
    _appendToPath<R = void, P0 = unknown>(__appendToPath: P0): R;
    setAssociatedPoints_atIndex<R = void, P0 = CGPoint, P1 = number>(_setAssociatedPoints: P0, _atIndex: P1): R;
    elementAtIndex_associatedPoints<R = number, P0 = number, P1 = CGPoint>(_elementAtIndex: P0, _associatedPoints: P1): R;
    elementAtIndex<R = number, P0 = number>(_elementAtIndex: P0): R;
    transformUsingAffineTransform<R = void, P0 = unknown>(_transformUsingAffineTransform: P0): R;
    _copyFlattenedPath<R = unknown>(): R;
    flattenIntoPath<R = void, P0 = unknown>(_flattenIntoPath: P0): R;
    subdivideBezierWithFlatness_startPoint_controlPoint1_controlPoint2_endPoint<R = void, P0 = number, P1 = CGPoint, P2 = CGPoint, P3 = CGPoint, P4 = CGPoint>(_subdivideBezierWithFlatness: P0, _startPoint: P1, _controlPoint1: P2, _controlPoint2: P3, _endPoint: P4): R;
    setClip<R = void>(): R;
    addClip<R = void>(): R;
    fill<R = void>(): R;
    stroke<R = void>(): R;
    CGPath<R = CGPath>(): R;
    _doPath<R = void>(): R;
    getLineDash_count_phase<R = void, P0 = number, P1 = number, P2 = number>(_getLineDash: P0, _count: P1, _phase: P2): R;
    setLineDash_count_phase<R = void, P0 = number, P1 = number, P2 = number>(_setLineDash: P0, _count: P1, _phase: P2): R;
    relativeCurveToPoint_controlPoint1_controlPoint2<R = void, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint>(_relativeCurveToPoint: P0, _controlPoint1: P1, _controlPoint2: P2): R;
    relativeLineToPoint<R = void, P0 = CGPoint>(_relativeLineToPoint: P0): R;
    relativeMoveToPoint<R = void, P0 = CGPoint>(_relativeMoveToPoint: P0): R;
    removeAllPoints<R = void>(): R;
    closePath<R = void>(): R;
    curveToPoint_controlPoint1_controlPoint2<R = void, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint>(_curveToPoint: P0, _controlPoint1: P1, _controlPoint2: P2): R;
    lineToPoint<R = void, P0 = CGPoint>(_lineToPoint: P0): R;
    moveToPoint<R = void, P0 = CGPoint>(_moveToPoint: P0): R;
    dealloc<R = void>(): R;
    _initializeDashPatternFromDecodedBytes_length_requiresSecureCoding_error<R = boolean, P0 = void, P1 = number, P2 = boolean, P3 = unknown>(__initializeDashPatternFromDecodedBytes: P0, _length: P1, _requiresSecureCoding: P2, _error: P3): R;
    _initializeSegmentsFromDecodedBytes_length_requiresSecureCoding_error<R = boolean, P0 = void, P1 = number, P2 = boolean, P3 = unknown>(__initializeSegmentsFromDecodedBytes: P0, _length: P1, _requiresSecureCoding: P2, _error: P3): R;
    _deviceClosePath<R = void>(): R;
    _deviceCurveToPoint_controlPoint1_controlPoint2<R = void, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint>(__deviceCurveToPoint: P0, _controlPoint1: P1, _controlPoint2: P2): R;
    _deviceLineToPoint<R = void, P0 = CGPoint>(__deviceLineToPoint: P0): R;
    _deviceMoveToPoint<R = void, P0 = CGPoint>(__deviceMoveToPoint: P0): R;
    _addPathSegment_point<R = void, P0 = number, P1 = CGPoint>(__addPathSegment: P0, _point: P1): R;
    description<R = unknown>(): R;
    appendBezierPathWithPackedGlyphs<R = void, P0 = string>(_appendBezierPathWithPackedGlyphs: P0): R;
    appendBezierPathWithGlyphs_count_inFont<R = void, P0 = number, P1 = number, P2 = unknown>(_appendBezierPathWithGlyphs: P0, _count: P1, _inFont: P2): R;
    appendBezierPathWithGlyph_inFont<R = void, P0 = number, P1 = unknown>(_appendBezierPathWithGlyph: P0, _inFont: P1): R;
    setCachesBezierPath<R = void, P0 = boolean>(_setCachesBezierPath: P0): R;
    cachesBezierPath<R = boolean>(): R;
    _appendBezierPathWithRoundRect_cornerRadius<R = void, P0 = CGRect, P1 = number>(__appendBezierPathWithRoundRect: P0, _cornerRadius: P1): R;
    _appendBezierPathWithBottomRoundRect_cornerRadius<R = void, P0 = CGRect, P1 = number>(__appendBezierPathWithBottomRoundRect: P0, _cornerRadius: P1): R;
    _appendBezierPathWithTopRoundRect_cornerRadius<R = void, P0 = CGRect, P1 = number>(__appendBezierPathWithTopRoundRect: P0, _cornerRadius: P1): R;
    elementCount<R = number>(): R;
    bounds<R = CGRect>(): R;
    controlPointBounds<R = CGRect>(): R;
    currentPoint<R = CGPoint>(): R;
    empty<R = boolean>(): R;
    bezierPathByReversingPath<R = NSBezierPath>(): R;
    bezierPathByFlatteningPath<R = NSBezierPath>(): R;
    flatness<R = number>(): R;
    setFlatness<R = void, P0 = number>(_v: P0): R;
    miterLimit<R = number>(): R;
    setMiterLimit<R = void, P0 = number>(_v: P0): R;
    windingRule<R = number>(): R;
    setWindingRule<R = void, P0 = number>(_v: P0): R;
    lineJoinStyle<R = number>(): R;
    setLineJoinStyle<R = void, P0 = number>(_v: P0): R;
    lineCapStyle<R = number>(): R;
    setLineCapStyle<R = void, P0 = number>(_v: P0): R;
    lineWidth<R = number>(): R;
    setLineWidth<R = void, P0 = number>(_v: P0): R;
    // + NSBezierPath(Boolean): 
    fb_xor<R = unknown, P0 = unknown>(_fb_xor: P0): R;
    fb_difference<R = unknown, P0 = unknown>(_fb_difference: P0): R;
    fb_intersect<R = unknown, P0 = unknown>(_fb_intersect: P0): R;
    fb_union<R = unknown, P0 = unknown>(_fb_union: P0): R;
    // + NSBezierPath(CHBezierPathAdditions): 
    writeDebugFileNamed<R = void, P0 = unknown>(_writeDebugFileNamed: P0): R;
    isClosed<R = boolean>(): R;
    safeBounds<R = CGRect>(): R;
    bezierPathByGrowingBy<R = unknown, P0 = number>(_bezierPathByGrowingBy: P0): R;
    drawInnerShadow<R = void, P0 = unknown>(_drawInnerShadow: P0): R;
    bezierPathWithOuterPathOfSize<R = unknown, P0 = number>(_bezierPathWithOuterPathOfSize: P0): R;
    mutableCGPathCopy<R = CGPath>(): R;
    createCGPath_bc<R = CGPath>(): R;
    outlinePath<R = unknown>(): R;
    clipInBlock<R = void, P0 = CDUnknownBlockType>(_clipInBlock: P0): R;
    strokeInside<R = void>(): R;
    strokeOutside<R = void>(): R;
    // + NSBezierPath(Clockwise): 
    subPathsOrderedBySizeAfterOutlining<R = unknown>(): R;
    direction<R = number>(): R;
    bezierPathByMakingAntiClockwiseIfNecessary<R = unknown>(): R;
    bezierPathByMakingClockwiseIfNecessary<R = unknown>(): R;
    // + NSBezierPath(DebugTools): 
    appendArrowAtPoint_ms_tangent_size_scale<R = void, P0 = CGPoint, P1 = MSLine, P2 = number, P3 = number>(_appendArrowAtPoint_ms: P0, _tangent: P1, _size: P2, _scale: P3): R;
    appendCircleAtPoint_ms_radius_scale<R = void, P0 = CGPoint, P1 = number, P2 = number>(_appendCircleAtPoint_ms: P0, _radius: P1, _scale: P2): R;
    appendSquareAtPoint_ms_size_scale<R = void, P0 = CGPoint, P1 = number, P2 = number>(_appendSquareAtPoint_ms: P0, _size: P1, _scale: P2): R;
    debugScale_ms<R = number>(): R;
    // + NSBezierPath(FBUtilities): 
    fb_appendElement<R = void, P0 = NSBezierElement>(_fb_appendElement: P0): R;
    fb_appendPath<R = void, P0 = unknown>(_fb_appendPath: P0): R;
    fb_copyAttributesFrom<R = void, P0 = unknown>(_fb_copyAttributesFrom: P0): R;
    fb_subpathWithRange<R = unknown, P0 = _NSRange>(_fb_subpathWithRange: P0): R;
    fb_elementAtIndex<R = NSBezierElement, P0 = number>(_fb_elementAtIndex: P0): R;
    fb_pointAtIndex<R = CGPoint, P0 = number>(_fb_pointAtIndex: P0): R;
    // + NSBezierPath(FitCurve): 
    fb_fitCurve<R = unknown, P0 = number>(_fb_fitCurve: P0): R;
    // + NSBezierPath(FitCurvePrivate): 
    fb_computeCenterTangentAtIndex<R = CGPoint, P0 = number>(_fb_computeCenterTangentAtIndex: P0): R;
    fb_computeRightTangentAtIndex<R = CGPoint, P0 = number>(_fb_computeRightTangentAtIndex: P0): R;
    fb_computeLeftTangentAtIndex<R = CGPoint, P0 = number>(_fb_computeLeftTangentAtIndex: P0): R;
    fb_estimateParametersUsingChordLengthMethodInRange<R = unknown, P0 = _NSRange>(_fb_estimateParametersUsingChordLengthMethodInRange: P0): R;
    fb_fitBezierInRange_withParameters_leftTangent_rightTangent<R = unknown, P0 = _NSRange, P1 = unknown, P2 = CGPoint, P3 = CGPoint>(_fb_fitBezierInRange: P0, _withParameters: P1, _leftTangent: P2, _rightTangent: P3): R;
    fb_fitBezierUsingNaiveMethodInRange_leftTangent_rightTangent<R = unknown, P0 = _NSRange, P1 = CGPoint, P2 = CGPoint>(_fb_fitBezierUsingNaiveMethodInRange: P0, _leftTangent: P1, _rightTangent: P2): R;
    fb_findMaximumErrorForBezier_inRange_parameters_maximumIndex<R = number, P0 = unknown, P1 = _NSRange, P2 = unknown, P3 = number>(_fb_findMaximumErrorForBezier: P0, _inRange: P1, _parameters: P2, _maximumIndex: P3): R;
    fb_refineParameters_forRange_bezier<R = unknown, P0 = unknown, P1 = _NSRange, P2 = unknown>(_fb_refineParameters: P0, _forRange: P1, _bezier: P2): R;
    fb_fitCubicToRange_leftTangent_rightTangent_errorThreshold<R = unknown, P0 = _NSRange, P1 = CGPoint, P2 = CGPoint, P3 = number>(_fb_fitCubicToRange: P0, _leftTangent: P1, _rightTangent: P2, _errorThreshold: P3): R;
    // + NSBezierPath(Fitting): 
    bezierPathByCurveFitting<R = unknown>(): R;
    // + NSBezierPath(GIF): 
    animatedGIFRepresentation_ms<R = unknown>(): R;
    // + NSBezierPath(JSON): 
    JSONDescription_ms<R = unknown>(): R;
    JSONRepresetation_ms<R = unknown>(): R;
    // + NSBezierPath(NSBezierPath_BooleanBridge): 
    bezierPathBySubtractingPaths<R = unknown, P0 = unknown>(_bezierPathBySubtractingPaths: P0): R;
    booleanExclusiveOrWith<R = unknown, P0 = unknown>(_booleanExclusiveOrWith: P0): R;
    booleanSubtractWith<R = unknown, P0 = unknown>(_booleanSubtractWith: P0): R;
    booleanIntersectWith<R = unknown, P0 = unknown>(_booleanIntersectWith: P0): R;
    booleanUnionWith<R = unknown, P0 = unknown>(_booleanUnionWith: P0): R;
    debugWriteBooleanOp_withPath<R = void, P0 = number, P1 = unknown>(_debugWriteBooleanOp: P0, _withPath: P1): R;
    booleanOp_withPath<R = unknown, P0 = number, P1 = unknown>(_booleanOp: P0, _withPath: P1): R;
    // + NSBezierPath(NSBezierPath_Enumerator): 
    customIsEqual<R = boolean, P0 = unknown>(_customIsEqual: P0): R;
    appendBezierPathItem<R = void, P0 = unknown>(_appendBezierPathItem: P0): R;
    lastItem<R = unknown>(): R;
    itemAtIndex<R = unknown, P0 = number>(_itemAtIndex: P0): R;
    bezierCurves<R = unknown>(): R;
    reverseEnumerator<R = unknown>(): R;
    enumerator<R = unknown>(): R;
    // + NSBezierPath(NSBezierPath_Slopes): 
    bezierPathByApplyingModifierBlock<R = unknown, P0 = CDUnknownBlockType>(_bezierPathByApplyingModifierBlock: P0): R;
    subDivideAtPoint<R = unknown, P0 = CGPoint>(_subDivideAtPoint: P0): R;
    drawDebugWithZoom<R = void, P0 = number>(_drawDebugWithZoom: P0): R;
    bezierPathBySmootheningSubPath<R = unknown, P0 = number>(_bezierPathBySmootheningSubPath: P0): R;
    pointAtIndex<R = CGPoint, P0 = number>(_pointAtIndex: P0): R;
    appendBezierPathByRemovingMoveToPoint<R = void, P0 = unknown>(_appendBezierPathByRemovingMoveToPoint: P0): R;
    isEqualToBezierPath<R = boolean, P0 = unknown>(_isEqualToBezierPath: P0): R;
    lengthWithMaximumError<R = number, P0 = number>(_lengthWithMaximumError: P0): R;
    length<R = number>(): R;
    bezierPathByTrimmingToLength_withMaximumError<R = unknown, P0 = number, P1 = number>(_bezierPathByTrimmingToLength: P0, _withMaximumError: P1): R;
    bezierPathByTrimmingToLength<R = unknown, P0 = number>(_bezierPathByTrimmingToLength: P0): R;
    bezierPathFromIndex_toIndex<R = unknown, P0 = number, P1 = number>(_bezierPathFromIndex: P0, _toIndex: P1): R;
    bezierPathByTrimmingFromLength_withMaximumError<R = unknown, P0 = number, P1 = number>(_bezierPathByTrimmingFromLength: P0, _withMaximumError: P1): R;
    bezierPathByTrimmingFromLength<R = unknown, P0 = number>(_bezierPathByTrimmingFromLength: P0): R;
    pointOnPathAtLength_slope<R = CGPoint, P0 = number, P1 = number>(_pointOnPathAtLength: P0, _slope: P1): R;
    pointOnPathAtLength<R = CGPoint, P0 = number>(_pointOnPathAtLength: P0): R;
    slopeOnPathAtLength<R = number, P0 = number>(_slopeOnPathAtLength: P0): R;
    firstPoint<R = CGPoint>(): R;
    lastPoint<R = CGPoint>(): R;
    // + NSBezierPath(NSBezierPath_Various): 
    setDashPattern<R = void, P0 = unknown>(_setDashPattern: P0): R;
    clampDashPattern_count<R = void, P0 = number, P1 = number>(_clampDashPattern: P0, _count: P1): R;
    strokeWithWidth<R = void, P0 = number>(_strokeWithWidth: P0): R;
    fillNonZero<R = void>(): R;
    fillEvenOdd<R = void>(): R;
    bezierPathWithSquareLineCapStyle<R = unknown>(): R;
    bezierPathWithLineWidth<R = unknown, P0 = number>(_bezierPathWithLineWidth: P0): R;
    outerPathWithRect<R = unknown, P0 = CGRect>(_outerPathWithRect: P0): R;
    insetPathBy<R = unknown, P0 = number>(_insetPathBy: P0): R;
    outlinePathWithWidth_containsPoint<R = boolean, P0 = number, P1 = CGPoint>(_outlinePathWithWidth: P0, _containsPoint: P1): R;
    outlinePathWithWidth<R = unknown, P0 = number>(_outlinePathWithWidth: P0): R;
    containsRect<R = boolean, P0 = CGRect>(_containsRect: P0): R;
    debugWriteToFileNamed<R = void, P0 = unknown>(_debugWriteToFileNamed: P0): R;
    simplifyWithMargin<R = unknown, P0 = number>(_simplifyWithMargin: P0): R;
    simplify<R = unknown>(): R;
    subPaths<R = unknown>(): R;
    scaleBy<R = unknown, P0 = number>(_scaleBy: P0): R;
    // + NSBezierPath(NaNChecks): 
    bc_nan_curveToPoint_controlPoint1_controlPoint2<R = void, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint>(_bc_nan_curveToPoint: P0, _controlPoint1: P1, _controlPoint2: P2): R;
    bc_nan_lineToPoint<R = void, P0 = CGPoint>(_bc_nan_lineToPoint: P0): R;
    bc_nan_moveToPoint<R = void, P0 = CGPoint>(_bc_nan_moveToPoint: P0): R;
    // + NSBezierPath(SVGBezierPath): 
    svgPathAttribute<R = unknown>(): R;
    addSVGArcWithAngle_radius_from_to_largeArc_sweep<R = void, P0 = number, P1 = CGSize, P2 = CGPoint, P3 = CGPoint, P4 = boolean, P5 = boolean>(_addSVGArcWithAngle: P0, _radius: P1, _from: P2, _to: P3, _largeArc: P4, _sweep: P5): R;
    // + NSBezierPath(Simplify): 
    fb_simplify<R = unknown, P0 = number>(_fb_simplify: P0): R;
  }
  namespace NSBezierPath {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSBezierPath>(): R;
      new: <R = NSBezierPath>() => R;
      defaultLineWidth<R = number>(): R;
      setDefaultLineWidth<R = void, P0 = number>(_setDefaultLineWidth: P0): R;
      defaultLineJoinStyle<R = number>(): R;
      setDefaultLineJoinStyle<R = void, P0 = number>(_setDefaultLineJoinStyle: P0): R;
      defaultLineCapStyle<R = number>(): R;
      setDefaultLineCapStyle<R = void, P0 = number>(_setDefaultLineCapStyle: P0): R;
      defaultWindingRule<R = number>(): R;
      setDefaultWindingRule<R = void, P0 = number>(_setDefaultWindingRule: P0): R;
      defaultFlatness<R = number>(): R;
      setDefaultFlatness<R = void, P0 = number>(_setDefaultFlatness: P0): R;
      defaultMiterLimit<R = number>(): R;
      setDefaultMiterLimit<R = void, P0 = number>(_setDefaultMiterLimit: P0): R;
      drawPackedGlyphs_atPoint<R = void, P0 = string, P1 = CGPoint>(_drawPackedGlyphs: P0, _atPoint: P1): R;
      strokeLineFromPoint_toPoint<R = void, P0 = CGPoint, P1 = CGPoint>(_strokeLineFromPoint: P0, _toPoint: P1): R;
      clipRect<R = void, P0 = CGRect>(_clipRect: P0): R;
      strokeRect<R = void, P0 = CGRect>(_strokeRect: P0): R;
      fillRect<R = void, P0 = CGRect>(_fillRect: P0): R;
      bezierPathWithRoundedRect_xRadius_yRadius<R = unknown, P0 = CGRect, P1 = number, P2 = number>(_bezierPathWithRoundedRect: P0, _xRadius: P1, _yRadius: P2): R;
      bezierPathWithOvalInRect<R = unknown, P0 = CGRect>(_bezierPathWithOvalInRect: P0): R;
      bezierPathWithRect<R = unknown, P0 = CGRect>(_bezierPathWithRect: P0): R;
      bezierPath<R = unknown>(): R;
      initialize<R = void>(): R;
      lineWidth<R = number>(): R;
      setLineWidth<R = void, P0 = number>(_setLineWidth: P0): R;
      lineJoinStyle<R = number>(): R;
      setLineJoinStyle<R = void, P0 = number>(_setLineJoinStyle: P0): R;
      lineCapStyle<R = number>(): R;
      setLineCapStyle<R = void, P0 = number>(_setLineCapStyle: P0): R;
      windingRule<R = number>(): R;
      setWindingRule<R = void, P0 = number>(_setWindingRule: P0): R;
      flatness<R = number>(): R;
      setFlatness<R = void, P0 = number>(_setFlatness: P0): R;
      miterLimit<R = number>(): R;
      setMiterLimit<R = void, P0 = number>(_setMiterLimit: P0): R;
      // + NSBezierPath(CHBezierPathAdditions): 
      bezierCurveFromPoint_toPoint_controlPoint1_controlPoint2<R = unknown, P0 = CGPoint, P1 = CGPoint, P2 = CGPoint, P3 = CGPoint>(_bezierCurveFromPoint: P0, _toPoint: P1, _controlPoint1: P2, _controlPoint2: P3): R;
      bezierPathFromPoint_toPoint<R = unknown, P0 = CGPoint, P1 = CGPoint>(_bezierPathFromPoint: P0, _toPoint: P1): R;
      bezierPathWithCGPath_bc<R = unknown, P0 = CGPath>(_bezierPathWithCGPath_bc: P0): R;
      // + NSBezierPath(EPS): 
      bezierPathFromEPSString<R = unknown, P0 = unknown>(_bezierPathFromEPSString: P0): R;
      epsStringByTrimmingHeaderAndFooter<R = unknown, P0 = unknown>(_epsStringByTrimmingHeaderAndFooter: P0): R;
      // + NSBezierPath(JSON): 
      bezierPathWithJSONString_ms<R = unknown, P0 = unknown>(_bezierPathWithJSONString_ms: P0): R;
      bezierPathWithJSON_ms<R = unknown, P0 = unknown>(_bezierPathWithJSON_ms: P0): R;
      // + NSBezierPath(MSPath): 
      bezierPathWithPath<R = unknown, P0 = unknown>(_bezierPathWithPath: P0): R;
      // + NSBezierPath(NSBezierPath_Various): 
      impliedDashPatternFromDashPattern_paddingToLength<R = unknown, P0 = unknown, P1 = number>(_impliedDashPatternFromDashPattern: P0, _paddingToLength: P1): R;
      validDashPatternFromProposedDashPattern_padIfNeeded<R = unknown, P0 = unknown, P1 = boolean>(_validDashPatternFromProposedDashPattern: P0, _padIfNeeded: P1): R;
      validDashLengthFromProposedDashLength<R = number, P0 = number>(_validDashLengthFromProposedDashLength: P0): R;
      validGapLengthFromProposedGapLength<R = number, P0 = number>(_validGapLengthFromProposedGapLength: P0): R;
      bezierPathWithSubPaths<R = unknown, P0 = unknown>(_bezierPathWithSubPaths: P0): R;
      // + NSBezierPath(NaNChecks): 
      nanSafeSwizzleSelector_overrideSelector<R = void, P0 = string, P1 = string>(_nanSafeSwizzleSelector: P0, _overrideSelector: P1): R;
      load<R = void>(): R;
      // + NSBezierPath(SVGBezierPath): 
      bezierPathFromSVGString<R = unknown, P0 = unknown>(_bezierPathFromSVGString: P0): R;
    }
  }
}

declare const NSBezierPath: cocoa.NSBezierPath.CLASS;
