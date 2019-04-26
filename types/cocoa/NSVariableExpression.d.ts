/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVariableExpression<T0 = void, T1 = void, T2 = void> extends NSExpression {
    hash<R = number>(): R;
    variable<R = unknown>(): R;
    initWithObject<R = unknown, P0 = unknown>(_initWithObject: P0): R;
    dealloc<R = void>(): R;
  }
  namespace NSVariableExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSExpression {
      alloc<R = NSVariableExpression>(): R;
      new: <R = NSVariableExpression>() => R;
    }
  }
}

declare const NSVariableExpression: cocoa.NSVariableExpression.CLASS;
