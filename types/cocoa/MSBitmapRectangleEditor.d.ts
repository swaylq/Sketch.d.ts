/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapRectangleEditor<T0 = void, T1 = void, T2 = void> extends MSBitmapEditor {
    rectFromDraggingPoints<R = CGRect>(): R;
    sizeForLabel<R = CGSize>(): R;
    resetDraggingPoints<R = void>(): R;
    selectionBeforeDrag<R = NSBezierPath>(): R;
    setSelectionBeforeDrag<R = void, P0 = NSBezierPath>(_v: P0): R;
    mouseEndPoint<R = CGPoint>(): R;
    setMouseEndPoint<R = void, P0 = CGPoint>(_v: P0): R;
    mouseDownPoint<R = CGPoint>(): R;
    setMouseDownPoint<R = void, P0 = CGPoint>(_v: P0): R;
    didDrag<R = boolean>(): R;
    setDidDrag<R = void, P0 = boolean>(_v: P0): R;
    dragMode<R = number>(): R;
    setDragMode<R = void, P0 = number>(_v: P0): R;
  }
  namespace MSBitmapRectangleEditor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBitmapEditor {
      alloc<R = MSBitmapRectangleEditor>(): R;
      new: <R = MSBitmapRectangleEditor>() => R;
      accumulateSelectionWithPrevious_draggingRect_dragMode<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_accumulateSelectionWithPrevious: P0, _draggingRect: P1, _dragMode: P2): R;
    }
  }
}

declare const MSBitmapRectangleEditor: cocoa.MSBitmapRectangleEditor.CLASS;
