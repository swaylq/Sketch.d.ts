/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFindPanelTextFinder<T0 = void, T1 = void, T2 = void> extends _NSTextFinderImpl {
    _orderFrontFindPanel<R = void, P0 = unknown>(__orderFrontFindPanel: P0): R;
    performTextFinderAction<R = void, P0 = unknown>(_performTextFinderAction: P0): R;
    _replacementString<R = unknown>(): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    _loadUI<R = void>(): R;
    _makeCurrentSearchOptionsDefault<R = void>(): R;
    _setCaseInsensitiveSearchDefault<R = void, P0 = boolean>(__setCaseInsensitiveSearchDefault: P0): R;
    _caseInsensitiveSearchDefault<R = boolean>(): R;
    _setDefaultSubstringMatchType<R = void, P0 = number>(__setDefaultSubstringMatchType: P0): R;
    _defaultSubstringMatchType<R = number>(): R;
  }
  namespace _NSFindPanelTextFinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSTextFinderImpl {
      alloc<R = _NSFindPanelTextFinder>(): R;
      new: <R = _NSFindPanelTextFinder>() => R;
    }
  }
}
