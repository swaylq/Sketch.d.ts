/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpellServerPrivateNewDOProtocol<T0 = void, T1 = void, T2 = void> {
    _invalidateDictionary_newTime<R = void, P0 = NSString, P1 = number>(__invalidateDictionary: P0, _newTime: P1): R;
    _setWords_inDictionary<R = void, P0 = NSArray, P1 = NSString>(__setWords: P0, _inDictionary: P1): R;
    _wordsInDictionary<R = NSArray, P0 = NSString>(__wordsInDictionary: P0): R;
    _appendWord_toDictionary<R = boolean, P0 = NSString, P1 = NSString>(__appendWord: P0, _toDictionary: P1): R;
    _isWord_inDictionary<R = boolean, P0 = NSString, P1 = NSString>(__isWord: P0, _inDictionary: P1): R;
    _forgetWord_inDictionary<R = boolean, P0 = NSString, P1 = NSString>(__forgetWord: P0, _inDictionary: P1): R;
    _learnWord_inDictionary<R = boolean, P0 = NSString, P1 = NSString>(__learnWord: P0, _inDictionary: P1): R;
    _prefixesForPinyinInputString_language<R = NSArray, P0 = NSString, P1 = NSString>(__prefixesForPinyinInputString: P0, _language: P1): R;
    _extendedAlternativesForPinyinInputString_language<R = NSArray, P0 = NSString, P1 = NSString>(__extendedAlternativesForPinyinInputString: P0, _language: P1): R;
    _alternativesForPinyinInputString_language<R = NSArray, P0 = NSString, P1 = NSString>(__alternativesForPinyinInputString: P0, _language: P1): R;
    _stringForInputString_language<R = NSString, P0 = NSString, P1 = NSString>(__stringForInputString: P0, _language: P1): R;
    _suggestNextLetterDictionariesForPartialWordRange_inString_language_options<R = NSArray, P0 = _NSRange, P1 = NSString, P2 = NSString, P3 = NSDictionary>(__suggestNextLetterDictionariesForPartialWordRange: P0, _inString: P1, _language: P2, _options: P3): R;
    _suggestNextLetterDictionariesForPartialWordRange_inString_language<R = NSArray, P0 = _NSRange, P1 = NSString, P2 = NSString>(__suggestNextLetterDictionariesForPartialWordRange: P0, _inString: P1, _language: P2): R;
    _suggestCompletionDictionariesForPartialWordRange_inString_language_options<R = NSArray, P0 = _NSRange, P1 = NSString, P2 = NSString, P3 = NSDictionary>(__suggestCompletionDictionariesForPartialWordRange: P0, _inString: P1, _language: P2, _options: P3): R;
    _suggestCompletionDictionariesForPartialWordRange_inString_language<R = NSArray, P0 = _NSRange, P1 = NSString, P2 = NSString>(__suggestCompletionDictionariesForPartialWordRange: P0, _inString: P1, _language: P2): R;
    _suggestCompletionsForPartialWordRange_inString_language_options<R = NSArray, P0 = _NSRange, P1 = NSString, P2 = NSString, P3 = NSDictionary>(__suggestCompletionsForPartialWordRange: P0, _inString: P1, _language: P2, _options: P3): R;
    _suggestCompletionsForPartialWordRange_inString_language<R = NSArray, P0 = _NSRange, P1 = NSString, P2 = NSString>(__suggestCompletionsForPartialWordRange: P0, _inString: P1, _language: P2): R;
    _suggestGuessesForWordRange_inString_language_options<R = NSArray, P0 = _NSRange, P1 = NSString, P2 = NSString, P3 = NSDictionary>(__suggestGuessesForWordRange: P0, _inString: P1, _language: P2, _options: P3): R;
    _suggestGuessesForWordRange_inString_language<R = NSArray, P0 = _NSRange, P1 = NSString, P2 = NSString>(__suggestGuessesForWordRange: P0, _inString: P1, _language: P2): R;
    _suggestGuessesForWord_inLanguage<R = NSArray, P0 = NSString, P1 = NSString>(__suggestGuessesForWord: P0, _inLanguage: P1): R;
    _recordResponse_toCorrection_forWord_language<R = void, P0 = number, P1 = NSString, P2 = NSString, P3 = NSString>(__recordResponse: P0, _toCorrection: P1, _forWord: P2, _language: P3): R;
    _dataFromGeneratingCandidatesForSelectedRange_inString_offset_types_optionsData_orthography_learnedDictionaries<R = NSData, P0 = _NSRange, P1 = NSString, P2 = number, P3 = number, P4 = NSData, P5 = NSOrthography, P6 = NSArray>(__dataFromGeneratingCandidatesForSelectedRange: P0, _inString: P1, _offset: P2, _types: P3, _optionsData: P4, _orthography: P5, _learnedDictionaries: P6): R;
    _dataFromGeneratingCandidatesForSelectedRange_inString_offset_types_options_orthography_learnedDictionaries<R = NSData, P0 = _NSRange, P1 = NSString, P2 = number, P3 = number, P4 = NSDictionary, P5 = NSOrthography, P6 = NSArray>(__dataFromGeneratingCandidatesForSelectedRange: P0, _inString: P1, _offset: P2, _types: P3, _options: P4, _orthography: P5, _learnedDictionaries: P6): R;
    _dataFromCheckingString_offset_types_optionsData_orthography_learnedDictionaries_wordCount<R = NSData, P0 = NSString, P1 = number, P2 = number, P3 = NSData, P4 = NSOrthography, P5 = NSArray, P6 = number>(__dataFromCheckingString: P0, _offset: P1, _types: P2, _optionsData: P3, _orthography: P4, _learnedDictionaries: P5, _wordCount: P6): R;
    _dataFromCheckingString_offset_types_options_orthography_learnedDictionaries_wordCount<R = NSData, P0 = NSString, P1 = number, P2 = number, P3 = NSDictionary, P4 = NSOrthography, P5 = NSArray, P6 = number>(__dataFromCheckingString: P0, _offset: P1, _types: P2, _options: P3, _orthography: P4, _learnedDictionaries: P5, _wordCount: P6): R;
    _checkString_offset_types_options_orthography_learnedDictionaries_wordCount<R = NSArray, P0 = NSString, P1 = number, P2 = number, P3 = NSDictionary, P4 = NSOrthography, P5 = NSArray, P6 = number>(__checkString: P0, _offset: P1, _types: P2, _options: P3, _orthography: P4, _learnedDictionaries: P5, _wordCount: P6): R;
    _checkGrammarInString_language_details<R = _NSRange, P0 = NSString, P1 = NSString, P2 = unknown>(__checkGrammarInString: P0, _language: P1, _details: P2): R;
    _findMisspelledWordInString_language_learnedDictionaries_wordCount_countOnly<R = _NSRange, P0 = NSString, P1 = NSString, P2 = NSArray, P3 = number, P4 = string>(__findMisspelledWordInString: P0, _language: P1, _learnedDictionaries: P2, _wordCount: P3, _countOnly: P4): R;
  }
  namespace NSSpellServerPrivateNewDOProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
