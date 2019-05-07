/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTitledFrame<T0 = void, T1 = void, T2 = void> extends NSFrameView {
    _minYBorderRect<R = CGRect>(): R;
    _maxYBorderRect<R = CGRect>(): R;
    _maxXBorderRect<R = CGRect>(): R;
    _minXBorderRect<R = CGRect>(): R;
    _windowResizeCornerThickness<R = number>(): R;
    _contentToFrameMaxYHeight<R = number>(): R;
    _contentToFrameMinYHeight<R = number>(): R;
    _contentToFrameMaxXWidth<R = number>(): R;
    _contentToFrameMinXWidth<R = number>(): R;
    _maxXTitlebarDragWidth<R = number>(): R;
    _minXTitlebarDragWidth<R = number>(): R;
    _maxYTitlebarDragHeight<R = number>(): R;
    _fileButtonOrigin<R = CGPoint>(): R;
    _collapseButtonOrigin<R = CGPoint>(): R;
    _zoomButtonOrigin<R = CGPoint>(): R;
    _closeButtonOrigin<R = CGPoint>(): R;
    _minLinesWidthWithSpace<R = number>(): R;
    windowTitlebarTitleLinesSpacingWidth<R = number>(): R;
    windowTitlebarLinesSpacingWidth<R = number>(): R;
    _maxXTitlebarButtonsWidth<R = number>(): R;
    _minXTitlebarButtonsWidth<R = number>(): R;
    _windowTitlebarButtonSpacingWidth<R = number>(): R;
    _sizeOfTitlebarFileButton<R = CGSize>(): R;
    sizeOfTitlebarButtons<R = CGSize>(): R;
    _windowTitlebarTitleMinHeight<R = number>(): R;
    _titlebarTitleRect<R = CGRect>(): R;
    _shouldFlipTrafficLightsForRTL<R = boolean>(): R;
    _titlebarHeight<R = number>(): R;
    _titleCellSize<R = CGSize>(): R;
    _titleCellHeight<R = number>(): R;
    _invalidateTitleCellWidth<R = void>(): R;
    _customTitleCell<R = unknown>(): R;
    _minYWindowBorderHeight<R = number>(): R;
    _maxXWindowBorderWidth<R = number>(): R;
    _minXWindowBorderWidth<R = number>(): R;
    _windowResizeBorderThickness<R = number>(): R;
    _windowTitlebarYResizeBorderThickness<R = number>(): R;
    _windowTitlebarXResizeBorderThickness<R = number>(): R;
    _windowBorderThickness<R = number>(): R;
    resizeFlags<R = number>(): R;
    resizeWithEvent<R = void, P0 = unknown>(_resizeWithEvent: P0): R;
    regionForOpaqueDescentsModifiedForResizing<R = CGSRegionObject, P0 = CGSRegionObject>(_regionForOpaqueDescentsModifiedForResizing: P0): R;
    _validFrameForResizeFrame_fromResizeEdge<R = CGRect, P0 = CGRect, P1 = number>(__validFrameForResizeFrame: P0, _fromResizeEdge: P1): R;
    _handlePossibleDoubleClickForEvent<R = boolean, P0 = unknown>(__handlePossibleDoubleClickForEvent: P0): R;
    titleBarViewsForMouseHitTest<R = unknown>(): R;
    _zoomWindowWithDoubleClick<R = void, P0 = unknown>(__zoomWindowWithDoubleClick: P0): R;
    _minimizeWindowWithDoubleClick<R = void, P0 = unknown>(__minimizeWindowWithDoubleClick: P0): R;
    attemptResizeWithEvent<R = boolean, P0 = unknown>(_attemptResizeWithEvent: P0): R;
    shouldAttemptResize<R = boolean>(): R;
    _styleMaskIsResizable<R = boolean>(): R;
    _lastViewHitWasATitlebarView<R = boolean>(): R;
    _eventInTitlebar<R = boolean, P0 = unknown>(__eventInTitlebar: P0): R;
    titlebarRectIncludingToolbar<R = CGRect>(): R;
    fileButton<R = unknown>(): R;
    newFileButton<R = unknown>(): R;
    newMiniaturizeButton<R = unknown>(): R;
    newZoomButton<R = unknown>(): R;
    newCloseButton<R = unknown>(): R;
    initTitleButton<R = unknown, P0 = unknown>(_initTitleButton: P0): R;
    titleButtonOfClass<R = unknown, P0 = unknown>(_titleButtonOfClass: P0): R;
    _drawTitleStringIn_withColor<R = void, P0 = CGRect, P1 = unknown>(__drawTitleStringIn: P0, _withColor: P1): R;
    _titleDidChange<R = void>(): R;
    _titleWillChange<R = void>(): R;
    usingUpdateLayer<R = boolean>(): R;
    propagateFrameDirtyRects<R = void, P0 = CGRect>(_propagateFrameDirtyRects: P0): R;
    isOpaque<R = boolean>(): R;
  }
  namespace NSTitledFrame {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFrameView {
      alloc<R = NSTitledFrame>(): R;
      new: <R = NSTitledFrame>() => R;
      _titleCellSizeForTitle_styleMask<R = CGSize, P0 = unknown, P1 = number>(__titleCellSizeForTitle: P0, _styleMask: P1): R;
      _resizeFromEdge<R = boolean>(): R;
    }
  }
}

declare const NSTitledFrame: cocoa.NSTitledFrame.CLASS;
