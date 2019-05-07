/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleLayerHighlightAction<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
    label<R = unknown>(): R;
    toggleLayerHighlight<R = void, P0 = unknown>(_toggleLayerHighlight: P0): R;
  }
  namespace MSToggleLayerHighlightAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
      alloc<R = MSToggleLayerHighlightAction>(): R;
      new: <R = MSToggleLayerHighlightAction>() => R;
    }
  }
}

declare const MSToggleLayerHighlightAction: cocoa.MSToggleLayerHighlightAction.CLASS;
