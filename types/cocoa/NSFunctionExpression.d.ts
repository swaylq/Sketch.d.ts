/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFunctionExpression<T0 = void, T1 = void, T2 = void> extends NSExpression {
    binaryOperatorForSelector<R = unknown>(): R;
    hash<R = number>(): R;
    arguments<R = unknown>(): R;
    operand<R = unknown>(): R;
    function<R = unknown>(): R;
    initWithTarget_selectorName_arguments<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithTarget: P0, _selectorName: P1, _arguments: P2): R;
    initWithExpressionType_operand_selector_argumentArray<R = unknown, P0 = number, P1 = unknown, P2 = string, P3 = unknown>(_initWithExpressionType: P0, _operand: P1, _selector: P2, _argumentArray: P3): R;
    initWithSelector_argumentArray<R = unknown, P0 = string, P1 = unknown>(_initWithSelector: P0, _argumentArray: P1): R;
    dealloc<R = void>(): R;
  }
  namespace NSFunctionExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSExpression {
      alloc<R = NSFunctionExpression>(): R;
      new: <R = NSFunctionExpression>() => R;
    }
  }
}

declare const NSFunctionExpression: cocoa.NSFunctionExpression.CLASS;
