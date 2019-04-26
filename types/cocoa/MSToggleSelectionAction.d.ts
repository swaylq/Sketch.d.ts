/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleSelectionAction<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
    label<R = unknown>(): R;
    toggleSelection<R = void, P0 = unknown>(_toggleSelection: P0): R;
  }
  namespace MSToggleSelectionAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
      alloc<R = MSToggleSelectionAction>(): R;
      new: <R = MSToggleSelectionAction>() => R;
    }
  }
}

declare const MSToggleSelectionAction: cocoa.MSToggleSelectionAction.CLASS;
