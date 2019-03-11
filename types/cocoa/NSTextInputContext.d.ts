/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTextInputContext<T = any> extends cocoa.NSObject {
    doCommandBySelector_completionHandlerWithResult<R = void, P0 = string, P1 = cocoa.CDUnknownBlockType>(_doCommandBySelector: P0, _completionHandlerWithResult: P1): R;
    incrementalSearchClientGeometry<R = number>(): R;
    drawsVerticallyForCharacterAtIndex<R = boolean, P0 = number>(_drawsVerticallyForCharacterAtIndex: P0): R;
    windowLevel<R = number>(): R;
    baselineDeltaForCharacterAtIndex<R = number, P0 = number>(_baselineDeltaForCharacterAtIndex: P0): R;
    fractionOfDistanceThroughGlyphForPoint<R = number, P0 = cocoa.CGPoint>(_fractionOfDistanceThroughGlyphForPoint: P0): R;
    attributedString<R = unknown>(): R;
    characterIndexForPoint<R = number, P0 = cocoa.CGPoint>(_characterIndexForPoint: P0): R;
    firstRectForCharacterRange_actualRange<R = cocoa.CGRect, P0 = cocoa._NSRange, P1 = cocoa._NSRange>(_firstRectForCharacterRange: P0, _actualRange: P1): R;
    validAttributesForMarkedText<R = unknown>(): R;
    attributedSubstringForProposedRange_actualRange<R = unknown, P0 = cocoa._NSRange, P1 = cocoa._NSRange>(_attributedSubstringForProposedRange: P0, _actualRange: P1): R;
    hasMarkedText<R = boolean>(): R;
    markedRange<R = cocoa._NSRange>(): R;
    selectedRange<R = cocoa._NSRange>(): R;
    unmarkText<R = void>(): R;
    setMarkedText_selectedRange_replacementRange<R = void, P0 = unknown, P1 = cocoa._NSRange, P2 = cocoa._NSRange>(_setMarkedText: P0, _selectedRange: P1, _replacementRange: P2): R;
    doCommandBySelector<R = void, P0 = string>(_doCommandBySelector: P0): R;
    insertText_replacementRange<R = void, P0 = unknown, P1 = cocoa._NSRange>(_insertText: P0, _replacementRange: P1): R;
    invalidateCharacterCoordinates<R = void>(): R;
    discardMarkedText<R = void>(): R;
    tryPeriodSubstitution_initialDispatchWork_dispatchSelRange_attrStringDispatchWork_validAttrString_attrSubstringProposedRange_attrSubstringDispatchWork_validProposedSubstring_stringFromNSSpellChecker_insertSubstitutionWork_continuation<R = void, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType, P5 = cocoa.CDUnknownBlockType, P6 = cocoa.CDUnknownBlockType, P7 = cocoa.CDUnknownBlockType, P8 = cocoa.CDUnknownBlockType, P9 = cocoa.CDUnknownBlockType>(_tryPeriodSubstitution_initialDispatchWork: P0, _dispatchSelRange: P1, _attrStringDispatchWork: P2, _validAttrString: P3, _attrSubstringProposedRange: P4, _attrSubstringDispatchWork: P5, _validProposedSubstring: P6, _stringFromNSSpellChecker: P7, _insertSubstitutionWork: P8, _continuation: P9): R;
    periodSubstitutionWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_periodSubstitutionWithCompletionHandler: P0): R;
    _handleEvent_options_allowingSyntheticEvent_completionHandler<R = boolean, P0 = unknown, P1 = number, P2 = boolean, P3 = cocoa.CDUnknownBlockType>(__handleEvent: P0, _options: P1, _allowingSyntheticEvent: P2, _completionHandler: P3): R;
    _handleEvent_options_completionHandler<R = boolean, P0 = unknown, P1 = number, P2 = cocoa.CDUnknownBlockType>(__handleEvent: P0, _options: P1, _completionHandler: P2): R;
    tryHandleEvent_HasMarkedText_withDispatchCondition_dispatchWork_continuation<R = void, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_tryHandleEvent_HasMarkedText_withDispatchCondition: P0, _dispatchWork: P1, _continuation: P2): R;
    tryDoubleSpaceSubstitution_WithDispatchCondition_dispatchSubstitutionWork_continuation<R = void, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_tryDoubleSpaceSubstitution_WithDispatchCondition: P0, _dispatchSubstitutionWork: P1, _continuation: P2): R;
    tryTSMProcessRawKeyEvent_orSubstitution_dispatchCondition_setupForDispatch_furtherCondition_doubleSpaceSubstitutionCondition_doubleSpaceSubstitutionWork_dispatchTSMWork_continuation<R = void, P0 = cocoa.OpaqueEventRef, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType, P5 = cocoa.CDUnknownBlockType, P6 = cocoa.CDUnknownBlockType, P7 = cocoa.CDUnknownBlockType>(_tryTSMProcessRawKeyEvent_orSubstitution: P0, _dispatchCondition: P1, _setupForDispatch: P2, _furtherCondition: P3, _doubleSpaceSubstitutionCondition: P4, _doubleSpaceSubstitutionWork: P5, _dispatchTSMWork: P6, _continuation: P7): R;
    _handleEvent_allowingSyntheticEvent<R = boolean, P0 = unknown, P1 = boolean>(__handleEvent: P0, _allowingSyntheticEvent: P1): R;
    handleEvent<R = boolean, P0 = unknown>(_handleEvent: P0): R;
    deactivate<R = void>(): R;
    activate<R = void>(): R;
    candidateListTouchBarItem<R = unknown>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    dealloc<R = void>(): R;
    initWithClient<R = unknown, P0 = unknown>(_initWithClient: P0): R;
    isCurrent<R = boolean>(): R;
    handleTSMEvent_completionHandler<R = void, P0 = void, P1 = cocoa.CDUnknownBlockType>(_handleTSMEvent: P0, _completionHandler: P1): R;
    tryHandleTSMEvent_firstRectInRangeLoop_withContext_setupForDispatch_loopCondition_dispatchWorkEach_eachLoopCompletion_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType, P5 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_firstRectInRangeLoop_withContext: P0, _setupForDispatch: P1, _loopCondition: P2, _dispatchWorkEach: P3, _eachLoopCompletion: P4, _continuation: P5): R;
    do_HandleTSMEvent_firstRectInRangeLoop_whileCondition_dispatchWorkEach_eachLoopCompletion_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType>(_do_HandleTSMEvent_firstRectInRangeLoop: P0, _whileCondition: P1, _dispatchWorkEach: P2, _eachLoopCompletion: P3, _continuation: P4): R;
    tryHandleTSMEvent_baselineDeltaForCharacterAtIndex_withContext_dispatchCondition_furtherDispatchCondition_dispatchWork_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_baselineDeltaForCharacterAtIndex_withContext: P0, _dispatchCondition: P1, _furtherDispatchCondition: P2, _dispatchWork: P3, _continuation: P4): R;
    tryHandleTSMEvent_attributedString_attributedSubstringForProposedRange_withContext_dispatchCondition_dispatchWork_dispatchFurtherCondition_dispatchFurtherWork_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType, P5 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_attributedString_attributedSubstringForProposedRange_withContext: P0, _dispatchCondition: P1, _dispatchWork: P2, _dispatchFurtherCondition: P3, _dispatchFurtherWork: P4, _continuation: P5): R;
    tryHandleTSMEvent_attributedSubstringForProposedRange_withContext_dispatchCondition_dispatchWork_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_attributedSubstringForProposedRange_withContext: P0, _dispatchCondition: P1, _dispatchWork: P2, _continuation: P3): R;
    tryHandleTSMEvent_drawsVerticallyForCharacterAtIndex_withContext_dispatchCondition_dispatchWork_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_drawsVerticallyForCharacterAtIndex_withContext: P0, _dispatchCondition: P1, _dispatchWork: P2, _continuation: P3): R;
    tryHandleTSMEvent_attributedString_withContext_dispatchCondition_dispatchWork_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_attributedString_withContext: P0, _dispatchCondition: P1, _dispatchWork: P2, _continuation: P3): R;
    tryHandleTSMEvent_offsetToPos_markedOrSelRange_withContext_markedOrSelRangeDispatchCondition_markedRangeContinuation_selectedRangeContinuation_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_offsetToPos_markedOrSelRange_withContext: P0, _markedOrSelRangeDispatchCondition: P1, _markedRangeContinuation: P2, _selectedRangeContinuation: P3, _continuation: P4): R;
    tryHandleTSMEvent_fractionOfDistanceThroughGlyphForPoint_withContext_dispatchCondition_furtherDispatchCondition_dispatchWork_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_fractionOfDistanceThroughGlyphForPoint_withContext: P0, _dispatchCondition: P1, _furtherDispatchCondition: P2, _dispatchWork: P3, _continuation: P4): R;
    tryHandleTSMEvent_markedRange_withContext_dispatchCondition_setupForDispatch_furtherDispatchCondition_dispatchWork_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType, P5 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_markedRange_withContext: P0, _dispatchCondition: P1, _setupForDispatch: P2, _furtherDispatchCondition: P3, _dispatchWork: P4, _continuation: P5): R;
    tryHandleTSMEvent_setMarkedText_withContext_dispatchCondition_setupForDispatch_dispatchWork_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_setMarkedText_withContext: P0, _dispatchCondition: P1, _setupForDispatch: P2, _dispatchWork: P3, _continuation: P4): R;
    tryHandleTSMEvent_insertFixLenText_withContext_dispatchCondition_setupForDispatch_nestedWorkaroundCondition_nestedWorkaroundDispatchWork_loopCondition_dispatchWorkEach_afterEachInsertText_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType, P5 = cocoa.CDUnknownBlockType, P6 = cocoa.CDUnknownBlockType, P7 = cocoa.CDUnknownBlockType, P8 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_insertFixLenText_withContext: P0, _dispatchCondition: P1, _setupForDispatch: P2, _nestedWorkaroundCondition: P3, _nestedWorkaroundDispatchWork: P4, _loopCondition: P5, _dispatchWorkEach: P6, _afterEachInsertText: P7, _continuation: P8): R;
    do_HandleTSMEvent_insertFixLenTextLoop_whileCondition_dispatchWorkEach_afterEachInsertText_continuation<R = void, P0 = cocoa.HandleTSMEventCompletionContext, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType, P3 = cocoa.CDUnknownBlockType, P4 = cocoa.CDUnknownBlockType>(_do_HandleTSMEvent_insertFixLenTextLoop: P0, _whileCondition: P1, _dispatchWorkEach: P2, _afterEachInsertText: P3, _continuation: P4): R;
    tryHandleTSMEvent_clearMarkedTextForAlternatives_withTest_dispatchWork_continuation<R = void, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_clearMarkedTextForAlternatives_withTest: P0, _dispatchWork: P1, _continuation: P2): R;
    tryHandleTSMEvent_HasMarkedText_withDispatchCondition_dispatchWork_continuation<R = void, P0 = cocoa.CDUnknownBlockType, P1 = cocoa.CDUnknownBlockType, P2 = cocoa.CDUnknownBlockType>(_tryHandleTSMEvent_HasMarkedText_withDispatchCondition: P0, _dispatchWork: P1, _continuation: P2): R;
    handleTSMEvent<R = number, P0 = void>(_handleTSMEvent: P0): R;
    auxiliary<R = unknown>(): R;
    setSecureInputMode<R = void, P0 = boolean>(_setSecureInputMode: P0): R;
    isSecureInputMode<R = boolean>(): R;
    setKeyBindingManager<R = void, P0 = unknown>(_setKeyBindingManager: P0): R;
    keyBindingManager<R = unknown>(): R;
    _isIOSMacClientNonTextEditing<R = boolean>(): R;
    _isIOSMacClientTextEditing<R = boolean>(): R;
    _isIOSMacClient<R = boolean>(): R;
    _isAsyncTextInputClient<R = boolean>(): R;
    _handleCommand<R = void, P0 = string>(__handleCommand: P0): R;
    _handleText<R = void, P0 = unknown>(__handleText: P0): R;
    remapsArrowKeysForVerticalOrientation<R = boolean>(): R;
    keyBindingState<R = unknown>(): R;
    _updateAllowedInputSources<R = void>(): R;
    _forceAttributedString<R = boolean>(): R;
    _invalidate<R = void>(): R;
    wouldHandleEvent_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_wouldHandleEvent: P0, _completionHandler: P1): R;
    drawsVerticallyForCharacterAtIndex_completionHandler<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_drawsVerticallyForCharacterAtIndex: P0, _completionHandler: P1): R;
    baselineDeltaForCharacterAtIndex_completionHandler<R = void, P0 = number, P1 = cocoa.CDUnknownBlockType>(_baselineDeltaForCharacterAtIndex: P0, _completionHandler: P1): R;
    fractionOfDistanceThroughGlyphForPoint_completionHandler<R = void, P0 = cocoa.CGPoint, P1 = cocoa.CDUnknownBlockType>(_fractionOfDistanceThroughGlyphForPoint: P0, _completionHandler: P1): R;
    attributedStringWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_attributedStringWithCompletionHandler: P0): R;
    characterIndexForPoint_completionHandler<R = void, P0 = cocoa.CGPoint, P1 = cocoa.CDUnknownBlockType>(_characterIndexForPoint: P0, _completionHandler: P1): R;
    firstRectForCharacterRange_completionHandler<R = void, P0 = cocoa._NSRange, P1 = cocoa.CDUnknownBlockType>(_firstRectForCharacterRange: P0, _completionHandler: P1): R;
    attributedSubstringForProposedRange_completionHandler<R = void, P0 = cocoa._NSRange, P1 = cocoa.CDUnknownBlockType>(_attributedSubstringForProposedRange: P0, _completionHandler: P1): R;
    hasMarkedTextWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_hasMarkedTextWithCompletionHandler: P0): R;
    markedRangeWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_markedRangeWithCompletionHandler: P0): R;
    selectedRangeWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_selectedRangeWithCompletionHandler: P0): R;
    unmarkTextWithCompletionHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_unmarkTextWithCompletionHandler: P0): R;
    setMarkedText_selectedRange_replacementRange_completionHandler<R = void, P0 = unknown, P1 = cocoa._NSRange, P2 = cocoa._NSRange, P3 = cocoa.CDUnknownBlockType>(_setMarkedText: P0, _selectedRange: P1, _replacementRange: P2, _completionHandler: P3): R;
    doCommandBySelector_completionHandler<R = void, P0 = string, P1 = cocoa.CDUnknownBlockType>(_doCommandBySelector: P0, _completionHandler: P1): R;
    insertText_replacementRange_completionHandler<R = void, P0 = unknown, P1 = cocoa._NSRange, P2 = cocoa.CDUnknownBlockType>(_insertText: P0, _replacementRange: P1, _completionHandler: P2): R;
    doCommandBySelectorWithResult<R = boolean, P0 = string>(_doCommandBySelectorWithResult: P0): R;
    convertToHalfWidth<R = void, P0 = unknown>(_convertToHalfWidth: P0): R;
    convertToFullWidth<R = void, P0 = unknown>(_convertToFullWidth: P0): R;
    convertToTraditionalChinese<R = void, P0 = unknown>(_convertToTraditionalChinese: P0): R;
    convertToSimplifiedChinese<R = void, P0 = unknown>(_convertToSimplifiedChinese: P0): R;
    capitalizeWord<R = void, P0 = unknown>(_capitalizeWord: P0): R;
    lowercaseWord<R = void, P0 = unknown>(_lowercaseWord: P0): R;
    uppercaseWord<R = void, P0 = unknown>(_uppercaseWord: P0): R;
    replaceTextInSelection<R = void, P0 = unknown>(_replaceTextInSelection: P0): R;
    addLinksInSelection<R = void, P0 = unknown>(_addLinksInSelection: P0): R;
    replaceDashesInSelection<R = void, P0 = unknown>(_replaceDashesInSelection: P0): R;
    replaceQuotesInSelection<R = void, P0 = unknown>(_replaceQuotesInSelection: P0): R;
    toggleAutomaticTextReplacement<R = void, P0 = unknown>(_toggleAutomaticTextReplacement: P0): R;
    toggleAutomaticDashSubstitution<R = void, P0 = unknown>(_toggleAutomaticDashSubstitution: P0): R;
    toggleAutomaticLinkDetection<R = void, P0 = unknown>(_toggleAutomaticLinkDetection: P0): R;
    toggleAutomaticQuoteSubstitution<R = void, P0 = unknown>(_toggleAutomaticQuoteSubstitution: P0): R;
    orderFrontSubstitutionsPanel<R = void, P0 = unknown>(_orderFrontSubstitutionsPanel: P0): R;
    ignoreSpelling<R = void, P0 = unknown>(_ignoreSpelling: P0): R;
    changeSpelling<R = void, P0 = unknown>(_changeSpelling: P0): R;
    toggleAutomaticSpellingCorrection<R = void, P0 = unknown>(_toggleAutomaticSpellingCorrection: P0): R;
    toggleGrammarChecking<R = void, P0 = unknown>(_toggleGrammarChecking: P0): R;
    toggleContinuousSpellChecking<R = void, P0 = unknown>(_toggleContinuousSpellChecking: P0): R;
    checkSpelling<R = void, P0 = unknown>(_checkSpelling: P0): R;
    showGuessPanel<R = void, P0 = unknown>(_showGuessPanel: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    prepareContextMenu<R = void, P0 = unknown>(_prepareContextMenu: P0): R;
    drawsVerticallyForCharacterAtIndex_RTI<R = boolean, P0 = number>(_drawsVerticallyForCharacterAtIndex_RTI: P0): R;
    baselineDeltaForCharacterAtIndex_RTI<R = number, P0 = number>(_baselineDeltaForCharacterAtIndex_RTI: P0): R;
    fractionOfDistanceThroughGlyphForPoint_RTI<R = number, P0 = cocoa.CGPoint>(_fractionOfDistanceThroughGlyphForPoint_RTI: P0): R;
    attributedString_RTI<R = unknown>(): R;
    characterIndexForPoint_RTI<R = number, P0 = cocoa.CGPoint>(_characterIndexForPoint_RTI: P0): R;
    firstRectForCharacterRange_RTI_actualRange<R = cocoa.CGRect, P0 = cocoa._NSRange, P1 = cocoa._NSRange>(_firstRectForCharacterRange_RTI: P0, _actualRange: P1): R;
    validAttributesForMarkedText_RTI<R = unknown>(): R;
    attributedSubstringForProposedRange_RTI_actualRange<R = unknown, P0 = cocoa._NSRange, P1 = cocoa._NSRange>(_attributedSubstringForProposedRange_RTI: P0, _actualRange: P1): R;
    hasMarkedText_RTI<R = boolean>(): R;
    markedRange_RTI<R = cocoa._NSRange>(): R;
    selectedRange_RTI<R = cocoa._NSRange>(): R;
    unmarkText_RTI<R = void>(): R;
    setMarkedText_RTI_selectedRange_replacementRange<R = void, P0 = unknown, P1 = cocoa._NSRange, P2 = cocoa._NSRange>(_setMarkedText_RTI: P0, _selectedRange: P1, _replacementRange: P2): R;
    doCommandBySelector_RTI_resultHandler<R = void, P0 = string, P1 = cocoa.CDUnknownBlockType>(_doCommandBySelector_RTI: P0, _resultHandler: P1): R;
    doCommandBySelector_RTI<R = void, P0 = string>(_doCommandBySelector_RTI: P0): R;
    insertText_RTI_replacementRange<R = void, P0 = unknown, P1 = cocoa._NSRange>(_insertText_RTI: P0, _replacementRange: P1): R;
    updateFunctionRowItemState<R = void>(): R;
    generateFunctionRowItemIdentifiers<R = unknown>(): R;
    setFunctionRowItemIdentifiers<R = void, P0 = unknown>(_setFunctionRowItemIdentifiers: P0): R;
    dismissTrackpadHandwritingTouchBarItemViewController<R = void>(): R;
    presentTrackpadHandwritingTouchBarItemViewController<R = void, P0 = unknown>(_presentTrackpadHandwritingTouchBarItemViewController: P0): R;
    dismissPressAndHoldTouchBarItemViewController<R = void>(): R;
    presentPressAndHoldTouchBarItemViewController<R = void, P0 = unknown>(_presentPressAndHoldTouchBarItemViewController: P0): R;
    dismissKeyboardIMTouchBarItemViewController<R = void>(): R;
    presentKeyboardIMTouchBarItemViewController<R = void, P0 = unknown>(_presentKeyboardIMTouchBarItemViewController: P0): R;
    isKeyboardInputSourceOverlayVisible<R = boolean>(): R;
    setKeyboardInputSourcePopoverTouchBar<R = void, P0 = unknown>(_setKeyboardInputSourcePopoverTouchBar: P0): R;
    keyboardInputSourcePopoverTouchBar<R = unknown>(): R;
    keyboardInputSourcePopoverTouchBarItem<R = unknown>(): R;
    dismissCharacterPickerTouchBarItemViewController<R = void>(): R;
    presentCharacterPickerTouchBarItemViewController<R = void, P0 = unknown>(_presentCharacterPickerTouchBarItemViewController: P0): R;
    setCharacterPickerTouchBarItem<R = void, P0 = unknown>(_setCharacterPickerTouchBarItem: P0): R;
    characterPickerTouchBarItem<R = unknown>(): R;
    characterPickerViewController<R = unknown>(): R;
    dismissTrackpadHandwritingFunctionRowItemViewController<R = void>(): R;
    presentTrackpadHandwritingFunctionRowItemViewController<R = void, P0 = unknown>(_presentTrackpadHandwritingFunctionRowItemViewController: P0): R;
    dismissCharacterPickerFunctionRowItemViewController<R = void>(): R;
    presentCharacterPickerFunctionRowItemViewController<R = void, P0 = unknown>(_presentCharacterPickerFunctionRowItemViewController: P0): R;
    dismissPressAndHoldFunctionRowItemViewController<R = void>(): R;
    presentPressAndHoldFunctionRowItemViewController<R = void, P0 = unknown>(_presentPressAndHoldFunctionRowItemViewController: P0): R;
    dismissKeyboardIMFunctionRowItemViewController<R = void>(): R;
    presentKeyboardIMFunctionRowItemViewController<R = void, P0 = unknown>(_presentKeyboardIMFunctionRowItemViewController: P0): R;
    handleEventByKeyboardLayout<R = boolean, P0 = unknown>(_handleEventByKeyboardLayout: P0): R;
    handleEventByInputMethod_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_handleEventByInputMethod: P0, _completionHandler: P1): R;
    handleEvent_completionHandler<R = void, P0 = unknown, P1 = cocoa.CDUnknownBlockType>(_handleEvent: P0, _completionHandler: P1): R;
    wantsToDelayTextChangeNotifications<R = boolean>(): R;
    handleMouseEvent<R = boolean, P0 = unknown>(_handleMouseEvent: P0): R;
    wantsToHandleMouseEvents<R = boolean>(): R;
    server<R = unknown>(): R;
    image<R = unknown>(): R;
    language<R = unknown>(): R;
    wantsToInterpretAllKeystrokes<R = boolean>(): R;
    markedTextSelectionChanged_client<R = void, P0 = cocoa._NSRange, P1 = unknown>(_markedTextSelectionChanged: P0, _client: P1): R;
    markedTextAbandoned<R = void, P0 = unknown>(_markedTextAbandoned: P0): R;
    localizedInputManagerName<R = unknown>(): R;
    cycleToNextInputKeyboardLayout<R = void, P0 = unknown>(_cycleToNextInputKeyboardLayout: P0): R;
    cycleToNextInputScript<R = void, P0 = unknown>(_cycleToNextInputScript: P0): R;
    client<R = cocoa.NSTextInputClient>(): R;
    bridgedTextSubstitutionController<R = cocoa.NSBridgedTextSubstitutionController>(): R;
    setBridgedTextSubstitutionController<R = void, P0 = cocoa.NSBridgedTextSubstitutionController>(_v: P0): R;
    bridgedTextCorrectionController<R = cocoa.NSBridgedTextCorrectionController>(): R;
    setBridgedTextCorrectionController<R = void, P0 = cocoa.NSBridgedTextCorrectionController>(_v: P0): R;
    bridgedTextTouchBarController<R = cocoa.NSBridgedTextTouchBarController>(): R;
    setBridgedTextTouchBarController<R = void, P0 = cocoa.NSBridgedTextTouchBarController>(_v: P0): R;
    tiSelectedTextRange<R = cocoa._NSRange>(): R;
    setTiSelectedTextRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    tiTextInputTraits<R = cocoa.TITextInputTraits>(): R;
    setTiTextInputTraits<R = void, P0 = cocoa.TITextInputTraits>(_v: P0): R;
    selectedKeyboardInputSource<R = cocoa.NSString>(): R;
    setSelectedKeyboardInputSource<R = void, P0 = cocoa.NSString>(_v: P0): R;
    keyboardInputSources<R = cocoa.NSArray>(): R;
    allowedInputSourceLocales<R = cocoa.NSArray>(): R;
    setAllowedInputSourceLocales<R = void, P0 = cocoa.NSArray>(_v: P0): R;
    acceptsGlyphInfo<R = boolean>(): R;
    setAcceptsGlyphInfo<R = void, P0 = boolean>(_v: P0): R;
    rtiSelectedTextRange<R = cocoa._NSRange>(): R;
    setRtiSelectedTextRange<R = void, P0 = cocoa._NSRange>(_v: P0): R;
    hasActiveTextInputFunctionRowItem<R = boolean>(): R;
  }
  namespace classes {
    export interface NSTextInputContext<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSTextInputContext>(): R;
      new: <R = NSTextInputContext>() => R;
      localeForInputSource<R = unknown, P0 = unknown>(_localeForInputSource: P0): R;
      localizedNameForInputSource<R = unknown, P0 = unknown>(_localizedNameForInputSource: P0): R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
      currentInputContext_withFirstResponderSync<R = unknown, P0 = boolean>(_currentInputContext_withFirstResponderSync: P0): R;
      currentInputContext<R = unknown>(): R;
      initialize<R = void>(): R;
      isInputContextRefconValid<R = boolean, P0 = void>(_isInputContextRefconValid: P0): R;
      inputSourcesFromInputSourceLocales<R = unknown, P0 = unknown>(_inputSourcesFromInputSourceLocales: P0): R;
      processInputKeyBindings<R = boolean, P0 = unknown>(_processInputKeyBindings: P0): R;
      updateInputContexts<R = void>(): R;
      inputContextWithClient<R = unknown, P0 = unknown>(_inputContextWithClient: P0): R;
      _applicationDeactivated<R = void, P0 = unknown>(__applicationDeactivated: P0): R;
      keyPathsForValuesAffectingKeyboardInputSourceOverlayVisible<R = unknown>(): R;
      currentKeyboardInputSourceParticipatesInTouchBar<R = boolean>(): R;
    }
  }
}

declare const NSTextInputContext: cocoa.classes.NSTextInputContext;
