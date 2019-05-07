/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarController<T0 = void, T1 = void, T2 = void> extends NSObject, _NSQuickActionTouchBarPickerDelegateProtocol, _NSQuickActionProviderObserverProtocol {}
  namespace _NSQuickActionTouchBarController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSQuickActionTouchBarPickerDelegateProtocol, _NSQuickActionProviderObserverProtocol {
      alloc<R = _NSQuickActionTouchBarController>(): R;
      new: <R = _NSQuickActionTouchBarController>() => R;
      keyPathsForValuesAffectingTouchBarIsShowing<R = unknown>(): R;
    }
  }
}
