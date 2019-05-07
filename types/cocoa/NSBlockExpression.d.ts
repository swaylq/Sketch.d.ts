/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBlockExpression<T0 = void, T1 = void, T2 = void> extends NSExpression {
    arguments<R = unknown>(): R;
    expressionBlock<R = CDUnknownBlockType>(): R;
    dealloc<R = void>(): R;
    initWithType_block_arguments<R = unknown, P0 = number, P1 = CDUnknownBlockType, P2 = unknown>(_initWithType: P0, _block: P1, _arguments: P2): R;
  }
  namespace NSBlockExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSExpression {
      alloc<R = NSBlockExpression>(): R;
      new: <R = NSBlockExpression>() => R;
    }
  }
}

declare const NSBlockExpression: cocoa.NSBlockExpression.CLASS;
