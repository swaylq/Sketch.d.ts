/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStarShapeSection<T0 = void, T1 = void, T2 = void> extends MSSingleItemInspectorSection {}
  namespace MSStarShapeSection {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSingleItemInspectorSection {
      alloc<R = MSStarShapeSection>(): R;
      new: <R = MSStarShapeSection>() => R;
    }
  }
}

declare const MSStarShapeSection: cocoa.MSStarShapeSection.CLASS;
