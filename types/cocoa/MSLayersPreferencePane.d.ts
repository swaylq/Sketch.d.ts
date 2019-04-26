/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayersPreferencePane<T0 = void, T1 = void, T2 = void> extends MSPreferencePane {}
  namespace MSLayersPreferencePane {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPreferencePane {
      alloc<R = MSLayersPreferencePane>(): R;
      new: <R = MSLayersPreferencePane>() => R;
    }
  }
}

declare const MSLayersPreferencePane: cocoa.MSLayersPreferencePane.CLASS;
