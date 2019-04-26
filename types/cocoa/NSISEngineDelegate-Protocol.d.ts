/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISEngineDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    engine_willBreakConstraint_dueToMutuallyExclusiveConstraints<R = void, P0 = NSISEngine, P1 = NSISConstraint, P2 = NSArray>(_engine: P0, _willBreakConstraint: P1, _dueToMutuallyExclusiveConstraints: P2): R;
    engine_markerForConstraintToBreakAmongConstraints<R = NSISVariable, P0 = NSISEngine, P1 = NSArray>(_engine: P0, _markerForConstraintToBreakAmongConstraints: P1): R;
    constraintsDidChangeInEngine<R = void, P0 = NSISEngine>(_constraintsDidChangeInEngine: P0): R;
    solutionDidChangeInEngine<R = void, P0 = NSISEngine>(_solutionDidChangeInEngine: P0): R;
  }
  namespace NSISEngineDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
