/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssignColorSpaceAction<T0 = void, T1 = void, T2 = void> extends MSChangeColorSpaceAction {
    assignDocumentColorSpace<R = void, P0 = unknown>(_assignDocumentColorSpace: P0): R;
  }
  namespace MSAssignColorSpaceAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSChangeColorSpaceAction {
      alloc<R = MSAssignColorSpaceAction>(): R;
      new: <R = MSAssignColorSpaceAction>() => R;
    }
  }
}

declare const MSAssignColorSpaceAction: cocoa.MSAssignColorSpaceAction.CLASS;
