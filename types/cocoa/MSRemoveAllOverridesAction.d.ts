/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRemoveAllOverridesAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    affectedOverrideRepresentations<R = unknown>(): R;
    removeAllOverridesFromSelection<R = void, P0 = unknown>(_removeAllOverridesFromSelection: P0): R;
  }
  namespace MSRemoveAllOverridesAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSRemoveAllOverridesAction>(): R;
      new: <R = MSRemoveAllOverridesAction>() => R;
    }
  }
}

declare const MSRemoveAllOverridesAction: cocoa.MSRemoveAllOverridesAction.CLASS;
