/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleInspectorVisibilityAction<T0 = void, T1 = void, T2 = void> extends MSToggleVisibilityAction {
    label<R = unknown>(): R;
    isActive<R = boolean>(): R;
    toggleInspectorVisibility<R = void, P0 = unknown>(_toggleInspectorVisibility: P0): R;
  }
  namespace MSToggleInspectorVisibilityAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleVisibilityAction {
      alloc<R = MSToggleInspectorVisibilityAction>(): R;
      new: <R = MSToggleInspectorVisibilityAction>() => R;
    }
  }
}

declare const MSToggleInspectorVisibilityAction: cocoa.MSToggleInspectorVisibilityAction.CLASS;
