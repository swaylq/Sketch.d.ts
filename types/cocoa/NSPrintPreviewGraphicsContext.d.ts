/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintPreviewGraphicsContext<T0 = void, T1 = void, T2 = void> extends NSProxy {
    isFlipped<R = boolean>(): R;
    isDrawingToScreen<R = boolean>(): R;
    attributes<R = unknown>(): R;
    initWithPreviousContext<R = unknown, P0 = unknown>(_initWithPreviousContext: P0): R;
  }
  namespace NSPrintPreviewGraphicsContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSProxy {}
  }
}

declare const NSPrintPreviewGraphicsContext: cocoa.NSPrintPreviewGraphicsContext.CLASS;
