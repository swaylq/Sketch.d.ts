/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface HICocoaWindowAdapter<T0 = void, T1 = void, T2 = void> extends NSWindow {
    _enableFlushWindowWithoutPerformingFlush<R = void>(): R;
    enableFlushWindow<R = void>(): R;
    _resetDragMargins<R = void>(): R;
    _implicitlyTileable<R = boolean>(): R;
    _allowsOrdering<R = boolean>(): R;
    _setEventMask<R = void, P0 = number>(__setEventMask: P0): R;
    reconcileToCarbonWindowBounds<R = boolean>(): R;
    syncToViews<R = boolean>(): R;
    setSyncToViews<R = void>(): R;
    setHasShadow<R = void, P0 = boolean>(_setHasShadow: P0): R;
    setStyleMask<R = void, P0 = number>(_setStyleMask: P0): R;
    windowRef<R = OpaqueWindowPtr>(): R;
    sendSuperEvent<R = void, P0 = unknown>(_sendSuperEvent: P0): R;
    _requiresFlush<R = void>(): R;
    disableScreenUpdatesUntilFlush<R = void>(): R;
    makeKeyWindow<R = void>(): R;
    postFocusChangeEventToQueue<R = void, P0 = boolean>(_postFocusChangeEventToQueue: P0): R;
    makeFirstResponderFromCarbonFocus<R = boolean, P0 = unknown>(_makeFirstResponderFromCarbonFocus: P0): R;
    selectPreviousKeyView<R = void, P0 = unknown>(_selectPreviousKeyView: P0): R;
    selectNextKeyView<R = void, P0 = unknown>(_selectNextKeyView: P0): R;
    makeFirstResponder<R = boolean, P0 = unknown>(_makeFirstResponder: P0): R;
    setLevel<R = void, P0 = number>(_setLevel: P0): R;
    level<R = number>(): R;
    canHide<R = boolean>(): R;
    canBecomeMainWindow<R = boolean>(): R;
    canBecomeKeyWindow<R = boolean>(): R;
    displayIfNeeded<R = void>(): R;
    _animationShouldCallFlushWindow<R = boolean>(): R;
    selectKeyViewPrecedingView<R = void, P0 = unknown>(_selectKeyViewPrecedingView: P0): R;
    selectKeyViewFollowingView<R = void, P0 = unknown>(_selectKeyViewFollowingView: P0): R;
    relinquishFocus<R = void>(): R;
    sendEvent<R = void, P0 = unknown>(_sendEvent: P0): R;
    _setCarbonRendering<R = void, P0 = boolean>(__setCarbonRendering: P0): R;
    _carbonRendering<R = boolean>(): R;
    _setFocusing<R = void, P0 = boolean>(__setFocusing: P0): R;
    _focusing<R = boolean>(): R;
    _threadContext<R = unknown>(): R;
    _setDrawingContext<R = void, P0 = unknown>(__setDrawingContext: P0): R;
    _setDrawingHIView<R = void, P0 = boolean>(__setDrawingHIView: P0): R;
    _drawingHIView<R = boolean>(): R;
    _childKeyWindow<R = unknown>(): R;
    handleHICocoaViewEvent_callRef<R = number, P0 = OpaqueEventRef, P1 = OpaqueEventHandlerCallRef>(_handleHICocoaViewEvent: P0, _callRef: P1): R;
    handleControlEvent_callRef<R = number, P0 = OpaqueEventRef, P1 = OpaqueEventHandlerCallRef>(_handleControlEvent: P0, _callRef: P1): R;
    handleKeyboardEvent_callRef<R = number, P0 = OpaqueEventRef, P1 = OpaqueEventHandlerCallRef>(_handleKeyboardEvent: P0, _callRef: P1): R;
    handleMouseEvent_callRef<R = number, P0 = OpaqueEventRef, P1 = OpaqueEventHandlerCallRef>(_handleMouseEvent: P0, _callRef: P1): R;
    handleCocoaWindowEvent_callRef<R = number, P0 = OpaqueEventRef, P1 = OpaqueEventHandlerCallRef>(_handleCocoaWindowEvent: P0, _callRef: P1): R;
    handleWindowEvent_callRef<R = number, P0 = OpaqueEventRef, P1 = OpaqueEventHandlerCallRef>(_handleWindowEvent: P0, _callRef: P1): R;
    handleEvent_callRef<R = number, P0 = OpaqueEventRef, P1 = OpaqueEventHandlerCallRef>(_handleEvent: P0, _callRef: P1): R;
    constrainFrameRect_toScreen<R = CGRect, P0 = CGRect, P1 = unknown>(_constrainFrameRect: P0, _toScreen: P1): R;
    contentRectForFrameRect_styleMask<R = CGRect, P0 = CGRect, P1 = number>(_contentRectForFrameRect: P0, _styleMask: P1): R;
    _hasWindowRef<R = boolean>(): R;
    _managesWindowRef<R = boolean>(): R;
    _commonAwake<R = void>(): R;
    initWithCarbonWindowRef<R = unknown, P0 = OpaqueWindowPtr>(_initWithCarbonWindowRef: P0): R;
    initWithContentRect_styleMask_backing_defer<R = unknown, P0 = CGRect, P1 = number, P2 = number, P3 = boolean>(_initWithContentRect: P0, _styleMask: P1, _backing: P2, _defer: P3): R;
    accessibilityFocusedUIElement<R = unknown>(): R;
    cwFlags<R = number>(): R;
    setCwFlags<R = void, P0 = number>(_v: P0): R;
  }
  namespace HICocoaWindowAdapter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindow {
      alloc<R = HICocoaWindowAdapter>(): R;
      new: <R = HICocoaWindowAdapter>() => R;
      frameViewClassForStyleMask<R = unknown, P0 = number>(_frameViewClassForStyleMask: P0): R;
    }
  }
}

declare const HICocoaWindowAdapter: cocoa.HICocoaWindowAdapter.CLASS;
