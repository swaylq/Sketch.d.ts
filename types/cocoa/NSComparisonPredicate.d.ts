/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSComparisonPredicate<T0 = void, T1 = void, T2 = void> extends NSPredicate {
    _acceptExpressions_flags<R = void, P0 = unknown, P1 = number>(__acceptExpressions: P0, _flags: P1): R;
    _acceptOperator_flags<R = void, P0 = unknown, P1 = number>(__acceptOperator: P0, _flags: P1): R;
    hash<R = number>(): R;
    setPredicateOperator<R = void, P0 = unknown>(_setPredicateOperator: P0): R;
    predicateOperator<R = unknown>(): R;
    predicateFormat<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithPredicateOperator_leftExpression_rightExpression<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithPredicateOperator: P0, _leftExpression: P1, _rightExpression: P2): R;
    initWithPredicateOperator_leftKeyPath_rightValue<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithPredicateOperator: P0, _leftKeyPath: P1, _rightValue: P2): R;
    initWithPredicateOperator_leftKeyPath_rightKeyPath<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithPredicateOperator: P0, _leftKeyPath: P1, _rightKeyPath: P2): R;
    keyPathExpressionForString<R = unknown, P0 = unknown>(_keyPathExpressionForString: P0): R;
    initWithLeftExpression_rightExpression_customSelector<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_initWithLeftExpression: P0, _rightExpression: P1, _customSelector: P2): R;
    initWithLeftExpression_rightExpression_modifier_type_options<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number, P4 = number>(_initWithLeftExpression: P0, _rightExpression: P1, _modifier: P2, _type: P3, _options: P4): R;
    options<R = number>(): R;
    customSelector<R = string>(): R;
    rightExpression<R = NSExpression>(): R;
    leftExpression<R = NSExpression>(): R;
    comparisonPredicateModifier<R = number>(): R;
    predicateOperatorType<R = number>(): R;
  }
  namespace NSComparisonPredicate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPredicate {
      alloc<R = NSComparisonPredicate>(): R;
      new: <R = NSComparisonPredicate>() => R;
      predicateWithPredicateOperator_leftExpression_rightExpression<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_predicateWithPredicateOperator: P0, _leftExpression: P1, _rightExpression: P2): R;
      predicateWithPredicateOperator_leftKeyPath_rightKeyPath<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_predicateWithPredicateOperator: P0, _leftKeyPath: P1, _rightKeyPath: P2): R;
      predicateWithPredicateOperator_leftKeyPath_rightValue<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_predicateWithPredicateOperator: P0, _leftKeyPath: P1, _rightValue: P2): R;
      predicateWithLeftExpression_rightExpression_customSelector<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(_predicateWithLeftExpression: P0, _rightExpression: P1, _customSelector: P2): R;
      predicateWithLeftExpression_rightExpression_modifier_type_options<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number, P4 = number>(_predicateWithLeftExpression: P0, _rightExpression: P1, _modifier: P2, _type: P3, _options: P4): R;
    }
  }
}

declare const NSComparisonPredicate: cocoa.NSComparisonPredicate.CLASS;
