/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBooleanOperationChainStep<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    operation<R = number>(): R;
    setOperation<R = void, P0 = number>(_v: P0): R;
    path<R = MSPath>(): R;
    setPath<R = void, P0 = MSPath>(_v: P0): R;
  }
  namespace MSBooleanOperationChainStep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSBooleanOperationChainStep>(): R;
      new: <R = MSBooleanOperationChainStep>() => R;
      booleanOperationChainStepWithPath_operation<R = unknown, P0 = unknown, P1 = number>(_booleanOperationChainStepWithPath: P0, _operation: P1): R;
    }
  }
}

declare const MSBooleanOperationChainStep: cocoa.MSBooleanOperationChainStep.CLASS;
