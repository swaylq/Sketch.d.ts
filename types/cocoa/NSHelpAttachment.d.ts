/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSHelpAttachment<T0 = void, T1 = void, T2 = void> extends NSTextAttachment {
    dealloc<R = void>(): R;
    fileName<R = unknown>(): R;
    markerName<R = unknown>(): R;
    initWithFileName_markerName<R = unknown, P0 = unknown, P1 = unknown>(_initWithFileName: P0, _markerName: P1): R;
  }
  namespace NSHelpAttachment {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextAttachment {}
  }
}

declare const NSHelpAttachment: cocoa.NSHelpAttachment.CLASS;
