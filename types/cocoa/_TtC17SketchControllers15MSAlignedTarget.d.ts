/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _TtC17SketchControllers15MSAlignedTarget<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = CDUnknownBlockType>(): R;
    initWithLine_priority_guideInfo<R = unknown, P0 = MSLine, P1 = number, P2 = unknown>(_initWithLine: P0, _priority: P1, _guideInfo: P2): R;
    guideInfo<R = NSArray>(): R;
    line<R = MSLine>(): R;
  }
  namespace _TtC17SketchControllers15MSAlignedTarget {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _TtC17SketchControllers15MSAlignedTarget>(): R;
      new: <R = _TtC17SketchControllers15MSAlignedTarget>() => R;
    }
  }
}
