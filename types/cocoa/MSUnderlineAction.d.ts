/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSUnderlineAction<T = any> extends MSDocumentAction {
    label<R = unknown>(): R;
    isActive<R = boolean>(): R;
    validate<R = boolean>(): R;
    areOneOrMoreLayersUnderlinedInArray<R = boolean, P0 = unknown>(_areOneOrMoreLayersUnderlinedInArray: P0): R;
    selectedTextLayers<R = unknown>(): R;
    underline<R = void, P0 = unknown>(_underline: P0): R;
  }
  namespace classes {
    export interface MSUnderlineAction<T = any> extends MSDocumentAction {
      alloc<R = MSUnderlineAction>(): R;
      new: <R = MSUnderlineAction>() => R;
    }
  }
}

declare const MSUnderlineAction: cocoa.classes.MSUnderlineAction;
