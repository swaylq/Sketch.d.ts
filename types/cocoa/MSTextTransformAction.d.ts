/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextTransformAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    performTextTransform<R = void>(): R;
    textTransformValue<R = unknown>(): R;
    textTransform<R = number>(): R;
  }
  namespace MSTextTransformAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSTextTransformAction>(): R;
      new: <R = MSTextTransformAction>() => R;
    }
  }
}

declare const MSTextTransformAction: cocoa.MSTextTransformAction.CLASS;
