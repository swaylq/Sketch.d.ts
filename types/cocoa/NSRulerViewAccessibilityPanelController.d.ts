/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSRulerViewAccessibilityPanelController<T0 = void, T1 = void, T2 = void> extends NSObject {
    _cancelAddMarker<R = void, P0 = unknown>(__cancelAddMarker: P0): R;
    _addMarker<R = void, P0 = unknown>(__addMarker: P0): R;
    _markerTypeButton<R = unknown>(): R;
    _valueField<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithRulerView<R = unknown, P0 = unknown>(_initWithRulerView: P0): R;
    set_accessibilityPanel<R = void, P0 = unknown>(_set_accessibilityPanel: P0): R;
    _accessibilityPanel<R = NSWindow>(): R;
    set_accessibilityPanel<R = void, P0 = NSWindow>(_v: P0): R;
  }
  namespace NSRulerViewAccessibilityPanelController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSRulerViewAccessibilityPanelController>(): R;
      new: <R = NSRulerViewAccessibilityPanelController>() => R;
    }
  }
}

declare const NSRulerViewAccessibilityPanelController: cocoa.NSRulerViewAccessibilityPanelController.CLASS;
