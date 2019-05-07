/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentEngineDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    alignmentEngine_roundPoint<R = CGPoint, P0 = MSAlignmentEngine, P1 = CGPoint>(_alignmentEngine: P0, _roundPoint: P1): R;
    alignmentEngine_alignPoint<R = CGPoint, P0 = MSAlignmentEngine, P1 = CGPoint>(_alignmentEngine: P0, _alignPoint: P1): R;
  }
  namespace MSAlignmentEngineDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
