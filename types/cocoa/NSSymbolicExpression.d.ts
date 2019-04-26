/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSymbolicExpression<T0 = void, T1 = void, T2 = void> extends NSExpression {
    hash<R = number>(): R;
    constantValue<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
  }
  namespace NSSymbolicExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSExpression {
      alloc<R = NSSymbolicExpression>(): R;
      new: <R = NSSymbolicExpression>() => R;
    }
  }
}

declare const NSSymbolicExpression: cocoa.NSSymbolicExpression.CLASS;
