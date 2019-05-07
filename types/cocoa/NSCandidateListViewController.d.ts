/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCandidateListViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    stopTrackingInSegmentType_index<R = void, P0 = number, P1 = number>(_stopTrackingInSegmentType: P0, _index: P1): R;
    continueTrackingInSegmentType_index<R = void, P0 = number, P1 = number>(_continueTrackingInSegmentType: P0, _index: P1): R;
    startTrackingInSegmentType_index<R = void, P0 = number, P1 = number>(_startTrackingInSegmentType: P0, _index: P1): R;
    spellCheckerDidChangeCompletionCollapsed<R = void, P0 = unknown>(_spellCheckerDidChangeCompletionCollapsed: P0): R;
    userSetCollapsed<R = void, P0 = boolean>(_userSetCollapsed: P0): R;
    _setCollapsed<R = void, P0 = boolean>(__setCollapsed: P0): R;
    _prepareDelayedSetCollapsed<R = boolean>(): R;
    _delayedSetCollapsed<R = void>(): R;
    runPositionAnimation<R = void>(): R;
    _updateCollapsingStateConstraint<R = void>(): R;
    showPanel<R = void>(): R;
    candidateForTrackingIndex_candidateIndex<R = unknown, P0 = number, P1 = number>(_candidateForTrackingIndex: P0, _candidateIndex: P1): R;
    updateState<R = void>(): R;
    updateTitles<R = void>(): R;
    updateStateAndTitles_allowDelay<R = void, P0 = boolean, P1 = boolean>(_updateStateAndTitles: P0, _allowDelay: P1): R;
    updateTimerFired<R = void, P0 = unknown>(_updateTimerFired: P0): R;
    showCandidates_forString_inRect_view_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CGRect, P3 = unknown, P4 = CDUnknownBlockType>(_showCandidates: P0, _forString: P1, _inRect: P2, _view: P3, _completionHandler: P4): R;
    setCandidates_forSelectedRange_inString_rect_view_completionHandler<R = void, P0 = unknown, P1 = _NSRange, P2 = unknown, P3 = CGRect, P4 = unknown, P5 = CDUnknownBlockType>(_setCandidates: P0, _forSelectedRange: P1, _inString: P2, _rect: P3, _view: P4, _completionHandler: P5): R;
    setCandidates_forSelectedRange_inString<R = void, P0 = unknown, P1 = _NSRange, P2 = unknown>(_setCandidates: P0, _forSelectedRange: P1, _inString: P2): R;
    setCandidates_forSelectedRange_inString_replacedString_rect_view_completionHandler<R = void, P0 = unknown, P1 = _NSRange, P2 = unknown, P3 = unknown, P4 = CGRect, P5 = unknown, P6 = CDUnknownBlockType>(_setCandidates: P0, _forSelectedRange: P1, _inString: P2, _replacedString: P3, _rect: P4, _view: P5, _completionHandler: P6): R;
    _setNonTextCheckingResultCandidates<R = void, P0 = unknown>(__setNonTextCheckingResultCandidates: P0): R;
    _setTextCheckingResultCandidates_forSelectedRange_inString_replacedString<R = void, P0 = unknown, P1 = _NSRange, P2 = unknown, P3 = unknown>(__setTextCheckingResultCandidates: P0, _forSelectedRange: P1, _inString: P2, _replacedString: P3): R;
    _replacementStringForRange_inString_firstCandidateString<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown>(__replacementStringForRange: P0, _inString: P1, _firstCandidateString: P2): R;
    _stringForCandidate_atIndex<R = unknown, P0 = unknown, P1 = number>(__stringForCandidate: P0, _atIndex: P1): R;
    _compositeCandidateForCandidate_atIndex_addQuotes_isCorrection_isEmoji<R = unknown, P0 = unknown, P1 = number, P2 = boolean, P3 = boolean, P4 = boolean>(__compositeCandidateForCandidate: P0, _atIndex: P1, _addQuotes: P2, _isCorrection: P3, _isEmoji: P4): R;
    rightCandidate<R = unknown>(): R;
    setRightCandidate<R = void, P0 = unknown>(_setRightCandidate: P0): R;
    middleCandidate<R = unknown>(): R;
    setMiddleCandidate<R = void, P0 = unknown>(_setMiddleCandidate: P0): R;
    leftCandidate<R = unknown>(): R;
    setLeftCandidate<R = void, P0 = unknown>(_setLeftCandidate: P0): R;
    allowsCollapsing<R = boolean>(): R;
    setAllowsCollapsing<R = void, P0 = boolean>(_v: P0): R;
    collapsed<R = boolean>(): R;
    setCollapsed<R = void, P0 = boolean>(_v: P0): R;
    processingUserExpand<R = boolean>(): R;
    shouldAnimateNextLayoutPass<R = boolean>(): R;
    candidates<R = NSArray>(): R;
    accessoryViewController<R = NSViewController>(): R;
    setAccessoryViewController<R = void, P0 = NSViewController>(_v: P0): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    formattingBlock<R = CDUnknownBlockType>(): R;
    setFormattingBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    delegate<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_v: P0): R;
    client<R = NSTextInputClient>(): R;
    setClient<R = void, P0 = NSTextInputClient>(_v: P0): R;
    touchBarItem<R = NSTouchBarItem>(): R;
    setTouchBarItem<R = void, P0 = NSTouchBarItem>(_v: P0): R;
  }
  namespace NSCandidateListViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = NSCandidateListViewController>(): R;
      new: <R = NSCandidateListViewController>() => R;
      standardWidth<R = number>(): R;
    }
  }
}

declare const NSCandidateListViewController: cocoa.NSCandidateListViewController.CLASS;
