/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyPathSpecifierExpression<T0 = void, T1 = void, T2 = void> extends NSExpression {
    hash<R = number>(): R;
    keyPath<R = unknown>(): R;
    constantValue<R = unknown>(): R;
    initWithObject<R = unknown, P0 = unknown>(_initWithObject: P0): R;
    dealloc<R = void>(): R;
  }
  namespace NSKeyPathSpecifierExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSExpression {
      alloc<R = NSKeyPathSpecifierExpression>(): R;
      new: <R = NSKeyPathSpecifierExpression>() => R;
    }
  }
}

declare const NSKeyPathSpecifierExpression: cocoa.NSKeyPathSpecifierExpression.CLASS;
