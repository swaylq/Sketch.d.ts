/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSString<T0 = void, T1 = void, T2 = void> extends NSObject, NSItemProviderReadingProtocol, NSItemProviderWritingProtocol, NSCopyingProtocol, NSMutableCopyingProtocol, NSSecureCodingProtocol {
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    _allowsDirectEncoding<R = boolean>(): R;
    classForCoder<R = unknown>(): R;
    initWithFormat_locale_arguments<R = unknown, P0 = unknown, P1 = unknown, P2 = __va_list_tag>(_initWithFormat: P0, _locale: P1, _arguments: P2): R;
    initWithBytesNoCopy_length_encoding_freeWhenDone<R = unknown, P0 = void, P1 = number, P2 = number, P3 = boolean>(_initWithBytesNoCopy: P0, _length: P1, _encoding: P2, _freeWhenDone: P3): R;
    initWithCStringNoCopy_length_freeWhenDone<R = unknown, P0 = string, P1 = number, P2 = boolean>(_initWithCStringNoCopy: P0, _length: P1, _freeWhenDone: P2): R;
    initWithCharactersNoCopy_length_freeWhenDone<R = unknown, P0 = number, P1 = number, P2 = boolean>(_initWithCharactersNoCopy: P0, _length: P1, _freeWhenDone: P2): R;
    initWithFormat_arguments<R = unknown, P0 = unknown, P1 = __va_list_tag>(_initWithFormat: P0, _arguments: P1): R;
    initWithValidatedFormat_validFormatSpecifiers_locale_arguments_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = __va_list_tag, P4 = unknown>(_initWithValidatedFormat: P0, _validFormatSpecifiers: P1, _locale: P2, _arguments: P3, _error: P4): R;
    initWithFormat_locale<R = unknown, P0 = unknown, P1 = unknown>(_initWithFormat: P0, _locale: P1): R;
    initWithFormat<R = unknown, P0 = unknown>(_initWithFormat: P0): R;
    initWithData_usedEncoding<R = unknown, P0 = unknown, P1 = number>(_initWithData: P0, _usedEncoding: P1): R;
    initWithContentsOfFile_usedEncoding_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithContentsOfFile: P0, _usedEncoding: P1, _error: P2): R;
    initWithContentsOfURL_usedEncoding_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithContentsOfURL: P0, _usedEncoding: P1, _error: P2): R;
    initWithContentsOfFile_encoding_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithContentsOfFile: P0, _encoding: P1, _error: P2): R;
    initWithContentsOfURL_encoding_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithContentsOfURL: P0, _encoding: P1, _error: P2): R;
    initWithContentsOfURL<R = unknown, P0 = unknown>(_initWithContentsOfURL: P0): R;
    initWithContentsOfFile<R = unknown, P0 = unknown>(_initWithContentsOfFile: P0): R;
    _initWithDataOfUnknownEncoding<R = unknown, P0 = unknown>(__initWithDataOfUnknownEncoding: P0): R;
    _initWithBytesOfUnknownEncoding_length_copy_usedEncoding<R = unknown, P0 = string, P1 = number, P2 = boolean, P3 = number>(__initWithBytesOfUnknownEncoding: P0, _length: P1, _copy: P2, _usedEncoding: P3): R;
    initWithData_encoding<R = unknown, P0 = unknown, P1 = number>(_initWithData: P0, _encoding: P1): R;
    initWithString<R = unknown, P0 = unknown>(_initWithString: P0): R;
    initWithCharacters_length<R = unknown, P0 = number, P1 = number>(_initWithCharacters: P0, _length: P1): R;
    initWithUTF8String<R = unknown, P0 = string>(_initWithUTF8String: P0): R;
    initWithCString_encoding<R = unknown, P0 = string, P1 = number>(_initWithCString: P0, _encoding: P1): R;
    initWithCString<R = unknown, P0 = string>(_initWithCString: P0): R;
    initWithCString_length<R = unknown, P0 = string, P1 = number>(_initWithCString: P0, _length: P1): R;
    writeToURL_atomically<R = boolean, P0 = unknown, P1 = boolean>(_writeToURL: P0, _atomically: P1): R;
    writeToFile_atomically<R = boolean, P0 = unknown, P1 = boolean>(_writeToFile: P0, _atomically: P1): R;
    writeToFile_atomically_encoding_error<R = boolean, P0 = unknown, P1 = boolean, P2 = number, P3 = unknown>(_writeToFile: P0, _atomically: P1, _encoding: P2, _error: P3): R;
    writeToURL_atomically_encoding_error<R = boolean, P0 = unknown, P1 = boolean, P2 = number, P3 = unknown>(_writeToURL: P0, _atomically: P1, _encoding: P2, _error: P3): R;
    getExternalRepresentation_extendedAttributes_forWritingToURLOrPath_usingEncoding_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = number, P4 = unknown>(_getExternalRepresentation: P0, _extendedAttributes: P1, _forWritingToURLOrPath: P2, _usingEncoding: P3, _error: P4): R;
    displayableString<R = unknown>(): R;
    enumerateLinesUsingBlock<R = void, P0 = CDUnknownBlockType>(_enumerateLinesUsingBlock: P0): R;
    enumerateSubstringsInRange_options_usingBlock<R = void, P0 = _NSRange, P1 = number, P2 = CDUnknownBlockType>(_enumerateSubstringsInRange: P0, _options: P1, _usingBlock: P2): R;
    paragraphRangeForRange<R = _NSRange, P0 = _NSRange>(_paragraphRangeForRange: P0): R;
    lineRangeForRange<R = _NSRange, P0 = _NSRange>(_lineRangeForRange: P0): R;
    getParagraphStart_end_contentsEnd_forRange<R = void, P0 = number, P1 = number, P2 = number, P3 = _NSRange>(_getParagraphStart: P0, _end: P1, _contentsEnd: P2, _forRange: P3): R;
    getLineStart_end_contentsEnd_forRange<R = void, P0 = number, P1 = number, P2 = number, P3 = _NSRange>(_getLineStart: P0, _end: P1, _contentsEnd: P2, _forRange: P3): R;
    _getBlockStart_end_contentsEnd_forRange_stopAtLineSeparators<R = void, P0 = number, P1 = number, P2 = number, P3 = _NSRange, P4 = boolean>(__getBlockStart: P0, _end: P1, _contentsEnd: P2, _forRange: P3, _stopAtLineSeparators: P4): R;
    stringByApplyingTransform_reverse<R = unknown, P0 = unknown, P1 = boolean>(_stringByApplyingTransform: P0, _reverse: P1): R;
    stringByFoldingWithOptions_locale<R = unknown, P0 = number, P1 = unknown>(_stringByFoldingWithOptions: P0, _locale: P1): R;
    precomposedStringWithCompatibilityMapping<R = unknown>(): R;
    decomposedStringWithCompatibilityMapping<R = unknown>(): R;
    precomposedStringWithCanonicalMapping<R = unknown>(): R;
    decomposedStringWithCanonicalMapping<R = unknown>(): R;
    capitalizedStringWithLocale<R = unknown, P0 = unknown>(_capitalizedStringWithLocale: P0): R;
    lowercaseStringWithLocale<R = unknown, P0 = unknown>(_lowercaseStringWithLocale: P0): R;
    uppercaseStringWithLocale<R = unknown, P0 = unknown>(_uppercaseStringWithLocale: P0): R;
    localizedCapitalizedString<R = unknown>(): R;
    localizedLowercaseString<R = unknown>(): R;
    localizedUppercaseString<R = unknown>(): R;
    capitalizedString<R = unknown>(): R;
    lowercaseString<R = unknown>(): R;
    uppercaseString<R = unknown>(): R;
    boolValue<R = boolean>(): R;
    integerValue<R = number>(): R;
    longLongValue<R = number>(): R;
    intValue<R = number>(): R;
    floatValue<R = number>(): R;
    doubleValue<R = number>(): R;
    stringByAppendingFormat<R = unknown, P0 = unknown>(_stringByAppendingFormat: P0): R;
    stringByAppendingString<R = unknown, P0 = unknown>(_stringByAppendingString: P0): R;
    substringToIndex<R = unknown, P0 = number>(_substringToIndex: P0): R;
    substringFromIndex<R = unknown, P0 = number>(_substringFromIndex: P0): R;
    substringWithRange<R = unknown, P0 = _NSRange>(_substringWithRange: P0): R;
    _newSubstringWithRange_zone<R = unknown, P0 = _NSRange, P1 = _NSZone>(__newSubstringWithRange: P0, _zone: P1): R;
    getCharacters<R = void, P0 = number>(_getCharacters: P0): R;
    getCharacters_range<R = void, P0 = number, P1 = _NSRange>(_getCharacters: P0, _range: P1): R;
    stringByReplacingCharactersInRange_withString<R = unknown, P0 = _NSRange, P1 = unknown>(_stringByReplacingCharactersInRange: P0, _withString: P1): R;
    stringByReplacingOccurrencesOfString_withString<R = unknown, P0 = unknown, P1 = unknown>(_stringByReplacingOccurrencesOfString: P0, _withString: P1): R;
    stringByReplacingOccurrencesOfString_withString_options_range<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = _NSRange>(_stringByReplacingOccurrencesOfString: P0, _withString: P1, _options: P2, _range: P3): R;
    stringByPaddingToLength_withString_startingAtIndex<R = unknown, P0 = number, P1 = unknown, P2 = number>(_stringByPaddingToLength: P0, _withString: P1, _startingAtIndex: P2): R;
    stringByTrimmingCharactersInSet<R = unknown, P0 = unknown>(_stringByTrimmingCharactersInSet: P0): R;
    localizedStandardRangeOfString<R = _NSRange, P0 = unknown>(_localizedStandardRangeOfString: P0): R;
    localizedStandardContainsString<R = boolean, P0 = unknown>(_localizedStandardContainsString: P0): R;
    localizedCaseInsensitiveContainsString<R = boolean, P0 = unknown>(_localizedCaseInsensitiveContainsString: P0): R;
    containsString<R = boolean, P0 = unknown>(_containsString: P0): R;
    localizedHasSuffix<R = boolean, P0 = unknown>(_localizedHasSuffix: P0): R;
    localizedHasPrefix<R = boolean, P0 = unknown>(_localizedHasPrefix: P0): R;
    hasSuffix<R = boolean, P0 = unknown>(_hasSuffix: P0): R;
    hasPrefix<R = boolean, P0 = unknown>(_hasPrefix: P0): R;
    commonPrefixWithString_options<R = unknown, P0 = unknown, P1 = number>(_commonPrefixWithString: P0, _options: P1): R;
    componentsSeparatedByCharactersInSet<R = unknown, P0 = unknown>(_componentsSeparatedByCharactersInSet: P0): R;
    componentsSeparatedByString<R = unknown, P0 = unknown>(_componentsSeparatedByString: P0): R;
    rangeOfCharacterFromSet<R = _NSRange, P0 = unknown>(_rangeOfCharacterFromSet: P0): R;
    rangeOfCharacterFromSet_options<R = _NSRange, P0 = unknown, P1 = number>(_rangeOfCharacterFromSet: P0, _options: P1): R;
    rangeOfCharacterFromSet_options_range<R = _NSRange, P0 = unknown, P1 = number, P2 = _NSRange>(_rangeOfCharacterFromSet: P0, _options: P1, _range: P2): R;
    rangeOfString<R = _NSRange, P0 = unknown>(_rangeOfString: P0): R;
    rangeOfString_options<R = _NSRange, P0 = unknown, P1 = number>(_rangeOfString: P0, _options: P1): R;
    rangeOfString_options_range<R = _NSRange, P0 = unknown, P1 = number, P2 = _NSRange>(_rangeOfString: P0, _options: P1, _range: P2): R;
    rangeOfString_options_range_locale<R = _NSRange, P0 = unknown, P1 = number, P2 = _NSRange, P3 = unknown>(_rangeOfString: P0, _options: P1, _range: P2, _locale: P3): R;
    rangeOfComposedCharacterSequencesForRange<R = _NSRange, P0 = _NSRange>(_rangeOfComposedCharacterSequencesForRange: P0): R;
    rangeOfComposedCharacterSequenceAtIndex<R = _NSRange, P0 = number>(_rangeOfComposedCharacterSequenceAtIndex: P0): R;
    localizedStandardCompare<R = number, P0 = unknown>(_localizedStandardCompare: P0): R;
    localizedCaseInsensitiveCompare<R = number, P0 = unknown>(_localizedCaseInsensitiveCompare: P0): R;
    localizedCompare<R = number, P0 = unknown>(_localizedCompare: P0): R;
    caseInsensitiveCompare<R = number, P0 = unknown>(_caseInsensitiveCompare: P0): R;
    compare<R = number, P0 = unknown>(_compare: P0): R;
    compare_options<R = number, P0 = unknown, P1 = number>(_compare: P0, _options: P1): R;
    compare_options_range_locale<R = number, P0 = unknown, P1 = number, P2 = _NSRange, P3 = unknown>(_compare: P0, _options: P1, _range: P2, _locale: P3): R;
    compare_options_range<R = number, P0 = unknown, P1 = number, P2 = _NSRange>(_compare: P0, _options: P1, _range: P2): R;
    isEqualToString<R = boolean, P0 = unknown>(_isEqualToString: P0): R;
    quotedStringRepresentation<R = unknown>(): R;
    _stringRepresentation<R = unknown>(): R;
    _isCString<R = boolean>(): R;
    _fastCStringContents<R = string, P0 = boolean>(__fastCStringContents: P0): R;
    _fastCharacterContents<R = number>(): R;
    characterAtIndex<R = number, P0 = number>(_characterAtIndex: P0): R;
    variantFittingPresentationWidth<R = unknown, P0 = number>(_variantFittingPresentationWidth: P0): R;
    _getCString_maxLength_encoding<R = boolean, P0 = string, P1 = number, P2 = number>(__getCString: P0, _maxLength: P1, _encoding: P2): R;
    _fastestEncodingInCFStringEncoding<R = number>(): R;
    _smallestEncodingInCFStringEncoding<R = number>(): R;
    _encodingCantBeStoredInEightBitCFString<R = number>(): R;
    _createSubstringWithRange<R = unknown, P0 = _NSRange>(__createSubstringWithRange: P0): R;
    _cfTypeID<R = number>(): R;
    decimalValue<R = unknown>(): R;
    _getBytesAsData_maxLength_usedLength_encoding_options_range_remainingRange<R = boolean, P0 = unknown, P1 = number, P2 = number, P3 = number, P4 = number, P5 = _NSRange, P6 = _NSRange>(__getBytesAsData: P0, _maxLength: P1, _usedLength: P2, _encoding: P3, _options: P4, _range: P5, _remainingRange: P6): R;
    _getCharactersAsStringInRange<R = unknown, P0 = _NSRange>(__getCharactersAsStringInRange: P0): R;
    __escapeString5991<R = unknown>(): R;
    __oldnf_componentsSeparatedBySet<R = unknown, P0 = unknown>(___oldnf_componentsSeparatedBySet: P0): R;
    __oldnf_containsCharFromSet<R = boolean, P0 = unknown>(___oldnf_containsCharFromSet: P0): R;
    __oldnf_containsChar<R = boolean, P0 = boolean>(___oldnf_containsChar: P0): R;
    __oldnf_containsString<R = boolean, P0 = unknown>(___oldnf_containsString: P0): R;
    __oldnf_stringWithSeparator_atFrequency<R = unknown, P0 = number, P1 = number>(___oldnf_stringWithSeparator: P0, _atFrequency: P1): R;
    __oldnf_copyToUnicharBuffer_saveLength<R = void, P0 = number, P1 = number>(___oldnf_copyToUnicharBuffer: P0, _saveLength: P1): R;
    stringByConvertingURLToPath<R = unknown>(): R;
    stringByConvertingPathToURL<R = unknown>(): R;
    completePathIntoString_caseSensitive_matchesIntoArray_filterTypes<R = number, P0 = unknown, P1 = boolean, P2 = unknown, P3 = unknown>(_completePathIntoString: P0, _caseSensitive: P1, _matchesIntoArray: P2, _filterTypes: P3): R;
    getFileSystemRepresentation_maxLength<R = boolean, P0 = string, P1 = number>(_getFileSystemRepresentation: P0, _maxLength: P1): R;
    fileSystemRepresentation<R = string>(): R;
    stringsByAppendingPaths<R = unknown, P0 = unknown>(_stringsByAppendingPaths: P0): R;
    stringByResolvingSymlinksInPath<R = unknown>(): R;
    _stringByResolvingSymlinksInPathUsingCache<R = unknown, P0 = boolean>(__stringByResolvingSymlinksInPathUsingCache: P0): R;
    stringByStandardizingPath<R = unknown>(): R;
    _stringByStandardizingPathUsingCache<R = unknown, P0 = boolean>(__stringByStandardizingPathUsingCache: P0): R;
    stringByExpandingTildeInPath<R = unknown>(): R;
    stringByAbbreviatingWithTildeInPath<R = unknown>(): R;
    stringByAppendingPathExtension<R = unknown, P0 = unknown>(_stringByAppendingPathExtension: P0): R;
    stringByDeletingPathExtension<R = unknown>(): R;
    pathExtension<R = unknown>(): R;
    stringByAppendingPathComponent<R = unknown, P0 = unknown>(_stringByAppendingPathComponent: P0): R;
    stringByDeletingLastPathComponent<R = unknown>(): R;
    lastPathComponent<R = unknown>(): R;
    isAbsolutePath<R = boolean>(): R;
    pathComponents<R = unknown>(): R;
    isNSString__<R = boolean>(): R;
    _scriptingTextDescriptor<R = unknown>(): R;
    _scriptingAlternativeValueRankWithDescriptor<R = number, P0 = unknown>(__scriptingAlternativeValueRankWithDescriptor: P0): R;
    isCaseInsensitiveLike<R = boolean, P0 = unknown>(_isCaseInsensitiveLike: P0): R;
    isLike<R = boolean, P0 = unknown>(_isLike: P0): R;
    matchesPattern<R = boolean, P0 = unknown>(_matchesPattern: P0): R;
    matchesPattern_caseInsensitive<R = boolean, P0 = unknown, P1 = boolean>(_matchesPattern: P0, _caseInsensitive: P1): R;
    _matchesCharacter<R = boolean, P0 = number>(__matchesCharacter: P0): R;
    _getBracketedStringFromBuffer_string<R = unknown, P0 = _NSStringBuffer, P1 = unknown>(__getBracketedStringFromBuffer: P0, _string: P1): R;
    propertyListFromStringsFileFormat<R = unknown>(): R;
    propertyList<R = unknown>(): R;
    formatConfiguration<R = unknown>(): R;
    _copyFormatStringWithConfiguration<R = unknown, P0 = unknown>(__copyFormatStringWithConfiguration: P0): R;
    getBytes_maxLength_filledLength_encoding_allowLossyConversion_range_remainingRange<R = boolean, P0 = string, P1 = number, P2 = number, P3 = number, P4 = boolean, P5 = _NSRange, P6 = _NSRange>(_getBytes: P0, _maxLength: P1, _filledLength: P2, _encoding: P3, _allowLossyConversion: P4, _range: P5, _remainingRange: P6): R;
    getBytes_maxLength_usedLength_encoding_options_range_remainingRange<R = boolean, P0 = void, P1 = number, P2 = number, P3 = number, P4 = number, P5 = _NSRange, P6 = _NSRange>(_getBytes: P0, _maxLength: P1, _usedLength: P2, _encoding: P3, _options: P4, _range: P5, _remainingRange: P6): R;
    lengthOfBytesUsingEncoding<R = number, P0 = number>(_lengthOfBytesUsingEncoding: P0): R;
    maximumLengthOfBytesUsingEncoding<R = number, P0 = number>(_maximumLengthOfBytesUsingEncoding: P0): R;
    getCString_maxLength_encoding<R = boolean, P0 = string, P1 = number, P2 = number>(_getCString: P0, _maxLength: P1, _encoding: P2): R;
    cStringUsingEncoding<R = string, P0 = number>(_cStringUsingEncoding: P0): R;
    dataUsingEncoding<R = unknown, P0 = number>(_dataUsingEncoding: P0): R;
    dataUsingEncoding_allowLossyConversion<R = unknown, P0 = number, P1 = boolean>(_dataUsingEncoding: P0, _allowLossyConversion: P1): R;
    canBeConvertedToEncoding<R = boolean, P0 = number>(_canBeConvertedToEncoding: P0): R;
    smallestEncoding<R = number>(): R;
    fastestEncoding<R = number>(): R;
    lossyCString<R = string>(): R;
    cStringLength<R = number>(): R;
    cString<R = string>(): R;
    UTF8String<R = string>(): R;
    getCString<R = void, P0 = string>(_getCString: P0): R;
    getCString_maxLength<R = void, P0 = string, P1 = number>(_getCString: P0, _maxLength: P1): R;
    getCString_maxLength_range_remainingRange<R = void, P0 = string, P1 = number, P2 = _NSRange, P3 = _NSRange>(_getCString: P0, _maxLength: P1, _range: P2, _remainingRange: P3): R;
    _web_extractFourCharCode<R = number>(): R;
    _web_filenameByFixingIllegalCharacters<R = unknown>(): R;
    _web_stringByCollapsingNonPrintingCharacters<R = unknown>(): R;
    _web_URLFragment<R = unknown>(): R;
    _web_isFileURL<R = boolean>(): R;
    _web_looksLikeAbsoluteURL<R = boolean>(): R;
    _web_rangeOfURLHost<R = _NSRange>(): R;
    _web_rangeOfURLUserPasswordHostPort<R = _NSRange>(): R;
    _web_fixedCarbonPOSIXPath<R = unknown>(): R;
    _web_stringByExpandingTildeInPath<R = unknown>(): R;
    _web_stringByTrimmingWhitespace<R = unknown>(): R;
    _web_domainFromHost<R = unknown>(): R;
    _web_domainMatches<R = boolean, P0 = unknown>(__web_domainMatches: P0): R;
    _web_hasCountryCodeTLD<R = boolean>(): R;
    _web_looksLikeIPAddress<R = boolean>(): R;
    _web_countOfString<R = number, P0 = unknown>(__web_countOfString: P0): R;
    _web_hasCaseInsensitivePrefix<R = boolean, P0 = unknown>(__web_hasCaseInsensitivePrefix: P0): R;
    _web_isCaseInsensitiveEqualToString<R = boolean, P0 = unknown>(__web_isCaseInsensitiveEqualToString: P0): R;
    _web_isJavaScriptURL<R = boolean>(): R;
    _web_stringByReplacingValidPercentEscapes_nowarn<R = unknown>(): R;
    _web_fileNameFromContentDispositionHeader_nowarn<R = unknown>(): R;
    _web_characterSetFromContentTypeHeader_nowarn<R = unknown>(): R;
    _web_mimeTypeFromContentTypeHeader_nowarn<R = unknown>(): R;
    _web_rangeOfURLResourceSpecifier_nowarn<R = _NSRange>(): R;
    _web_rangeOfURLScheme_nowarn<R = _NSRange>(): R;
    _web_parseAsKeyValuePairHandleQuotes_nowarn<R = unknown, P0 = boolean>(__web_parseAsKeyValuePairHandleQuotes_nowarn: P0): R;
    _web_parseAsKeyValuePair_nowarn<R = unknown>(): R;
    _web_splitAtNonDateCommas_nowarn<R = unknown>(): R;
    scriptingContains<R = boolean, P0 = unknown>(_scriptingContains: P0): R;
    scriptingEndsWith<R = boolean, P0 = unknown>(_scriptingEndsWith: P0): R;
    scriptingBeginsWith<R = boolean, P0 = unknown>(_scriptingBeginsWith: P0): R;
    scriptingIsGreaterThan<R = boolean, P0 = unknown>(_scriptingIsGreaterThan: P0): R;
    scriptingIsGreaterThanOrEqualTo<R = boolean, P0 = unknown>(_scriptingIsGreaterThanOrEqualTo: P0): R;
    scriptingIsLessThan<R = boolean, P0 = unknown>(_scriptingIsLessThan: P0): R;
    scriptingIsLessThanOrEqualTo<R = boolean, P0 = unknown>(_scriptingIsLessThanOrEqualTo: P0): R;
    scriptingIsEqualTo<R = boolean, P0 = unknown>(_scriptingIsEqualTo: P0): R;
    stringByAddingPercentEscapes<R = unknown>(): R;
    stringByRemovingPercentEscapes<R = unknown>(): R;
    standardizedURLPath<R = unknown>(): R;
    stringByReplacingPercentEscapesUsingEncoding<R = unknown, P0 = number>(_stringByReplacingPercentEscapesUsingEncoding: P0): R;
    stringByAddingPercentEscapesUsingEncoding<R = unknown, P0 = number>(_stringByAddingPercentEscapesUsingEncoding: P0): R;
    stringByAddingPercentEncodingWithAllowedCharacters<R = unknown, P0 = unknown>(_stringByAddingPercentEncodingWithAllowedCharacters: P0): R;
    stringMarkingUpcaseTransitionsWithDelimiter2<R = unknown, P0 = unknown>(_stringMarkingUpcaseTransitionsWithDelimiter2: P0): R;
    _web_HTTPStyleLanguageCodeWithoutRegion<R = unknown>(): R;
    _web_HTTPStyleLanguageCode<R = unknown>(): R;
    enumerateLinguisticTagsInRange_scheme_options_orthography_usingBlock<R = void, P0 = _NSRange, P1 = unknown, P2 = number, P3 = unknown, P4 = CDUnknownBlockType>(_enumerateLinguisticTagsInRange: P0, _scheme: P1, _options: P2, _orthography: P3, _usingBlock: P4): R;
    linguisticTagsInRange_scheme_options_orthography_tokenRanges<R = unknown, P0 = _NSRange, P1 = unknown, P2 = number, P3 = unknown, P4 = unknown>(_linguisticTagsInRange: P0, _scheme: P1, _options: P2, _orthography: P3, _tokenRanges: P4): R;
    _flushRegularExpressionCaches<R = void>(): R;
    _stringByReplacingOccurrencesOfRegularExpressionPattern_withTemplate_options_range<R = unknown, P0 = unknown, P1 = unknown, P2 = number, P3 = _NSRange>(__stringByReplacingOccurrencesOfRegularExpressionPattern: P0, _withTemplate: P1, _options: P2, _range: P3): R;
    _rangeOfRegularExpressionPattern_options_range_locale<R = _NSRange, P0 = unknown, P1 = number, P2 = _NSRange, P3 = unknown>(__rangeOfRegularExpressionPattern: P0, _options: P1, _range: P2, _locale: P3): R;
    significantText<R = _NSRange>(): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    __graphemeCount<R = number>(): R;
    hash<R = number>(): R;
    description<R = NSString>(): R;
    length<R = number>(): R;
    writableTypeIdentifiersForItemProvider<R = NSArray>(): R;
    stringByRemovingPercentEncoding<R = NSString>(): R;
    debugDescription<R = NSString>(): R;
    superclass<R = unknown>(): R;
    // + NSString(NSPasteboardSupport): 
    pasteboardPropertyListForType<R = unknown, P0 = unknown>(_pasteboardPropertyListForType: P0): R;
    writableTypesForPasteboard<R = unknown, P0 = unknown>(_writableTypesForPasteboard: P0): R;
    initWithPasteboardPropertyList_ofType<R = unknown, P0 = unknown, P1 = unknown>(_initWithPasteboardPropertyList: P0, _ofType: P1): R;
    // + NSString(NSSafariPrefixThingy): 
    _hasLocalizedCaseInsensitivePrefix<R = boolean, P0 = unknown>(__hasLocalizedCaseInsensitivePrefix: P0): R;
    // + NSString(NSStringKitExtensions): 
    stringWithoutAmpersand<R = unknown>(): R;
    // + NSString(NSStringTextExtras): 
    rangeOfGraphicalSegmentAtIndex<R = _NSRange, P0 = number>(_rangeOfGraphicalSegmentAtIndex: P0): R;
    _endOfParagraphAtIndex<R = number, P0 = number>(__endOfParagraphAtIndex: P0): R;
    // + NSString(NSTextFinderAdditions): 
    _textfinder_firstMatchForRegularExpression_inRange<R = _NSRange, P0 = unknown, P1 = _NSRange>(__textfinder_firstMatchForRegularExpression: P0, _inRange: P1): R;
    // + NSString(MSBaseArchiver): 
    initWithUnarchiver<R = unknown, P0 = unknown>(_initWithUnarchiver: P0): R;
    encodeWithArchiver<R = void, P0 = unknown>(_encodeWithArchiver: P0): R;
    // + NSString(Math): 
    mathSet<R = unknown>(): R;
    containsMathSymbols<R = boolean>(): R;
    mathPrefix<R = unknown>(): R;
    stringByCalculatingMath<R = unknown>(): R;
    numberValueUsingMath<R = unknown>(): R;
    numberValueByUsingNumberFormatter<R = unknown>(): R;
    stringBySanitizingForNumberFormatter<R = unknown, P0 = unknown>(_stringBySanitizingForNumberFormatter: P0): R;
    stringByCalculatingPercentagesInContextOfSize_onAxis<R = unknown, P0 = CGRect, P1 = number>(_stringByCalculatingPercentagesInContextOfSize: P0, _onAxis: P1): R;
    numberValueInContextOfSize_onAxis<R = unknown, P0 = CGRect, P1 = number>(_numberValueInContextOfSize: P0, _onAxis: P1): R;
    // + NSString(ModelSupport): 
    hasDefaultValues<R = boolean>(): R;
    // + NSString(NSString_Color): 
    colorFromHSL<R = unknown>(): R;
    sRGBColorFromHexColor<R = unknown>(): R;
    colorFromHex<R = unknown>(): R;
    colorFromRGB<R = unknown, P0 = unknown>(_colorFromRGB: P0): R;
    colorValue<R = unknown>(): R;
    // + NSString(SHA1): 
    sha1<R = unknown>(): R;
    // + NSString(SVG): 
    svgURL<R = unknown>(): R;
    // + NSString(SVGTransformImporter): 
    transformTrimmedName<R = unknown>(): R;
    // + NSString(Slug): 
    uniqueSlugUsingEarlierSlugs_atIndex<R = unknown, P0 = unknown, P1 = number>(_uniqueSlugUsingEarlierSlugs: P0, _atIndex: P1): R;
    uniqueSlugUsingEarlierSlugs<R = unknown, P0 = unknown>(_uniqueSlugUsingEarlierSlugs: P0): R;
    // + NSString(TreeAsDictionarySupport): 
    treeAsDictionary<R = unknown>(): R;
    // + NSString(UIStringDrawingCompatibility): 
    sizeWithFont<R = CGSize, P0 = unknown>(_sizeWithFont: P0): R;
    drawCenteredAtPoint_withFont_color<R = void, P0 = CGPoint, P1 = unknown, P2 = unknown>(_drawCenteredAtPoint: P0, _withFont: P1, _color: P2): R;
    drawAtPoint_withFont<R = void, P0 = CGPoint, P1 = unknown>(_drawAtPoint: P0, _withFont: P1): R;
    // + NSString(WordRanges): 
    wordRanges<R = unknown>(): R;
    enumerateWordRanges<R = void, P0 = CDUnknownBlockType>(_enumerateWordRanges: P0): R;
    // + NSString(NSPasteboardSupport):
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
    // + NSString(MSBaseArchiver):
    archiveReferenceIdentifier_bc<R = NSString>(): R;
    // + NSString(Slug):
    slug<R = NSString>(): R;
  }
  namespace NSString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSItemProviderReadingProtocol, NSItemProviderWritingProtocol, NSCopyingProtocol, NSMutableCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSString>(): R;
      new: <R = NSString>() => R;
      stringWithContentsOfFile_usedEncoding_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_stringWithContentsOfFile: P0, _usedEncoding: P1, _error: P2): R;
      stringWithContentsOfFile_encoding_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_stringWithContentsOfFile: P0, _encoding: P1, _error: P2): R;
      stringWithContentsOfURL_usedEncoding_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_stringWithContentsOfURL: P0, _usedEncoding: P1, _error: P2): R;
      stringWithContentsOfURL_encoding_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_stringWithContentsOfURL: P0, _encoding: P1, _error: P2): R;
      stringWithContentsOfURL<R = unknown, P0 = unknown>(_stringWithContentsOfURL: P0): R;
      stringWithContentsOfFile<R = unknown, P0 = unknown>(_stringWithContentsOfFile: P0): R;
      stringWithFormat_locale<R = unknown, P0 = unknown, P1 = unknown>(_stringWithFormat: P0, _locale: P1): R;
      stringWithFormat<R = unknown, P0 = unknown>(_stringWithFormat: P0): R;
      stringWithValidatedFormat_validFormatSpecifiers_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_stringWithValidatedFormat: P0, _validFormatSpecifiers: P1, _error: P2): R;
      localizedStringWithFormat<R = unknown, P0 = unknown>(_localizedStringWithFormat: P0): R;
      localizedStringWithValidatedFormat_validFormatSpecifiers_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_localizedStringWithValidatedFormat: P0, _validFormatSpecifiers: P1, _error: P2): R;
      stringWithBytes_length_encoding<R = unknown, P0 = void, P1 = number, P2 = number>(_stringWithBytes: P0, _length: P1, _encoding: P2): R;
      stringWithUTF8String<R = unknown, P0 = string>(_stringWithUTF8String: P0): R;
      stringWithCString_encoding<R = unknown, P0 = string, P1 = number>(_stringWithCString: P0, _encoding: P1): R;
      stringWithCString_length<R = unknown, P0 = string, P1 = number>(_stringWithCString: P0, _length: P1): R;
      stringWithCString<R = unknown, P0 = string>(_stringWithCString: P0): R;
      stringWithCharacters_length<R = unknown, P0 = number, P1 = number>(_stringWithCharacters: P0, _length: P1): R;
      stringWithString<R = unknown, P0 = unknown>(_stringWithString: P0): R;
      string<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      initialize<R = void>(): R;
      pathWithComponents<R = unknown, P0 = unknown>(_pathWithComponents: P0): R;
      _newZStringWithUTF8String<R = unknown, P0 = string>(__newZStringWithUTF8String: P0): R;
      _newZStringWithString<R = unknown, P0 = unknown>(__newZStringWithString: P0): R;
      _newZStringWithCharacters_length<R = unknown, P0 = number, P1 = number>(__newZStringWithCharacters: P0, _length: P1): R;
      stringEncodingForData_encodingOptions_convertedString_usedLossyConversion<R = number, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string>(_stringEncodingForData: P0, _encodingOptions: P1, _convertedString: P2, _usedLossyConversion: P3): R;
      _scriptingTextWithDescriptor<R = unknown, P0 = unknown>(__scriptingTextWithDescriptor: P0): R;
      _scriptStringWithTabCount<R = unknown, P0 = number>(__scriptStringWithTabCount: P0): R;
      _scriptStringWithPropertyAccess<R = unknown, P0 = number>(__scriptStringWithPropertyAccess: P0): R;
      localizedNameOfStringEncoding<R = unknown, P0 = number>(_localizedNameOfStringEncoding: P0): R;
      availableStringEncodings<R = number>(): R;
      defaultCStringEncoding<R = number>(): R;
      _web_stringRepresentationForBytes<R = unknown, P0 = number>(__web_stringRepresentationForBytes: P0): R;
      // + NSString(NSPasteboardSupport): 
      readableTypesForPasteboard<R = unknown, P0 = unknown>(_readableTypesForPasteboard: P0): R;
      // + NSString(JSTExtras): 
      stringWithUUID<R = unknown>(): R;
      // + NSString(Math): 
      mathStringWithOperand1_operator_operand2<R = unknown, P0 = number, P1 = unknown, P2 = number>(_mathStringWithOperand1: P0, _operator: P1, _operand2: P2): R;
      nativeDecimalSeparator<R = unknown>(): R;
      numberFormatter<R = unknown>(): R;
      // + NSString(NSIntegerString): 
      stringWithInt_suffix<R = unknown, P0 = number, P1 = unknown>(_stringWithInt: P0, _suffix: P1): R;
      // + NSString(NSString_Color): 
      staticColorDictionary<R = unknown>(): R;
      // + NSString(SVG): 
      svgStringWithPercentageFractionalValue<R = unknown, P0 = number>(_svgStringWithPercentageFractionalValue: P0): R;
      svgStringWithPercentageValue<R = unknown, P0 = number>(_svgStringWithPercentageValue: P0): R;
      svgStringWithNumberValue<R = unknown, P0 = number>(_svgStringWithNumberValue: P0): R;
      svgStringWithPixelValue<R = unknown, P0 = number>(_svgStringWithPixelValue: P0): R;
    }
  }
}

declare const NSString: cocoa.NSString.CLASS;
