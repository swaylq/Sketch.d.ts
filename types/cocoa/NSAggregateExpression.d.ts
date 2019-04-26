/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAggregateExpression<T0 = void, T1 = void, T2 = void> extends NSExpression {
    hash<R = number>(): R;
    collection<R = unknown>(): R;
    constantValue<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithCollection<R = unknown, P0 = unknown>(_initWithCollection: P0): R;
  }
  namespace NSAggregateExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSExpression {
      alloc<R = NSAggregateExpression>(): R;
      new: <R = NSAggregateExpression>() => R;
    }
  }
}

declare const NSAggregateExpression: cocoa.NSAggregateExpression.CLASS;
