/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSVectorHandleStateDecider<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    debugDescription<R = unknown>(): R;
    indexPathOfHandleAtPoint_tolerance<R = unknown, P0 = CGPoint, P1 = number>(_indexPathOfHandleAtPoint: P0, _tolerance: P1): R;
    stateOfCurvePointAtIndexPath_curveToState_curveFromState<R = number, P0 = unknown, P1 = number, P2 = number>(_stateOfCurvePointAtIndexPath: P0, _curveToState: P1, _curveFromState: P2): R;
    isCurveAdjustmentHandleVisibleDueToHighlightedHandle<R = boolean, P0 = unknown>(_isCurveAdjustmentHandleVisibleDueToHighlightedHandle: P0): R;
    isCurveAdjustmentHandleVisibleDueToSelectedHandles<R = boolean, P0 = unknown>(_isCurveAdjustmentHandleVisibleDueToSelectedHandles: P0): R;
    isHandleAtIndexPath_relevantToSegmentAtIndexPath<R = boolean, P0 = unknown, P1 = unknown>(_isHandleAtIndexPath: P0, _relevantToSegmentAtIndexPath: P1): R;
    isHandleAtIndexPathVisible<R = boolean, P0 = unknown>(_isHandleAtIndexPathVisible: P0): R;
    indexPathOfPointAfterIndexPath<R = unknown, P0 = unknown>(_indexPathOfPointAfterIndexPath: P0): R;
    indexPathOfPointBeforeIndexPath<R = unknown, P0 = unknown>(_indexPathOfPointBeforeIndexPath: P0): R;
    isCurvePointAtIndexPathSelected<R = boolean, P0 = unknown>(_isCurvePointAtIndexPathSelected: P0): R;
    highlightedOrSelectedStateForHandleAtIndexPath<R = number, P0 = unknown>(_highlightedOrSelectedStateForHandleAtIndexPath: P0): R;
    isHandleAtIndexPathSelected<R = boolean, P0 = unknown>(_isHandleAtIndexPathSelected: P0): R;
    reset<R = void>(): R;
    indexPathForHighlightedComponent<R = NSIndexPath>(): R;
    setIndexPathForHighlightedComponent<R = void, P0 = NSIndexPath>(_v: P0): R;
    selectionContext<R = MSShapeChangeContext>(): R;
    setSelectionContext<R = void, P0 = MSShapeChangeContext>(_v: P0): R;
    visibilityAroundHighlight<R = number>(): R;
    setVisibilityAroundHighlight<R = void, P0 = number>(_v: P0): R;
    visibilityAroundSelectedHandles<R = number>(): R;
    setVisibilityAroundSelectedHandles<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSVectorHandleStateDecider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSVectorHandleStateDecider>(): R;
      new: <R = MSVectorHandleStateDecider>() => R;
    }
  }
}

declare const MSVectorHandleStateDecider: cocoa.MSVectorHandleStateDecider.CLASS;
