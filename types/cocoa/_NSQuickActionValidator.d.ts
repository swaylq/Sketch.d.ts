/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionValidator<T0 = void, T1 = void, T2 = void> extends NSObject, _NSQuickActionAutovalidationHandlerProtocol {}
  namespace _NSQuickActionValidator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSQuickActionAutovalidationHandlerProtocol {
      alloc<R = _NSQuickActionValidator>(): R;
      new: <R = _NSQuickActionValidator>() => R;
      validatorWithObserver<R = unknown, P0 = unknown>(_validatorWithObserver: P0): R;
    }
  }
}
