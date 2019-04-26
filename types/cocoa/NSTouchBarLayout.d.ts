/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarLayout<T0 = void, T1 = void, T2 = void> extends NSObject {
    _calculateLayoutOfItems_withAvailableSize_startingWidth_xOrigin_sharesLeftEdge_sharesRightEdge_accountsForWidgetSpace_itemsToFrames<R = void, P0 = unknown, P1 = CGSize, P2 = number, P3 = number, P4 = boolean, P5 = boolean, P6 = boolean, P7 = unknown>(__calculateLayoutOfItems: P0, _withAvailableSize: P1, _startingWidth: P2, _xOrigin: P3, _sharesLeftEdge: P4, _sharesRightEdge: P5, _accountsForWidgetSpace: P6, _itemsToFrames: P7): R;
    _divideAndCalculateLayoutOfItems_withAvailableSize_startingWidth_xOrigin_sharesLeftEdge_sharesRightEdge_accountsForWidgetSpace_itemsToFrames<R = void, P0 = unknown, P1 = CGSize, P2 = number, P3 = number, P4 = boolean, P5 = boolean, P6 = boolean, P7 = unknown>(__divideAndCalculateLayoutOfItems: P0, _withAvailableSize: P1, _startingWidth: P2, _xOrigin: P3, _sharesLeftEdge: P4, _sharesRightEdge: P5, _accountsForWidgetSpace: P6, _itemsToFrames: P7): R;
    _adjustedHeightForItem_availableHeight<R = number, P0 = unknown, P1 = number>(__adjustedHeightForItem: P0, _availableHeight: P1): R;
    _orderedItemsGivenUnorderedArray_usingOrderedArray<R = unknown, P0 = unknown, P1 = unknown>(__orderedItemsGivenUnorderedArray: P0, _usingOrderedArray: P1): R;
    _contentClippingWidthOfItems_sharesLeftEdge_sharesRightEdge<R = number, P0 = unknown, P1 = boolean, P2 = boolean>(__contentClippingWidthOfItems: P0, _sharesLeftEdge: P1, _sharesRightEdge: P2): R;
    _maxWidthOfItems_sharesLeftEdge_sharesRightEdge_containsFlexibleSpaceItems<R = number, P0 = unknown, P1 = boolean, P2 = boolean, P3 = string>(__maxWidthOfItems: P0, _sharesLeftEdge: P1, _sharesRightEdge: P2, _containsFlexibleSpaceItems: P3): R;
    _minWidthOfItems_sharesLeftEdge_sharesRightEdge<R = number, P0 = unknown, P1 = boolean, P2 = boolean>(__minWidthOfItems: P0, _sharesLeftEdge: P1, _sharesRightEdge: P2): R;
    _aggregateWidthOfItems_sharesLeftEdge_sharesRightEdge_widthMeasurement<R = number, P0 = unknown, P1 = boolean, P2 = boolean, P3 = CDUnknownBlockType>(__aggregateWidthOfItems: P0, _sharesLeftEdge: P1, _sharesRightEdge: P2, _widthMeasurement: P3): R;
    _prioritizedItems<R = unknown, P0 = unknown>(__prioritizedItems: P0): R;
    _centerRectGivenItems_remainingLeftWidth_remainingRightWidth_sharesLeftEdge_sharesRightEdge<R = CGRect, P0 = unknown, P1 = number, P2 = number, P3 = boolean, P4 = boolean>(__centerRectGivenItems: P0, _remainingLeftWidth: P1, _remainingRightWidth: P2, _sharesLeftEdge: P3, _sharesRightEdge: P4): R;
    _centerRectGivenItems_leftItems_rightItems_totalWidth_xOrigin<R = CGRect, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = number>(__centerRectGivenItems: P0, _leftItems: P1, _rightItems: P2, _totalWidth: P3, _xOrigin: P4): R;
    _adjustForItemUserInterfaceLayoutDirection_itemsToAttributes_availableWidth_xOrigin<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(__adjustForItemUserInterfaceLayoutDirection: P0, _itemsToAttributes: P1, _availableWidth: P2, _xOrigin: P3): R;
    _touchUpSpacesInItems_itemsToAttributes<R = void, P0 = unknown, P1 = unknown>(__touchUpSpacesInItems: P0, _itemsToAttributes: P1): R;
    _rightInsetOfItems_sharesRightEdge<R = number, P0 = unknown, P1 = boolean>(__rightInsetOfItems: P0, _sharesRightEdge: P1): R;
    _leftInsetOfItems_sharesLeftEdge<R = number, P0 = unknown, P1 = boolean>(__leftInsetOfItems: P0, _sharesLeftEdge: P1): R;
    items_centerItems_minSize_maxSize<R = void, P0 = unknown, P1 = unknown, P2 = CGSize, P3 = CGSize>(_items: P0, _centerItems: P1, _minSize: P2, _maxSize: P3): R;
    _calculateLayoutOfItems_centerItems_givenSize_originX<R = unknown, P0 = unknown, P1 = unknown, P2 = CGSize, P3 = number>(__calculateLayoutOfItems: P0, _centerItems: P1, _givenSize: P2, _originX: P3): R;
    _attributesOfItems_centerItems_givenSize_sharesLeftEdge_sharesRightEdge_xOrigin<R = unknown, P0 = unknown, P1 = unknown, P2 = CGSize, P3 = boolean, P4 = boolean, P5 = number>(__attributesOfItems: P0, _centerItems: P1, _givenSize: P2, _sharesLeftEdge: P3, _sharesRightEdge: P4, _xOrigin: P5): R;
    attributesOfItems_centerItems_givenSize<R = unknown, P0 = unknown, P1 = unknown, P2 = CGSize>(_attributesOfItems: P0, _centerItems: P1, _givenSize: P2): R;
    initWithVisualCenterX<R = unknown, P0 = number>(_initWithVisualCenterX: P0): R;
    allowsSingleItemClipping<R = boolean>(): R;
    setAllowsSingleItemClipping<R = void, P0 = boolean>(_v: P0): R;
    centerIsPrincipal<R = boolean>(): R;
    setCenterIsPrincipal<R = void, P0 = boolean>(_v: P0): R;
    standardCenterWidth<R = number>(): R;
    setStandardCenterWidth<R = void, P0 = number>(_v: P0): R;
    itemUserInterfaceLayoutDirection<R = number>(): R;
    setItemUserInterfaceLayoutDirection<R = void, P0 = number>(_v: P0): R;
    accessoryUserInterfaceLayoutDirection<R = number>(): R;
    setAccessoryUserInterfaceLayoutDirection<R = void, P0 = number>(_v: P0): R;
    enforcesUniformHeight<R = boolean>(): R;
    setEnforcesUniformHeight<R = void, P0 = boolean>(_v: P0): R;
    defaultItemPadding<R = number>(): R;
    setDefaultItemPadding<R = void, P0 = number>(_v: P0): R;
    visualCenterX<R = number>(): R;
    setVisualCenterX<R = void, P0 = number>(_v: P0): R;
    leadingWidgetWidth<R = number>(): R;
    setLeadingWidgetWidth<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSTouchBarLayout {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSTouchBarLayout>(): R;
      new: <R = NSTouchBarLayout>() => R;
      toolbarLayoutWithVisualCenterX<R = unknown, P0 = number>(_toolbarLayoutWithVisualCenterX: P0): R;
      touchBarLayoutWithVisualCenterX<R = unknown, P0 = number>(_touchBarLayoutWithVisualCenterX: P0): R;
    }
  }
}

declare const NSTouchBarLayout: cocoa.NSTouchBarLayout.CLASS;
