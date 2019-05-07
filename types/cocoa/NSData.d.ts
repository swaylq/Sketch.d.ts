/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSData<T0 = void, T1 = void, T2 = void> {
    // + NSData(NSData): 
    _providesConcreteBacking<R = boolean>(): R;
    base64Encoding<R = unknown>(): R;
    initWithBase64Encoding<R = unknown, P0 = unknown>(_initWithBase64Encoding: P0): R;
    base64EncodedDataWithOptions<R = unknown, P0 = number>(_base64EncodedDataWithOptions: P0): R;
    initWithBase64EncodedData_options<R = unknown, P0 = unknown, P1 = number>(_initWithBase64EncodedData: P0, _options: P1): R;
    base64EncodedStringWithOptions<R = unknown, P0 = number>(_base64EncodedStringWithOptions: P0): R;
    initWithBase64EncodedString_options<R = unknown, P0 = unknown, P1 = number>(_initWithBase64EncodedString: P0, _options: P1): R;
    _base64EncodingAsString_withOptions<R = unknown, P0 = boolean, P1 = number>(__base64EncodingAsString: P0, _withOptions: P1): R;
    _initWithBase64EncodedObject_options<R = unknown, P0 = unknown, P1 = number>(__initWithBase64EncodedObject: P0, _options: P1): R;
    _decodeBase64EncodedCharacterBuffer_length_options_buffer_bufferLength_state<R = boolean, P0 = string, P1 = number, P2 = number, P3 = string, P4 = number, P5 = unknown>(__decodeBase64EncodedCharacterBuffer: P0, _length: P1, _options: P2, _buffer: P3, _bufferLength: P4, _state: P5): R;
    _createDispatchData<R = unknown>(): R;
    rangeOfData_options_range<R = _NSRange, P0 = unknown, P1 = number, P2 = _NSRange>(_rangeOfData: P0, _options: P1, _range: P2): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    initWithContentsOfFile_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithContentsOfFile: P0, _error: P1): R;
    initWithContentsOfMappedFile_error<R = unknown, P0 = unknown, P1 = unknown>(_initWithContentsOfMappedFile: P0, _error: P1): R;
    initWithContentsOfMappedFile<R = unknown, P0 = unknown>(_initWithContentsOfMappedFile: P0): R;
    initWithContentsOfURL<R = unknown, P0 = unknown>(_initWithContentsOfURL: P0): R;
    initWithContentsOfURL_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithContentsOfURL: P0, _options: P1, _error: P2): R;
    initWithContentsOfFile_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithContentsOfFile: P0, _options: P1, _error: P2): R;
    initWithContentsOfURL_options_maxLength_error<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_initWithContentsOfURL: P0, _options: P1, _maxLength: P2, _error: P3): R;
    initWithContentsOfFile_options_maxLength_error<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_initWithContentsOfFile: P0, _options: P1, _maxLength: P2, _error: P3): R;
    initWithContentsOfFile<R = unknown, P0 = unknown>(_initWithContentsOfFile: P0): R;
    initWithBytes_length_copy_deallocator<R = unknown, P0 = void, P1 = number, P2 = boolean, P3 = CDUnknownBlockType>(_initWithBytes: P0, _length: P1, _copy: P2, _deallocator: P3): R;
    initWithBytesNoCopy_length_deallocator<R = unknown, P0 = void, P1 = number, P2 = CDUnknownBlockType>(_initWithBytesNoCopy: P0, _length: P1, _deallocator: P2): R;
    initWithBytesNoCopy_length_freeWhenDone<R = unknown, P0 = void, P1 = number, P2 = boolean>(_initWithBytesNoCopy: P0, _length: P1, _freeWhenDone: P2): R;
    initWithBytesNoCopy_length<R = unknown, P0 = void, P1 = number>(_initWithBytesNoCopy: P0, _length: P1): R;
    initWithBytes_length<R = unknown, P0 = void, P1 = number>(_initWithBytes: P0, _length: P1): R;
    initWithBytes_length_copy_freeWhenDone_bytesAreVM<R = unknown, P0 = void, P1 = number, P2 = boolean, P3 = boolean, P4 = boolean>(_initWithBytes: P0, _length: P1, _copy: P2, _freeWhenDone: P3, _bytesAreVM: P4): R;
    writeToURL_atomically<R = boolean, P0 = unknown, P1 = boolean>(_writeToURL: P0, _atomically: P1): R;
    writeToFile_atomically<R = boolean, P0 = unknown, P1 = boolean>(_writeToFile: P0, _atomically: P1): R;
    writeToFile_atomically_error<R = boolean, P0 = unknown, P1 = boolean, P2 = unknown>(_writeToFile: P0, _atomically: P1, _error: P2): R;
    writeToURL_options_error<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_writeToURL: P0, _options: P1, _error: P2): R;
    writeToFile_options_error<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(_writeToFile: P0, _options: P1, _error: P2): R;
    subdataWithRange<R = unknown, P0 = _NSRange>(_subdataWithRange: P0): R;
    isEqualToData<R = boolean, P0 = unknown>(_isEqualToData: P0): R;
    _isCompact<R = boolean>(): R;
    _isDispatchData<R = boolean>(): R;
    getBytes_range<R = void, P0 = void, P1 = _NSRange>(_getBytes: P0, _range: P1): R;
    enumerateByteRangesUsingBlock<R = void, P0 = CDUnknownBlockType>(_enumerateByteRangesUsingBlock: P0): R;
    getBytes_length<R = void, P0 = void, P1 = number>(_getBytes: P0, _length: P1): R;
    getBytes<R = void, P0 = void>(_getBytes: P0): R;
    _allowsDirectEncoding<R = boolean>(): R;
    replacementObjectForCoder<R = unknown, P0 = unknown>(_replacementObjectForCoder: P0): R;
    _canReplaceWithDispatchDataForXPCCoder<R = boolean>(): R;
    classForCoder<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    mutableCopyWithZone<R = unknown, P0 = _NSZone>(_mutableCopyWithZone: P0): R;
    _copyWillRetain<R = boolean>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
    hash<R = number>(): R;
    _asciiDescription<R = unknown>(): R;
    description<R = unknown>(): R;
    _cfTypeID<R = number>(): R;
    bytes<R = void>(): R;
    length<R = number>(): R;
    // + NSData(NSDataObjCTypeDeserialization): 
    deserializeDataAt_ofObjCType_atCursor_context<R = void, P0 = void, P1 = string, P2 = number, P3 = unknown>(_deserializeDataAt: P0, _ofObjCType: P1, _atCursor: P2, _context: P3): R;
    // + NSData(NSDataPortCoding): 
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    // + NSData(NSDeserialization): 
    deserializeBytes_length_atCursor<R = void, P0 = void, P1 = number, P2 = number>(_deserializeBytes: P0, _length: P1, _atCursor: P2): R;
    deserializeAlignedBytesLengthAtCursor<R = number, P0 = number>(_deserializeAlignedBytesLengthAtCursor: P0): R;
    deserializeInts_count_atCursor<R = void, P0 = number, P1 = number, P2 = number>(_deserializeInts: P0, _count: P1, _atCursor: P2): R;
    deserializeIntAtCursor<R = number, P0 = number>(_deserializeIntAtCursor: P0): R;
    deserializeInts_count_atIndex<R = void, P0 = number, P1 = number, P2 = number>(_deserializeInts: P0, _count: P1, _atIndex: P2): R;
    deserializeIntAtIndex<R = number, P0 = number>(_deserializeIntAtIndex: P0): R;
    // + NSData(NSKindOfAdditions): 
    isNSData__<R = boolean>(): R;
    // + NSData(NSScriptAppleEventConversion): 
    _scriptingRectangleDescriptor<R = unknown>(): R;
    _scriptingPointDescriptor<R = unknown>(): R;
    _scriptingDebugDescription<R = unknown>(): R;
    // + NSData(NSURLExtras): 
    _replaceCString_withCString<R = unknown, P0 = string, P1 = string>(__replaceCString: P0, _withCString: P1): R;
    _web_parseRFC822HeaderFields<R = unknown>(): R;
    _web_guessedMIMETypeForExtension<R = unknown, P0 = unknown>(__web_guessedMIMETypeForExtension: P0): R;
    _web_guessedMIMEType<R = unknown>(): R;
    _web_guessedMIMETypeForXML<R = unknown>(): R;
    // + NSData(BCReceiptUtilities): 
    hexString<R = unknown>(): R;
    // + NSData(Base64): 
    base64Encoding_xcd<R = unknown>(): R;
    // + NSData(MSBaseArchiver): 
    initWithUnarchiver<R = unknown, P0 = unknown>(_initWithUnarchiver: P0): R;
    encodeWithArchiver<R = void, P0 = unknown>(_encodeWithArchiver: P0): R;
    // + NSData(SHA1): 
    sha1AsString<R = unknown>(): R;
    sha1<R = unknown>(): R;
    // + NSData(TreeAsDictionarySupport): 
    treeAsDictionary<R = unknown>(): R;
    // + NSData(MSBaseArchiver):
    archiveReferenceIdentifier_bc<R = NSString>(): R;
  }
  namespace NSData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSData(NSData): 
      _base64DecodingAlwaysSucceedsForOptions<R = boolean, P0 = number>(__base64DecodingAlwaysSucceedsForOptions: P0): R;
      _newZeroingDataWithBytesNoCopy_length_deallocator<R = unknown, P0 = void, P1 = number, P2 = CDUnknownBlockType>(__newZeroingDataWithBytesNoCopy: P0, _length: P1, _deallocator: P2): R;
      _newZeroingDataWithBytes_length<R = unknown, P0 = void, P1 = number>(__newZeroingDataWithBytes: P0, _length: P1): R;
      dataWithData<R = unknown, P0 = unknown>(_dataWithData: P0): R;
      dataWithContentsOfURL_options_maxLength_error<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = unknown>(_dataWithContentsOfURL: P0, _options: P1, _maxLength: P2, _error: P3): R;
      dataWithContentsOfURL_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_dataWithContentsOfURL: P0, _options: P1, _error: P2): R;
      dataWithContentsOfFile_options_error<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_dataWithContentsOfFile: P0, _options: P1, _error: P2): R;
      dataWithContentsOfMappedFile<R = unknown, P0 = unknown>(_dataWithContentsOfMappedFile: P0): R;
      dataWithContentsOfURL<R = unknown, P0 = unknown>(_dataWithContentsOfURL: P0): R;
      dataWithContentsOfFile<R = unknown, P0 = unknown>(_dataWithContentsOfFile: P0): R;
      dataWithBytesNoCopy_length_freeWhenDone<R = unknown, P0 = void, P1 = number, P2 = boolean>(_dataWithBytesNoCopy: P0, _length: P1, _freeWhenDone: P2): R;
      dataWithBytesNoCopy_length<R = unknown, P0 = void, P1 = number>(_dataWithBytesNoCopy: P0, _length: P1): R;
      dataWithBytes_length<R = unknown, P0 = void, P1 = number>(_dataWithBytes: P0, _length: P1): R;
      data<R = unknown>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      // + NSData(NSScriptAppleEventConversion): 
      _scriptingRectangleWithDescriptor<R = unknown, P0 = unknown>(__scriptingRectangleWithDescriptor: P0): R;
      _scriptingPointWithDescriptor<R = unknown, P0 = unknown>(__scriptingPointWithDescriptor: P0): R;
      // + NSData(Base64): 
      dataWithBase64Encoding_xcd<R = unknown, P0 = unknown>(_dataWithBase64Encoding_xcd: P0): R;
    }
  }
}

declare const NSData: cocoa.NSData.CLASS;
