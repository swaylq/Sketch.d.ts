/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBorderInspectorPositionLabelTransformer<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {}
  namespace MSBorderInspectorPositionLabelTransformer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSValueTransformer {
      alloc<R = MSBorderInspectorPositionLabelTransformer>(): R;
      new: <R = MSBorderInspectorPositionLabelTransformer>() => R;
    }
  }
}

declare const MSBorderInspectorPositionLabelTransformer: cocoa.MSBorderInspectorPositionLabelTransformer.CLASS;
