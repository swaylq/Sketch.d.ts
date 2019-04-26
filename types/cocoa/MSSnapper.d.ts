/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSnapper<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    snappableAnchorsOfItems_exceptLayers<R = unknown, P0 = unknown, P1 = unknown>(_snappableAnchorsOfItems: P0, _exceptLayers: P1): R;
    snapToLines_axis_adjustableAxes_mayResize_originalRect<R = void, P0 = unknown, P1 = number, P2 = number, P3 = boolean, P4 = CGRect>(_snapToLines: P0, _axis: P1, _adjustableAxes: P2, _mayResize: P3, _originalRect: P4): R;
    snapToLines_adjustableAxes_mayResize<R = void, P0 = unknown, P1 = number, P2 = boolean>(_snapToLines: P0, _adjustableAxes: P1, _mayResize: P2): R;
    changeItemToRect_usingAnchor_forLine_adjustableAxes<R = void, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = number>(_changeItemToRect: P0, _usingAnchor: P1, _forLine: P2, _adjustableAxes: P3): R;
    snapEdgesForAxes_mayResize<R = void, P0 = number, P1 = boolean>(_snapEdgesForAxes: P0, _mayResize: P1): R;
    snapDuringSession<R = unknown, P0 = unknown>(_snapDuringSession: P0): R;
    snapSizeOnAxis_snap_edges<R = void, P0 = number, P1 = number, P2 = number>(_snapSizeOnAxis: P0, _snap: P1, _edges: P2): R;
    collectSnapsForItem_withLayer_onAxis_snap<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_collectSnapsForItem: P0, _withLayer: P1, _onAxis: P2, _snap: P3): R;
    snapSize_edges<R = number, P0 = number, P1 = number>(_snapSize: P0, _edges: P1): R;
    rectBySnappingRect_toClosestDistance_inDirection_mayResize<R = CGRect, P0 = CGRect, P1 = CGRect, P2 = number, P3 = boolean>(_rectBySnappingRect: P0, _toClosestDistance: P1, _inDirection: P2, _mayResize: P3): R;
    findClosestDistanceMatchForItem_againstLayers_direction<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_findClosestDistanceMatchForItem: P0, _againstLayers: P1, _direction: P2): R;
    snapAgainstLayers_alongAxis_mayResize<R = void, P0 = unknown, P1 = number, P2 = boolean>(_snapAgainstLayers: P0, _alongAxis: P1, _mayResize: P2): R;
    snapSpacingOnAxis_mayResize<R = void, P0 = number, P1 = boolean>(_snapSpacingOnAxis: P0, _mayResize: P1): R;
    snapSpacingOnEdges_mayResize<R = number, P0 = number, P1 = boolean>(_snapSpacingOnEdges: P0, _mayResize: P1): R;
    snapperData<R = MSSnapperData>(): R;
    setSnapperData<R = void, P0 = MSSnapperData>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSSnapper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSSnapper>(): R;
      new: <R = MSSnapper>() => R;
    }
  }
}

declare const MSSnapper: cocoa.MSSnapper.CLASS;
