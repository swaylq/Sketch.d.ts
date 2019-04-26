/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISObjectiveLinearExpression<T0 = void, T1 = void, T2 = void> extends NSObject {
    replaceVariable_withExpression_processVariableNewToReceiver_processVariableDroppedFromReceiver<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_replaceVariable: P0, _withExpression: P1, _processVariableNewToReceiver: P2, _processVariableDroppedFromReceiver: P3): R;
    restrictedVariableWithCoefficientOfLargestNegativeMagnitude<R = unknown>(): R;
    removeVariable<R = void, P0 = unknown>(_removeVariable: P0): R;
    addVariable_priority_times<R = void, P0 = unknown, P1 = number, P2 = number>(_addVariable: P0, _priority: P1, _times: P2): R;
    verifyInternalIntegrity<R = void>(): R;
    leadingPriority_andValue_forVar<R = void, P0 = number, P1 = number, P2 = unknown>(_leadingPriority: P0, _andValue: P1, _forVar: P2): R;
    restrictedVarWithCoefficientOfLargestNegativeMagnitudeOutVar<R = boolean, P0 = unknown>(_restrictedVarWithCoefficientOfLargestNegativeMagnitudeOutVar: P0): R;
    replaceVar_withExpression_processVarNewToReceiver_processVarDroppedFromReceiver<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_replaceVar: P0, _withExpression: P1, _processVarNewToReceiver: P2, _processVarDroppedFromReceiver: P3): R;
    replaceVar_withVarPlusDelta_timesVar_processVarNewToReceiver_processVarDroppedFromReceiver<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType>(_replaceVar: P0, _withVarPlusDelta: P1, _timesVar: P2, _processVarNewToReceiver: P3, _processVarDroppedFromReceiver: P4): R;
    replaceVar_withVarPlusDelta<R = void, P0 = unknown, P1 = number>(_replaceVar: P0, _withVarPlusDelta: P1): R;
    addExpression_priority_times_processVarNewToReceiver_processVarDroppedFromReceiver<R = void, P0 = unknown, P1 = number, P2 = number, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType>(_addExpression: P0, _priority: P1, _times: P2, _processVarNewToReceiver: P3, _processVarDroppedFromReceiver: P4): R;
    addVar_priority_times_processVarNewToReceiver_processVarDroppedFromReceiver<R = void, P0 = unknown, P1 = number, P2 = number, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType>(_addVar: P0, _priority: P1, _times: P2, _processVarNewToReceiver: P3, _processVarDroppedFromReceiver: P4): R;
    addVar_priority_times<R = void, P0 = unknown, P1 = number, P2 = number>(_addVar: P0, _priority: P1, _times: P2): R;
    setPriorityVector_forKnownAbsentVar<R = void, P0 = __CFData, P1 = unknown>(_setPriorityVector: P0, _forKnownAbsentVar: P1): R;
    removeVar<R = void, P0 = unknown>(_removeVar: P0): R;
    valueRestrictionForVar<R = number, P0 = unknown>(_valueRestrictionForVar: P0): R;
    priorityVectorForVar<R = __CFData, P0 = unknown>(_priorityVectorForVar: P0): R;
    variableCount<R = number>(): R;
    enumerateVars<R = void, P0 = CDUnknownBlockType>(_enumerateVars: P0): R;
    constantTermIsZero<R = boolean>(): R;
    incrementConstantWithPriorityVector_timesScalarCoefficient<R = void, P0 = __CFData, P1 = number>(_incrementConstantWithPriorityVector: P0, _timesScalarCoefficient: P1): R;
    incrementConstantWithPriority_value<R = void, P0 = number, P1 = number>(_incrementConstantWithPriority: P0, _value: P1): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithLinearExpression_priority_engine<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithLinearExpression: P0, _priority: P1, _engine: P2): R;
    initWithEngine<R = unknown, P0 = unknown>(_initWithEngine: P0): R;
  }
  namespace NSISObjectiveLinearExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSISObjectiveLinearExpression>(): R;
      new: <R = NSISObjectiveLinearExpression>() => R;
    }
  }
}

declare const NSISObjectiveLinearExpression: cocoa.NSISObjectiveLinearExpression.CLASS;
