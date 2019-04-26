/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayoutPosition<T0 = void, T1 = void, T2 = void> extends MSLayoutAnchor {
    rectBySnappingToPosition_oldFrame_mayResize<R = CGRect, P0 = number, P1 = CGRect, P2 = boolean>(_rectBySnappingToPosition: P0, _oldFrame: P1, _mayResize: P2): R;
    snappingTargetInCoordinateSpace<R = unknown, P0 = unknown>(_snappingTargetInCoordinateSpace: P0): R;
    positionInLayer<R = number, P0 = unknown>(_positionInLayer: P0): R;
    axis<R = number>(): R;
    snapTag<R = number>(): R;
    setSnapTag<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSLayoutPosition {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSLayoutAnchor {
      alloc<R = MSLayoutPosition>(): R;
      new: <R = MSLayoutPosition>() => R;
      positionAnchorWithLine_inLayer_attribute<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_positionAnchorWithLine: P0, _inLayer: P1, _attribute: P2): R;
    }
  }
}

declare const MSLayoutPosition: cocoa.MSLayoutPosition.CLASS;
