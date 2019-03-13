/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSubqueryExpression<T = any> extends NSExpression {
    hash<R = number>(): R;
    predicate<R = unknown>(): R;
    variable<R = unknown>(): R;
    variableExpression<R = unknown>(): R;
    collection<R = unknown>(): R;
    initWithExpression_usingIteratorExpression_predicate<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithExpression: P0, _usingIteratorExpression: P1, _predicate: P2): R;
    initWithExpression_usingIteratorVariable_predicate<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithExpression: P0, _usingIteratorVariable: P1, _predicate: P2): R;
    dealloc<R = void>(): R;
  }
  namespace classes {
    export interface NSSubqueryExpression<T = any> extends NSExpression {
      alloc<R = NSSubqueryExpression>(): R;
      new: <R = NSSubqueryExpression>() => R;
    }
  }
}

declare const NSSubqueryExpression: cocoa.classes.NSSubqueryExpression;
