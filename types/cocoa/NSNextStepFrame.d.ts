/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNextStepFrame<T0 = void, T1 = void, T2 = void> extends NSView {
    _autosaveButtonSeparatorField<R = unknown>(): R;
    autosaveButton<R = unknown>(): R;
    fileButton<R = unknown>(): R;
    _maxTitlebarTitleRect<R = CGRect>(): R;
    _titlebarTitleRect<R = CGRect>(): R;
    _autosaveButtonOrigin<R = CGPoint>(): R;
    _autosaveButtonSeparatorFieldOrigin<R = CGPoint>(): R;
    _fileButtonOrigin<R = CGPoint>(): R;
    _renamingDidEndNormally<R = void, P0 = boolean>(__renamingDidEndNormally: P0): R;
    _didEnd_renameWithTitle_editingRange_grantHandler<R = void, P0 = boolean, P1 = unknown, P2 = _NSRange, P3 = CDUnknownBlockType>(__didEnd: P0, _renameWithTitle: P1, _editingRange: P2, _grantHandler: P3): R;
    _willStartRenameWithTitle_editingRange<R = void, P0 = unknown, P1 = _NSRange>(__willStartRenameWithTitle: P0, _editingRange: P1): R;
    _clearPressedButtons<R = void>(): R;
    styleMask<R = number>(): R;
    setStyleMask<R = void, P0 = number>(_setStyleMask: P0): R;
    aspectRatio<R = CGSize>(): R;
    setAspectRatio<R = void, P0 = CGSize>(_setAspectRatio: P0): R;
    resizeIncrements<R = CGSize>(): R;
    setResizeIncrements<R = void, P0 = CGSize>(_setResizeIncrements: P0): R;
    setDocumentEdited<R = void, P0 = boolean>(_setDocumentEdited: P0): R;
    _setNonactivatingPanel<R = void, P0 = boolean>(__setNonactivatingPanel: P0): R;
    _setUtilityWindow<R = void, P0 = boolean>(__setUtilityWindow: P0): R;
    _setCloseEnabled<R = void, P0 = boolean>(__setCloseEnabled: P0): R;
    tile<R = void>(): R;
    _resetDragMargins<R = void>(): R;
    _clearDragMargins<R = void>(): R;
    _calcTextRect<R = void, P0 = CGRect>(__calcTextRect: P0): R;
    titlebarRect<R = CGRect>(): R;
    isOpaque<R = boolean>(): R;
    fontSmoothingBackgroundColor<R = unknown>(): R;
    usesCustomDrawing<R = boolean>(): R;
    needsFill<R = boolean>(): R;
    contentAlpha<R = number>(): R;
    contentFill<R = unknown>(): R;
    _isHUDWindow<R = boolean>(): R;
    titleRect<R = CGRect>(): R;
    setCloseAction<R = unknown, P0 = string>(_setCloseAction: P0): R;
    setCloseTarget<R = unknown, P0 = unknown>(_setCloseTarget: P0): R;
    title<R = unknown>(): R;
    titleFont<R = unknown>(): R;
    _resize<R = unknown, P0 = unknown>(__resize: P0): R;
    doClose<R = unknown, P0 = unknown>(_doClose: P0): R;
    setTitle_andDefeatWrap<R = void, P0 = unknown, P1 = boolean>(_setTitle: P0, _andDefeatWrap: P1): R;
    setTitle<R = void, P0 = unknown>(_setTitle: P0): R;
    _setFrameNeedsDisplay<R = void, P0 = boolean>(__setFrameNeedsDisplay: P0): R;
    _edgeResizingTrackingAreas<R = unknown>(): R;
    contentLayoutGuide<R = unknown>(): R;
    doIconify<R = unknown, P0 = unknown>(_doIconify: P0): R;
    zoomButton<R = unknown>(): R;
    minimizeButton<R = unknown>(): R;
    closeButton<R = unknown>(): R;
    _updateButtons<R = void>(): R;
    _validFrameForResizeFrame_fromResizeEdge<R = CGRect, P0 = CGRect, P1 = number>(__validFrameForResizeFrame: P0, _fromResizeEdge: P1): R;
    minFrameSizeForMinContentSize_styleMask<R = CGSize, P0 = CGSize, P1 = number>(_minFrameSizeForMinContentSize: P0, _styleMask: P1): R;
    contentRectForFrameRect_styleMask<R = CGRect, P0 = CGRect, P1 = number>(_contentRectForFrameRect: P0, _styleMask: P1): R;
    frameRectForContentRect_styleMask<R = CGRect, P0 = CGRect, P1 = number>(_frameRectForContentRect: P0, _styleMask: P1): R;
    opaqueAncestor<R = unknown>(): R;
    backgroundColorChanged<R = void, P0 = unknown>(_backgroundColorChanged: P0): R;
    shapeWindow<R = void>(): R;
    _createWindowOpaqueShape<R = CGSRegionObject>(): R;
    _windowOpaqueRect<R = CGRect>(): R;
    initWithFrame_styleMask_owner<R = unknown, P0 = CGRect, P1 = number, P2 = unknown>(_initWithFrame: P0, _styleMask: P1, _owner: P2): R;
    setRepresentedFilename<R = void, P0 = unknown>(_setRepresentedFilename: P0): R;
    _distanceFromToolbarBaseToTitlebar<R = number>(): R;
    _hideToolbarWithAnimation<R = void, P0 = boolean>(__hideToolbarWithAnimation: P0): R;
    _showToolbarWithAnimation<R = void, P0 = boolean>(__showToolbarWithAnimation: P0): R;
    _toolbarIsManagedByExternalWindow<R = boolean>(): R;
    _toolbarIsHidden<R = boolean>(): R;
    _toolbarIsShown<R = boolean>(): R;
    _toolbarIsInTransition<R = boolean>(): R;
    _canHaveToolbar<R = boolean>(): R;
    dragRectForFrameRect<R = CGRect, P0 = CGRect>(_dragRectForFrameRect: P0): R;
  }
  namespace NSNextStepFrame {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSNextStepFrame>(): R;
      new: <R = NSNextStepFrame>() => R;
      _validateStyleMask<R = number, P0 = number>(__validateStyleMask: P0): R;
      minContentSizeForMinFrameSize_styleMask<R = CGSize, P0 = CGSize, P1 = number>(_minContentSizeForMinFrameSize: P0, _styleMask: P1): R;
      minFrameWidthWithTitle_styleMask<R = number, P0 = unknown, P1 = number>(_minFrameWidthWithTitle: P0, _styleMask: P1): R;
      load<R = void>(): R;
    }
  }
}

declare const NSNextStepFrame: cocoa.NSNextStepFrame.CLASS;
