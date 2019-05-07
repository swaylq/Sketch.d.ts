/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSLayerGroupSection<T0 = void, T1 = void, T2 = void> extends MSSingleItemInspectorSection {}
  namespace MSLayerGroupSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSingleItemInspectorSection {
      alloc<R = MSLayerGroupSection>(): R;
      new: <R = MSLayerGroupSection>() => R;
    }
  }
}

declare const MSLayerGroupSection: cocoa.MSLayerGroupSection.CLASS;
