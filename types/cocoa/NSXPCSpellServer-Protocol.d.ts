/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCSpellServerProtocol<T0 = void, T1 = void, T2 = void> {
    _xpc_invalidateDictionary_newTime<R = void, P0 = NSString, P1 = number>(__xpc_invalidateDictionary: P0, _newTime: P1): R;
    _xpc_setWords_inDictionary<R = void, P0 = NSArray, P1 = NSString>(__xpc_setWords: P0, _inDictionary: P1): R;
    _xpc_wordsInDictionary_completionHandler<R = void, P0 = NSString, P1 = CDUnknownBlockType>(__xpc_wordsInDictionary: P0, _completionHandler: P1): R;
    _xpc_appendWord_toDictionary_completionHandler<R = void, P0 = NSString, P1 = NSString, P2 = CDUnknownBlockType>(__xpc_appendWord: P0, _toDictionary: P1, _completionHandler: P2): R;
    _xpc_isWord_inDictionary_completionHandler<R = void, P0 = NSString, P1 = NSString, P2 = CDUnknownBlockType>(__xpc_isWord: P0, _inDictionary: P1, _completionHandler: P2): R;
    _xpc_forgetWord_inDictionary_completionHandler<R = void, P0 = NSString, P1 = NSString, P2 = CDUnknownBlockType>(__xpc_forgetWord: P0, _inDictionary: P1, _completionHandler: P2): R;
    _xpc_learnWord_inDictionary_completionHandler<R = void, P0 = NSString, P1 = NSString, P2 = CDUnknownBlockType>(__xpc_learnWord: P0, _inDictionary: P1, _completionHandler: P2): R;
    _xpc_prefixesForPinyinInputString_language_completionHandler<R = void, P0 = NSString, P1 = NSString, P2 = CDUnknownBlockType>(__xpc_prefixesForPinyinInputString: P0, _language: P1, _completionHandler: P2): R;
    _xpc_extendedAlternativesForPinyinInputString_language_completionHandler<R = void, P0 = NSString, P1 = NSString, P2 = CDUnknownBlockType>(__xpc_extendedAlternativesForPinyinInputString: P0, _language: P1, _completionHandler: P2): R;
    _xpc_alternativesForPinyinInputString_language_completionHandler<R = void, P0 = NSString, P1 = NSString, P2 = CDUnknownBlockType>(__xpc_alternativesForPinyinInputString: P0, _language: P1, _completionHandler: P2): R;
    _xpc_stringForInputString_language_completionHandler<R = void, P0 = NSString, P1 = NSString, P2 = CDUnknownBlockType>(__xpc_stringForInputString: P0, _language: P1, _completionHandler: P2): R;
    _xpc_suggestNextLetterDictionariesForPartialWordRange_inString_language_options_completionHandler<R = void, P0 = _NSRange, P1 = NSString, P2 = NSString, P3 = NSDictionary, P4 = CDUnknownBlockType>(__xpc_suggestNextLetterDictionariesForPartialWordRange: P0, _inString: P1, _language: P2, _options: P3, _completionHandler: P4): R;
    _xpc_suggestNextLetterDictionariesForPartialWordRange_inString_language_completionHandler<R = void, P0 = _NSRange, P1 = NSString, P2 = NSString, P3 = CDUnknownBlockType>(__xpc_suggestNextLetterDictionariesForPartialWordRange: P0, _inString: P1, _language: P2, _completionHandler: P3): R;
    _xpc_suggestCompletionDictionariesForPartialWordRange_inString_language_options_completionHandler<R = void, P0 = _NSRange, P1 = NSString, P2 = NSString, P3 = NSDictionary, P4 = CDUnknownBlockType>(__xpc_suggestCompletionDictionariesForPartialWordRange: P0, _inString: P1, _language: P2, _options: P3, _completionHandler: P4): R;
    _xpc_suggestCompletionDictionariesForPartialWordRange_inString_language_completionHandler<R = void, P0 = _NSRange, P1 = NSString, P2 = NSString, P3 = CDUnknownBlockType>(__xpc_suggestCompletionDictionariesForPartialWordRange: P0, _inString: P1, _language: P2, _completionHandler: P3): R;
    _xpc_suggestCompletionsForPartialWordRange_inString_language_options_completionHandler<R = void, P0 = _NSRange, P1 = NSString, P2 = NSString, P3 = NSDictionary, P4 = CDUnknownBlockType>(__xpc_suggestCompletionsForPartialWordRange: P0, _inString: P1, _language: P2, _options: P3, _completionHandler: P4): R;
    _xpc_suggestCompletionsForPartialWordRange_inString_language_completionHandler<R = void, P0 = _NSRange, P1 = NSString, P2 = NSString, P3 = CDUnknownBlockType>(__xpc_suggestCompletionsForPartialWordRange: P0, _inString: P1, _language: P2, _completionHandler: P3): R;
    _xpc_suggestGuessesForWordRange_inString_language_options_completionHandler<R = void, P0 = _NSRange, P1 = NSString, P2 = NSString, P3 = NSDictionary, P4 = CDUnknownBlockType>(__xpc_suggestGuessesForWordRange: P0, _inString: P1, _language: P2, _options: P3, _completionHandler: P4): R;
    _xpc_suggestGuessesForWordRange_inString_language_completionHandler<R = void, P0 = _NSRange, P1 = NSString, P2 = NSString, P3 = CDUnknownBlockType>(__xpc_suggestGuessesForWordRange: P0, _inString: P1, _language: P2, _completionHandler: P3): R;
    _xpc_suggestGuessesForWord_inLanguage_completionHandler<R = void, P0 = NSString, P1 = NSString, P2 = CDUnknownBlockType>(__xpc_suggestGuessesForWord: P0, _inLanguage: P1, _completionHandler: P2): R;
    _xpc_recordResponse_toCorrection_forWord_language<R = void, P0 = number, P1 = NSString, P2 = NSString, P3 = NSString>(__xpc_recordResponse: P0, _toCorrection: P1, _forWord: P2, _language: P3): R;
    _xpc_dataFromGeneratingCandidatesForSelectedRange_inString_offset_types_optionsData_orthography_learnedDictionaries_completionHandler<R = void, P0 = _NSRange, P1 = NSString, P2 = number, P3 = number, P4 = NSData, P5 = NSOrthography, P6 = NSArray, P7 = CDUnknownBlockType>(__xpc_dataFromGeneratingCandidatesForSelectedRange: P0, _inString: P1, _offset: P2, _types: P3, _optionsData: P4, _orthography: P5, _learnedDictionaries: P6, _completionHandler: P7): R;
    _xpc_dataFromGeneratingCandidatesForSelectedRange_inString_offset_types_options_orthography_learnedDictionaries_completionHandler<R = void, P0 = _NSRange, P1 = NSString, P2 = number, P3 = number, P4 = NSDictionary, P5 = NSOrthography, P6 = NSArray, P7 = CDUnknownBlockType>(__xpc_dataFromGeneratingCandidatesForSelectedRange: P0, _inString: P1, _offset: P2, _types: P3, _options: P4, _orthography: P5, _learnedDictionaries: P6, _completionHandler: P7): R;
    _xpc_dataFromCheckingString_offset_types_optionsData_orthography_learnedDictionaries_completionHandler<R = void, P0 = NSString, P1 = number, P2 = number, P3 = NSData, P4 = NSOrthography, P5 = NSArray, P6 = CDUnknownBlockType>(__xpc_dataFromCheckingString: P0, _offset: P1, _types: P2, _optionsData: P3, _orthography: P4, _learnedDictionaries: P5, _completionHandler: P6): R;
    _xpc_dataFromCheckingString_offset_types_options_orthography_learnedDictionaries_completionHandler<R = void, P0 = NSString, P1 = number, P2 = number, P3 = NSDictionary, P4 = NSOrthography, P5 = NSArray, P6 = CDUnknownBlockType>(__xpc_dataFromCheckingString: P0, _offset: P1, _types: P2, _options: P3, _orthography: P4, _learnedDictionaries: P5, _completionHandler: P6): R;
    _xpc_checkString_offset_types_options_orthography_learnedDictionaries_completionHandler<R = void, P0 = NSString, P1 = number, P2 = number, P3 = NSDictionary, P4 = NSOrthography, P5 = NSArray, P6 = CDUnknownBlockType>(__xpc_checkString: P0, _offset: P1, _types: P2, _options: P3, _orthography: P4, _learnedDictionaries: P5, _completionHandler: P6): R;
    _xpc_checkGrammarInString_language_completionHandler<R = void, P0 = NSString, P1 = NSString, P2 = CDUnknownBlockType>(__xpc_checkGrammarInString: P0, _language: P1, _completionHandler: P2): R;
    _xpc_findMisspelledWordInString_language_learnedDictionaries_countOnly_completionHandler<R = void, P0 = NSString, P1 = NSString, P2 = NSArray, P3 = boolean, P4 = CDUnknownBlockType>(__xpc_findMisspelledWordInString: P0, _language: P1, _learnedDictionaries: P2, _countOnly: P3, _completionHandler: P4): R;
  }
  namespace NSXPCSpellServerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
