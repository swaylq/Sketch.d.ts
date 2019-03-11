/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGradient<T = any> extends cocoa._MSGradient, cocoa.MSAssetProtocol {
    hasOpacity<R = boolean>(): R;
    setGradientType<R = void, P0 = number>(_setGradientType: P0): R;
    convertPointToPosition<R = number, P0 = cocoa.CGPoint>(_convertPointToPosition: P0): R;
    _removeStopAtIndex<R = void, P0 = number>(__removeStopAtIndex: P0): R;
    removeStopAtIndex<R = void, P0 = number>(_removeStopAtIndex: P0): R;
    addStopAtLength<R = number, P0 = number>(_addStopAtLength: P0): R;
    addStopAtPosition<R = number, P0 = cocoa.CGPoint>(_addStopAtPosition: P0): R;
    setColor_atIndex<R = void, P0 = unknown, P1 = number>(_setColor: P0, _atIndex: P1): R;
    colorAtIndex<R = unknown, P0 = number>(_colorAtIndex: P0): R;
    stopAtIndex<R = unknown, P0 = number>(_stopAtIndex: P0): R;
    setPoint_atIndex<R = void, P0 = cocoa.CGPoint, P1 = number>(_setPoint: P0, _atIndex: P1): R;
    pointAtIndex<R = cocoa.CGPoint, P0 = number>(_pointAtIndex: P0): R;
    conditionedEllipseLength<R = number>(): R;
    rotatePointsBy<R = void, P0 = number>(_rotatePointsBy: P0): R;
    invert<R = void>(): R;
    NSGradientWithColorSpace<R = unknown, P0 = unknown>(_NSGradientWithColorSpace: P0): R;
    defaultStopsArray<R = unknown>(): R;
    initWithNSGradient<R = unknown, P0 = unknown>(_initWithNSGradient: P0): R;
    initBlankGradient<R = unknown>(): R;
    hasAlphaStop<R = boolean>(): R;
    indexInPoints_closestToPoint<R = number, P0 = cocoa.CGPoint, P1 = cocoa.CGPoint>(_indexInPoints: P0, _closestToPoint: P1): R;
    CSSColorStopsStringWithMasterAlpha<R = unknown, P0 = number>(_CSSColorStopsStringWithMasterAlpha: P0): R;
    radialCSSGradientStringWithMasterAlpha<R = unknown, P0 = number>(_radialCSSGradientStringWithMasterAlpha: P0): R;
    linearCSSGradientStringWithMasterAlpha<R = unknown, P0 = number>(_linearCSSGradientStringWithMasterAlpha: P0): R;
    gradientStringWithMasterAlpha<R = unknown, P0 = number>(_gradientStringWithMasterAlpha: P0): R;
    CSSAttributeStringWithMasterAlpha<R = unknown, P0 = number>(_CSSAttributeStringWithMasterAlpha: P0): R;
    svgPositionIsAbsolute<R = boolean>(): R;
    setSvgPositionIsAbsolute<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    description<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface MSGradient<T = any> extends cocoa.classes._MSGradient, cocoa.classes.MSAssetProtocol {
      alloc<R = MSGradient>(): R;
      new: <R = MSGradient>() => R;
    }
  }
}

declare const MSGradient: cocoa.classes.MSGradient;
