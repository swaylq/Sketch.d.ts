/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertHotspotAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    insertHotspot<R = void, P0 = unknown>(_insertHotspot: P0): R;
    preferredMenuAction<R = string>(): R;
  }
  namespace MSInsertHotspotAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSInsertHotspotAction>(): R;
      new: <R = MSInsertHotspotAction>() => R;
    }
  }
}

declare const MSInsertHotspotAction: cocoa.MSInsertHotspotAction.CLASS;
