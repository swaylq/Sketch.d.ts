/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSLinguisticTagger<T0 = void, T1 = void, T2 = void> extends NSObject {
    enumerateTagsInRange_scheme_options_usingBlock<R = void, P0 = _NSRange, P1 = unknown, P2 = number, P3 = CDUnknownBlockType>(_enumerateTagsInRange: P0, _scheme: P1, _options: P2, _usingBlock: P3): R;
    _enumerateTagsInRange_scheme_options_usingBlock<R = void, P0 = _NSRange, P1 = unknown, P2 = number, P3 = CDUnknownBlockType>(__enumerateTagsInRange: P0, _scheme: P1, _options: P2, _usingBlock: P3): R;
    _tokenDataForParagraphAtIndex_paragraphRange_tagScheme<R = unknown, P0 = number, P1 = _NSRange, P2 = unknown>(__tokenDataForParagraphAtIndex: P0, _paragraphRange: P1, _tagScheme: P2): R;
    _tokenDataForParagraphAtIndex_paragraphRange_requireLemmas_requirePartsOfSpeech_requireNamedEntities<R = unknown, P0 = number, P1 = _NSRange, P2 = boolean, P3 = boolean, P4 = boolean>(__tokenDataForParagraphAtIndex: P0, _paragraphRange: P1, _requireLemmas: P2, _requirePartsOfSpeech: P3, _requireNamedEntities: P4): R;
    _tokenizeParagraphAtIndex_requireLemmas_requirePartsOfSpeech_requireNamedEntities<R = void, P0 = number, P1 = boolean, P2 = boolean, P3 = boolean>(__tokenizeParagraphAtIndex: P0, _requireLemmas: P1, _requirePartsOfSpeech: P2, _requireNamedEntities: P3): R;
    _tokenDataForParagraphRange_requireLemmas_requirePartsOfSpeech_requireNamedEntities<R = unknown, P0 = _NSRange, P1 = boolean, P2 = boolean, P3 = boolean>(__tokenDataForParagraphRange: P0, _requireLemmas: P1, _requirePartsOfSpeech: P2, _requireNamedEntities: P3): R;
    _analyzeTokensInWordRange_paragraphRange<R = void, P0 = _NSRange, P1 = _NSRange>(__analyzeTokensInWordRange: P0, _paragraphRange: P1): R;
    _analyzeTokensInInterwordRange_paragraphRange<R = void, P0 = _NSRange, P1 = _NSRange>(__analyzeTokensInInterwordRange: P0, _paragraphRange: P1): R;
    _analyzePunctuationTokensInRange_paragraphRange<R = void, P0 = _NSRange, P1 = _NSRange>(__analyzePunctuationTokensInRange: P0, _paragraphRange: P1): R;
    _calculateSentenceRangesForParagraphRange<R = void, P0 = _NSRange>(__calculateSentenceRangesForParagraphRange: P0): R;
    _acceptSentencesForParagraphRange<R = void, P0 = _NSRange>(__acceptSentencesForParagraphRange: P0): R;
    _acceptSentenceTerminatorRange_paragraphRange_tokens_count_tokenIndex<R = boolean, P0 = _NSRange, P1 = _NSRange, P2 = _NSLTToken, P3 = number, P4 = number>(__acceptSentenceTerminatorRange: P0, _paragraphRange: P1, _tokens: P2, _count: P3, _tokenIndex: P4): R;
    tokenRangeAtIndex_unit<R = _NSRange, P0 = number, P1 = number>(_tokenRangeAtIndex: P0, _unit: P1): R;
    tagsInRange_unit_scheme_options_tokenRanges<R = unknown, P0 = _NSRange, P1 = number, P2 = unknown, P3 = number, P4 = unknown>(_tagsInRange: P0, _unit: P1, _scheme: P2, _options: P3, _tokenRanges: P4): R;
    tagAtIndex_unit_scheme_tokenRange<R = unknown, P0 = number, P1 = number, P2 = unknown, P3 = _NSRange>(_tagAtIndex: P0, _unit: P1, _scheme: P2, _tokenRange: P3): R;
    enumerateTagsInRange_unit_scheme_options_usingBlock<R = void, P0 = _NSRange, P1 = number, P2 = unknown, P3 = number, P4 = CDUnknownBlockType>(_enumerateTagsInRange: P0, _unit: P1, _scheme: P2, _options: P3, _usingBlock: P4): R;
    tagsInRange_scheme_options_tokenRanges<R = unknown, P0 = _NSRange, P1 = unknown, P2 = number, P3 = unknown>(_tagsInRange: P0, _scheme: P1, _options: P2, _tokenRanges: P3): R;
    possibleTagsAtIndex_scheme_tokenRange_sentenceRange_scores<R = unknown, P0 = number, P1 = unknown, P2 = _NSRange, P3 = _NSRange, P4 = unknown>(_possibleTagsAtIndex: P0, _scheme: P1, _tokenRange: P2, _sentenceRange: P3, _scores: P4): R;
    tagAtIndex_scheme_tokenRange_sentenceRange<R = unknown, P0 = number, P1 = unknown, P2 = _NSRange, P3 = _NSRange>(_tagAtIndex: P0, _scheme: P1, _tokenRange: P2, _sentenceRange: P3): R;
    _tagAtIndex_scheme_tokenRange_sentenceRange<R = unknown, P0 = number, P1 = unknown, P2 = _NSRange, P3 = _NSRange>(__tagAtIndex: P0, _scheme: P1, _tokenRange: P2, _sentenceRange: P3): R;
    sentenceRangeForRange<R = _NSRange, P0 = _NSRange>(_sentenceRangeForRange: P0): R;
    _sentenceRangeForRange<R = _NSRange, P0 = _NSRange>(__sentenceRangeForRange: P0): R;
    orthographyAtIndex_effectiveRange<R = unknown, P0 = number, P1 = _NSRange>(_orthographyAtIndex: P0, _effectiveRange: P1): R;
    _detectOrthographyIfNeededAtIndex<R = void, P0 = number>(__detectOrthographyIfNeededAtIndex: P0): R;
    setOrthography_range<R = void, P0 = unknown, P1 = _NSRange>(_setOrthography: P0, _range: P1): R;
    _nativeSetOrthography_range<R = void, P0 = unknown, P1 = _NSRange>(__nativeSetOrthography: P0, _range: P1): R;
    _setOrthography_range<R = void, P0 = unknown, P1 = _NSRange>(__setOrthography: P0, _range: P1): R;
    stringEditedInRange_changeInLength<R = void, P0 = _NSRange, P1 = number>(_stringEditedInRange: P0, _changeInLength: P1): R;
    _tagSchemeForScheme<R = unknown, P0 = unknown>(__tagSchemeForScheme: P0): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithTagSchemes_options<R = unknown, P0 = unknown, P1 = number>(_initWithTagSchemes: P0, _options: P1): R;
    dominantLanguage<R = NSString>(): R;
    string<R = NSString>(): R;
    setString<R = void, P0 = NSString>(_v: P0): R;
    tagSchemes<R = NSArray>(): R;
  }
  namespace NSLinguisticTagger {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSLinguisticTagger>(): R;
      new: <R = NSLinguisticTagger>() => R;
      dominantLanguageForString<R = unknown, P0 = unknown>(_dominantLanguageForString: P0): R;
      enumerateTagsForString_range_unit_scheme_options_orthography_usingBlock<R = void, P0 = unknown, P1 = _NSRange, P2 = number, P3 = unknown, P4 = number, P5 = unknown, P6 = CDUnknownBlockType>(_enumerateTagsForString: P0, _range: P1, _unit: P2, _scheme: P3, _options: P4, _orthography: P5, _usingBlock: P6): R;
      tagsForString_range_unit_scheme_options_orthography_tokenRanges<R = unknown, P0 = unknown, P1 = _NSRange, P2 = number, P3 = unknown, P4 = number, P5 = unknown, P6 = unknown>(_tagsForString: P0, _range: P1, _unit: P2, _scheme: P3, _options: P4, _orthography: P5, _tokenRanges: P6): R;
      tagForString_atIndex_unit_scheme_orthography_tokenRange<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown, P4 = unknown, P5 = _NSRange>(_tagForString: P0, _atIndex: P1, _unit: P2, _scheme: P3, _orthography: P4, _tokenRange: P5): R;
      supportsLanguage<R = boolean, P0 = unknown>(_supportsLanguage: P0): R;
      availableTagSchemesForLanguage<R = unknown, P0 = unknown>(_availableTagSchemesForLanguage: P0): R;
      availableTagSchemesForUnit_language<R = unknown, P0 = number, P1 = unknown>(_availableTagSchemesForUnit: P0, _language: P1): R;
    }
  }
}

declare const NSLinguisticTagger: cocoa.NSLinguisticTagger.CLASS;
