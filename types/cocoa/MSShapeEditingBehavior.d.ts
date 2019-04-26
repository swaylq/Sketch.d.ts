/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeEditingBehavior<T0 = void, T1 = void, T2 = void> extends NSObject {
    shouldClosePathWhenMouseDownOnHandleAtIndexPath_modifierFlags_context<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_shouldClosePathWhenMouseDownOnHandleAtIndexPath: P0, _modifierFlags: P1, _context: P2): R;
    canInsertPoints<R = boolean>(): R;
    isAddingPoints<R = boolean, P0 = unknown>(_isAddingPoints: P0): R;
    dealloc<R = void>(): R;
    initForDrawingNewShape<R = unknown, P0 = boolean>(_initForDrawingNewShape: P0): R;
    allowClosingPathUsingMouse<R = boolean>(): R;
    setAllowClosingPathUsingMouse<R = void, P0 = boolean>(_v: P0): R;
    allowSelectionOnly<R = boolean>(): R;
    setAllowSelectionOnly<R = void, P0 = boolean>(_v: P0): R;
    isNewShape<R = boolean>(): R;
  }
  namespace MSShapeEditingBehavior {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSShapeEditingBehavior>(): R;
      new: <R = MSShapeEditingBehavior>() => R;
      initialize<R = void>(): R;
    }
  }
}

declare const MSShapeEditingBehavior: cocoa.MSShapeEditingBehavior.CLASS;
