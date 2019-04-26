/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSExpression<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
    _expressionWithSubstitutionVariables<R = unknown, P0 = unknown>(__expressionWithSubstitutionVariables: P0): R;
    acceptVisitor_flags<R = void, P0 = unknown, P1 = number>(_acceptVisitor: P0, _flags: P1): R;
    _shouldUseParensWithDescription<R = boolean>(): R;
    subexpression<R = unknown>(): R;
    selector<R = string>(): R;
    predicateFormat<R = unknown>(): R;
    description<R = unknown>(): R;
    expressionValueWithObject_context<R = unknown, P0 = unknown, P1 = unknown>(_expressionValueWithObject: P0, _context: P1): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    allowEvaluation<R = void>(): R;
    _allowsEvaluation<R = boolean>(): R;
    initWithExpressionType<R = unknown, P0 = number>(_initWithExpressionType: P0): R;
    expressionBlock<R = CDUnknownBlockType>(): R;
    falseExpression<R = NSExpression>(): R;
    trueExpression<R = NSExpression>(): R;
    collection<R = unknown>(): R;
    predicate<R = NSPredicate>(): R;
    rightExpression<R = NSExpression>(): R;
    leftExpression<R = NSExpression>(): R;
    arguments<R = NSArray>(): R;
    operand<R = NSExpression>(): R;
    function<R = NSString>(): R;
    variable<R = NSString>(): R;
    constantValue<R = unknown>(): R;
    keyPath<R = NSString>(): R;
    expressionType<R = number>(): R;
  }
  namespace NSExpression {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = NSExpression>(): R;
      new: <R = NSExpression>() => R;
      expressionForAnyKey<R = unknown>(): R;
      expressionForBlock_arguments<R = unknown, P0 = CDUnknownBlockType, P1 = unknown>(_expressionForBlock: P0, _arguments: P1): R;
      expressionForMinusSet_with<R = unknown, P0 = unknown, P1 = unknown>(_expressionForMinusSet: P0, _with: P1): R;
      expressionForIntersectSet_with<R = unknown, P0 = unknown, P1 = unknown>(_expressionForIntersectSet: P0, _with: P1): R;
      expressionForUnionSet_with<R = unknown, P0 = unknown, P1 = unknown>(_expressionForUnionSet: P0, _with: P1): R;
      expressionForFunction_arguments<R = unknown, P0 = unknown, P1 = unknown>(_expressionForFunction: P0, _arguments: P1): R;
      expressionForKeyPath<R = unknown, P0 = unknown>(_expressionForKeyPath: P0): R;
      _newKeyPathExpressionForString<R = unknown, P0 = unknown>(__newKeyPathExpressionForString: P0): R;
      expressionForConditional_trueExpression_falseExpression<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_expressionForConditional: P0, _trueExpression: P1, _falseExpression: P2): R;
      expressionForTernaryWithPredicate_trueExpression_falseExpression<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_expressionForTernaryWithPredicate: P0, _trueExpression: P1, _falseExpression: P2): R;
      expressionForVariableNameAssignment_expression<R = unknown, P0 = unknown, P1 = unknown>(_expressionForVariableNameAssignment: P0, _expression: P1): R;
      expressionForFunction_selectorName_arguments<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_expressionForFunction: P0, _selectorName: P1, _arguments: P2): R;
      expressionForSubquery_usingIteratorVariable_predicate<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_expressionForSubquery: P0, _usingIteratorVariable: P1, _predicate: P2): R;
      expressionForAggregate<R = unknown, P0 = unknown>(_expressionForAggregate: P0): R;
      expressionForSymbolicString<R = unknown, P0 = unknown>(_expressionForSymbolicString: P0): R;
      expressionForVariable<R = unknown, P0 = unknown>(_expressionForVariable: P0): R;
      expressionForEvaluatedObject<R = unknown>(): R;
      expressionForConstantValue<R = unknown, P0 = unknown>(_expressionForConstantValue: P0): R;
      expressionWithFormat_arguments<R = unknown, P0 = unknown, P1 = __va_list_tag>(_expressionWithFormat: P0, _arguments: P1): R;
      expressionWithFormat<R = unknown, P0 = unknown>(_expressionWithFormat: P0): R;
      expressionWithFormat_argumentArray<R = unknown, P0 = unknown, P1 = unknown>(_expressionWithFormat: P0, _argumentArray: P1): R;
    }
  }
}

declare const NSExpression: cocoa.NSExpression.CLASS;
