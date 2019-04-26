/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyPathExpression<T0 = void, T1 = void, T2 = void> extends NSFunctionExpression {
    keyPath<R = unknown>(): R;
    pathExpression<R = unknown>(): R;
    initWithOperand_andKeyPath<R = unknown, P0 = unknown, P1 = unknown>(_initWithOperand: P0, _andKeyPath: P1): R;
    initWithKeyPath<R = unknown, P0 = unknown>(_initWithKeyPath: P0): R;
  }
  namespace NSKeyPathExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFunctionExpression {
      alloc<R = NSKeyPathExpression>(): R;
      new: <R = NSKeyPathExpression>() => R;
    }
  }
}

declare const NSKeyPathExpression: cocoa.NSKeyPathExpression.CLASS;
