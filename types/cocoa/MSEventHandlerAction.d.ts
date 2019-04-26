/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSEventHandlerAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    isSelectable<R = boolean>(): R;
    eventHandlerKey<R = unknown>(): R;
    eventHandlerClass<R = unknown>(): R;
    validate<R = boolean>(): R;
    isActive<R = boolean>(): R;
  }
  namespace MSEventHandlerAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSEventHandlerAction>(): R;
      new: <R = MSEventHandlerAction>() => R;
    }
  }
}

declare const MSEventHandlerAction: cocoa.MSEventHandlerAction.CLASS;
