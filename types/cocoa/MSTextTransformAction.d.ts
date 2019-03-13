/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextTransformAction<T = any> extends MSDocumentAction {
    performTextTransform<R = void>(): R;
    textTransformValue<R = unknown>(): R;
    textTransform<R = number>(): R;
  }
  namespace classes {
    export interface MSTextTransformAction<T = any> extends MSDocumentAction {
      alloc<R = MSTextTransformAction>(): R;
      new: <R = MSTextTransformAction>() => R;
    }
  }
}

declare const MSTextTransformAction: cocoa.classes.MSTextTransformAction;