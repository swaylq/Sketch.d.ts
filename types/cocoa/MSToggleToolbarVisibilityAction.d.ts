/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleToolbarVisibilityAction<T0 = void, T1 = void, T2 = void> extends MSToggleVisibilityAction {
    label<R = unknown>(): R;
    isFullscreen<R = boolean>(): R;
    toolbarHeight<R = number>(): R;
    toggleWithNewScrollOrigin<R = void, P0 = CGPoint>(_toggleWithNewScrollOrigin: P0): R;
    isActive<R = boolean>(): R;
    toggleToolbarVisibility<R = void, P0 = unknown>(_toggleToolbarVisibility: P0): R;
  }
  namespace MSToggleToolbarVisibilityAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleVisibilityAction {
      alloc<R = MSToggleToolbarVisibilityAction>(): R;
      new: <R = MSToggleToolbarVisibilityAction>() => R;
    }
  }
}

declare const MSToggleToolbarVisibilityAction: cocoa.MSToggleToolbarVisibilityAction.CLASS;
