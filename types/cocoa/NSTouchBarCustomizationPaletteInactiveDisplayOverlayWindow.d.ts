/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarCustomizationPaletteInactiveDisplayOverlayWindow<T0 = void, T1 = void, T2 = void> extends NSWindow {
    _wantsSnapshotProxyWindowForOrderOutAnimation<R = boolean>(): R;
    animateOut<R = void>(): R;
    animateIn<R = void>(): R;
    _isNonactivatingPanel<R = boolean>(): R;
    initWithScreen<R = unknown, P0 = unknown>(_initWithScreen: P0): R;
    _shouldDoLayerPerformanceUpdates<R = boolean>(): R;
  }
  namespace NSTouchBarCustomizationPaletteInactiveDisplayOverlayWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = NSTouchBarCustomizationPaletteInactiveDisplayOverlayWindow>(): R;
      new: <R = NSTouchBarCustomizationPaletteInactiveDisplayOverlayWindow>() => R;
    }
  }
}

declare const NSTouchBarCustomizationPaletteInactiveDisplayOverlayWindow: cocoa.NSTouchBarCustomizationPaletteInactiveDisplayOverlayWindow.CLASS;
