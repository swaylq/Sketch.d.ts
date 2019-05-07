/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStarShape<T0 = void, T1 = void, T2 = void> extends _MSStarShape {
    canFlatten<R = boolean>(): R;
    inspectorSections<R = unknown>(): R;
    // + MSStarShape(Cursor): 
    boundsForCursorPreview<R = CGRect>(): R;
    // + MSStarShape(InspectorSections): 
    inspectorSections<R = unknown>(): R;
  }
  namespace MSStarShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSStarShape {
      alloc<R = MSStarShape>(): R;
      new: <R = MSStarShape>() => R;
  
  }
  }
}

declare const MSStarShape: cocoa.MSStarShape.CLASS;
