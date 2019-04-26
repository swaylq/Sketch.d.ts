/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleStylePartAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    toggleStylePartOfType<R = void, P0 = number>(_toggleStylePartOfType: P0): R;
  }
  namespace MSToggleStylePartAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSToggleStylePartAction>(): R;
      new: <R = MSToggleStylePartAction>() => R;
    }
  }
}

declare const MSToggleStylePartAction: cocoa.MSToggleStylePartAction.CLASS;
