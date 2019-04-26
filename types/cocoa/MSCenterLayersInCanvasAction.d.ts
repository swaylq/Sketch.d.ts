/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCenterLayersInCanvasAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    centerLayersInCanvas<R = void, P0 = unknown>(_centerLayersInCanvas: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSCenterLayersInCanvasAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSCenterLayersInCanvasAction>(): R;
      new: <R = MSCenterLayersInCanvasAction>() => R;
    }
  }
}

declare const MSCenterLayersInCanvasAction: cocoa.MSCenterLayersInCanvasAction.CLASS;
