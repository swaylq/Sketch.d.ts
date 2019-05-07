/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionQuickActionValidation<T0 = void, T1 = void, T2 = void> extends NSObject, _NSQuickActionValidationProtocol {}
  namespace _NSExtensionQuickActionValidation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSQuickActionValidationProtocol {
      alloc<R = _NSExtensionQuickActionValidation>(): R;
      new: <R = _NSExtensionQuickActionValidation>() => R;
      automaticallyNotifiesObserversOfValidQuickActions<R = boolean>(): R;
    }
  }
}
