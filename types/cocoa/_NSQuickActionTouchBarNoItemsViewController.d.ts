/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarNoItemsViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    openExtensionsPreferences<R = void, P0 = unknown>(_openExtensionsPreferences: P0): R;
  }
  namespace _NSQuickActionTouchBarNoItemsViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = _NSQuickActionTouchBarNoItemsViewController>(): R;
      new: <R = _NSQuickActionTouchBarNoItemsViewController>() => R;
    }
  }
}
