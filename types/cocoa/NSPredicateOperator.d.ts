/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPredicateOperator<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
    _setModifier<R = void, P0 = number>(__setModifier: P0): R;
    options<R = number>(): R;
    _setOptions<R = void, P0 = number>(__setOptions: P0): R;
    acceptVisitor_flags<R = void, P0 = unknown, P1 = number>(_acceptVisitor: P0, _flags: P1): R;
    performOperationUsingObject_andObject<R = boolean, P0 = unknown, P1 = unknown>(_performOperationUsingObject: P0, _andObject: P1): R;
    performPrimitiveOperationUsingObject_andObject<R = boolean, P0 = unknown, P1 = unknown>(_performPrimitiveOperationUsingObject: P0, _andObject: P1): R;
    hash<R = number>(): R;
    modifier<R = number>(): R;
    symbol<R = unknown>(): R;
    operatorType<R = number>(): R;
    selector<R = string>(): R;
    description<R = unknown>(): R;
    predicateFormat<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithOperatorType_modifier_options<R = unknown, P0 = number, P1 = number, P2 = number>(_initWithOperatorType: P0, _modifier: P1, _options: P2): R;
    initWithOperatorType_modifier<R = unknown, P0 = number, P1 = number>(_initWithOperatorType: P0, _modifier: P1): R;
    initWithOperatorType<R = unknown, P0 = number>(_initWithOperatorType: P0): R;
  }
  namespace NSPredicateOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = NSPredicateOperator>(): R;
      new: <R = NSPredicateOperator>() => R;
      operatorWithCustomSelector_modifier<R = unknown, P0 = string, P1 = number>(_operatorWithCustomSelector: P0, _modifier: P1): R;
      _newOperatorWithType_modifier_options<R = unknown, P0 = number, P1 = number, P2 = number>(__newOperatorWithType: P0, _modifier: P1, _options: P2): R;
      operatorWithType_modifier_options<R = unknown, P0 = number, P1 = number, P2 = number>(_operatorWithType: P0, _modifier: P1, _options: P2): R;
      _getSelectorForType<R = string, P0 = number>(__getSelectorForType: P0): R;
      _getSymbolForType<R = unknown, P0 = number>(__getSymbolForType: P0): R;
    }
  }
}

declare const NSPredicateOperator: cocoa.NSPredicateOperator.CLASS;
