/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverlayRenderer<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    setNeedsDisplayInRect<R = void, P0 = CGRect>(_setNeedsDisplayInRect: P0): R;
    drawRect_context<R = void, P0 = CGRect, P1 = unknown>(_drawRect: P0, _context: P1): R;
    hostView<R = MSTiledRendererHostView>(): R;
    setHostView<R = void, P0 = MSTiledRendererHostView>(_v: P0): R;
    enabled<R = boolean>(): R;
    setEnabled<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSOverlayRenderer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSOverlayRenderer>(): R;
      new: <R = MSOverlayRenderer>() => R;
    }
  }
}

declare const MSOverlayRenderer: cocoa.MSOverlayRenderer.CLASS;
