/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVariableAssignmentExpression<T0 = void, T1 = void, T2 = void> extends NSExpression {
    hash<R = number>(): R;
    variable<R = unknown>(): R;
    assignmentVariable<R = unknown>(): R;
    initWithAssignmentExpression_expression<R = unknown, P0 = unknown, P1 = unknown>(_initWithAssignmentExpression: P0, _expression: P1): R;
    initWithAssignmentVariable_expression<R = unknown, P0 = unknown, P1 = unknown>(_initWithAssignmentVariable: P0, _expression: P1): R;
    dealloc<R = void>(): R;
  }
  namespace NSVariableAssignmentExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSExpression {
      alloc<R = NSVariableAssignmentExpression>(): R;
      new: <R = NSVariableAssignmentExpression>() => R;
    }
  }
}

declare const NSVariableAssignmentExpression: cocoa.NSVariableAssignmentExpression.CLASS;
