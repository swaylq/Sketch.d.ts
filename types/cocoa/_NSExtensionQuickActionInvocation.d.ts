/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionQuickActionInvocation<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    performQuickAction<R = void, P0 = unknown>(_performQuickAction: P0): R;
    canPerformQuickAction<R = boolean, P0 = unknown>(_canPerformQuickAction: P0): R;
    initWithItemSource<R = unknown, P0 = unknown>(_initWithItemSource: P0): R;
  }
  namespace _NSExtensionQuickActionInvocation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSExtensionQuickActionInvocation>(): R;
      new: <R = _NSExtensionQuickActionInvocation>() => R;
    }
  }
}
