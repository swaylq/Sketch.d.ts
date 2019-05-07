/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSnapItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    textCorrectionTransform<R = CGAffineTransform>(): R;
    concatAncestorsAndSelfTransforms<R = void>(): R;
    shouldDrawDistanceOnSnapTo<R = boolean, P0 = unknown>(_shouldDrawDistanceOnSnapTo: P0): R;
    distanceRectangleToItem_axis<R = CGRect, P0 = unknown, P1 = number>(_distanceRectangleToItem: P0, _axis: P1): R;
    alignmentRectInCoordinateSpace_options<R = CGRect, P0 = unknown, P1 = number>(_alignmentRectInCoordinateSpace: P0, _options: P1): R;
    boundsRect<R = CGRect>(): R;
    rotation<R = number>(): R;
    artboardForSnapping<R = unknown>(): R;
    rect_isOnLineWithRect_inDirection<R = boolean, P0 = CGRect, P1 = CGRect, P2 = number>(_rect: P0, _isOnLineWithRect: P1, _inDirection: P2): R;
    candidateLayersForSnappingSpacingAlongAxis_order<R = unknown, P0 = number, P1 = number>(_candidateLayersForSnappingSpacingAlongAxis: P0, _order: P1): R;
    candidateLayersForSnapping<R = unknown, P0 = number>(_candidateLayersForSnapping: P0): R;
    anchorsForSnappingOnAxes<R = unknown, P0 = number>(_anchorsForSnappingOnAxes: P0): R;
    enumerateAnchorsForSnappingOnAxes_includingCenter_usingBlock<R = void, P0 = number, P1 = boolean, P2 = CDUnknownBlockType>(_enumerateAnchorsForSnappingOnAxes: P0, _includingCenter: P1, _usingBlock: P2): R;
    snapInBlock<R = void, P0 = CDUnknownBlockType>(_snapInBlock: P0): R;
    initWithLayers<R = unknown, P0 = unknown>(_initWithLayers: P0): R;
    rectAtInit<R = CGRect>(): R;
    setRectAtInit<R = void, P0 = CGRect>(_v: P0): R;
    layers<R = NSArray>(): R;
    description<R = NSString>(): R;
    name<R = NSString>(): R;
    snapItemForDrawing<R = MSSnappable>(): R;
    coordinateSpace<R = MSLayer>(): R;
    rectForSnapping<R = CGRect>(): R;
    setRectForSnapping<R = void, P0 = CGRect>(_v: P0): R;
    shouldConstrainProportions<R = boolean>(): R;
    supportsResizingForSnapping<R = boolean>(): R;
    layer<R = MSLayer>(): R;
    midXHeightAnchor<R = MSLayoutPosition>(): R;
    baselineAnchor<R = MSLayoutPosition>(): R;
    heightAnchor<R = MSLayoutDimension>(): R;
    widthAnchor<R = MSLayoutDimension>(): R;
    centerYAnchor<R = MSLayoutPosition>(): R;
    centerXAnchor<R = MSLayoutPosition>(): R;
    bottomAnchor<R = MSLayoutPosition>(): R;
    topAnchor<R = MSLayoutPosition>(): R;
    rightAnchor<R = MSLayoutPosition>(): R;
    leftAnchor<R = MSLayoutPosition>(): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSnapItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSSnapItem>(): R;
      new: <R = MSSnapItem>() => R;
      candidateSpacingsBetweenLayers_alongAxis<R = unknown, P0 = unknown, P1 = number>(_candidateSpacingsBetweenLayers: P0, _alongAxis: P1): R;
      snapItemWithLayers<R = unknown, P0 = unknown>(_snapItemWithLayers: P0): R;
    }
  }
}

declare const MSSnapItem: cocoa.MSSnapItem.CLASS;
