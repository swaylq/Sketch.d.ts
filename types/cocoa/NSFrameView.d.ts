/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFrameView<T0 = void, T1 = void, T2 = void> extends NSView {
    shouldUseStyledTextInTitleCell<R = boolean, P0 = unknown>(_shouldUseStyledTextInTitleCell: P0): R;
    customizedBackgroundTypeForTitleCell<R = __CFString, P0 = unknown>(_customizedBackgroundTypeForTitleCell: P0): R;
    _edgeResizingTrackingAreas<R = unknown>(): R;
    minFrameSize<R = CGSize>(): R;
    contentRect<R = CGRect>(): R;
    dragRectForFrameRect<R = CGRect, P0 = CGRect>(_dragRectForFrameRect: P0): R;
    minFrameSizeForMinContentSize_styleMask<R = CGSize, P0 = CGSize, P1 = number>(_minFrameSizeForMinContentSize: P0, _styleMask: P1): R;
    contentRectForFrameRect_styleMask<R = CGRect, P0 = CGRect, P1 = number>(_contentRectForFrameRect: P0, _styleMask: P1): R;
    frameRectForContentRect_styleMask<R = CGRect, P0 = CGRect, P1 = number>(_frameRectForContentRect: P0, _styleMask: P1): R;
    setTitle_andDefeatWrap<R = void, P0 = unknown, P1 = boolean>(_setTitle: P0, _andDefeatWrap: P1): R;
    _resetDragMargins<R = void>(): R;
    _clearDragMargins<R = void>(): R;
    miniaturizedSize<R = CGSize>(): R;
    zoomButton<R = unknown>(): R;
    minimizeButton<R = unknown>(): R;
    closeButton<R = unknown>(): R;
    setStyleMask<R = void, P0 = number>(_setStyleMask: P0): R;
    setIsResizable<R = void, P0 = boolean>(_setIsResizable: P0): R;
    setIsClosable<R = void, P0 = boolean>(_setIsClosable: P0): R;
    _setNonactivatingPanel<R = void, P0 = boolean>(__setNonactivatingPanel: P0): R;
    _setUtilityWindow<R = void, P0 = boolean>(__setUtilityWindow: P0): R;
    titlebarRect<R = CGRect>(): R;
    _maxTitlebarTitleRect<R = CGRect>(): R;
    titleFont<R = unknown>(): R;
    defaultTitleFont<R = unknown>(): R;
    frameNeedsDisplay<R = boolean>(): R;
    _setFrameNeedsDisplay<R = void, P0 = boolean>(__setFrameNeedsDisplay: P0): R;
    setDocumentEdited<R = void, P0 = boolean>(_setDocumentEdited: P0): R;
    setRepresentedFilename<R = void, P0 = unknown>(_setRepresentedFilename: P0): R;
    representedFilename<R = unknown>(): R;
    styleMask<R = number>(): R;
    aspectRatio<R = CGSize>(): R;
    setAspectRatio<R = void, P0 = CGSize>(_setAspectRatio: P0): R;
    resizeIncrements<R = CGSize>(): R;
    setResizeIncrements<R = void, P0 = CGSize>(_setResizeIncrements: P0): R;
    titleBarHiddenChanged<R = void>(): R;
    initTitleCell<R = void, P0 = unknown>(_initTitleCell: P0): R;
    titleCell<R = unknown>(): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    title<R = unknown>(): R;
    tabViewRemoved<R = void>(): R;
    tabViewAdded<R = void>(): R;
    contentFill<R = unknown>(): R;
    adjustHalftonePhase<R = void>(): R;
    _drawFrameShadowAndFlushContext<R = void, P0 = unknown>(__drawFrameShadowAndFlushContext: P0): R;
    _setShadowParameters<R = void>(): R;
    _shadowFlags<R = number>(): R;
    _shadowType<R = number>(): R;
    _distanceFromToolbarBaseToTitlebar<R = number>(): R;
    _hideToolbarWithAnimation<R = void, P0 = boolean>(__hideToolbarWithAnimation: P0): R;
    _showToolbarWithAnimation<R = void, P0 = boolean>(__showToolbarWithAnimation: P0): R;
    _toolbarIsManagedByExternalWindow<R = boolean>(): R;
    _toolbarIsHidden<R = boolean>(): R;
    _toolbarIsShown<R = boolean>(): R;
    _toolbarIsInTransition<R = boolean>(): R;
    _canHaveToolbar<R = boolean>(): R;
    shadowState<R = number>(): R;
    setShadowState<R = void, P0 = number>(_setShadowState: P0): R;
    _isHUDWindow<R = boolean>(): R;
    _isUtility<R = boolean>(): R;
    _isSheet<R = boolean>(): R;
    _updateButtonState<R = void>(): R;
    contentAlpha<R = number>(): R;
    drawWindowBackgroundRegion<R = void, P0 = CGSRegionObject>(_drawWindowBackgroundRegion: P0): R;
    drawWindowBackgroundRect<R = void, P0 = CGRect>(_drawWindowBackgroundRect: P0): R;
    drawThemeContentFill_inView<R = void, P0 = CGRect, P1 = unknown>(_drawThemeContentFill: P0, _inView: P1): R;
    usesCustomDrawing<R = boolean>(): R;
    drawFrame<R = void, P0 = CGRect>(_drawFrame: P0): R;
    _drawFrameRects<R = void, P0 = CGRect>(__drawFrameRects: P0): R;
    tile<R = void>(): R;
    tileAndSetWindowShape<R = void, P0 = boolean>(_tileAndSetWindowShape: P0): R;
    shapeWindow<R = void>(): R;
    initWithFrame_styleMask_owner<R = unknown, P0 = CGRect, P1 = number, P2 = unknown>(_initWithFrame: P0, _styleMask: P1, _owner: P2): R;
  }
  namespace NSFrameView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSFrameView>(): R;
      new: <R = NSFrameView>() => R;
      _validateStyleMask<R = number, P0 = number>(__validateStyleMask: P0): R;
      minFrameWidthWithTitle_styleMask<R = number, P0 = unknown, P1 = number>(_minFrameWidthWithTitle: P0, _styleMask: P1): R;
      minContentSizeForMinFrameSize_styleMask<R = CGSize, P0 = CGSize, P1 = number>(_minContentSizeForMinFrameSize: P0, _styleMask: P1): R;
      _defaultTitleFontForWindowWithStyleMask<R = unknown, P0 = number>(__defaultTitleFontForWindowWithStyleMask: P0): R;
      initTitleCell_styleMask<R = void, P0 = unknown, P1 = number>(_initTitleCell: P0, _styleMask: P1): R;
    }
  }
}

declare const NSFrameView: cocoa.NSFrameView.CLASS;
