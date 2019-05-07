/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScriptExecutionContext<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    _debugLoggingLevel<R = number>(): R;
    _resetErrorInfo<R = void>(): R;
    _setErrorWithEvaluatedObjectSpecifier<R = void, P0 = unknown>(__setErrorWithEvaluatedObjectSpecifier: P0): R;
    _errorExpectedTypeDescriptor<R = unknown>(): R;
    _errorOffendingObjectDescriptor<R = unknown>(): R;
    _errorNumber<R = number>(): R;
    _setErrorExpectedType<R = void, P0 = number>(__setErrorExpectedType: P0): R;
    _setErrorExpectedTypeDescriptor<R = void, P0 = unknown>(__setErrorExpectedTypeDescriptor: P0): R;
    _setErrorOffendingObjectDescriptor<R = void, P0 = unknown>(__setErrorOffendingObjectDescriptor: P0): R;
    _setErrorNumber<R = void, P0 = number>(__setErrorNumber: P0): R;
    _topLevelObjectClassDescription<R = unknown>(): R;
    _testedObjectTypeDescription<R = unknown>(): R;
    _setTestedObjectTypeDescription<R = void, P0 = unknown>(__setTestedObjectTypeDescription: P0): R;
    _rangeContainerClassDescription<R = unknown>(): R;
    _setRangeContainerClassDescription<R = void, P0 = unknown>(__setRangeContainerClassDescription: P0): R;
    rangeContainerObject<R = unknown>(): R;
    setRangeContainerObject<R = void, P0 = unknown>(_v: P0): R;
    objectBeingTested<R = unknown>(): R;
    setObjectBeingTested<R = void, P0 = unknown>(_v: P0): R;
    topLevelObject<R = unknown>(): R;
    setTopLevelObject<R = void, P0 = unknown>(_v: P0): R;
    // + NSScriptExecutionContext(NSAppKitScripting): 
    _setUpDefaultTopLevelObject<R = void>(): R;
  }
  namespace NSScriptExecutionContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScriptExecutionContext>(): R;
      new: <R = NSScriptExecutionContext>() => R;
      sharedScriptExecutionContext<R = unknown>(): R;
  
  }
  }
}

declare const NSScriptExecutionContext: cocoa.NSScriptExecutionContext.CLASS;
