/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSnappingInfo<T0 = void, T1 = void, T2 = void> extends NSObject {
    currentVelocity<R = CGPoint>(): R;
    lastSnappedRect<R = CGRect>(): R;
    snappedEdges<R = number>(): R;
    sizeSnapRectForFrame_snappedEdges<R = CGRect, P0 = CGRect, P1 = number>(_sizeSnapRectForFrame: P0, _snappedEdges: P1): R;
    snapFrame_forResizingWithNewFramePointer_rectEdge<R = void, P0 = CGRect, P1 = CGRect, P2 = number>(_snapFrame: P0, _forResizingWithNewFramePointer: P1, _rectEdge: P2): R;
    snapOriginWithFrame_newFramePointer<R = void, P0 = CGRect, P1 = CGRect>(_snapOriginWithFrame: P0, _newFramePointer: P1): R;
    resetMovement<R = void>(): R;
    addMovementWithMouseLocation_timestamp<R = void, P0 = CGPoint, P1 = number>(_addMovementWithMouseLocation: P0, _timestamp: P1): R;
    dealloc<R = void>(): R;
    initWithWindowNumber<R = unknown, P0 = number>(_initWithWindowNumber: P0): R;
    CGSnappingInfo<R = CGSnappingInfo>(): R;
  }
  namespace NSSnappingInfo {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSSnappingInfo>(): R;
      new: <R = NSSnappingInfo>() => R;
      snappingInfoWithWindowNumber<R = unknown, P0 = number>(_snappingInfoWithWindowNumber: P0): R;
    }
  }
}

declare const NSSnappingInfo: cocoa.NSSnappingInfo.CLASS;
