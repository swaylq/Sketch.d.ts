/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPolygonShapeSection<T0 = void, T1 = void, T2 = void> extends MSSingleItemInspectorSection {}
  namespace MSPolygonShapeSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSingleItemInspectorSection {
      alloc<R = MSPolygonShapeSection>(): R;
      new: <R = MSPolygonShapeSection>() => R;
    }
  }
}

declare const MSPolygonShapeSection: cocoa.MSPolygonShapeSection.CLASS;
