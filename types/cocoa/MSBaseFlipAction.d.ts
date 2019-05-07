/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseFlipAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    validate<R = boolean>(): R;
  }
  namespace MSBaseFlipAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSBaseFlipAction>(): R;
      new: <R = MSBaseFlipAction>() => R;
    }
  }
}

declare const MSBaseFlipAction: cocoa.MSBaseFlipAction.CLASS;
