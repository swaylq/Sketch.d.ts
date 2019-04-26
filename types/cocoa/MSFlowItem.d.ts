/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowItem<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    flowSegmentForZoomLevel<R = unknown, P0 = number>(_flowSegmentForZoomLevel: P0): R;
    endPointDisplacement<R = CGVector>(): R;
    endPoint<R = CGPoint>(): R;
    initWithFlowInfo_flowInfluencingLayerIDs_clipToRects_sourceLayerBounds<R = unknown, P0 = MSFlowInfo, P1 = unknown, P2 = unknown, P3 = CGRect>(_initWithFlowInfo: P0, _flowInfluencingLayerIDs: P1, _clipToRects: P2, _sourceLayerBounds: P3): R;
    clipRects<R = NSSet>(): R;
    flowInfo<R = MSFlowInfo>(): R;
    sourceLayerBounds<R = CGRect>(): R;
    flowInfluencingLayerIDs<R = NSSet>(): R;
    flowType<R = number>(): R;
    startPoint<R = CGPoint>(): R;
    shouldDrawSourceLineAndTip<R = boolean>(): R;
    shouldDrawSourceLayerBounds<R = boolean>(): R;
  }
  namespace MSFlowItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFlowItem>(): R;
      new: <R = MSFlowItem>() => R;
    }
  }
}

declare const MSFlowItem: cocoa.MSFlowItem.CLASS;
