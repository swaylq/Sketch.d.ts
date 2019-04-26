/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShareButtonHandler<T0 = void, T1 = void, T2 = void> extends NSObject, NSSharingServiceDelegateProtocol, NSSharingServicePickerDelegateProtocol {
    cxx_destruct<R = void>(): R;
    itemsFromSlices<R = unknown, P0 = unknown>(_itemsFromSlices: P0): R;
    showShareMenuForLayers_sender_canvas<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_showShareMenuForLayers: P0, _sender: P1, _canvas: P2): R;
    canvas<R = MSContentDrawView>(): R;
    setCanvas<R = void, P0 = MSContentDrawView>(_v: P0): R;
    sliceLayers<R = NSArray>(): R;
    setSliceLayers<R = void, P0 = NSArray>(_v: P0): R;
    window<R = NSWindow>(): R;
    setWindow<R = void, P0 = NSWindow>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSShareButtonHandler {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSharingServiceDelegateProtocol, NSSharingServicePickerDelegateProtocol {
      alloc<R = MSShareButtonHandler>(): R;
      new: <R = MSShareButtonHandler>() => R;
    }
  }
}

declare const MSShareButtonHandler: cocoa.MSShareButtonHandler.CLASS;
