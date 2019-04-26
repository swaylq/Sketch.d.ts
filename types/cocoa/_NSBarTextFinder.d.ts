/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBarTextFinder<T0 = void, T1 = void, T2 = void> extends _NSTextFinderImpl, NSSearchFieldDelegateProtocol {
    _findPatternSelected<R = void, P0 = unknown>(__findPatternSelected: P0): R;
    _performFindBarAction<R = void, P0 = unknown>(__performFindBarAction: P0): R;
    control_textView_doCommandBySelector<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(_control: P0, _textView: P1, _doCommandBySelector: P2): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    _searchFieldAction<R = void, P0 = unknown>(__searchFieldAction: P0): R;
    _divergeFromPasteboard<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _findBarWindowDidBecomeKey<R = void, P0 = unknown>(__findBarWindowDidBecomeKey: P0): R;
    _activateWithReplace<R = void, P0 = boolean>(__activateWithReplace: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    _changeSearchOptions<R = void, P0 = unknown>(__changeSearchOptions: P0): R;
    _changeMatchSettings<R = void, P0 = unknown>(__changeMatchSettings: P0): R;
    _statusStringForMatchCount<R = unknown, P0 = number>(__statusStringForMatchCount: P0): R;
    _newSearchForString_showFirstMatch<R = void, P0 = unknown, P1 = boolean>(__newSearchForString: P0, _showFirstMatch: P1): R;
    _setReplacementCount<R = void, P0 = number>(__setReplacementCount: P0): R;
    _updateForwardBackButtons<R = void>(): R;
    _replacementString<R = unknown>(): R;
    _clearAllMatches<R = void>(): R;
    _findBarViewWillMoveToWindow<R = void, P0 = unknown>(__findBarViewWillMoveToWindow: P0): R;
    _setView<R = void, P0 = unknown>(__setView: P0): R;
    _registerObserversForWindow<R = void, P0 = unknown>(__registerObserversForWindow: P0): R;
    _unregisterObserversForWindow<R = void, P0 = unknown>(__unregisterObserversForWindow: P0): R;
    _view<R = unknown>(): R;
    _loadUI<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSBarTextFinder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSTextFinderImpl, NSSearchFieldDelegateProtocol {
      alloc<R = _NSBarTextFinder>(): R;
      new: <R = _NSBarTextFinder>() => R;
    }
  }
}
