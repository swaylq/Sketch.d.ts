/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleFixToViewportAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    toggleFixToViewport<R = void, P0 = unknown>(_toggleFixToViewport: P0): R;
    state<R = number>(): R;
  }
  namespace MSToggleFixToViewportAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSToggleFixToViewportAction>(): R;
      new: <R = MSToggleFixToViewportAction>() => R;
    }
  }
}

declare const MSToggleFixToViewportAction: cocoa.MSToggleFixToViewportAction.CLASS;
