/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSnappableProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    textCorrectionTransform<R = CGAffineTransform>(): R;
    concatAncestorsAndSelfTransforms<R = void>(): R;
    shouldDrawDistanceOnSnapTo<R = boolean, P0 = MSSnappable>(_shouldDrawDistanceOnSnapTo: P0): R;
    distanceRectangleToItem_axis<R = CGRect, P0 = MSSnappable, P1 = number>(_distanceRectangleToItem: P0, _axis: P1): R;
    anchorsForSnappingOnAxes<R = NSArray, P0 = number>(_anchorsForSnappingOnAxes: P0): R;
    enumerateAnchorsForSnappingOnAxes_includingCenter_usingBlock<R = void, P0 = number, P1 = boolean, P2 = CDUnknownBlockType>(_enumerateAnchorsForSnappingOnAxes: P0, _includingCenter: P1, _usingBlock: P2): R;
    alignmentRectInCoordinateSpace_options<R = CGRect, P0 = MSLayerCoordinateSpace, P1 = number>(_alignmentRectInCoordinateSpace: P0, _options: P1): R;
    boundsRect<R = CGRect>(): R;
    name<R = NSString>(): R;
    snapItemForDrawing<R = MSSnappable>(): R;
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
    coordinateSpace<R = MSLayer>(): R;
    rectForSnapping<R = CGRect>(): R;
  }
  namespace MSSnappableProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
