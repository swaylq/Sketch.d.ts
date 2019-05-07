/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConstantValueExpression<T0 = void, T1 = void, T2 = void> extends NSExpression {
    expressionValueWithObject<R = unknown, P0 = unknown>(_expressionValueWithObject: P0): R;
    hash<R = number>(): R;
    constantValue<R = unknown>(): R;
    initWithObject<R = unknown, P0 = unknown>(_initWithObject: P0): R;
    dealloc<R = void>(): R;
  }
  namespace NSConstantValueExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSExpression {
      alloc<R = NSConstantValueExpression>(): R;
      new: <R = NSConstantValueExpression>() => R;
    }
  }
}

declare const NSConstantValueExpression: cocoa.NSConstantValueExpression.CLASS;
