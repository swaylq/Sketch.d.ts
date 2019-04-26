/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarItemGroup<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
    _menuFormRepresentationForOverflowMenu<R = unknown>(): R;
    menuFormRepresentation<R = unknown>(): R;
    _selectableToolbarViews<R = unknown>(): R;
    _initialViewToSelectFromDirection<R = unknown, P0 = number>(__initialViewToSelectFromDirection: P0): R;
    _isEnabledAndHasEnabledSubitem<R = boolean>(): R;
    _buttonAtIndex<R = unknown, P0 = number>(__buttonAtIndex: P0): R;
    invalidateLayout<R = void>(): R;
    _itemLayoutChanged<R = void>(): R;
    configureForDisplayMode_andSizeMode<R = void, P0 = number, P1 = number>(_configureForDisplayMode: P0, _andSizeMode: P1): R;
    _setItemViewer<R = void, P0 = unknown>(__setItemViewer: P0): R;
    _collectItemRectsForViews_count_inBounds_controlBounds<R = void, P0 = CGRect, P1 = number, P2 = CGRect, P3 = CGRect>(__collectItemRectsForViews: P0, _count: P1, _inBounds: P2, _controlBounds: P3): R;
    _collectItemRectsForViews_count_inBounds<R = void, P0 = CGRect, P1 = number, P2 = CGRect>(__collectItemRectsForViews: P0, _count: P1, _inBounds: P2): R;
    _collectItemRectsForLabels_count_inBounds_controlBounds<R = void, P0 = CGRect, P1 = number, P2 = CGRect, P3 = CGRect>(__collectItemRectsForLabels: P0, _count: P1, _inBounds: P2, _controlBounds: P3): R;
    _collectItemRectsForLabels_count_inBounds<R = void, P0 = CGRect, P1 = number, P2 = CGRect>(__collectItemRectsForLabels: P0, _count: P1, _inBounds: P2): R;
    _viewIsEnabledAtIndex<R = boolean, P0 = number>(__viewIsEnabledAtIndex: P0): R;
    _itemAtViewIndex<R = unknown, P0 = number>(__itemAtViewIndex: P0): R;
    _itemAtLabelIndex<R = unknown, P0 = number>(__itemAtLabelIndex: P0): R;
    _applicableLabelsArrayForDisplayMode_isInPalette<R = unknown, P0 = number, P1 = boolean>(__applicableLabelsArrayForDisplayMode: P0, _isInPalette: P1): R;
    _applicableLabelIsEnabledAtIndex_forDisplayMode_isInPalette<R = boolean, P0 = number, P1 = number, P2 = boolean>(__applicableLabelIsEnabledAtIndex: P0, _forDisplayMode: P1, _isInPalette: P2): R;
    _viewsArray<R = unknown>(): R;
    rectForItem_inBounds_controlBounds<R = CGRect, P0 = unknown, P1 = CGRect, P2 = CGRect>(_rectForItem: P0, _inBounds: P1, _controlBounds: P2): R;
    rectForItem_inBounds<R = CGRect, P0 = unknown, P1 = CGRect>(_rectForItem: P0, _inBounds: P1): R;
    _labelOnlyModeRectForItemAtIndex_inBounds<R = CGRect, P0 = number, P1 = CGRect>(__labelOnlyModeRectForItemAtIndex: P0, _inBounds: P1): R;
    _segmentedControlRectForItemAtIndex_inBounds_controlBounds<R = CGRect, P0 = number, P1 = CGRect, P2 = CGRect>(__segmentedControlRectForItemAtIndex: P0, _inBounds: P1, _controlBounds: P2): R;
    _segmentedControlRectForItemAtIndex_inBounds<R = CGRect, P0 = number, P1 = CGRect>(__segmentedControlRectForItemAtIndex: P0, _inBounds: P1): R;
    _evenlySpacedRectForItemAtIndex_inBounds<R = CGRect, P0 = number, P1 = CGRect>(__evenlySpacedRectForItemAtIndex: P0, _inBounds: P1): R;
    _forceSetView<R = void, P0 = unknown>(__forceSetView: P0): R;
    _itemViewMinSize_maxSize_stretchesContent<R = void, P0 = CGSize, P1 = CGSize, P2 = boolean>(__itemViewMinSize: P0, _maxSize: P1, _stretchesContent: P2): R;
    _mouseDownInSurroundingRegionShouldMoveWindow<R = boolean>(): R;
    dealloc<R = void>(): R;
    view<R = unknown>(): R;
    validate<R = void>(): R;
    _defaultGroupViewIfUsed<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initWithItemIdentifier<R = unknown, P0 = unknown>(_initWithItemIdentifier: P0): R;
    _isCustomItemType<R = boolean>(): R;
    _interlabelPadding<R = number>(): R;
    _interviewPadding<R = number>(): R;
    _allocDefaultView<R = unknown>(): R;
    subitems<R = NSArray>(): R;
    setSubitems<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace NSToolbarItemGroup {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSToolbarItem {
      alloc<R = NSToolbarItemGroup>(): R;
      new: <R = NSToolbarItemGroup>() => R;
    }
  }
}

declare const NSToolbarItemGroup: cocoa.NSToolbarItemGroup.CLASS;
