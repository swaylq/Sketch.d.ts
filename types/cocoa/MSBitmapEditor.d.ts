/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBitmapEditor<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    imageBounds<R = CGRect>(): R;
    imageSize<R = CGSize>(): R;
    zoomValue<R = number>(): R;
    drawMarchingAntsForPath<R = void, P0 = unknown>(_drawMarchingAntsForPath: P0): R;
    pointInBitmapLayer<R = CGPoint, P0 = CGPoint>(_pointInBitmapLayer: P0): R;
    refreshRectInBitmapCoordinates<R = void, P0 = CGRect>(_refreshRectInBitmapCoordinates: P0): R;
    mouseUp_flags<R = void, P0 = CGPoint, P1 = number>(_mouseUp: P0, _flags: P1): R;
    mouseDragged<R = void, P0 = CGPoint>(_mouseDragged: P0): R;
    mouseDown_flags<R = void, P0 = CGPoint, P1 = number>(_mouseDown: P0, _flags: P1): R;
    draw<R = void>(): R;
    eventHandler<R = MSBitmapEditEventHandler>(): R;
    setEventHandler<R = void, P0 = MSBitmapEditEventHandler>(_v: P0): R;
    accumulatedSelection<R = NSBezierPath>(): R;
    setAccumulatedSelection<R = void, P0 = NSBezierPath>(_v: P0): R;
    bitmapEditableLayer<R = MSBitmapEditable>(): R;
  }
  namespace MSBitmapEditor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSBitmapEditor>(): R;
      new: <R = MSBitmapEditor>() => R;
    }
  }
}

declare const MSBitmapEditor: cocoa.MSBitmapEditor.CLASS;
