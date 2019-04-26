/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorPickerWheelView<T0 = void, T1 = void, T2 = void> extends NSView {
    _selectColorSpace<R = void, P0 = unknown>(__selectColorSpace: P0): R;
    _displayFallbackColorSpace<R = unknown>(): R;
    isTracking<R = boolean>(): R;
    _setPointerKeyboardFocusNeedsDisplay<R = void>(): R;
    mouseDownCanMoveWindow<R = boolean>(): R;
    _colorFromPoint<R = unknown, P0 = CGPoint>(__colorFromPoint: P0): R;
    _brightColorFromPoint_fullBrightness<R = unknown, P0 = CGPoint, P1 = boolean>(__brightColorFromPoint: P0, _fullBrightness: P1): R;
    _resizeView<R = unknown>(): R;
    viewSizeChanged<R = void, P0 = unknown>(_viewSizeChanged: P0): R;
    _pointFromColor<R = CGPoint, P0 = unknown>(__pointFromColor: P0): R;
    _pointInPicker<R = boolean, P0 = CGPoint>(__pointInPicker: P0): R;
    _wheelImage<R = unknown>(): R;
    _invalidateWheelImage<R = void>(): R;
    setBrightness<R = void, P0 = number>(_setBrightness: P0): R;
    brightColor<R = unknown>(): R;
    color<R = unknown>(): R;
    setColor<R = void, P0 = unknown>(_setColor: P0): R;
    storeColorPanel<R = unknown, P0 = unknown>(_storeColorPanel: P0): R;
    moveDown<R = void, P0 = unknown>(_moveDown: P0): R;
    moveUp<R = void, P0 = unknown>(_moveUp: P0): R;
    moveLeft<R = void, P0 = unknown>(_moveLeft: P0): R;
    moveRight<R = void, P0 = unknown>(_moveRight: P0): R;
    moveCurrentPointInDirection<R = void, P0 = CGPoint>(_moveCurrentPointInDirection: P0): R;
    setKeyboardFocusRingNeedsDisplayIfNeededInRect<R = void, P0 = CGRect>(_setKeyboardFocusRingNeedsDisplayIfNeededInRect: P0): R;
    _isShowingKeyboardFocus<R = boolean>(): R;
    needsPanelToBecomeKey<R = boolean>(): R;
    acceptsFirstResponder<R = boolean>(): R;
    effectiveDisplayColorSpace<R = NSColorSpace>(): R;
    preferredDisplayColorSpace<R = NSColorSpace>(): R;
    setPreferredDisplayColorSpace<R = void, P0 = NSColorSpace>(_v: P0): R;
  }
  namespace NSColorPickerWheelView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSColorPickerWheelView>(): R;
      new: <R = NSColorPickerWheelView>() => R;
      preferredColorSpaces<R = unknown>(): R;
    }
  }
}

declare const NSColorPickerWheelView: cocoa.NSColorPickerWheelView.CLASS;
