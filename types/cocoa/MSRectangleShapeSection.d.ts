/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRectangleShapeSection<T0 = void, T1 = void, T2 = void> extends MSSingleItemInspectorSection {}
  namespace MSRectangleShapeSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSingleItemInspectorSection {
      alloc<R = MSRectangleShapeSection>(): R;
      new: <R = MSRectangleShapeSection>() => R;
    }
  }
}

declare const MSRectangleShapeSection: cocoa.MSRectangleShapeSection.CLASS;
