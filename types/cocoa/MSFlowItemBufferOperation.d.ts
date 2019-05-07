/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlowItemBufferOperation<T0 = void, T1 = void, T2 = void> extends NSOperation {
    cxx_destruct<R = void>(): R;
    segmentsByClippingSegment_toRects<R = unknown, P0 = unknown, P1 = unknown>(_segmentsByClippingSegment: P0, _toRects: P1): R;
    initWithFlowItem_clipToArtboards_zoomLevel<R = unknown, P0 = unknown, P1 = boolean, P2 = number>(_initWithFlowItem: P0, _clipToArtboards: P1, _zoomLevel: P2): R;
    buffer<R = MSArcVertexBuffer>(): R;
    zoomLevel<R = number>(): R;
    clipToArtboards<R = boolean>(): R;
    item<R = MSFlowItem>(): R;
  }
  namespace MSFlowItemBufferOperation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOperation {
      alloc<R = MSFlowItemBufferOperation>(): R;
      new: <R = MSFlowItemBufferOperation>() => R;
    }
  }
}

declare const MSFlowItemBufferOperation: cocoa.MSFlowItemBufferOperation.CLASS;
