/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSToggleViewPreferenceAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    hasDynamicTitle<R = boolean>(): R;
    preferenceKey<R = unknown>(): R;
    isActive<R = boolean>(): R;
    validate<R = boolean>(): R;
    refreshDocumentOverlayAfterDefaultsChange<R = void>(): R;
  }
  namespace MSToggleViewPreferenceAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSToggleViewPreferenceAction>(): R;
      new: <R = MSToggleViewPreferenceAction>() => R;
    }
  }
}

declare const MSToggleViewPreferenceAction: cocoa.MSToggleViewPreferenceAction.CLASS;
