/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISVariable<T = any> extends cocoa.NSObject, cocoa.NSCodingProtocol {
    markedConstraint<R = unknown>(): R;
    valueIsUserVisible<R = boolean>(): R;
    markedConstraintIsEligibleForIntegralizationAdjustment<R = boolean>(): R;
    allowedMagnitudeForIntegralizationAdjustmentOfMarkedConstraint<R = number>(): R;
    shouldBeIntegral<R = boolean>(): R;
    description<R = unknown>(): R;
    descriptionInEngine<R = unknown, P0 = unknown>(_descriptionInEngine: P0): R;
    _delegateDescription<R = unknown>(): R;
    overflowEngineVarIndexForEngine<R = unknown, P0 = unknown>(_overflowEngineVarIndexForEngine: P0): R;
    _enumerateEngines<R = void, P0 = cocoa.CDUnknownBlockType>(__enumerateEngines: P0): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    delegate<R = cocoa.NSISVariableDelegate>(): R;
    setDelegate<R = void, P0 = cocoa.NSISVariableDelegate>(_v: P0): R;
    shouldBeMinimized<R = boolean>(): R;
    valueRestriction<R = number>(): R;
    orientationHint<R = number>(): R;
    engines<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSISVariable<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSCodingProtocol {
      alloc<R = NSISVariable>(): R;
      new: <R = NSISVariable>() => R;
      variableWithName_valueRestriction_shouldBeMinimized_valueIsUserObservable<R = unknown, P0 = unknown, P1 = number, P2 = boolean, P3 = boolean>(_variableWithName: P0, _valueRestriction: P1, _shouldBeMinimized: P2, _valueIsUserObservable: P3): R;
      variableWithName_valueRestriction_shouldBeMinimized<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_variableWithName: P0, _valueRestriction: P1, _shouldBeMinimized: P2): R;
      variableMarkingConstraint_valueRestriction_shouldBeMinimized<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_variableMarkingConstraint: P0, _valueRestriction: P1, _shouldBeMinimized: P2): R;
      variableWithDelegate_valueRestriction_shouldBeMinimized<R = unknown, P0 = unknown, P1 = number, P2 = boolean>(_variableWithDelegate: P0, _valueRestriction: P1, _shouldBeMinimized: P2): R;
    }
  }
}

declare const NSISVariable: cocoa.classes.NSISVariable;
