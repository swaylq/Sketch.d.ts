/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarClientItemSourceMonitor<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSQuickActionTouchBarClientItemSourceMonitor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSQuickActionTouchBarClientItemSourceMonitor>(): R;
      new: <R = _NSQuickActionTouchBarClientItemSourceMonitor>() => R;
      automaticallyNotifiesObserversOfItemSource<R = boolean>(): R;
    }
  }
}
