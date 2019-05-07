/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAnyKeyExpression<T0 = void, T1 = void, T2 = void> extends NSExpression {
    _initPrivate<R = unknown>(): R;
    hash<R = number>(): R;
    _tryRetain<R = boolean>(): R;
    _isDeallocating<R = boolean>(): R;
  }
  namespace NSAnyKeyExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSExpression {
      alloc<R = NSAnyKeyExpression>(): R;
      new: <R = NSAnyKeyExpression>() => R;
      defaultInstance<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSAnyKeyExpression: cocoa.NSAnyKeyExpression.CLASS;
