/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarPicker<T0 = void, T1 = void, T2 = void> extends NSObject, NSTouchBarDelegateProtocol, _NSQuickActionTouchBarCollectionViewControllerDelegateProtocol {}
  namespace _NSQuickActionTouchBarPicker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSTouchBarDelegateProtocol, _NSQuickActionTouchBarCollectionViewControllerDelegateProtocol {
      alloc<R = _NSQuickActionTouchBarPicker>(): R;
      new: <R = _NSQuickActionTouchBarPicker>() => R;
      automaticallyNotifiesObserversOfTouchBar<R = boolean>(): R;
    }
  }
}
