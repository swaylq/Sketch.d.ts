/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSProgressFraction<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
    isNaN<R = boolean>(): R;
    fractionCompleted<R = number>(): R;
    isFinished<R = boolean>(): R;
    isIndeterminate<R = boolean>(): R;
    fractionBySimplifying<R = unknown>(): R;
    simplify<R = void>(): R;
    fractionByMultiplyingFraction<R = unknown, P0 = unknown>(_fractionByMultiplyingFraction: P0): R;
    divideByValue<R = void, P0 = number>(_divideByValue: P0): R;
    multiplyByFraction<R = void, P0 = unknown>(_multiplyByFraction: P0): R;
    fractionBySubtractingFraction<R = unknown, P0 = unknown>(_fractionBySubtractingFraction: P0): R;
    subtractFraction<R = void, P0 = unknown>(_subtractFraction: P0): R;
    fractionByAddingFraction<R = unknown, P0 = unknown>(_fractionByAddingFraction: P0): R;
    addFraction<R = void, P0 = unknown>(_addFraction: P0): R;
    description<R = unknown>(): R;
    isFractionCompletedEqual<R = boolean, P0 = unknown>(_isFractionCompletedEqual: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithCompleted_total<R = unknown, P0 = number, P1 = number>(_initWithCompleted: P0, _total: P1): R;
    _simplifyFromDouble<R = void, P0 = number>(__simplifyFromDouble: P0): R;
    total<R = number>(): R;
    setTotal<R = void, P0 = number>(_v: P0): R;
    completed<R = number>(): R;
    setCompleted<R = void, P0 = number>(_v: P0): R;
    overflowed<R = boolean>(): R;
  }
  namespace _NSProgressFraction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = _NSProgressFraction>(): R;
      new: <R = _NSProgressFraction>() => R;
      fractionWithCompleted_total<R = unknown, P0 = number, P1 = number>(_fractionWithCompleted: P0, _total: P1): R;
      fractionWithDouble<R = unknown, P0 = number>(_fractionWithDouble: P0): R;
    }
  }
}
