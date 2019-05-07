/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorModePickerAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    colorInspectorMode<R = number>(): R;
    colorModePickerController<R = unknown>(): R;
    switchToColorTabAtIndex<R = void, P0 = number>(_switchToColorTabAtIndex: P0): R;
  }
  namespace MSColorInspectorModePickerAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSColorInspectorModePickerAction>(): R;
      new: <R = MSColorInspectorModePickerAction>() => R;
    }
  }
}

declare const MSColorInspectorModePickerAction: cocoa.MSColorInspectorModePickerAction.CLASS;
