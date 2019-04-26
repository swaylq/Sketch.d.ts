/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSHUDViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    cxx_destruct<R = void>(): R;
    updateAverage<R = void, P0 = number>(_updateAverage: P0): R;
    updateSelection<R = void, P0 = unknown>(_updateSelection: P0): R;
    updateHighlightedLayer<R = void, P0 = unknown>(_updateHighlightedLayer: P0): R;
    highlightedLayerChangedNotification<R = void, P0 = unknown>(_highlightedLayerChangedNotification: P0): R;
    selectionChangedNotification<R = void, P0 = unknown>(_selectionChangedNotification: P0): R;
    uninstallMonitorForClient<R = void, P0 = unknown>(_uninstallMonitorForClient: P0): R;
    installMonitorForClient<R = void, P0 = unknown>(_installMonitorForClient: P0): R;
    updateForClient<R = void, P0 = unknown>(_updateForClient: P0): R;
    unregisterForNotificationsForClient<R = void, P0 = unknown>(_unregisterForNotificationsForClient: P0): R;
    registerForNotificationsForClient<R = void, P0 = unknown>(_registerForNotificationsForClient: P0): R;
    stopTrackingClient<R = void, P0 = unknown>(_stopTrackingClient: P0): R;
    startTrackingClient<R = void, P0 = unknown>(_startTrackingClient: P0): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    client<R = unknown>(): R;
    bufferPosition<R = number>(): R;
    setBufferPosition<R = void, P0 = number>(_v: P0): R;
    buffer<R = number>(): R;
    setBuffer<R = void, P0 = number>(_v: P0): R;
    highlighted<R = NSTextField>(): R;
    setHighlighted<R = void, P0 = NSTextField>(_v: P0): R;
    selection<R = NSTextField>(): R;
    setSelection<R = void, P0 = NSTextField>(_v: P0): R;
    fpsTrend<R = NSTextField>(): R;
    setFpsTrend<R = void, P0 = NSTextField>(_v: P0): R;
    fps<R = NSTextField>(): R;
    setFps<R = void, P0 = NSTextField>(_v: P0): R;
  }
  namespace MSHUDViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = MSHUDViewController>(): R;
      new: <R = MSHUDViewController>() => R;
    }
  }
}

declare const MSHUDViewController: cocoa.MSHUDViewController.CLASS;
