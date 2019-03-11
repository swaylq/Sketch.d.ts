/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpellChecker<T = any> extends cocoa.NSObject {
    _setTestCorrectionDictionary<R = void, P0 = unknown>(__setTestCorrectionDictionary: P0): R;
    insertsAutospaceAfterString_language<R = boolean, P0 = unknown, P1 = unknown>(_insertsAutospaceAfterString: P0, _language: P1): R;
    deletesAutospaceBeforeString_language<R = boolean, P0 = unknown, P1 = unknown>(_deletesAutospaceBeforeString: P0, _language: P1): R;
    deletesAutospaceBetweenString_andString_language<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_deletesAutospaceBetweenString: P0, _andString: P1, _language: P2): R;
    preventsAutocorrectionBeforeString_language<R = boolean, P0 = unknown, P1 = unknown>(_preventsAutocorrectionBeforeString: P0, _language: P1): R;
    setAutomaticPeriodSubstitutionEnabled<R = void, P0 = boolean>(_setAutomaticPeriodSubstitutionEnabled: P0): R;
    isAutomaticPeriodSubstitutionEnabled<R = boolean>(): R;
    setAutomaticCapitalizationEnabled<R = void, P0 = boolean>(_setAutomaticCapitalizationEnabled: P0): R;
    isAutomaticCapitalizationEnabled<R = boolean>(): R;
    recordAcceptedCandidateIndex_inCandidates_firstCandidateIsTypedString<R = void, P0 = number, P1 = unknown, P2 = boolean>(_recordAcceptedCandidateIndex: P0, _inCandidates: P1, _firstCandidateIsTypedString: P2): R;
    setAutomaticTextCompletionCollapsed<R = void, P0 = boolean>(_setAutomaticTextCompletionCollapsed: P0): R;
    isAutomaticTextCompletionCollapsed<R = boolean>(): R;
    setAutomaticTextCompletionEnabled<R = void, P0 = boolean>(_setAutomaticTextCompletionEnabled: P0): R;
    isAutomaticTextCompletionEnabled<R = boolean>(): R;
    setAutomaticDashSubstitutionEnabled<R = void, P0 = boolean>(_setAutomaticDashSubstitutionEnabled: P0): R;
    isAutomaticDashSubstitutionEnabled<R = boolean>(): R;
    setAutomaticQuoteSubstitutionEnabled<R = void, P0 = boolean>(_setAutomaticQuoteSubstitutionEnabled: P0): R;
    isAutomaticQuoteSubstitutionEnabled<R = boolean>(): R;
    setAutomaticSpellingCorrectionEnabled<R = void, P0 = boolean>(_setAutomaticSpellingCorrectionEnabled: P0): R;
    isAutomaticSpellingCorrectionEnabled<R = boolean>(): R;
    setAutomaticTextReplacementEnabled<R = void, P0 = boolean>(_setAutomaticTextReplacementEnabled: P0): R;
    isAutomaticTextReplacementEnabled<R = boolean>(): R;
    dismissAuxiliaryWindows<R = void>(): R;
    correctionIndicatorForView<R = unknown, P0 = unknown>(_correctionIndicatorForView: P0): R;
    makeCorrectionBubbleKeyForView<R = void, P0 = unknown>(_makeCorrectionBubbleKeyForView: P0): R;
    cancelCorrectionBubbleForView<R = void, P0 = unknown>(_cancelCorrectionBubbleForView: P0): R;
    dismissCorrectionBubbleForView<R = void, P0 = unknown>(_dismissCorrectionBubbleForView: P0): R;
    cancelCorrectionIndicatorForView<R = void, P0 = unknown>(_cancelCorrectionIndicatorForView: P0): R;
    dismissCorrectionIndicatorForView<R = void, P0 = unknown>(_dismissCorrectionIndicatorForView: P0): R;
    dismissCorrectionWithTag_andAccept<R = void, P0 = number, P1 = boolean>(_dismissCorrectionWithTag: P0, _andAccept: P1): R;
    dismissCorrection_acceptCorrection<R = void, P0 = number, P1 = boolean>(_dismissCorrection: P0, _acceptCorrection: P1): R;
    showCorrection_forStringInRect_view_completionHandler<R = number, P0 = unknown, P1 = cocoa.CGRect, P2 = unknown, P3 = cocoa.CDUnknownBlockType>(_showCorrection: P0, _forStringInRect: P1, _view: P2, _completionHandler: P3): R;
    showCorrectionBubbleOfType_primaryString_alternativeStrings_forStringInRect_view_completionHandler<R = void, P0 = number, P1 = unknown, P2 = unknown, P3 = cocoa.CGRect, P4 = unknown, P5 = cocoa.CDUnknownBlockType>(_showCorrectionBubbleOfType: P0, _primaryString: P1, _alternativeStrings: P2, _forStringInRect: P3, _view: P4, _completionHandler: P5): R;
    showCorrectionIndicatorOfType_primaryString_alternativeStrings_forStringInRect_view_completionHandler<R = void, P0 = number, P1 = unknown, P2 = unknown, P3 = cocoa.CGRect, P4 = unknown, P5 = cocoa.CDUnknownBlockType>(_showCorrectionIndicatorOfType: P0, _primaryString: P1, _alternativeStrings: P2, _forStringInRect: P3, _view: P4, _completionHandler: P5): R;
    languageForWordRange_inString_orthography<R = unknown, P0 = cocoa._NSRange, P1 = unknown, P2 = unknown>(_languageForWordRange: P0, _inString: P1, _orthography: P2): R;
    requestCandidatesForSelectedRange_inString_types_options_inSpellDocumentWithTag_completionHandler<R = number, P0 = cocoa._NSRange, P1 = unknown, P2 = number, P3 = unknown, P4 = number, P5 = cocoa.CDUnknownBlockType>(_requestCandidatesForSelectedRange: P0, _inString: P1, _types: P2, _options: P3, _inSpellDocumentWithTag: P4, _completionHandler: P5): R;
    _retryCandidateOperation<R = void, P0 = unknown>(__retryCandidateOperation: P0): R;
    checkString_range_types_options_inSpellDocumentWithTag_orthography_wordCount<R = unknown, P0 = unknown, P1 = cocoa._NSRange, P2 = number, P3 = unknown, P4 = number, P5 = unknown, P6 = number>(_checkString: P0, _range: P1, _types: P2, _options: P3, _inSpellDocumentWithTag: P4, _orthography: P5, _wordCount: P6): R;
    requestCheckingOfString_range_types_options_inSpellDocumentWithTag_completionHandler<R = number, P0 = unknown, P1 = cocoa._NSRange, P2 = number, P3 = unknown, P4 = number, P5 = cocoa.CDUnknownBlockType>(_requestCheckingOfString: P0, _range: P1, _types: P2, _options: P3, _inSpellDocumentWithTag: P4, _completionHandler: P5): R;
    _requestCheckingOfString_range_types_options_inSpellDocumentWithTag_waitUntilFinished_completionHandler<R = number, P0 = unknown, P1 = cocoa._NSRange, P2 = number, P3 = unknown, P4 = number, P5 = boolean, P6 = cocoa.CDUnknownBlockType>(__requestCheckingOfString: P0, _range: P1, _types: P2, _options: P3, _inSpellDocumentWithTag: P4, _waitUntilFinished: P5, _completionHandler: P6): R;
    menuForResult_string_options_atLocation_inView<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = cocoa.CGPoint, P4 = unknown>(_menuForResult: P0, _string: P1, _options: P2, _atLocation: P3, _inView: P4): R;
    _dataDetectorActionContextClass<R = unknown>(): R;
    _dataDetectorsActionsManager<R = unknown>(): R;
    _dataDetectorActionsManagerClass<R = unknown>(): R;
    _legacyUserReplacementsDictionary<R = unknown>(): R;
    defaultEmojiReplacementsDictionary<R = unknown>(): R;
    setAdditionalTextReplacementsDictionary<R = void, P0 = unknown>(_setAdditionalTextReplacementsDictionary: P0): R;
    _replacementPreferencesChanged<R = void>(): R;
    _resetReplacementPreferences<R = void>(): R;
    _reallyResetReplacementPreferences<R = void>(): R;
    _writeReplacementPreferences<R = void>(): R;
    _quotesPreferencesChanged<R = void>(): R;
    userQuotesArrayForLanguage<R = unknown, P0 = unknown>(_userQuotesArrayForLanguage: P0): R;
    _changeQuotes<R = void, P0 = unknown>(__changeQuotes: P0): R;
    _changeSubstitutions<R = void, P0 = unknown>(__changeSubstitutions: P0): R;
    checkTextInSelection<R = void, P0 = unknown>(_checkTextInSelection: P0): R;
    checkTextInDocument<R = void, P0 = unknown>(_checkTextInDocument: P0): R;
    _updateSubstitutions<R = void>(): R;
    _updateSingleQuotes_doubleQuotes_useByLanguage<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__updateSingleQuotes: P0, _doubleQuotes: P1, _useByLanguage: P2): R;
    control_textView_doCommandBySelector<R = boolean, P0 = unknown, P1 = unknown, P2 = string>(_control: P0, _textView: P1, _doCommandBySelector: P2): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    updateSpellingPanelWithGrammarString_detail<R = void, P0 = unknown, P1 = unknown>(_updateSpellingPanelWithGrammarString: P0, _detail: P1): R;
    updateSpellingPanelWithMisspelledWordRange_inString<R = void, P0 = cocoa._NSRange, P1 = unknown>(_updateSpellingPanelWithMisspelledWordRange: P0, _inString: P1): R;
    updateSpellingPanelWithMisspelledWord<R = void, P0 = unknown>(_updateSpellingPanelWithMisspelledWord: P0): R;
    _textCheckingResultsFromSpellServerData<R = unknown, P0 = unknown>(__textCheckingResultsFromSpellServerData: P0): R;
    candidatesForSelectedRange_inString_types_options_offset_orthography_inSpellDocumentWithTag<R = unknown, P0 = cocoa._NSRange, P1 = unknown, P2 = number, P3 = unknown, P4 = number, P5 = unknown, P6 = number>(_candidatesForSelectedRange: P0, _inString: P1, _types: P2, _options: P3, _offset: P4, _orthography: P5, _inSpellDocumentWithTag: P6): R;
    nextLetterDictionariesForPartialWordRange_inString_language_inSpellDocumentWithTag<R = unknown, P0 = cocoa._NSRange, P1 = unknown, P2 = unknown, P3 = number>(_nextLetterDictionariesForPartialWordRange: P0, _inString: P1, _language: P2, _inSpellDocumentWithTag: P3): R;
    completionDictionariesForPartialWordRange_inString_language_inSpellDocumentWithTag<R = unknown, P0 = cocoa._NSRange, P1 = unknown, P2 = unknown, P3 = number>(_completionDictionariesForPartialWordRange: P0, _inString: P1, _language: P2, _inSpellDocumentWithTag: P3): R;
    completionsForPartialWordRange_inString_language_inSpellDocumentWithTag<R = unknown, P0 = cocoa._NSRange, P1 = unknown, P2 = unknown, P3 = number>(_completionsForPartialWordRange: P0, _inString: P1, _language: P2, _inSpellDocumentWithTag: P3): R;
    _checkSpellingAndGrammarInString_range_enclosingRange_offset_types_options_orthography_inSpellDocumentWithTag_mutableResults_wordCount<R = boolean, P0 = unknown, P1 = cocoa._NSRange, P2 = cocoa._NSRange, P3 = number, P4 = number, P5 = unknown, P6 = unknown, P7 = number, P8 = unknown, P9 = number>(__checkSpellingAndGrammarInString: P0, _range: P1, _enclosingRange: P2, _offset: P3, _types: P4, _options: P5, _orthography: P6, _inSpellDocumentWithTag: P7, _mutableResults: P8, _wordCount: P9): R;
    recordResponse_toCorrection_forWord_language_inSpellDocumentWithTag<R = void, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown, P4 = number>(_recordResponse: P0, _toCorrection: P1, _forWord: P2, _language: P3, _inSpellDocumentWithTag: P4): R;
    _clearLastCorrectionPanel<R = void>(): R;
    _setLastCorrectionPanelExplicitlyAccepted_rejected<R = void, P0 = boolean, P1 = boolean>(__setLastCorrectionPanelExplicitlyAccepted: P0, _rejected: P1): R;
    correctionForWordRange_inString_language_inSpellDocumentWithTag<R = unknown, P0 = cocoa._NSRange, P1 = unknown, P2 = unknown, P3 = number>(_correctionForWordRange: P0, _inString: P1, _language: P2, _inSpellDocumentWithTag: P3): R;
    countWordsInString_language<R = number, P0 = unknown, P1 = unknown>(_countWordsInString: P0, _language: P1): R;
    checkSpellingOfString_startingAt<R = cocoa._NSRange, P0 = unknown, P1 = number>(_checkSpellingOfString: P0, _startingAt: P1): R;
    checkSpellingOfString_startingAt_language_wrap_inSpellDocumentWithTag_wordCount<R = cocoa._NSRange, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean, P4 = number, P5 = number>(_checkSpellingOfString: P0, _startingAt: P1, _language: P2, _wrap: P3, _inSpellDocumentWithTag: P4, _wordCount: P5): R;
    checkSpellingOfString_startingAt_language_wrap_inSpellDocumentWithTag_wordCount_reconnectOnError<R = cocoa._NSRange, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean, P4 = number, P5 = number, P6 = boolean>(_checkSpellingOfString: P0, _startingAt: P1, _language: P2, _wrap: P3, _inSpellDocumentWithTag: P4, _wordCount: P5, _reconnectOnError: P6): R;
    _checkSpellingOfString_startingAt_language_wrap_inSpellDocumentWithTag_wordCount_reconnectOnError<R = cocoa._NSRange, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean, P4 = number, P5 = number, P6 = boolean>(__checkSpellingOfString: P0, _startingAt: P1, _language: P2, _wrap: P3, _inSpellDocumentWithTag: P4, _wordCount: P5, _reconnectOnError: P6): R;
    checkGrammarOfString_startingAt_language_wrap_inSpellDocumentWithTag_details<R = cocoa._NSRange, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean, P4 = number, P5 = unknown>(_checkGrammarOfString: P0, _startingAt: P1, _language: P2, _wrap: P3, _inSpellDocumentWithTag: P4, _details: P5): R;
    checkGrammarOfString_startingAt_language_wrap_inSpellDocumentWithTag_details_reconnectOnError<R = cocoa._NSRange, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean, P4 = number, P5 = unknown, P6 = boolean>(_checkGrammarOfString: P0, _startingAt: P1, _language: P2, _wrap: P3, _inSpellDocumentWithTag: P4, _details: P5, _reconnectOnError: P6): R;
    _checkGrammarOfString_startingAt_language_wrap_inSpellDocumentWithTag_details_reconnectOnError<R = cocoa._NSRange, P0 = unknown, P1 = number, P2 = unknown, P3 = boolean, P4 = number, P5 = unknown, P6 = boolean>(__checkGrammarOfString: P0, _startingAt: P1, _language: P2, _wrap: P3, _inSpellDocumentWithTag: P4, _details: P5, _reconnectOnError: P6): R;
    _chunkAndFindMisspelledWordInString_language_learnedDictionaries_wordCount_usingSpellServer<R = cocoa._NSRange, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown>(__chunkAndFindMisspelledWordInString: P0, _language: P1, _learnedDictionaries: P2, _wordCount: P3, _usingSpellServer: P4): R;
    _chunkAndCheckGrammarInString_language_usingSpellServer_details<R = cocoa._NSRange, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(__chunkAndCheckGrammarInString: P0, _language: P1, _usingSpellServer: P2, _details: P3): R;
    adjustOffsetToNextWordBoundaryInString_startingAt<R = number, P0 = unknown, P1 = number>(_adjustOffsetToNextWordBoundaryInString: P0, _startingAt: P1): R;
    _findNext<R = void, P0 = unknown>(__findNext: P0): R;
    _languagePreferencesChanged<R = void, P0 = boolean>(__languagePreferencesChanged: P0): R;
    sheetDidEnd_returnCode<R = void, P0 = unknown, P1 = number>(_sheetDidEnd: P0, _returnCode: P1): R;
    cancelSheet<R = void, P0 = unknown>(_cancelSheet: P0): R;
    confirmSheet<R = void, P0 = unknown>(_confirmSheet: P0): R;
    _configureLanguages<R = void, P0 = unknown>(__configureLanguages: P0): R;
    _changeLanguage<R = void, P0 = unknown>(__changeLanguage: P0): R;
    _changeLanguageFromMenu<R = void, P0 = unknown>(__changeLanguageFromMenu: P0): R;
    _openSystemPreferences<R = void, P0 = unknown>(__openSystemPreferences: P0): R;
    _shouldWriteLanguageSettingsToDefaults<R = boolean>(): R;
    windowDidBecomeKey<R = void, P0 = unknown>(_windowDidBecomeKey: P0): R;
    _windowDidBecomeVisible<R = void, P0 = unknown>(__windowDidBecomeVisible: P0): R;
    _doUpdate<R = void, P0 = unknown>(__doUpdate: P0): R;
    updatePanels<R = void>(): R;
    _guess<R = void, P0 = unknown>(__guess: P0): R;
    _setGuesses<R = void, P0 = unknown>(__setGuesses: P0): R;
    alternativesForPinyinInputString_inSpellDocumentWithTag<R = unknown, P0 = unknown, P1 = number>(_alternativesForPinyinInputString: P0, _inSpellDocumentWithTag: P1): R;
    stringForInputString_language_inSpellDocumentWithTag<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_stringForInputString: P0, _language: P1, _inSpellDocumentWithTag: P2): R;
    guessesForWordRange_inString_language_inSpellDocumentWithTag<R = unknown, P0 = cocoa._NSRange, P1 = unknown, P2 = unknown, P3 = number>(_guessesForWordRange: P0, _inString: P1, _language: P2, _inSpellDocumentWithTag: P3): R;
    guessesForWord<R = unknown, P0 = unknown>(_guessesForWord: P0): R;
    _setSelectionString<R = void, P0 = unknown>(__setSelectionString: P0): R;
    _setLastGuess<R = void, P0 = unknown>(__setLastGuess: P0): R;
    _defineFromMenu<R = void, P0 = unknown>(__defineFromMenu: P0): R;
    _define<R = void, P0 = unknown>(__define: P0): R;
    _copyFromMenu<R = void, P0 = unknown>(__copyFromMenu: P0): R;
    _removeReplacement<R = void, P0 = unknown>(__removeReplacement: P0): R;
    _addReplacement<R = void, P0 = unknown>(__addReplacement: P0): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    controlTextDidBeginEditing<R = void, P0 = unknown>(_controlTextDidBeginEditing: P0): R;
    tableViewSelectionDidChange<R = void, P0 = unknown>(_tableViewSelectionDidChange: P0): R;
    tableView_setObjectValue_forTableColumn_row<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_tableView: P0, _setObjectValue: P1, _forTableColumn: P2, _row: P3): R;
    tableView_acceptDrop_row_dropOperation<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_tableView: P0, _acceptDrop: P1, _row: P2, _dropOperation: P3): R;
    tableView_validateDrop_proposedRow_proposedDropOperation<R = number, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(_tableView: P0, _validateDrop: P1, _proposedRow: P2, _proposedDropOperation: P3): R;
    tableView_writeRowsWithIndexes_toPasteboard<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_tableView: P0, _writeRowsWithIndexes: P1, _toPasteboard: P2): R;
    tableView_willDisplayCell_forTableColumn_row<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_tableView: P0, _willDisplayCell: P1, _forTableColumn: P2, _row: P3): R;
    tableView_canDragRowsWithIndexes_atPoint<R = boolean, P0 = unknown, P1 = unknown, P2 = cocoa.CGPoint>(_tableView: P0, _canDragRowsWithIndexes: P1, _atPoint: P2): R;
    tableView_shouldEditTableColumn_row<R = boolean, P0 = unknown, P1 = unknown, P2 = number>(_tableView: P0, _shouldEditTableColumn: P1, _row: P2): R;
    tableView_objectValueForTableColumn_row<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_tableView: P0, _objectValueForTableColumn: P1, _row: P2): R;
    numberOfRowsInTableView<R = number, P0 = unknown>(_numberOfRowsInTableView: P0): R;
    _setSingleQuotes_doubleQuotes_useByLanguage_quotesBrowser_replacementsBrowser_addReplacement_removeReplacement<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown, P5 = unknown, P6 = unknown>(__setSingleQuotes: P0, _doubleQuotes: P1, _useByLanguage: P2, _quotesBrowser: P3, _replacementsBrowser: P4, _addReplacement: P5, _removeReplacement: P6): R;
    _setSingleQuotes_doubleQuotes<R = void, P0 = unknown, P1 = unknown>(__setSingleQuotes: P0, _doubleQuotes: P1): R;
    _correct<R = void, P0 = unknown>(__correct: P0): R;
    _reallyChooseGuess<R = void, P0 = unknown>(__reallyChooseGuess: P0): R;
    _chooseGuess<R = void, P0 = unknown>(__chooseGuess: P0): R;
    closeSpellDocumentWithTag<R = void, P0 = number>(_closeSpellDocumentWithTag: P0): R;
    setIgnoredWords_inSpellDocumentWithTag<R = void, P0 = unknown, P1 = number>(_setIgnoredWords: P0, _inSpellDocumentWithTag: P1): R;
    ignoredWordsInSpellDocumentWithTag<R = unknown, P0 = number>(_ignoredWordsInSpellDocumentWithTag: P0): R;
    hasLearnedWord<R = boolean, P0 = unknown>(_hasLearnedWord: P0): R;
    unlearnWord<R = void, P0 = unknown>(_unlearnWord: P0): R;
    forgetWord<R = void, P0 = unknown>(_forgetWord: P0): R;
    forgetWord_language<R = void, P0 = unknown, P1 = unknown>(_forgetWord: P0, _language: P1): R;
    learnWord<R = void, P0 = unknown>(_learnWord: P0): R;
    learnWord_language<R = void, P0 = unknown, P1 = unknown>(_learnWord: P0, _language: P1): R;
    _nonIgnoredGrammarCheckingResultForResult_stringToCheck_offset_inSpellDocumentWithTag<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(__nonIgnoredGrammarCheckingResultForResult: P0, _stringToCheck: P1, _offset: P2, _inSpellDocumentWithTag: P3): R;
    _nonIgnoredDetailsForGrammarString_details_inSpellDocumentWithTag<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(__nonIgnoredDetailsForGrammarString: P0, _details: P1, _inSpellDocumentWithTag: P2): R;
    ignoreWord_inSpellDocumentWithTag<R = void, P0 = unknown, P1 = number>(_ignoreWord: P0, _inSpellDocumentWithTag: P1): R;
    _ignore<R = void, P0 = unknown>(__ignore: P0): R;
    _forget<R = void, P0 = unknown>(__forget: P0): R;
    _learn<R = void, P0 = unknown>(__learn: P0): R;
    _learnOrForgetOrInvalidate_word_dictionary_language_ephemeral<R = unknown, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown, P4 = number>(__learnOrForgetOrInvalidate: P0, _word: P1, _dictionary: P2, _language: P3, _ephemeral: P4): R;
    _normalizeUserDictionary<R = void, P0 = unknown>(__normalizeUserDictionary: P0): R;
    isSentenceCorrectionWord<R = boolean, P0 = unknown>(_isSentenceCorrectionWord: P0): R;
    noteSentenceCorrectionResult_grammarResult_inString_offset<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number>(_noteSentenceCorrectionResult: P0, _grammarResult: P1, _inString: P2, _offset: P3): R;
    recordSentenceCorrections<R = void, P0 = unknown>(_recordSentenceCorrections: P0): R;
    result_isSentenceCorrectionInString<R = boolean, P0 = unknown, P1 = unknown>(_result: P0, _isSentenceCorrectionInString: P1): R;
    _preflightTextCheckingForTypes<R = void, P0 = number>(__preflightTextCheckingForTypes: P0): R;
    _preflightChosenSpellServer<R = void>(): R;
    _chosenSpellServer_launchIfNecessary<R = unknown, P0 = boolean, P1 = boolean>(__chosenSpellServer: P0, _launchIfNecessary: P1): R;
    _launchSpellChecker_error<R = boolean, P0 = number, P1 = unknown>(__launchSpellChecker: P0, _error: P1): R;
    _tagForSelectedItem<R = number>(): R;
    _titleForSelectedItem<R = unknown>(): R;
    _spellServers<R = unknown>(): R;
    _replaceAccessoryView_with_topView<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__replaceAccessoryView: P0, _with: P1, _topView: P2): R;
    windowIsSpellingPanel<R = boolean, P0 = unknown>(_windowIsSpellingPanel: P0): R;
    setWordFieldStringValue<R = void, P0 = unknown>(_setWordFieldStringValue: P0): R;
    _changeGrammar<R = void, P0 = unknown>(__changeGrammar: P0): R;
    updateGrammar<R = void, P0 = unknown>(_updateGrammar: P0): R;
    _updateGrammar<R = void>(): R;
    _activateControl_forResponder_setSelector_toggleSelector<R = void, P0 = unknown, P1 = unknown, P2 = string, P3 = string>(__activateControl: P0, _forResponder: P1, _setSelector: P2, _toggleSelector: P3): R;
    _updateControl_forResponder_getSelector_setSelector_toggleSelector<R = void, P0 = unknown, P1 = unknown, P2 = string, P3 = string, P4 = string>(__updateControl: P0, _forResponder: P1, _getSelector: P2, _setSelector: P3, _toggleSelector: P4): R;
    _responderForSubstitutions<R = unknown>(): R;
    _responder<R = unknown>(): R;
    _firstResponderForWindow<R = unknown, P0 = unknown>(__firstResponderForWindow: P0): R;
    completionLanguage<R = unknown>(): R;
    setCompletionLanguage<R = void, P0 = unknown>(_setCompletionLanguage: P0): R;
    guessLanguage<R = unknown>(): R;
    setGuessLanguage<R = boolean, P0 = unknown>(_setGuessLanguage: P0): R;
    language<R = unknown>(): R;
    setLanguage<R = boolean, P0 = unknown>(_setLanguage: P0): R;
    _setLanguage<R = boolean, P0 = unknown>(__setLanguage: P0): R;
    _indexOfPopupItemForLanguage<R = number, P0 = unknown>(__indexOfPopupItemForLanguage: P0): R;
    _indexOfItemInPopUp_forLanguage<R = number, P0 = unknown, P1 = unknown>(__indexOfItemInPopUp: P0, _forLanguage: P1): R;
    _indexOfItemInArray_forLanguage<R = number, P0 = unknown, P1 = unknown>(__indexOfItemInArray: P0, _forLanguage: P1): R;
    awakeFromNib<R = void>(): R;
    setupGuessesBrowser<R = void>(): R;
    window_didDecodeRestorableState<R = void, P0 = unknown, P1 = unknown>(_window: P0, _didDecodeRestorableState: P1): R;
    window_willEncodeRestorableState<R = void, P0 = unknown, P1 = unknown>(_window: P0, _willEncodeRestorableState: P1): R;
    _initUI<R = void>(): R;
    _showLanguagePopUp<R = void>(): R;
    _hideLanguagePopUp<R = void>(): R;
    languageMenu<R = unknown>(): R;
    _fillLanguagePopUp<R = void, P0 = unknown>(__fillLanguagePopUp: P0): R;
    _inSetupAssistant<R = boolean>(): R;
    _inSystemPreferences<R = boolean>(): R;
    _startMonitoringKeyEvents<R = void>(): R;
    _initializeLanguagesArraysAlreadyLockedFromLanguages_baseLanguages_multilingualIndex<R = void, P0 = unknown, P1 = unknown, P2 = number>(__initializeLanguagesArraysAlreadyLockedFromLanguages: P0, _baseLanguages: P1, _multilingualIndex: P2): R;
    _usePerAppLanguageIdentification<R = boolean>(): R;
    _fillSpellCheckerPopupButton<R = boolean, P0 = unknown>(__fillSpellCheckerPopupButton: P0): R;
    _defaultServerURL<R = unknown>(): R;
    _setPreferredOrthographyIndexes<R = void>(): R;
    _userDictionariesBySettingLanguageDictionaryName_documentDictionaryName<R = unknown, P0 = unknown, P1 = unknown>(__userDictionariesBySettingLanguageDictionaryName: P0, _documentDictionaryName: P1): R;
    _nameOfDictionaryForDocumentTag<R = unknown, P0 = number>(__nameOfDictionaryForDocumentTag: P0): R;
    _deleteDictionaries<R = void, P0 = unknown>(__deleteDictionaries: P0): R;
    _openDictionaries<R = void, P0 = unknown>(__openDictionaries: P0): R;
    _changeDictionaries<R = void, P0 = unknown>(__changeDictionaries: P0): R;
    _newDictionary<R = void, P0 = unknown>(__newDictionary: P0): R;
    userReplacementsDictionary<R = cocoa.NSDictionary>(): R;
    substitutionsPanelAccessoryViewController<R = cocoa.NSViewController>(): R;
    setSubstitutionsPanelAccessoryViewController<R = void, P0 = cocoa.NSViewController>(_v: P0): R;
    substitutionsPanel<R = cocoa.NSPanel>(): R;
    accessoryView<R = cocoa.NSView>(): R;
    setAccessoryView<R = void, P0 = cocoa.NSView>(_v: P0): R;
    spellingPanel<R = cocoa.NSPanel>(): R;
    automaticallyIdentifiesLanguages<R = boolean>(): R;
    setAutomaticallyIdentifiesLanguages<R = void, P0 = boolean>(_v: P0): R;
    userPreferredLanguages<R = cocoa.NSArray>(): R;
    availableLanguages<R = cocoa.NSArray>(): R;
  }
  namespace classes {
    export interface NSSpellChecker<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSSpellChecker>(): R;
      new: <R = NSSpellChecker>() => R;
      _doubleSpaceReplacementAfterString<R = unknown, P0 = unknown>(__doubleSpaceReplacementAfterString: P0): R;
      _shouldPerformDoubleSpaceReplacementAfterString<R = boolean, P0 = unknown>(__shouldPerformDoubleSpaceReplacementAfterString: P0): R;
      _shouldRecognizeDoubleSpaceForKeyDownEvent<R = boolean, P0 = unknown>(__shouldRecognizeDoubleSpaceForKeyDownEvent: P0): R;
      _shouldRecognizeDoubleSpaceForKeyDownEvents<R = boolean, P0 = unknown>(__shouldRecognizeDoubleSpaceForKeyDownEvents: P0): R;
      _shouldRecognizeDoubleSpaceForKeyDownEvent_andKeyDownEvent<R = boolean, P0 = unknown, P1 = unknown>(__shouldRecognizeDoubleSpaceForKeyDownEvent: P0, _andKeyDownEvent: P1): R;
      _recordAutocorrectionEventType_language<R = void, P0 = unknown, P1 = unknown>(__recordAutocorrectionEventType: P0, _language: P1): R;
      _recordAcceptanceType_language_charactersTyped_charactersAccepted<R = void, P0 = unknown, P1 = unknown, P2 = number, P3 = number>(__recordAcceptanceType: P0, _language: P1, _charactersTyped: P2, _charactersAccepted: P3): R;
      _recordTypedWord_misspelled<R = void, P0 = unknown, P1 = boolean>(__recordTypedWord: P0, _misspelled: P1): R;
      _keyEventArray<R = unknown>(): R;
      _keyEventData<R = unknown>(): R;
      _recordKeyDownEvent<R = void, P0 = unknown>(__recordKeyDownEvent: P0): R;
      _finishRecordingTypingSession<R = void>(): R;
      restoreWindowWithIdentifier_state_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = cocoa.CDUnknownBlockType>(_restoreWindowWithIdentifier: P0, _state: P1, _completionHandler: P2): R;
      sharedSpellCheckerExists<R = boolean>(): R;
      sharedSpellChecker<R = unknown>(): R;
      uniqueSpellDocumentTag<R = number>(): R;
      _startLoadOfScanner<R = void, P0 = unknown>(__startLoadOfScanner: P0): R;
    }
  }
}

declare const NSSpellChecker: cocoa.classes.NSSpellChecker;
