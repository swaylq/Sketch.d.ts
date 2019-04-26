/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBorderlessLayerTreeProjectionWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    orderWindow_relativeTo<R = void, P0 = number, P1 = number>(_orderWindow: P0, _relativeTo: P1): R;
    initWithContentRect<R = unknown, P0 = CGRect>(_initWithContentRect: P0): R;
    rootLayer<R = CALayer>(): R;
  }
  namespace _NSBorderlessLayerTreeProjectionWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = _NSBorderlessLayerTreeProjectionWindow>(): R;
      new: <R = _NSBorderlessLayerTreeProjectionWindow>() => R;
    }
  }
}
