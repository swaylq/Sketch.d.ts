/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSISLinearExpression<T0 = void, T1 = void, T2 = void> extends NSObject, NSFastEnumerationProtocol {
    copyContentsAndReturnToPool<R = unknown>(): R;
    returnToPool<R = void>(): R;
    initWithInlineCapacity_engine<R = unknown, P0 = number, P1 = unknown>(_initWithInlineCapacity: P0, _engine: P1): R;
    verifyInternalIntegrity<R = void>(): R;
    scaleBy<R = void, P0 = number>(_scaleBy: P0): R;
    variablesArray<R = unknown>(): R;
    variableCount<R = number>(): R;
    enumerateVariablesAndCoefficientsUntil<R = boolean, P0 = CDUnknownBlockType>(_enumerateVariablesAndCoefficientsUntil: P0): R;
    enumerateVariables<R = void, P0 = CDUnknownBlockType>(_enumerateVariables: P0): R;
    enumerateVariablesAndCoefficients<R = void, P0 = CDUnknownBlockType>(_enumerateVariablesAndCoefficients: P0): R;
    description<R = unknown>(): R;
    replaceVariable_withExpression_processVariableNewToReceiver_processVariableDroppedFromReceiver<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_replaceVariable: P0, _withExpression: P1, _processVariableNewToReceiver: P2, _processVariableDroppedFromReceiver: P3): R;
    replaceVariable_withVariablePlusDelta_timesVariable_processVariableNewToReceiver_processVariableDroppedFromReceiver<R = void, P0 = unknown, P1 = number, P2 = unknown, P3 = CDUnknownBlockType, P4 = CDUnknownBlockType>(_replaceVariable: P0, _withVariablePlusDelta: P1, _timesVariable: P2, _processVariableNewToReceiver: P3, _processVariableDroppedFromReceiver: P4): R;
    replaceVariable_withVariablePlusDelta<R = void, P0 = unknown, P1 = number>(_replaceVariable: P0, _withVariablePlusDelta: P1): R;
    isConstant<R = boolean>(): R;
    incrementConstant<R = number, P0 = number>(_incrementConstant: P0): R;
    addVariable_coefficient_processVariableNewToReceiver_processVariableDroppedFromReceiver<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_addVariable: P0, _coefficient: P1, _processVariableNewToReceiver: P2, _processVariableDroppedFromReceiver: P3): R;
    addVariable_coefficient<R = void, P0 = unknown, P1 = number>(_addVariable: P0, _coefficient: P1): R;
    addExpression_times_processVariableNewToReceiver_processVariableDroppedFromReceiver<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType, P3 = CDUnknownBlockType>(_addExpression: P0, _times: P1, _processVariableNewToReceiver: P2, _processVariableDroppedFromReceiver: P3): R;
    addExpression_times<R = void, P0 = unknown, P1 = number>(_addExpression: P0, _times: P1): R;
    dealloc<R = void>(): R;
    replaceVariable_withVariable_coefficient<R = void, P0 = unknown, P1 = unknown, P2 = number>(_replaceVariable: P0, _withVariable: P1, _coefficient: P2): R;
    setCoefficient_forVariable<R = void, P0 = number, P1 = unknown>(_setCoefficient: P0, _forVariable: P1): R;
    coefficientForVariable<R = number, P0 = unknown>(_coefficientForVariable: P0): R;
    removeVariable<R = void, P0 = unknown>(_removeVariable: P0): R;
    hash<R = number>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    initWithEngine<R = unknown, P0 = unknown>(_initWithEngine: P0): R;
    constant<R = number>(): R;
    setConstant<R = void, P0 = number>(_v: P0): R;
    engine<R = NSISEngine>(): R;
  }
  namespace NSISLinearExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSFastEnumerationProtocol {
      alloc<R = NSISLinearExpression>(): R;
      new: <R = NSISLinearExpression>() => R;
      acquireFromPoolForUseCase_engine<R = unknown, P0 = number, P1 = unknown>(_acquireFromPoolForUseCase: P0, _engine: P1): R;
      acquireFromPoolForUseCase<R = unknown, P0 = number>(_acquireFromPoolForUseCase: P0): R;
      newExpressionWithCapacity_engine<R = unknown, P0 = number, P1 = unknown>(_newExpressionWithCapacity: P0, _engine: P1): R;
      newExpressionWithCapacity<R = unknown, P0 = number>(_newExpressionWithCapacity: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSISLinearExpression: cocoa.NSISLinearExpression.CLASS;
