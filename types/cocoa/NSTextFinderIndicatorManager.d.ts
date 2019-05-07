/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderIndicatorManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    isVisible<R = boolean>(): R;
    setIsVisible_animate<R = void, P0 = boolean, P1 = boolean>(_setIsVisible: P0, _animate: P1): R;
    _hideAnimate<R = void, P0 = boolean>(__hideAnimate: P0): R;
    _showAnimate<R = void, P0 = boolean>(__showAnimate: P0): R;
    pulse<R = void>(): R;
    cancel<R = void>(): R;
    needsUpdate<R = boolean>(): R;
    setNeedsUpdate<R = void, P0 = boolean>(_setNeedsUpdate: P0): R;
    _flushUpdate<R = void>(): R;
    _scheduleDelayedUpdate<R = void>(): R;
    _delayedUpdate<R = void>(): R;
    _enumerateViewsAndRectsForRange_withBlock<R = void, P0 = _NSRange, P1 = CDUnknownBlockType>(__enumerateViewsAndRectsForRange: P0, _withBlock: P1): R;
    _parentWindow<R = unknown>(): R;
    _containerDidChange<R = void>(): R;
    _contentView<R = unknown>(): R;
    _textFinderImpl<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithTextFinderImpl<R = unknown, P0 = unknown>(_initWithTextFinderImpl: P0): R;
  }
  namespace NSTextFinderIndicatorManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTextFinderIndicatorManager>(): R;
      new: <R = NSTextFinderIndicatorManager>() => R;
      _textRects_inWebViewCoordinateSpace<R = unknown, P0 = unknown, P1 = unknown>(__textRects: P0, _inWebViewCoordinateSpace: P1): R;
    }
  }
}

declare const NSTextFinderIndicatorManager: cocoa.NSTextFinderIndicatorManager.CLASS;
