/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBooleanOperationChain<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    calculateResultPath<R = unknown>(): R;
    addClippingPath_forBooleanOperation<R = void, P0 = unknown, P1 = number>(_addClippingPath: P0, _forBooleanOperation: P1): R;
    initWithSubjectPath<R = unknown, P0 = unknown>(_initWithSubjectPath: P0): R;
    steps<R = NSMutableArray>(): R;
    setSteps<R = void, P0 = NSMutableArray>(_v: P0): R;
    resultPath<R = MSPath>(): R;
    setResultPath<R = void, P0 = MSPath>(_v: P0): R;
    subjectPath<R = MSPath>(): R;
    setSubjectPath<R = void, P0 = MSPath>(_v: P0): R;
  }
  namespace MSBooleanOperationChain {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSBooleanOperationChain>(): R;
      new: <R = MSBooleanOperationChain>() => R;
      booleanOperationChainWithSubjectPath<R = unknown, P0 = unknown>(_booleanOperationChainWithSubjectPath: P0): R;
    }
  }
}

declare const MSBooleanOperationChain: cocoa.MSBooleanOperationChain.CLASS;
