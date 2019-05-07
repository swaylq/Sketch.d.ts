/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDragHandleGestureRecognizer<T0 = void, T1 = void, T2 = void> extends MSDragToMoveOrCopyGestureRecognizer {
    lockingConstraint<R = MSAlignmentEngineConstraint>(): R;
    setLockingConstraint<R = void, P0 = MSAlignmentEngineConstraint>(_v: P0): R;
    originalHandleLocation<R = CGPoint>(): R;
    setOriginalHandleLocation<R = void, P0 = CGPoint>(_v: P0): R;
    effectiveLockingConstraint<R = MSAlignmentEngineConstraint>(): R;
  }
  namespace MSDragHandleGestureRecognizer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDragToMoveOrCopyGestureRecognizer {
      alloc<R = MSDragHandleGestureRecognizer>(): R;
      new: <R = MSDragHandleGestureRecognizer>() => R;
    }
  }
}

declare const MSDragHandleGestureRecognizer: cocoa.MSDragHandleGestureRecognizer.CLASS;
