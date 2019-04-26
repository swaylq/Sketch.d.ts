/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCandidateListTouchBarItem<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem, NSTouchBarItemPositionAnimationDelegateProtocol {
    shouldAnimateNextLayoutPass<R = boolean>(): R;
    _setTextInputContextViewController<R = void, P0 = unknown>(__setTextInputContextViewController: P0): R;
    _textInputContextViewController<R = unknown>(): R;
    updateWithInsertionPointVisibility<R = void, P0 = boolean>(_updateWithInsertionPointVisibility: P0): R;
    _didChangeCandidateListVisibility<R = void>(): R;
    setCandidates_forSelectedRange_inString_rect_view_completionHandler<R = void, P0 = unknown, P1 = _NSRange, P2 = unknown, P3 = CGRect, P4 = unknown, P5 = CDUnknownBlockType>(_setCandidates: P0, _forSelectedRange: P1, _inString: P2, _rect: P3, _view: P4, _completionHandler: P5): R;
    setCandidates_forSelectedRange_inString<R = void, P0 = unknown, P1 = _NSRange, P2 = unknown>(_setCandidates: P0, _forSelectedRange: P1, _inString: P2): R;
    setFormattingBlock<R = void, P0 = CDUnknownBlockType>(_setFormattingBlock: P0): R;
    formattingBlock<R = CDUnknownBlockType>(): R;
    view<R = unknown>(): R;
    viewController<R = unknown>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _commonInit<R = void>(): R;
    _automaticTextCompletionChanged<R = void, P0 = unknown>(__automaticTextCompletionChanged: P0): R;
    allowsTextInputContextCandidates<R = boolean>(): R;
    setAllowsTextInputContextCandidates<R = void, P0 = boolean>(_v: P0): R;
    allowsCollapsing<R = boolean>(): R;
    setAllowsCollapsing<R = void, P0 = boolean>(_v: P0): R;
    collapsed<R = boolean>(): R;
    setCollapsed<R = void, P0 = boolean>(_v: P0): R;
    candidateListVisible<R = boolean>(): R;
    candidates<R = NSArray>(): R;
    attributedStringForCandidate<R = CDUnknownBlockType>(): R;
    setAttributedStringForCandidate<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    delegate<R = NSCandidateListTouchBarItemDelegate>(): R;
    setDelegate<R = void, P0 = NSCandidateListTouchBarItemDelegate>(_v: P0): R;
    client<R = NSTextInputClient>(): R;
    setClient<R = void, P0 = NSTextInputClient>(_v: P0): R;
    customizationLabel<R = NSString>(): R;
    setCustomizationLabel<R = void, P0 = NSString>(_v: P0): R;
    candidateListViewController<R = NSCandidateListViewController>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSCandidateListTouchBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTouchBarItem, NSTouchBarItemPositionAnimationDelegateProtocol {
      alloc<R = NSCandidateListTouchBarItem>(): R;
      new: <R = NSCandidateListTouchBarItem>() => R;
      standardWidth<R = number>(): R;
      candidateBarAppearance<R = unknown>(): R;
    }
  }
}

declare const NSCandidateListTouchBarItem: cocoa.NSCandidateListTouchBarItem.CLASS;
