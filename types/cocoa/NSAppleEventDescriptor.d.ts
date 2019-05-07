/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAppleEventDescriptor<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    coerceToDescriptorType<R = unknown, P0 = number>(_coerceToDescriptorType: P0): R;
    keywordForDescriptorAtIndex<R = number, P0 = number>(_keywordForDescriptorAtIndex: P0): R;
    removeDescriptorWithKeyword<R = void, P0 = number>(_removeDescriptorWithKeyword: P0): R;
    descriptorForKeyword<R = unknown, P0 = number>(_descriptorForKeyword: P0): R;
    setDescriptor_forKeyword<R = void, P0 = unknown, P1 = number>(_setDescriptor: P0, _forKeyword: P1): R;
    removeDescriptorAtIndex<R = void, P0 = number>(_removeDescriptorAtIndex: P0): R;
    descriptorAtIndex<R = unknown, P0 = number>(_descriptorAtIndex: P0): R;
    insertDescriptor_atIndex<R = void, P0 = unknown, P1 = number>(_insertDescriptor: P0, _atIndex: P1): R;
    sendEventWithOptions_timeout_error<R = unknown, P0 = number, P1 = number, P2 = unknown>(_sendEventWithOptions: P0, _timeout: P1, _error: P2): R;
    attributeDescriptorForKeyword<R = unknown, P0 = number>(_attributeDescriptorForKeyword: P0): R;
    setAttributeDescriptor_forKeyword<R = void, P0 = unknown, P1 = number>(_setAttributeDescriptor: P0, _forKeyword: P1): R;
    removeParamDescriptorWithKeyword<R = void, P0 = number>(_removeParamDescriptorWithKeyword: P0): R;
    paramDescriptorForKeyword<R = unknown, P0 = number>(_paramDescriptorForKeyword: P0): R;
    setParamDescriptor_forKeyword<R = void, P0 = unknown, P1 = number>(_setParamDescriptor: P0, _forKeyword: P1): R;
    _dataForDescriptorType<R = unknown, P0 = number>(__dataForDescriptorType: P0): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    initRecordDescriptor<R = unknown>(): R;
    initListDescriptor<R = unknown>(): R;
    initWithEventClass_eventID_targetDescriptor_returnID_transactionID<R = unknown, P0 = number, P1 = number, P2 = unknown, P3 = number, P4 = number>(_initWithEventClass: P0, _eventID: P1, _targetDescriptor: P2, _returnID: P3, _transactionID: P4): R;
    initWithDescriptorType_data<R = unknown, P0 = number, P1 = unknown>(_initWithDescriptorType: P0, _data: P1): R;
    initWithDescriptorType_bytes_length<R = unknown, P0 = number, P1 = void, P2 = number>(_initWithDescriptorType: P0, _bytes: P1, _length: P2): R;
    initWithAEDescNoCopy<R = unknown, P0 = AEDesc>(_initWithAEDescNoCopy: P0): R;
    _flushAEDesc<R = void>(): R;
    _isAutoWhitelistedEvent<R = boolean>(): R;
    _senderHasGenericSendRights<R = boolean>(): R;
    _senderAccessGroups<R = unknown>(): R;
    _senderHasSpecificSendRights<R = boolean>(): R;
    _filePathValue<R = unknown>(): R;
    _singleFilePathValue<R = unknown>(): R;
    _fsRefValue<R = unknown>(): R;
    _fileURLValue<R = unknown>(): R;
    _dateValue<R = unknown>(): R;
    _copyValueOfDescriptorType_toBuffer_ofLength<R = boolean, P0 = number, P1 = void, P2 = number>(__copyValueOfDescriptorType: P0, _toBuffer: P1, _ofLength: P2): R;
    _numberValue<R = unknown>(): R;
    _setAEDesc<R = void, P0 = AEDesc>(__setAEDesc: P0): R;
    _AEDesc<R = AEDesc>(): R;
    _initWithoutAEDesc<R = unknown>(): R;
    _initWithDescriptorType_bytes_byteCount<R = unknown, P0 = number, P1 = void, P2 = number>(__initWithDescriptorType: P0, _bytes: P1, _byteCount: P2): R;
    removeDecriptorAtIndex<R = void, P0 = number>(_removeDecriptorAtIndex: P0): R;
    _scriptingAnyDescriptor<R = unknown>(): R;
    _scriptingAlternativeValueRankWithDescriptor<R = number, P0 = unknown>(__scriptingAlternativeValueRankWithDescriptor: P0): R;
    _valueOfType_withDeferredSpecifierEvaluation<R = unknown, P0 = unknown, P1 = boolean>(__valueOfType: P0, _withDeferredSpecifierEvaluation: P1): R;
    _valueOfType<R = unknown, P0 = unknown>(__valueOfType: P0): R;
    _printSettingsValue<R = unknown>(): R;
    isRecordDescriptor<R = boolean>(): R;
    numberOfItems<R = number>(): R;
    transactionID<R = number>(): R;
    returnID<R = number>(): R;
    eventID<R = number>(): R;
    eventClass<R = number>(): R;
    fileURLValue<R = NSURL>(): R;
    dateValue<R = NSDate>(): R;
    stringValue<R = NSString>(): R;
    typeCodeValue<R = number>(): R;
    doubleValue<R = number>(): R;
    int32Value<R = number>(): R;
    enumCodeValue<R = number>(): R;
    booleanValue<R = number>(): R;
    data<R = NSData>(): R;
    descriptorType<R = number>(): R;
    aeDesc<R = AEDesc>(): R;
  }
  namespace NSAppleEventDescriptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSAppleEventDescriptor>(): R;
      new: <R = NSAppleEventDescriptor>() => R;
      recordDescriptor<R = unknown>(): R;
      listDescriptor<R = unknown>(): R;
      appleEventWithEventClass_eventID_targetDescriptor_returnID_transactionID<R = unknown, P0 = number, P1 = number, P2 = unknown, P3 = number, P4 = number>(_appleEventWithEventClass: P0, _eventID: P1, _targetDescriptor: P2, _returnID: P3, _transactionID: P4): R;
      descriptorWithApplicationURL<R = unknown, P0 = unknown>(_descriptorWithApplicationURL: P0): R;
      descriptorWithBundleIdentifier<R = unknown, P0 = unknown>(_descriptorWithBundleIdentifier: P0): R;
      descriptorWithProcessIdentifier<R = unknown, P0 = number>(_descriptorWithProcessIdentifier: P0): R;
      currentProcessDescriptor<R = unknown>(): R;
      descriptorWithFileURL<R = unknown, P0 = unknown>(_descriptorWithFileURL: P0): R;
      descriptorWithDate<R = unknown, P0 = unknown>(_descriptorWithDate: P0): R;
      descriptorWithString<R = unknown, P0 = unknown>(_descriptorWithString: P0): R;
      descriptorWithTypeCode<R = unknown, P0 = number>(_descriptorWithTypeCode: P0): R;
      descriptorWithDouble<R = unknown, P0 = number>(_descriptorWithDouble: P0): R;
      descriptorWithInt32<R = unknown, P0 = number>(_descriptorWithInt32: P0): R;
      descriptorWithEnumCode<R = unknown, P0 = number>(_descriptorWithEnumCode: P0): R;
      descriptorWithBoolean<R = unknown, P0 = number>(_descriptorWithBoolean: P0): R;
      descriptorWithDescriptorType_data<R = unknown, P0 = number, P1 = unknown>(_descriptorWithDescriptorType: P0, _data: P1): R;
      descriptorWithDescriptorType_bytes_length<R = unknown, P0 = number, P1 = void, P2 = number>(_descriptorWithDescriptorType: P0, _bytes: P1, _length: P2): R;
      nullDescriptor<R = unknown>(): R;
      _descriptorWithNumber<R = unknown, P0 = unknown>(__descriptorWithNumber: P0): R;
      _scriptingAnyWithDescriptor<R = unknown, P0 = unknown>(__scriptingAnyWithDescriptor: P0): R;
      _descriptorOfType_withValue<R = unknown, P0 = unknown, P1 = unknown>(__descriptorOfType: P0, _withValue: P1): R;
      _descriptorOfType_withValue_orReasonWhyNot<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__descriptorOfType: P0, _withValue: P1, _orReasonWhyNot: P2): R;
    }
  }
}

declare const NSAppleEventDescriptor: cocoa.NSAppleEventDescriptor.CLASS;
