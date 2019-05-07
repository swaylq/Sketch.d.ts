/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentEngine<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    roundPoint<R = CGPoint, P0 = CGPoint>(_roundPoint: P0): R;
    applyDelegateAlignment_snappedAxes<R = CGPoint, P0 = CGPoint, P1 = number>(_applyDelegateAlignment: P0, _snappedAxes: P1): R;
    extendGuide_toIncludePoint<R = BCLineSegment, P0 = BCLineSegment, P1 = CGPoint>(_extendGuide: P0, _toIncludePoint: P1): R;
    makeGuideFromAlignedTarget_point<R = unknown, P0 = unknown, P1 = CGPoint>(_makeGuideFromAlignedTarget: P0, _point: P1): R;
    addTargetAtPoint<R = void, P0 = CGPoint>(_addTargetAtPoint: P0): R;
    addTargetsForRect_includeCenter<R = void, P0 = CGRect, P1 = boolean>(_addTargetsForRect: P0, _includeCenter: P1): R;
    addOrthogonalTargetsThroughPoint<R = void, P0 = CGPoint>(_addOrthogonalTargetsThroughPoint: P0): R;
    addTargetWithLineSegment<R = void, P0 = BCLineSegment>(_addTargetWithLineSegment: P0): R;
    addTargets<R = void, P0 = unknown>(_addTargets: P0): R;
    addTarget<R = void, P0 = unknown>(_addTarget: P0): R;
    beginCycleWithPoint_constraint<R = unknown, P0 = CGPoint, P1 = unknown>(_beginCycleWithPoint: P0, _constraint: P1): R;
    canSnapOnAxis<R = boolean, P0 = number>(_canSnapOnAxis: P0): R;
    initWithCycle<R = unknown, P0 = unknown>(_initWithCycle: P0): R;
    includeRulerGuideTargetsForPage_zoomScale<R = void, P0 = unknown, P1 = number>(_includeRulerGuideTargetsForPage: P0, _zoomScale: P1): R;
    delegate<R = MSAlignmentEngineDelegate>(): R;
    setDelegate<R = void, P0 = MSAlignmentEngineDelegate>(_v: P0): R;
    currentCycle<R = _TtC17SketchControllers22MSAlignmentEngineCycle>(): R;
    constraint<R = MSAlignmentEngineConstraint>(): R;
    snapDistance<R = number>(): R;
    setSnapDistance<R = void, P0 = number>(_v: P0): R;
    alignmentResult<R = MSAlignmentEngineResult>(): R;
  }
  namespace MSAlignmentEngine {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSAlignmentEngine>(): R;
      new: <R = MSAlignmentEngine>() => R;
      enumeratorForPossibleSnapTargetLayersInGroup<R = unknown, P0 = unknown>(_enumeratorForPossibleSnapTargetLayersInGroup: P0): R;
      snapTargetsForCentersOfLayers<R = unknown, P0 = unknown>(_snapTargetsForCentersOfLayers: P0): R;
    }
  }
}

declare const MSAlignmentEngine: cocoa.MSAlignmentEngine.CLASS;
