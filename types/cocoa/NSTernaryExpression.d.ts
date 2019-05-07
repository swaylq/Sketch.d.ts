/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTernaryExpression<T0 = void, T1 = void, T2 = void> extends NSExpression {
    falseExpression<R = unknown>(): R;
    trueExpression<R = unknown>(): R;
    predicate<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithPredicate_trueExpression_falseExpression<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithPredicate: P0, _trueExpression: P1, _falseExpression: P2): R;
  }
  namespace NSTernaryExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSExpression {
      alloc<R = NSTernaryExpression>(): R;
      new: <R = NSTernaryExpression>() => R;
    }
  }
}

declare const NSTernaryExpression: cocoa.NSTernaryExpression.CLASS;
