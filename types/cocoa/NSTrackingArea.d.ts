/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTrackingArea<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {}
  namespace NSTrackingArea {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSCodingProtocol {
      alloc<R = NSTrackingArea>(): R;
      new: <R = NSTrackingArea>() => R;
      _areaSendingMouseEntered<R = unknown>(): R;
      // + NSTrackingArea(CHTrackingAreaExtensions): 
      trackingAreaWithOptions_owner<R = unknown, P0 = number, P1 = unknown>(_trackingAreaWithOptions: P0, _owner: P1): R;
      mouseEnterExitTrackingArea<R = unknown, P0 = unknown>(_mouseEnterExitTrackingArea: P0): R;
    }
  }
}

declare const NSTrackingArea: cocoa.NSTrackingArea.CLASS;
