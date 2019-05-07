/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextFinderBarView<T0 = void, T1 = void, T2 = void> extends NSView {
    _insertFindPattern<R = void, P0 = unknown>(__insertFindPattern: P0): R;
    validateUserInterfaceItem<R = boolean, P0 = unknown>(_validateUserInterfaceItem: P0): R;
    performTextFinderAction<R = void, P0 = unknown>(_performTextFinderAction: P0): R;
    _setEnabledForward_back<R = void, P0 = boolean, P1 = boolean>(__setEnabledForward: P0, _back: P1): R;
    _substringMatchType<R = number>(): R;
    _setSubstringMatchType<R = void, P0 = number>(__setSubstringMatchType: P0): R;
    _searchOptions<R = number>(): R;
    _setSearchOptions<R = void, P0 = number>(__setSearchOptions: P0): R;
    _container<R = unknown>(): R;
    _setTextFinder<R = void, P0 = unknown>(__setTextFinder: P0): R;
    _textFinder<R = unknown>(): R;
    _doneButton<R = void, P0 = unknown>(__doneButton: P0): R;
    _toggleFindReplace<R = void, P0 = unknown>(__toggleFindReplace: P0): R;
    _replaceField<R = unknown>(): R;
    _searchField<R = unknown>(): R;
    _contiguousWithTitlebar<R = boolean>(): R;
    _dividerPosition<R = number>(): R;
    _setReplaceMode<R = void, P0 = boolean>(__setReplaceMode: P0): R;
    _contentView<R = unknown>(): R;
    _updateSubviews<R = void>(): R;
    _updateReplaceUIVisibility<R = void>(): R;
    _layoutBarSubviews<R = void>(): R;
    _resizeIfNecessary<R = void>(): R;
    _requiredHeight<R = number>(): R;
    _nextKeyView<R = unknown>(): R;
    _actionResponderFromView<R = unknown, P0 = unknown>(__actionResponderFromView: P0): R;
    _updateNextKeyViews<R = void>(): R;
  }
  namespace NSTextFinderBarView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSTextFinderBarView>(): R;
      new: <R = NSTextFinderBarView>() => R;
    }
  }
}

declare const NSTextFinderBarView: cocoa.NSTextFinderBarView.CLASS;
