/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    childrenIncludingSelf<R = NSArray, P0 = boolean>(_childrenIncludingSelf: P0): R;
    children<R = NSArray>(): R;
    layerWithID<R = unknown, P0 = NSString>(_layerWithID: P0): R;
    transformForRect<R = NSAffineTransform, P0 = CGRect>(_transformForRect: P0): R;
    isLayerExportable<R = boolean>(): R;
    origin<R = CGPoint>(): R;
    influenceRectEdgePaddingsThatCascadeToContainedLayers<R = BCEdgePaddings>(): R;
    CGTransformForFrame<R = CGAffineTransform>(): R;
    hasTransforms<R = boolean>(): R;
    bounds<R = CGRect>(): R;
    rect<R = CGRect>(): R;
    objectID<R = NSString>(): R;
    rotation<R = number>(): R;
    isFlippedVertical<R = boolean>(): R;
    isFlippedHorizontal<R = boolean>(): R;
    isVisible<R = boolean>(): R;
  }
  namespace MSLayerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
