/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSExtensionQuickAction<T0 = void, T1 = void, T2 = void> extends _NSQuickAction {}
  namespace _NSExtensionQuickAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSQuickAction {
      alloc<R = _NSExtensionQuickAction>(): R;
      new: <R = _NSExtensionQuickAction>() => R;
      quickActionForPresentation_extension<R = unknown, P0 = unknown, P1 = unknown>(_quickActionForPresentation: P0, _extension: P1): R;
    }
  }
}
