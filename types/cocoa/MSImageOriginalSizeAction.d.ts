/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageOriginalSizeAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    imageOriginalSize<R = void, P0 = unknown>(_imageOriginalSize: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSImageOriginalSizeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSImageOriginalSizeAction>(): R;
      new: <R = MSImageOriginalSizeAction>() => R;
    }
  }
}

declare const MSImageOriginalSizeAction: cocoa.MSImageOriginalSizeAction.CLASS;
