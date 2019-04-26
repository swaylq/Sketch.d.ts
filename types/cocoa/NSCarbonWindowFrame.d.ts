/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCarbonWindowFrame<T0 = void, T1 = void, T2 = void> extends NSView {
    aspectRatio<R = CGSize>(): R;
    setAspectRatio<R = void, P0 = CGSize>(_setAspectRatio: P0): R;
    resizeIncrements<R = CGSize>(): R;
    setResizeIncrements<R = void, P0 = CGSize>(_setResizeIncrements: P0): R;
    contentAlpha<R = number>(): R;
    contentFill<R = unknown>(): R;
    _sheetHeightAdjustment<R = number>(): R;
    _setNonactivatingPanel<R = void, P0 = boolean>(__setNonactivatingPanel: P0): R;
    titlebarRect<R = CGRect>(): R;
    title<R = unknown>(): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    isOpaque<R = boolean>(): R;
    dragRectForFrameRect<R = CGRect, P0 = CGRect>(_dragRectForFrameRect: P0): R;
    setStyleMask<R = void, P0 = number>(_setStyleMask: P0): R;
    styleMask<R = number>(): R;
    zoomButton<R = unknown>(): R;
    minimizeButton<R = unknown>(): R;
    closeButton<R = unknown>(): R;
    _distanceFromToolbarBaseToTitlebar<R = number>(): R;
    _hideToolbarWithAnimation<R = void, P0 = boolean>(__hideToolbarWithAnimation: P0): R;
    _showToolbarWithAnimation<R = void, P0 = boolean>(__showToolbarWithAnimation: P0): R;
    _toolbarIsManagedByExternalWindow<R = boolean>(): R;
    _toolbarIsHidden<R = boolean>(): R;
    _toolbarIsShown<R = boolean>(): R;
    _toolbarIsInTransition<R = boolean>(): R;
    _canHaveToolbar<R = boolean>(): R;
    _updateButtonState<R = void>(): R;
    _setSheet<R = void, P0 = boolean>(__setSheet: P0): R;
    _setFrameNeedsDisplay<R = void, P0 = boolean>(__setFrameNeedsDisplay: P0): R;
    initWithFrame_styleMask_owner<R = unknown, P0 = CGRect, P1 = number, P2 = unknown>(_initWithFrame: P0, _styleMask: P1, _owner: P2): R;
    minFrameSizeForMinContentSize_styleMask<R = CGSize, P0 = CGSize, P1 = number>(_minFrameSizeForMinContentSize: P0, _styleMask: P1): R;
    contentRectForFrameRect_styleMask<R = CGRect, P0 = CGRect, P1 = number>(_contentRectForFrameRect: P0, _styleMask: P1): R;
    frameRectForContentRect_styleMask<R = CGRect, P0 = CGRect, P1 = number>(_frameRectForContentRect: P0, _styleMask: P1): R;
  }
  namespace NSCarbonWindowFrame {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSCarbonWindowFrame>(): R;
      new: <R = NSCarbonWindowFrame>() => R;
    }
  }
}

declare const NSCarbonWindowFrame: cocoa.NSCarbonWindowFrame.CLASS;
