/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSTriangleShape<T0 = void, T1 = void, T2 = void> extends _MSTriangleShape {
    canFlatten<R = boolean>(): R;
    // + MSTriangleShape(Cursor): 
    boundsForCursorPreview<R = CGRect>(): R;
  }
  namespace MSTriangleShape {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSTriangleShape {
      alloc<R = MSTriangleShape>(): R;
      new: <R = MSTriangleShape>() => R;
  
  }
  }
}

declare const MSTriangleShape: cocoa.MSTriangleShape.CLASS;
