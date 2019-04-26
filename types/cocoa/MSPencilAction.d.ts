/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPencilAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    isSelectable<R = boolean>(): R;
    isActive<R = boolean>(): R;
    preferredMenuAction<R = string>(): R;
    pencil<R = void, P0 = unknown>(_pencil: P0): R;
  }
  namespace MSPencilAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSPencilAction>(): R;
      new: <R = MSPencilAction>() => R;
    }
  }
}

declare const MSPencilAction: cocoa.MSPencilAction.CLASS;
