/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCSpellServerClient<T0 = void, T1 = void, T2 = void> extends NSObject {
    _invalidateDictionary_newTime<R = void, P0 = unknown, P1 = number>(__invalidateDictionary: P0, _newTime: P1): R;
    _setWords_inDictionary<R = void, P0 = unknown, P1 = unknown>(__setWords: P0, _inDictionary: P1): R;
    _wordsInDictionary<R = unknown, P0 = unknown>(__wordsInDictionary: P0): R;
    _appendWord_toDictionary<R = boolean, P0 = unknown, P1 = unknown>(__appendWord: P0, _toDictionary: P1): R;
    _isWord_inDictionary<R = boolean, P0 = unknown, P1 = unknown>(__isWord: P0, _inDictionary: P1): R;
    _forgetWord_inDictionary<R = boolean, P0 = unknown, P1 = unknown>(__forgetWord: P0, _inDictionary: P1): R;
    _learnWord_inDictionary<R = boolean, P0 = unknown, P1 = unknown>(__learnWord: P0, _inDictionary: P1): R;
    _prefixesForPinyinInputString_language<R = unknown, P0 = unknown, P1 = unknown>(__prefixesForPinyinInputString: P0, _language: P1): R;
    _extendedAlternativesForPinyinInputString_language<R = unknown, P0 = unknown, P1 = unknown>(__extendedAlternativesForPinyinInputString: P0, _language: P1): R;
    _alternativesForPinyinInputString_language<R = unknown, P0 = unknown, P1 = unknown>(__alternativesForPinyinInputString: P0, _language: P1): R;
    _stringForInputString_language<R = unknown, P0 = unknown, P1 = unknown>(__stringForInputString: P0, _language: P1): R;
    _suggestNextLetterDictionariesForPartialWordRange_inString_language_options<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown, P3 = unknown>(__suggestNextLetterDictionariesForPartialWordRange: P0, _inString: P1, _language: P2, _options: P3): R;
    _suggestNextLetterDictionariesForPartialWordRange_inString_language<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown>(__suggestNextLetterDictionariesForPartialWordRange: P0, _inString: P1, _language: P2): R;
    _suggestCompletionDictionariesForPartialWordRange_inString_language_options<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown, P3 = unknown>(__suggestCompletionDictionariesForPartialWordRange: P0, _inString: P1, _language: P2, _options: P3): R;
    _suggestCompletionDictionariesForPartialWordRange_inString_language<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown>(__suggestCompletionDictionariesForPartialWordRange: P0, _inString: P1, _language: P2): R;
    _suggestCompletionsForPartialWordRange_inString_language_options<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown, P3 = unknown>(__suggestCompletionsForPartialWordRange: P0, _inString: P1, _language: P2, _options: P3): R;
    _suggestCompletionsForPartialWordRange_inString_language<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown>(__suggestCompletionsForPartialWordRange: P0, _inString: P1, _language: P2): R;
    _suggestGuessesForWordRange_inString_language_options<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown, P3 = unknown>(__suggestGuessesForWordRange: P0, _inString: P1, _language: P2, _options: P3): R;
    _suggestGuessesForWordRange_inString_language<R = unknown, P0 = _NSRange, P1 = unknown, P2 = unknown>(__suggestGuessesForWordRange: P0, _inString: P1, _language: P2): R;
    _suggestGuessesForWord_inLanguage<R = unknown, P0 = unknown, P1 = unknown>(__suggestGuessesForWord: P0, _inLanguage: P1): R;
    _recordResponse_toCorrection_forWord_language<R = void, P0 = number, P1 = unknown, P2 = unknown, P3 = unknown>(__recordResponse: P0, _toCorrection: P1, _forWord: P2, _language: P3): R;
    _dataFromGeneratingCandidatesForSelectedRange_inString_offset_types_optionsData_orthography_learnedDictionaries<R = unknown, P0 = _NSRange, P1 = unknown, P2 = number, P3 = number, P4 = unknown, P5 = unknown, P6 = unknown>(__dataFromGeneratingCandidatesForSelectedRange: P0, _inString: P1, _offset: P2, _types: P3, _optionsData: P4, _orthography: P5, _learnedDictionaries: P6): R;
    _dataFromGeneratingCandidatesForSelectedRange_inString_offset_types_options_orthography_learnedDictionaries<R = unknown, P0 = _NSRange, P1 = unknown, P2 = number, P3 = number, P4 = unknown, P5 = unknown, P6 = unknown>(__dataFromGeneratingCandidatesForSelectedRange: P0, _inString: P1, _offset: P2, _types: P3, _options: P4, _orthography: P5, _learnedDictionaries: P6): R;
    _dataFromCheckingString_offset_types_optionsData_orthography_learnedDictionaries_wordCount<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = unknown, P5 = unknown, P6 = number>(__dataFromCheckingString: P0, _offset: P1, _types: P2, _optionsData: P3, _orthography: P4, _learnedDictionaries: P5, _wordCount: P6): R;
    _dataFromCheckingString_offset_types_options_orthography_learnedDictionaries_wordCount<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = unknown, P5 = unknown, P6 = number>(__dataFromCheckingString: P0, _offset: P1, _types: P2, _options: P3, _orthography: P4, _learnedDictionaries: P5, _wordCount: P6): R;
    _checkString_offset_types_options_orthography_learnedDictionaries_wordCount<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = unknown, P5 = unknown, P6 = number>(__checkString: P0, _offset: P1, _types: P2, _options: P3, _orthography: P4, _learnedDictionaries: P5, _wordCount: P6): R;
    _checkGrammarInString_language_details<R = _NSRange, P0 = unknown, P1 = unknown, P2 = unknown>(__checkGrammarInString: P0, _language: P1, _details: P2): R;
    _findMisspelledWordInString_language_learnedDictionaries_wordCount_countOnly<R = _NSRange, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = boolean>(__findMisspelledWordInString: P0, _language: P1, _learnedDictionaries: P2, _wordCount: P3, _countOnly: P4): R;
    contextForMessageName_waitForReply<R = unknown, P0 = unknown, P1 = boolean>(_contextForMessageName: P0, _waitForReply: P1): R;
    isValid<R = boolean>(): R;
    connection<R = unknown>(): R;
    serverName<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithServerName<R = unknown, P0 = unknown>(_initWithServerName: P0): R;
  }
  namespace NSXPCSpellServerClient {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSXPCSpellServerClient>(): R;
      new: <R = NSXPCSpellServerClient>() => R;
    }
  }
}

declare const NSXPCSpellServerClient: cocoa.NSXPCSpellServerClient.CLASS;
