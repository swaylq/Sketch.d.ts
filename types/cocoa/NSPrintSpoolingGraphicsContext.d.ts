/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintSpoolingGraphicsContext<T0 = void, T1 = void, T2 = void> extends NSCGSContext, NSPrintGraphicsContextAdvancingProtocol {
    isDrawingToScreen<R = boolean>(): R;
    attributes<R = unknown>(): R;
    initWithPrintInfo<R = unknown, P0 = unknown>(_initWithPrintInfo: P0): R;
  }
  namespace NSPrintSpoolingGraphicsContext {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCGSContext, NSPrintGraphicsContextAdvancingProtocol {
      alloc<R = NSPrintSpoolingGraphicsContext>(): R;
      new: <R = NSPrintSpoolingGraphicsContext>() => R;
    }
  }
}

declare const NSPrintSpoolingGraphicsContext: cocoa.NSPrintSpoolingGraphicsContext.CLASS;
