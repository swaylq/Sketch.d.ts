/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarItemDataSource<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSQuickActionTouchBarItemDataSource {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSQuickActionTouchBarItemDataSource>(): R;
      new: <R = _NSQuickActionTouchBarItemDataSource>() => R;
      automaticallyNotifiesObserversOfBackgroundColor<R = boolean>(): R;
    }
  }
}
