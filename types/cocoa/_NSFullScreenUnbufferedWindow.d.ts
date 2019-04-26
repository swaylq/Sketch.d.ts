/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenUnbufferedWindow<T0 = void, T1 = void, T2 = void> extends _NSBorderlessLayerTreeProjectionWindow {
    _createContentViewWithFrame_customColor<R = unknown, P0 = CGRect, P1 = unknown>(__createContentViewWithFrame: P0, _customColor: P1): R;
    _ignoreForFullScreenTransition<R = boolean>(): R;
    canEnterFullScreenMode<R = boolean>(): R;
    _setWindowTag<R = void>(): R;
    initWithContentRect_screen_customColor_useBlurredBackground<R = unknown, P0 = CGRect, P1 = unknown, P2 = unknown, P3 = boolean>(_initWithContentRect: P0, _screen: P1, _customColor: P2, _useBlurredBackground: P3): R;
    customColor<R = NSColor>(): R;
    setCustomColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace _NSFullScreenUnbufferedWindow {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSBorderlessLayerTreeProjectionWindow {
      alloc<R = _NSFullScreenUnbufferedWindow>(): R;
      new: <R = _NSFullScreenUnbufferedWindow>() => R;
    }
  }
}
