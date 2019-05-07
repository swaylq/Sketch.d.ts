/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPolygonShape<T0 = void, T1 = void, T2 = void> extends _MSPolygonShape {
    canFlatten<R = boolean>(): R;
    inspectorSections<R = unknown>(): R;
    // + MSPolygonShape(InspectorSections): 
    inspectorSections<R = unknown>(): R;
  }
  namespace MSPolygonShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSPolygonShape {
      alloc<R = MSPolygonShape>(): R;
      new: <R = MSPolygonShape>() => R;
  
  }
  }
}

declare const MSPolygonShape: cocoa.MSPolygonShape.CLASS;
