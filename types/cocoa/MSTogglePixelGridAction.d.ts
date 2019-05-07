/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTogglePixelGridAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    isActive<R = boolean>(): R;
    isShowingPixelatedView<R = boolean>(): R;
    tooltip<R = unknown>(): R;
    hasDynamicTitle<R = boolean>(): R;
    labelForToolbar<R = unknown>(): R;
    label<R = unknown>(): R;
    togglePixelGrid<R = void, P0 = unknown>(_togglePixelGrid: P0): R;
  }
  namespace MSTogglePixelGridAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSTogglePixelGridAction>(): R;
      new: <R = MSTogglePixelGridAction>() => R;
    }
  }
}

declare const MSTogglePixelGridAction: cocoa.MSTogglePixelGridAction.CLASS;
