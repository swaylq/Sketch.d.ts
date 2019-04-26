/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionValidationProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    validQuickActions<R = NSSet>(): R;
    wantsAutovalidation<R = boolean>(): R;
  }
  namespace _NSQuickActionValidationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
      validationForItemSource_quickActions<R = _NSQuickActionValidation, P0 = _NSQuickActionItemSource, P1 = NSSet>(_validationForItemSource: P0, _quickActions: P1): R;
    }
  }
}
