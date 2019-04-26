/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableHeaderView<T0 = void, T1 = void, T2 = void> extends NSView, NSViewToolTipOwnerProtocol {
    cxx_destruct<R = void>(): R;
    _updateColumnViewWidthsAnimated<R = void, P0 = boolean>(__updateColumnViewWidthsAnimated: P0): R;
    _endDraggingColumn_animated<R = void, P0 = number, P1 = boolean>(__endDraggingColumn: P0, _animated: P1): R;
    _didMoveFromColumn_toColumn_animated<R = void, P0 = number, P1 = number, P2 = boolean>(__didMoveFromColumn: P0, _toColumn: P1, _animated: P2): R;
    _setAlignTitleWithDataCell<R = void, P0 = boolean>(__setAlignTitleWithDataCell: P0): R;
    _alignTitleWithDataCell<R = boolean>(): R;
    _resizeableColumnAtPoint<R = number, P0 = CGPoint>(__resizeableColumnAtPoint: P0): R;
    _previousNonHiddenColumnStartingAtColumn<R = number, P0 = number>(__previousNonHiddenColumnStartingAtColumn: P0): R;
    _cursorRectForColumn<R = CGRect, P0 = number>(__cursorRectForColumn: P0): R;
    _ltrCursorRectForColumn<R = CGRect, P0 = number>(__ltrCursorRectForColumn: P0): R;
    _rtlCursorRectForColumn<R = CGRect, P0 = number>(__rtlCursorRectForColumn: P0): R;
    isOpaque<R = boolean>(): R;
    isFlipped<R = boolean>(): R;
    acceptsFirstResponder<R = boolean>(): R;
    mouseDownCanMoveWindow<R = boolean>(): R;
    _vibrantBlendingStyleForSubtree<R = number>(): R;
    _removeBackgroundView<R = void>(): R;
    _setBackgroundView<R = void, P0 = unknown>(__setBackgroundView: P0): R;
    _backgroundView<R = unknown>(): R;
    _updateClipViewBackgroundColors<R = void>(): R;
    setLayer<R = void, P0 = unknown>(_setLayer: P0): R;
    _updateBackgroundViewFrame<R = void>(): R;
    _addOrRemoveBlurViewAsNecessary<R = void>(): R;
    _makeBlurBackgroundViewWithFrame<R = unknown, P0 = CGRect>(__makeBlurBackgroundViewWithFrame: P0): R;
    _viewOverridesDrawing<R = boolean>(): R;
    _hasTranslucency<R = boolean>(): R;
    _setWantsTranslucency<R = void, P0 = boolean>(__setWantsTranslucency: P0): R;
    _wantsTranslucency<R = boolean>(): R;
    drawsBackground<R = boolean>(): R;
    setDrawsBackground<R = void, P0 = boolean>(_setDrawsBackground: P0): R;
    _preferredAppearance<R = unknown>(): R;
    _viewBasedRawRect<R = void, P0 = CGRect>(__viewBasedRawRect: P0): R;
    _switchToNonViewBasedIfNeeded<R = void>(): R;
    _switchToViewBasedIfNeeded<R = void>(): R;
    _supportsViewsForAnimations<R = boolean>(): R;
    _addToolTipRects<R = void>(): R;
    _invalidateOrComputeNewCursorRectsIfNecessary<R = void>(): R;
    _setToolTipRectsDirty<R = void, P0 = boolean>(__setToolTipRectsDirty: P0): R;
    _windowKeyChanged<R = void, P0 = unknown>(__windowKeyChanged: P0): R;
    _old_encodeWithCoder_NSTableHeaderView<R = void, P0 = unknown>(__old_encodeWithCoder_NSTableHeaderView: P0): R;
    _startObservingKeyWindow<R = void, P0 = unknown>(__startObservingKeyWindow: P0): R;
    _stopObservingKeyWindow<R = void>(): R;
    _isColumnReordering<R = boolean>(): R;
    _isColumnResizing<R = boolean>(): R;
    _resizeColumn_withEvent<R = void, P0 = number, P1 = unknown>(__resizeColumn: P0, _withEvent: P1): R;
    _canUseReorderResizeImageCache<R = boolean>(): R;
    _dropTableViewOverdrawIfNecessary<R = void>(): R;
    _reorderColumn_withEvent<R = void, P0 = number, P1 = unknown>(__reorderColumn: P0, _withEvent: P1): R;
    _setNeedsDisplayForDraggedDelta<R = void, P0 = number>(__setNeedsDisplayForDraggedDelta: P0): R;
    _resizeCursorForTableColumn<R = unknown, P0 = unknown>(__resizeCursorForTableColumn: P0): R;
    _lastDraggedOrUpEventFollowing_canceled<R = unknown, P0 = unknown, P1 = string>(__lastDraggedOrUpEventFollowing: P0, _canceled: P1): R;
    _lastDraggedEventFollowing<R = unknown, P0 = unknown>(__lastDraggedEventFollowing: P0): R;
    _endDraggingColumn<R = void, P0 = number>(__endDraggingColumn: P0): R;
    _beginDraggingColumn<R = void, P0 = number>(__beginDraggingColumn: P0): R;
    _drawHeaderDragImageForColumn<R = void, P0 = number>(__drawHeaderDragImageForColumn: P0): R;
    _unobstructedVisibleHeaderRectOfColumn<R = CGRect, P0 = number>(__unobstructedVisibleHeaderRectOfColumn: P0): R;
    _trackAndModifySelectionWithEvent_onColumn_stopOnReorderGesture<R = boolean, P0 = unknown, P1 = number, P2 = string>(__trackAndModifySelectionWithEvent: P0, _onColumn: P1, _stopOnReorderGesture: P2): R;
    _scheduleDelayedShowOpenHandCursorIfNecessary<R = void>(): R;
    _unshowOpenHandCursor<R = void, P0 = unknown>(__unshowOpenHandCursor: P0): R;
    _cancelDelayedShowOpenHandCursor<R = void>(): R;
    _showOpenHandCursor<R = void, P0 = unknown>(__showOpenHandCursor: P0): R;
    _headerRectForInvalidation<R = CGRect, P0 = number>(__headerRectForInvalidation: P0): R;
    _doModifySelectionWithEvent_onColumn<R = void, P0 = unknown, P1 = number>(__doModifySelectionWithEvent: P0, _onColumn: P1): R;
    _drawColumnHeaderWithIndexes<R = void, P0 = unknown>(__drawColumnHeaderWithIndexes: P0): R;
    _drawingEndSeparator<R = boolean>(): R;
    _hasRowHeaderColumn<R = boolean>(): R;
    _rowHeaderScrollableContentVisibleRect<R = CGRect>(): R;
    _rowHeaderFixedContentRect<R = CGRect>(): R;
    _layoutIsSameAsCachedLayoutWithFrame<R = boolean, P0 = CGRect>(__layoutIsSameAsCachedLayoutWithFrame: P0): R;
    _invalidateRightMostLineIfNeeded<R = void>(): R;
    _drawOverflowHeaderInRect<R = void, P0 = CGRect>(__drawOverflowHeaderInRect: P0): R;
    _overflowRectForBounds<R = CGRect, P0 = CGRect>(__overflowRectForBounds: P0): R;
    _drawHeaderOfColumn<R = void, P0 = number>(__drawHeaderOfColumn: P0): R;
    _nextColumnDrawsLeftSeparatorFromColumn<R = boolean, P0 = number>(__nextColumnDrawsLeftSeparatorFromColumn: P0): R;
    _nextColumnAfterOneBeingDrawnIsSelected<R = boolean>(): R;
    _preparedHeaderCellAtColumn<R = unknown, P0 = number>(__preparedHeaderCellAtColumn: P0): R;
    drawBackgroundOverhangInRect<R = void, P0 = CGRect>(_drawBackgroundOverhangInRect: P0): R;
    _drawHeaderFillerInRect_matchLastState<R = void, P0 = CGRect, P1 = boolean>(__drawHeaderFillerInRect: P0, _matchLastState: P1): R;
    allowsVibrancy<R = boolean>(): R;
    _preparedHeaderFillerCell<R = unknown>(): R;
    _tableView_didRemoveTableColumnAtIndex<R = void, P0 = unknown, P1 = number>(__tableView: P0, _didRemoveTableColumnAtIndex: P1): R;
    _tableView_willRemoveTableColumn<R = void, P0 = unknown, P1 = unknown>(__tableView: P0, _willRemoveTableColumn: P1): R;
    _tableView_didAddTableColumn<R = void, P0 = unknown, P1 = unknown>(__tableView: P0, _didAddTableColumn: P1): R;
    _tableView_willAddTableColumn<R = void, P0 = unknown, P1 = unknown>(__tableView: P0, _willAddTableColumn: P1): R;
    _overflowHeaderCellPrototype<R = unknown>(): R;
    _setOverflowHeaderCellPrototype<R = void, P0 = unknown>(__setOverflowHeaderCellPrototype: P0): R;
    _drawHeaderCell_withFrame_withStateFromColumn<R = void, P0 = unknown, P1 = CGRect, P2 = number>(__drawHeaderCell: P0, _withFrame: P1, _withStateFromColumn: P2): R;
    columnAtPoint<R = number, P0 = CGPoint>(_columnAtPoint: P0): R;
    headerRectOfColumn<R = CGRect, P0 = number>(_headerRectOfColumn: P0): R;
    _wantsClipViewToDoOverhangViews<R = boolean>(): R;
    _defaultHeight<R = number>(): R;
    _canSupportTallerHeight<R = boolean>(): R;
    accessibilitySizeOfChild<R = unknown, P0 = unknown>(_accessibilitySizeOfChild: P0): R;
    accessibilityPositionOfChild<R = unknown, P0 = unknown>(_accessibilityPositionOfChild: P0): R;
    accessibilityIsChildFocusable<R = boolean, P0 = unknown>(_accessibilityIsChildFocusable: P0): R;
    accessibilityHelpStringForChild<R = unknown, P0 = unknown>(_accessibilityHelpStringForChild: P0): R;
    accessibilityColumnForChild<R = number, P0 = unknown>(_accessibilityColumnForChild: P0): R;
    accessibilityChildForColumn<R = unknown, P0 = unknown>(_accessibilityChildForColumn: P0): R;
    draggedDistance<R = number>(): R;
    draggedColumn<R = number>(): R;
    resizedColumn<R = number>(): R;
    tableView<R = NSTableView>(): R;
    setTableView<R = void, P0 = NSTableView>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSTableHeaderView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSViewToolTipOwnerProtocol {
      alloc<R = NSTableHeaderView>(): R;
      new: <R = NSTableHeaderView>() => R;
    }
  }
}

declare const NSTableHeaderView: cocoa.NSTableHeaderView.CLASS;
