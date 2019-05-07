/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSListTypeAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    selectedListMarkers<R = unknown>(): R;
    isActive<R = boolean>(): R;
    validate<R = boolean>(): R;
    marker<R = NSString>(): R;
  }
  namespace MSListTypeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSListTypeAction>(): R;
      new: <R = MSListTypeAction>() => R;
    }
  }
}

declare const MSListTypeAction: cocoa.MSListTypeAction.CLASS;
