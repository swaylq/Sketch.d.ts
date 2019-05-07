/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableHeaderCell<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
    _indicatorImage<R = unknown>(): R;
    _setIndicatorImage<R = void, P0 = unknown>(__setIndicatorImage: P0): R;
    _canSupportTallerHeight<R = boolean>(): R;
    _shouldLeaveSpaceForSortIndicator<R = boolean>(): R;
    _alignFrame_withWithDataCellForView<R = boolean, P0 = CGRect, P1 = unknown>(__alignFrame: P0, _withWithDataCellForView: P1): R;
    _setSortable_showSortIndicator_ascending_priority_highlightForSort<R = void, P0 = boolean, P1 = boolean, P2 = boolean, P3 = number, P4 = boolean>(__setSortable: P0, _showSortIndicator: P1, _ascending: P2, _priority: P3, _highlightForSort: P4): R;
    _setSortable<R = void, P0 = boolean>(__setSortable: P0): R;
    sortIndicatorRectForBounds<R = CGRect, P0 = CGRect>(_sortIndicatorRectForBounds: P0): R;
    _useRTL<R = boolean>(): R;
    _currentSortIndicatorImage<R = unknown>(): R;
    drawSortIndicatorWithFrame_inView_ascending_priority<R = void, P0 = CGRect, P1 = unknown, P2 = boolean, P3 = number>(_drawSortIndicatorWithFrame: P0, _inView: P1, _ascending: P2, _priority: P3): R;
    _drawSortIndicatorIfNecessaryWithFrame_inView<R = void, P0 = CGRect, P1 = unknown>(__drawSortIndicatorIfNecessaryWithFrame: P0, _inView: P1): R;
    _coreUISortIndicatorDrawOptionsWithView_ascending<R = __CFDictionary, P0 = unknown, P1 = boolean>(__coreUISortIndicatorDrawOptionsWithView: P0, _ascending: P1): R;
    _shouldShowHighlightForSort<R = boolean>(): R;
    _adjustFontSize<R = void>(): R;
    _updateFont<R = void>(): R;
    _currentFont<R = unknown>(): R;
    _drawThemeContents_highlighted_inView<R = void, P0 = CGRect, P1 = boolean, P2 = unknown>(__drawThemeContents: P0, _highlighted: P1, _inView: P2): R;
    _drawGroupViewBackgroundWithFrame_highlighted_inView<R = void, P0 = CGRect, P1 = boolean, P2 = unknown>(__drawGroupViewBackgroundWithFrame: P0, _highlighted: P1, _inView: P2): R;
    _drawBezelWithFrame_highlighted_inView<R = void, P0 = CGRect, P1 = boolean, P2 = unknown>(__drawBezelWithFrame: P0, _highlighted: P1, _inView: P2): R;
    _coreUIBezelDrawOptionsWithView_highlighted_nextColumnAfterOneBeingDrawnIsSelected<R = __CFDictionary, P0 = unknown, P1 = boolean, P2 = boolean>(__coreUIBezelDrawOptionsWithView: P0, _highlighted: P1, _nextColumnAfterOneBeingDrawnIsSelected: P2): R;
    _coreUIState<R = __CFString>(): R;
    _shouldDrawRightSeparatorInView<R = boolean, P0 = unknown>(__shouldDrawRightSeparatorInView: P0): R;
    accessibilityIsSortDirectionAttributeSettable<R = boolean>(): R;
    accessibilitySortDirectionAttribute<R = unknown>(): R;
    accessibilityIsTitleAttributeSettable<R = boolean>(): R;
    accessibilityTitleAttribute<R = unknown>(): R;
    accessibilityIsSubroleAttributeSettable<R = boolean>(): R;
    accessibilitySubroleAttribute<R = unknown>(): R;
    accessibilityIsSortButton<R = boolean>(): R;
  }
  namespace NSTableHeaderCell {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextFieldCell {
      alloc<R = NSTableHeaderCell>(): R;
      new: <R = NSTableHeaderCell>() => R;
    }
  }
}

declare const NSTableHeaderCell: cocoa.NSTableHeaderCell.CLASS;
