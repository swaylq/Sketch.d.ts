/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCursor<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    pop<R = void>(): R;
    push<R = void>(): R;
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
    mouseExited<R = void, P0 = unknown>(_mouseExited: P0): R;
    mouseEntered<R = void, P0 = unknown>(_mouseEntered: P0): R;
    forceSet<R = unknown>(): R;
    set<R = void>(): R;
    _reallySet<R = void>(): R;
    _cgImageRefs<R = unknown>(): R;
    setOnMouseEntered<R = void, P0 = boolean>(_setOnMouseEntered: P0): R;
    setOnMouseExited<R = void, P0 = boolean>(_setOnMouseExited: P0): R;
    _getImageAndHotSpotFromCoreCursor<R = void>(): R;
    _coreCursorType<R = number>(): R;
    dealloc<R = void>(): R;
    _setImage<R = void, P0 = unknown>(__setImage: P0): R;
    initWithImage_foregroundColorHint_backgroundColorHint_hotSpot<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = CGPoint>(_initWithImage: P0, _foregroundColorHint: P1, _backgroundColorHint: P2, _hotSpot: P3): R;
    initWithImage_hotSpot<R = unknown, P0 = unknown, P1 = CGPoint>(_initWithImage: P0, _hotSpot: P1): R;
    _initWithHotSpot<R = unknown, P0 = CGPoint>(__initWithHotSpot: P0): R;
    setOnMouseEntered<R = boolean>(): R;
    setOnMouseExited<R = boolean>(): R;
    hotSpot<R = CGPoint>(): R;
    image<R = NSImage>(): R;
  
}
  namespace NSCursor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSCursor>(): R;
      new: <R = NSCursor>() => R;
      _overrideHelpCursor<R = unknown>(): R;
      _helpCursor<R = unknown>(): R;
      _windowResizeNorthWestSouthEastCursor<R = unknown>(): R;
      _windowResizeNorthEastSouthWestCursor<R = unknown>(): R;
      _windowResizeSouthWestCursor<R = unknown>(): R;
      _windowResizeSouthEastCursor<R = unknown>(): R;
      _windowResizeNorthWestCursor<R = unknown>(): R;
      _windowResizeNorthEastCursor<R = unknown>(): R;
      _windowResizeNorthSouthCursor<R = unknown>(): R;
      _windowResizeSouthCursor<R = unknown>(): R;
      _windowResizeNorthCursor<R = unknown>(): R;
      _windowResizeEastWestCursor<R = unknown>(): R;
      _windowResizeWestCursor<R = unknown>(): R;
      _windowResizeEastCursor<R = unknown>(): R;
      _zoomOutCursor<R = unknown>(): R;
      _zoomInCursor<R = unknown>(): R;
      _resizeLeftRightCursor<R = unknown>(): R;
      _resizeRightCursor<R = unknown>(): R;
      _resizeLeftCursor<R = unknown>(): R;
      _topRightResizeCursor<R = unknown>(): R;
      _bottomRightResizeCursor<R = unknown>(): R;
      _topLeftResizeCursor<R = unknown>(): R;
      _bottomLeftResizeCursor<R = unknown>(): R;
      _verticalResizeCursor<R = unknown>(): R;
      _horizontalResizeCursor<R = unknown>(): R;
      _crosshairCursor<R = unknown>(): R;
      _waitCursor<R = unknown>(): R;
      _moveCursor<R = unknown>(): R;
      _closedHandCursor<R = unknown>(): R;
      _handCursor<R = unknown>(): R;
      _genericDragCursor<R = unknown>(): R;
      dragLinkCursor<R = unknown>(): R;
      _copyDragCursor<R = unknown>(): R;
      dragCopyCursor<R = unknown>(): R;
      helpCursorShown<R = boolean>(): R;
      _setHelpCursor<R = unknown, P0 = boolean>(__setHelpCursor: P0): R;
      _makeCursors<R = unknown>(): R;
      _clearOverrideCursorAndSetArrow<R = void>(): R;
      _setOverrideCursor_type<R = void, P0 = unknown, P1 = number>(__setOverrideCursor: P0, _type: P1): R;
      _setOverrideCursor<R = void, P0 = unknown>(__setOverrideCursor: P0): R;
      currentSystemCursor<R = unknown>(): R;
      currentCursor<R = unknown>(): R;
      setHiddenUntilMouseMoves<R = void, P0 = boolean>(_setHiddenUntilMouseMoves: P0): R;
      unhide<R = void>(): R;
      hide<R = void>(): R;
      IBeamCursorForVerticalLayout<R = unknown>(): R;
      contextualMenuCursor<R = unknown>(): R;
      busyButClickableCursor<R = unknown>(): R;
      operationNotAllowedCursor<R = unknown>(): R;
      disappearingItemCursor<R = unknown>(): R;
      crosshairCursor<R = unknown>(): R;
      resizeUpDownCursor<R = unknown>(): R;
      resizeDownCursor<R = unknown>(): R;
      resizeUpCursor<R = unknown>(): R;
      resizeLeftRightCursor<R = unknown>(): R;
      resizeRightCursor<R = unknown>(): R;
      resizeLeftCursor<R = unknown>(): R;
      openHandCursor<R = unknown>(): R;
      closedHandCursor<R = unknown>(): R;
      pointingHandCursor<R = unknown>(): R;
      IBeamCursor<R = unknown>(): R;
      arrowCursor<R = unknown>(): R;
      _buildCursor_cursorData<R = unknown, P0 = unknown, P1 = CGPoint>(__buildCursor: P0, _cursorData: P1): R;
      initialize<R = void>(): R;
      // + NSCursor(CHCursorExtensions): 
      cursorWithImageNamed_hotSpot<R = unknown, P0 = unknown, P1 = CGPoint>(_cursorWithImageNamed: P0, _hotSpot: P1): R;
      cursorWithImageNamed<R = unknown, P0 = unknown>(_cursorWithImageNamed: P0): R;
      // + NSCursor(NSCursorResizeExtensions): 
      rotateBottomCursor<R = unknown>(): R;
      rotateTopCursor<R = unknown>(): R;
      rotateRightCursor<R = unknown>(): R;
      rotateLeftCursor<R = unknown>(): R;
      rotateTopRightCursor<R = unknown>(): R;
      rotateTopLeftCursor<R = unknown>(): R;
      rotateBottomLeftCursor<R = unknown>(): R;
      rotateBottomRightCursor<R = unknown>(): R;
      resizeBottomLeftToTopRightCursor<R = unknown>(): R;
      resizeTopLeftToBottomRightCursor<R = unknown>(): R;
      resizeVerCursor<R = unknown>(): R;
      resizeHorCursorLong<R = unknown>(): R;
      resizeHorCursorShort<R = unknown>(): R;
      resizeHorCursor<R = unknown>(): R;
      pencilCursor<R = unknown>(): R;
      penCloseCursor<R = unknown>(): R;
      penAddCursor<R = unknown>(): R;
      penCursor<R = unknown>(): R;
    }
  }
}

declare const NSCursor: cocoa.NSCursor.CLASS;
