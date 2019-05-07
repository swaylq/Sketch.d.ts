/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarRangeView<T0 = void, T1 = void, T2 = void> extends NSView {
    _coreUIDrawOptions<R = unknown>(): R;
    wantsUpdateLayer<R = boolean>(): R;
    _minWidthForSeparateHandles<R = number>(): R;
    fittedSizeForSize<R = CGSize, P0 = CGSize>(_fittedSizeForSize: P0): R;
    _hasLeftHandle_rightHandle<R = void, P0 = string, P1 = string>(__hasLeftHandle: P0, _rightHandle: P1): R;
    handleAtPoint<R = number, P0 = CGPoint>(_handleAtPoint: P0): R;
    _commonViewSetup<R = void>(): R;
    handleMask<R = number>(): R;
    setHandleMask<R = void, P0 = number>(_v: P0): R;
    tintColor<R = NSColor>(): R;
    setTintColor<R = void, P0 = NSColor>(_v: P0): R;
  }
  namespace NSTouchBarRangeView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTouchBarRangeView>(): R;
      new: <R = NSTouchBarRangeView>() => R;
      monoHandleSize<R = CGSize>(): R;
    }
  }
}

declare const NSTouchBarRangeView: cocoa.NSTouchBarRangeView.CLASS;
