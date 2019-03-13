/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface FBBezierOperationChainOperand<T = any> extends NSObject {
    cxx_destruct<R = void>(): R;
    momento<R = unknown>(): R;
    initWithMomento<R = unknown, P0 = unknown>(_initWithMomento: P0): R;
    initWithOperation_path<R = unknown, P0 = number, P1 = unknown>(_initWithOperation: P0, _path: P1): R;
    path<R = NSBezierPath>(): R;
    operation<R = number>(): R;
  }
  namespace classes {
    export interface FBBezierOperationChainOperand<T = any> extends NSObject {
      alloc<R = FBBezierOperationChainOperand>(): R;
      new: <R = FBBezierOperationChainOperand>() => R;
      operandWithMomento<R = unknown, P0 = unknown>(_operandWithMomento: P0): R;
      operandWithOperation_path<R = unknown, P0 = number, P1 = unknown>(_operandWithOperation: P0, _path: P1): R;
    }
  }
}

declare const FBBezierOperationChainOperand: cocoa.classes.FBBezierOperationChainOperand;
