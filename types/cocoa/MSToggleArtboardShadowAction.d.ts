/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleArtboardShadowAction<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
    label<R = unknown>(): R;
    toggleArtboardShadow<R = void, P0 = unknown>(_toggleArtboardShadow: P0): R;
  }
  namespace MSToggleArtboardShadowAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSToggleViewPreferenceAction {
      alloc<R = MSToggleArtboardShadowAction>(): R;
      new: <R = MSToggleArtboardShadowAction>() => R;
    }
  }
}

declare const MSToggleArtboardShadowAction: cocoa.MSToggleArtboardShadowAction.CLASS;
