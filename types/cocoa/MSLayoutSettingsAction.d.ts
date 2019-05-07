/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayoutSettingsAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    layoutSettings<R = void, P0 = unknown>(_layoutSettings: P0): R;
  }
  namespace MSLayoutSettingsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSLayoutSettingsAction>(): R;
      new: <R = MSLayoutSettingsAction>() => R;
    }
  }
}

declare const MSLayoutSettingsAction: cocoa.MSLayoutSettingsAction.CLASS;
