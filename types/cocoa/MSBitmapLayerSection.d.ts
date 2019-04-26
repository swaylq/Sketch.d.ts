/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapLayerSection<T0 = void, T1 = void, T2 = void> extends MSSingleItemInspectorSection {}
  namespace MSBitmapLayerSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSingleItemInspectorSection {
      alloc<R = MSBitmapLayerSection>(): R;
      new: <R = MSBitmapLayerSection>() => R;
    }
  }
}

declare const MSBitmapLayerSection: cocoa.MSBitmapLayerSection.CLASS;
