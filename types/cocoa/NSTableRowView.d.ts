/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableRowView<T = any> extends NSView, NSAccessibilityRowProtocol {
    removeViewAtUnknownColumn<R = void, P0 = unknown>(_removeViewAtUnknownColumn: P0): R;
    associatedViewsForColumn<R = unknown, P0 = number>(_associatedViewsForColumn: P0): R;
    performHandler_onAssociatedViewsWithColumn<R = void, P0 = CDUnknownBlockType, P1 = number>(_performHandler: P0, _onAssociatedViewsWithColumn: P1): R;
    associatedViewWithReuseIdentifier<R = unknown, P0 = unknown>(_associatedViewWithReuseIdentifier: P0): R;
    extractAssociatedViewWithReuseIdentifier<R = unknown, P0 = unknown>(_extractAssociatedViewWithReuseIdentifier: P0): R;
    removeAssociatedView<R = void, P0 = unknown>(_removeAssociatedView: P0): R;
    associateView_withColumn<R = void, P0 = unknown, P1 = number>(_associateView: P0, _withColumn: P1): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    _constraintsAtColumn<R = unknown, P0 = number>(__constraintsAtColumn: P0): R;
    _setConstraints_atColumn<R = void, P0 = unknown, P1 = number>(__setConstraints: P0, _atColumn: P1): R;
    removeColumnAtIndex<R = void, P0 = number>(_removeColumnAtIndex: P0): R;
    insertColumnAtIndex<R = void, P0 = number>(_insertColumnAtIndex: P0): R;
    _moveConstraintsFromColumn_toColumn<R = void, P0 = number, P1 = number>(__moveConstraintsFromColumn: P0, _toColumn: P1): R;
    moveViewsFromColumn_toColumn<R = void, P0 = number, P1 = number>(_moveViewsFromColumn: P0, _toColumn: P1): R;
    _setAssociatedViews<R = void, P0 = unknown>(__setAssociatedViews: P0): R;
    _associatedViews<R = unknown>(): R;
    updateKeyViewLoop<R = unknown>(): R;
    setView_atColumn<R = void, P0 = unknown, P1 = number>(_setView: P0, _atColumn: P1): R;
    viewAtColumn<R = unknown, P0 = number>(_viewAtColumn: P0): R;
    _ensureColumnViews<R = void>(): R;
    columnCount<R = number>(): R;
    _needsOverlayDrawing<R = boolean>(): R;
    _shouldHaveDropFeedback<R = boolean>(): R;
    _addRowNumberBadge<R = void>(): R;
    _badgeAttributes<R = unknown>(): R;
    _removeBackgroundDropAboveFeedbackLayer<R = void>(): R;
    _udpateBackgroundDropAboveFeedbackLayer<R = void>(): R;
    _removeBackgroundDropFeedbackLayer<R = void>(): R;
    _updateBackgroundDropFeedbackLayer<R = void>(): R;
    _makeLayerForDropFeedbackThatIsAbove<R = unknown, P0 = boolean>(__makeLayerForDropFeedbackThatIsAbove: P0): R;
    _flashingKeyForLayerContentsProvider<R = unknown>(): R;
    _removeSeparatorBackgroundView<R = void>(): R;
    _updateSeparatorBackgroundView<R = void>(): R;
    _setDropAboveFeedbackLayer<R = void, P0 = unknown>(__setDropAboveFeedbackLayer: P0): R;
    _dropAboveFeedbackLayer<R = unknown>(): R;
    _setDropFeedbackLayer<R = void, P0 = unknown>(__setDropFeedbackLayer: P0): R;
    _dropFeedbackLayer<R = unknown>(): R;
    _setSeparatorView<R = void, P0 = unknown>(__setSeparatorView: P0): R;
    _separatorView<R = unknown>(): R;
    _currentLayerBackgroundColor<R = unknown>(): R;
    _setupBackgroundLayer<R = void, P0 = unknown>(__setupBackgroundLayer: P0): R;
    _contentsFacetForSelectedBackground<R = unknown>(): R;
    _realSelectionHighlightStyle<R = number>(): R;
    _removeSelectedBackgroundView<R = void>(): R;
    _alwaysNeedsSelectedBackgroundView<R = boolean>(): R;
    _updateSelectedBackgroundView<R = void>(): R;
    _needsSelectionBackgroundView<R = boolean>(): R;
    _shouldRemoveSelectedBackgroundViewWhenNotSelected<R = boolean>(): R;
    _makeSelectionBlurBackgroundView<R = unknown>(): R;
    _updateSelectionStateForVisualEffectView<R = void, P0 = unknown>(__updateSelectionStateForVisualEffectView: P0): R;
    _groupBackgroundView<R = unknown>(): R;
    _setGroupBackgroundView<R = void, P0 = unknown>(__setGroupBackgroundView: P0): R;
    _removeGroupBackgroundView<R = void>(): R;
    _makeGroupBackgroundView<R = unknown>(): R;
    _needsGroupBackgroundView<R = boolean>(): R;
    _updateGroupBackgroundView<R = void>(): R;
    _drawsGroupRowBackground<R = boolean>(): R;
    _dividerPosition<R = number>(): R;
    _preferredAppearance<R = unknown>(): R;
    setSelectionBlendingMode<R = void, P0 = number>(_setSelectionBlendingMode: P0): R;
    selectionBlendingMode<R = number>(): R;
    _makeSelectedBackgroundView<R = unknown>(): R;
    _selectedBackgroundView<R = unknown>(): R;
    _setSelectedBackgroundView<R = void, P0 = unknown>(__setSelectedBackgroundView: P0): R;
    wantsUpdateLayer<R = boolean>(): R;
    drawDraggingDestinationFeedbackInRect<R = void, P0 = CGRect>(_drawDraggingDestinationFeedbackInRect: P0): R;
    drawSelectionInRect<R = void, P0 = CGRect>(_drawSelectionInRect: P0): R;
    drawsBackground<R = boolean>(): R;
    drawBackgroundInRect<R = void, P0 = CGRect>(_drawBackgroundInRect: P0): R;
    _floatingBackgroundColor<R = unknown>(): R;
    _shouldUseBackgroundColor<R = boolean>(): R;
    _selectedBackgroundColorForFontSmoothing<R = unknown>(): R;
    fontSmoothingBackgroundColor<R = unknown>(): R;
    _needsSelectionBlurBackgroundView<R = boolean>(): R;
    _hasSourceListBackgroundColorOrNil<R = boolean>(): R;
    _drawSourceListBackgroundInnerEdgeInRect<R = void, P0 = CGRect>(__drawSourceListBackgroundInnerEdgeInRect: P0): R;
    _backgroundColorForFloatingGroupFromColor<R = unknown, P0 = unknown>(__backgroundColorForFloatingGroupFromColor: P0): R;
    _backgroundRect<R = CGRect>(): R;
    _backgroundRectForDirtyRect<R = CGRect, P0 = CGRect>(__backgroundRectForDirtyRect: P0): R;
    drawSeparatorInRect<R = void, P0 = CGRect>(_drawSeparatorInRect: P0): R;
    drawsSeparator<R = boolean>(): R;
    _drawSeparatorInRect_withColor<R = void, P0 = CGRect, P1 = unknown>(__drawSeparatorInRect: P0, _withColor: P1): R;
    _finderStyleGroupRowTopSeparatorColor<R = unknown>(): R;
    _separatorRectAtTop<R = CGRect>(): R;
    _separatorRect<R = CGRect>(): R;
    _drawRowNumberBadge<R = void>(): R;
    _enclosingTableView<R = unknown>(): R;
    _shouldShowRowNumbers<R = boolean>(): R;
    _drawRowNumber<R = void, P0 = number>(__drawRowNumber: P0): R;
    _dropTargetRect<R = CGRect>(): R;
    dropHighlightColor<R = unknown>(): R;
    dropHighlightBackgroundColor<R = unknown>(): R;
    secondarySelectedControlColor<R = unknown>(): R;
    _row<R = number>(): R;
    primarySelectionColor<R = unknown>(): R;
    _setForDeletion<R = void, P0 = boolean>(__setForDeletion: P0): R;
    _forDeletion<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    groupRowStyle2<R = number>(): R;
    setGroupRowStyle2<R = void, P0 = number>(_setGroupRowStyle2: P0): R;
    _updateSelectedBackgroundViewForStateChange<R = void>(): R;
    _vibrantBlendingStyleForSubtree<R = number>(): R;
    _updateManagedAttributesForSubviews<R = void>(): R;
    _hasManagedAttributes<R = boolean>(): R;
    _updateSourceListGroupRowAttributesForView<R = void, P0 = unknown>(__updateSourceListGroupRowAttributesForView: P0): R;
    _textFieldFromView<R = unknown, P0 = unknown>(__textFieldFromView: P0): R;
    _updateBackgroundStyles<R = void>(): R;
    _updateBackgroundStylesForReals<R = void>(): R;
    _userInterfaceDirectionIsLTR<R = boolean>(): R;
    _setBackgroundStyle_forView<R = void, P0 = number, P1 = unknown>(__setBackgroundStyle: P0, _forView: P1): R;
    backgroundStyle<R = number>(): R;
    _hasDesktopTintedBackgroundBehavior<R = boolean>(): R;
    _hasSourceListBackground<R = boolean>(): R;
    _appearsSelected<R = boolean>(): R;
    _shouldDrawSelection<R = boolean>(): R;
    _isFadingSelection<R = boolean>(): R;
    _invalidateLayoutOrRedisplay<R = void>(): R;
    _isUsingUpdateLayer<R = boolean>(): R;
    floatingStyle<R = boolean>(): R;
    _ivarSetSelectionAlpha<R = void, P0 = number>(__ivarSetSelectionAlpha: P0): R;
    _selectionHighlightColorChanged<R = void>(): R;
    _dropAllConstraints<R = void>(): R;
    _decodeStaticContentWithCoder<R = void, P0 = unknown>(__decodeStaticContentWithCoder: P0): R;
    _encodeStaticContentWithCoder<R = void, P0 = unknown>(__encodeStaticContentWithCoder: P0): R;
    _commonTRVInit<R = void>(): R;
    indentationForDropOperation<R = number>(): R;
    setIndentationForDropOperation<R = void, P0 = number>(_v: P0): R;
    draggingDestinationFeedbackStyle<R = number>(): R;
    setDraggingDestinationFeedbackStyle<R = void, P0 = number>(_v: P0): R;
    _keyViewLoopIsDirty<R = boolean>(): R;
    set_keyViewLoopIsDirty<R = void, P0 = boolean>(_v: P0): R;
    _locationNeedsUpdating<R = boolean>(): R;
    set_locationNeedsUpdating<R = void, P0 = boolean>(_v: P0): R;
    _usingCachedImageOnly<R = boolean>(): R;
    set_usingCachedImageOnly<R = void, P0 = boolean>(_v: P0): R;
    numberOfColumns<R = number>(): R;
    setNumberOfColumns<R = void, P0 = number>(_v: P0): R;
    editActionButtons<R = NSArray>(): R;
    setEditActionButtons<R = void, P0 = NSArray>(_v: P0): R;
    consumingRowActionButton<R = NSTableViewActionButton>(): R;
    setConsumingRowActionButton<R = void, P0 = NSTableViewActionButton>(_v: P0): R;
    canUseSelectionMaterialWithRegularHighlights<R = boolean>(): R;
    setCanUseSelectionMaterialWithRegularHighlights<R = void, P0 = boolean>(_v: P0): R;
    separatorColor<R = NSColor>(): R;
    setSeparatorColor<R = void, P0 = NSColor>(_v: P0): R;
    description<R = NSString>(): R;
    targetForDropOperation<R = boolean>(): R;
    setTargetForDropOperation<R = void, P0 = boolean>(_v: P0): R;
    groupRowStyle<R = boolean>(): R;
    setGroupRowStyle<R = void, P0 = boolean>(_v: P0): R;
    nextRowSelected<R = boolean>(): R;
    setNextRowSelected<R = void, P0 = boolean>(_v: P0): R;
    previousRowSelected<R = boolean>(): R;
    setPreviousRowSelected<R = void, P0 = boolean>(_v: P0): R;
    priorRowSelected<R = boolean>(): R;
    setPriorRowSelected<R = void, P0 = boolean>(_v: P0): R;
    selected<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_v: P0): R;
    emphasized<R = boolean>(): R;
    setEmphasized<R = void, P0 = boolean>(_v: P0): R;
    interiorBackgroundStyle<R = number>(): R;
    gridStyleMask<R = number>(): R;
    setGridStyleMask<R = void, P0 = number>(_v: P0): R;
    floating<R = boolean>(): R;
    setFloating<R = void, P0 = boolean>(_v: P0): R;
    selectionAlpha<R = number>(): R;
    setSelectionAlpha<R = void, P0 = number>(_v: P0): R;
    backgroundColor<R = NSColor>(): R;
    setBackgroundColor<R = void, P0 = NSColor>(_v: P0): R;
    selectionHighlightStyle<R = number>(): R;
    setSelectionHighlightStyle<R = void, P0 = number>(_v: P0): R;
    emphasizedForDropOperation<R = boolean>(): R;
    setEmphasizedForDropOperation<R = void, P0 = boolean>(_v: P0): R;
    _layoutEngineChangedListener<R = CDUnknownBlockType>(): R;
    set_layoutEngineChangedListener<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    isStatic<R = boolean>(): R;
    setIsStatic<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSTableRowView<T = any> extends NSView, NSAccessibilityRowProtocol {
      alloc<R = NSTableRowView>(): R;
      new: <R = NSTableRowView>() => R;
    }
  }
}

declare const NSTableRowView: cocoa.classes.NSTableRowView;