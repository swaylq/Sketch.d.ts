/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitlebarView<T0 = void, T1 = void, T2 = void> extends NSVisualEffectView {
    _titleTextFieldView<R = unknown>(): R;
    _removeTrackingAreaIfNeeded<R = void>(): R;
    _isHUDWindow<R = boolean>(): R;
    titleFont<R = unknown>(): R;
    associatedThemeFrame<R = NSThemeFrame>(): R;
    setAssociatedThemeFrame<R = void, P0 = NSThemeFrame>(_v: P0): R;
    transparent<R = boolean>(): R;
    setTransparent<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSTitlebarView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSVisualEffectView {
      alloc<R = NSTitlebarView>(): R;
      new: <R = NSTitlebarView>() => R;
    }
  }
}

declare const NSTitlebarView: cocoa.NSTitlebarView.CLASS;
