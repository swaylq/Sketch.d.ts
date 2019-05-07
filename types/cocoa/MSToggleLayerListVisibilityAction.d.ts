/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleLayerListVisibilityAction<T0 = void, T1 = void, T2 = void> extends MSToggleVisibilityAction {
    label<R = unknown>(): R;
    isActive<R = boolean>(): R;
    toggleLayerListVisibility<R = void, P0 = unknown>(_toggleLayerListVisibility: P0): R;
  }
  namespace MSToggleLayerListVisibilityAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleVisibilityAction {
      alloc<R = MSToggleLayerListVisibilityAction>(): R;
      new: <R = MSToggleLayerListVisibilityAction>() => R;
    }
  }
}

declare const MSToggleLayerListVisibilityAction: cocoa.MSToggleLayerListVisibilityAction.CLASS;
