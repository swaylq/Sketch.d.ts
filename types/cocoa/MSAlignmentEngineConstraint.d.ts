/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignmentEngineConstraint<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    description<R = unknown>(): R;
    initWithPoint_line<R = unknown, P0 = CGPoint, P1 = BCLine>(_initWithPoint: P0, _line: P1): R;
    line<R = BCLine>(): R;
    sourcePoint<R = CGPoint>(): R;
  }
  namespace MSAlignmentEngineConstraint {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = MSAlignmentEngineConstraint>(): R;
      new: <R = MSAlignmentEngineConstraint>() => R;
      axisAlignedOrDiagonalConstraintFromPoint_toPoint<R = unknown, P0 = CGPoint, P1 = CGPoint>(_axisAlignedOrDiagonalConstraintFromPoint: P0, _toPoint: P1): R;
      constraintWithSourcePoint_toPoint<R = unknown, P0 = CGPoint, P1 = CGPoint>(_constraintWithSourcePoint: P0, _toPoint: P1): R;
    }
  }
}

declare const MSAlignmentEngineConstraint: cocoa.MSAlignmentEngineConstraint.CLASS;
