/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSVisualizedConstraintsView<T0 = void, T1 = void, T2 = void> extends NSView {
    isFlipped<R = boolean>(): R;
    showMoreInfo<R = void, P0 = unknown>(_showMoreInfo: P0): R;
    exerciseAmbiguity<R = void, P0 = unknown>(_exerciseAmbiguity: P0): R;
    logConstraintsNotVisualized<R = void, P0 = unknown>(_logConstraintsNotVisualized: P0): R;
    initWithTargetWindow<R = unknown, P0 = unknown>(_initWithTargetWindow: P0): R;
    foregroundWindow<R = NSWindow>(): R;
    setForegroundWindow<R = void, P0 = NSWindow>(_v: P0): R;
    targetWindow<R = NSWindow>(): R;
    setTargetWindow<R = void, P0 = NSWindow>(_v: P0): R;
    backgroundWindow<R = NSWindow>(): R;
    setBackgroundWindow<R = void, P0 = NSWindow>(_v: P0): R;
    constraintsToBeVisualized<R = NSSet>(): R;
    setConstraintsToBeVisualized<R = void, P0 = NSSet>(_v: P0): R;
  }
  namespace _NSVisualizedConstraintsView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSVisualizedConstraintsView>(): R;
      new: <R = _NSVisualizedConstraintsView>() => R;
      visualizationViewForConstraint_targetView<R = unknown, P0 = unknown, P1 = unknown>(_visualizationViewForConstraint: P0, _targetView: P1): R;
    }
  }
}
