/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGridSettingsAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    gridSettings<R = void, P0 = unknown>(_gridSettings: P0): R;
  }
  namespace MSGridSettingsAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSGridSettingsAction>(): R;
      new: <R = MSGridSettingsAction>() => R;
    }
  }
}

declare const MSGridSettingsAction: cocoa.MSGridSettingsAction.CLASS;
