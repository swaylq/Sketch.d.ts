/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLegacyServiceQuickActionValidation<T0 = void, T1 = void, T2 = void> extends NSObject, _NSQuickActionValidationProtocol {}
  namespace _NSLegacyServiceQuickActionValidation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSQuickActionValidationProtocol {
      alloc<R = _NSLegacyServiceQuickActionValidation>(): R;
      new: <R = _NSLegacyServiceQuickActionValidation>() => R;
      automaticallyNotifiesObserversOfValidQuickActions<R = boolean>(): R;
    }
  }
}
