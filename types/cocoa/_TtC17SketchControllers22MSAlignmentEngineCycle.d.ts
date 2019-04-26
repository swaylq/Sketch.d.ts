/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers22MSAlignmentEngineCycle<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    finishCycle<R = unknown>(): R;
    addTargetAtPoint_guideInfo<R = void, P0 = CGPoint, P1 = unknown>(_addTargetAtPoint: P0, _guideInfo: P1): R;
    addAxisAlignedTargetsWithThrough<R = void, P0 = CGPoint>(_addAxisAlignedTargetsWithThrough: P0): R;
    addTargetWithLine_guideInfo<R = void, P0 = BCLine, P1 = unknown>(_addTargetWithLine: P0, _guideInfo: P1): R;
    addTargetWithLine_infoProvider<R = void, P0 = BCLine, P1 = CDUnknownBlockType>(_addTargetWithLine: P0, _infoProvider: P1): R;
    initWithPoint_snapDistance_constraint<R = unknown, P0 = CGPoint, P1 = number, P2 = BCLine>(_initWithPoint: P0, _snapDistance: P1, _constraint: P2): R;
    initWithPoint_snapDistance<R = unknown, P0 = CGPoint, P1 = number>(_initWithPoint: P0, _snapDistance: P1): R;
    snapDistance<R = number>(): R;
    defaultPoint<R = CGPoint>(): R;
    // + _TtC17SketchControllers22MSAlignmentEngineCycle(SketchControllers): 
    debugQuickLookObject<R = unknown>(): R;
  }
  namespace _TtC17SketchControllers22MSAlignmentEngineCycle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _TtC17SketchControllers22MSAlignmentEngineCycle>(): R;
      new: <R = _TtC17SketchControllers22MSAlignmentEngineCycle>() => R;
  
  }
  }
}
