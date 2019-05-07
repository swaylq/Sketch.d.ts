/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGeneralPreferencePane<T0 = void, T1 = void, T2 = void> extends MSPreferencePane {
    pickDefaultColorSpace<R = void, P0 = unknown>(_pickDefaultColorSpace: P0): R;
    refreshColorSpaceDescription<R = void>(): R;
    analyticsAction<R = void, P0 = unknown>(_analyticsAction: P0): R;
    defaultColorSpacePopUpButton<R = NSPopUpButton>(): R;
    setDefaultColorSpacePopUpButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    defaultColorSpaceDescriptionLabel<R = NSTextField>(): R;
    setDefaultColorSpaceDescriptionLabel<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace MSGeneralPreferencePane {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPreferencePane {
      alloc<R = MSGeneralPreferencePane>(): R;
      new: <R = MSGeneralPreferencePane>() => R;
    }
  }
}

declare const MSGeneralPreferencePane: cocoa.MSGeneralPreferencePane.CLASS;
