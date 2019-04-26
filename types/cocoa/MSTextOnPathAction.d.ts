/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTextOnPathAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    textLayers<R = unknown>(): R;
    validate<R = boolean>(): R;
    isActive<R = boolean>(): R;
    textOnPath<R = void, P0 = unknown>(_textOnPath: P0): R;
  }
  namespace MSTextOnPathAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSTextOnPathAction>(): R;
      new: <R = MSTextOnPathAction>() => R;
    }
  }
}

declare const MSTextOnPathAction: cocoa.MSTextOnPathAction.CLASS;
