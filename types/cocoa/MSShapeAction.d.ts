/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    imageForToolbar<R = unknown>(): R;
    hasSubMenu<R = boolean>(): R;
    tag<R = number>(): R;
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
  }
  namespace MSShapeAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSShapeAction>(): R;
      new: <R = MSShapeAction>() => R;
    }
  }
}

declare const MSShapeAction: cocoa.MSShapeAction.CLASS;
