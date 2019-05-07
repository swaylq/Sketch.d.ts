/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDragDestination<T0 = void, T1 = void, T2 = void> extends NSObject, NSDraggingInfoProtocol, NSDraggingInfoPrivateProtocol, NSDraggingInfo_PrivateProtocol {
    _lastDragLocation<R = CGPoint>(): R;
    set_lastDragLocation<R = void, P0 = CGPoint>(_v: P0): R;
  }
  namespace NSDragDestination {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSDraggingInfoProtocol, NSDraggingInfoPrivateProtocol, NSDraggingInfo_PrivateProtocol {
      alloc<R = NSDragDestination>(): R;
      new: <R = NSDragDestination>() => R;
    }
  }
}

declare const NSDragDestination: cocoa.NSDragDestination.CLASS;
