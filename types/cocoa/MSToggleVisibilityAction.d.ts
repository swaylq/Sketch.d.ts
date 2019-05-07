/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleVisibilityAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    tabbedWindows<R = unknown>(): R;
    shouldRunForAllTabsInWindow<R = boolean>(): R;
    prepareForNewWindow<R = void>(): R;
    defaultsKey<R = unknown>(): R;
    hide<R = void>(): R;
    show<R = void>(): R;
    isActive<R = boolean>(): R;
  }
  namespace MSToggleVisibilityAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSToggleVisibilityAction>(): R;
      new: <R = MSToggleVisibilityAction>() => R;
    }
  }
}

declare const MSToggleVisibilityAction: cocoa.MSToggleVisibilityAction.CLASS;
