/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCoder<T0 = void, T1 = void, T2 = void> extends NSObject {
    _validateAllowedClass_forKey_allowingInvocations<R = boolean, P0 = unknown, P1 = unknown, P2 = boolean>(__validateAllowedClass: P0, _forKey: P1, _allowingInvocations: P2): R;
    _validateAllowedClassesContainsClass_forKey<R = boolean, P0 = unknown, P1 = unknown>(__validateAllowedClassesContainsClass: P0, _forKey: P1): R;
    validateClassSupportsSecureCoding<R = boolean, P0 = unknown>(_validateClassSupportsSecureCoding: P0): R;
    validateAllowedClass_forKey<R = boolean, P0 = unknown, P1 = unknown>(_validateAllowedClass: P0, _forKey: P1): R;
    allowedClasses<R = unknown>(): R;
    decodePropertyListForKey<R = unknown, P0 = unknown>(_decodePropertyListForKey: P0): R;
    decodeTopLevelObjectOfClasses_forKey_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_decodeTopLevelObjectOfClasses: P0, _forKey: P1, _error: P2): R;
    decodeObjectOfClasses_forKey_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_decodeObjectOfClasses: P0, _forKey: P1, _error: P2): R;
    decodeObjectOfClasses_forKey<R = unknown, P0 = unknown, P1 = unknown>(_decodeObjectOfClasses: P0, _forKey: P1): R;
    decodeTopLevelObjectOfClass_forKey_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_decodeTopLevelObjectOfClass: P0, _forKey: P1, _error: P2): R;
    decodeObjectOfClass_forKey_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_decodeObjectOfClass: P0, _forKey: P1, _error: P2): R;
    decodeObjectOfClass_forKey<R = unknown, P0 = unknown, P1 = unknown>(_decodeObjectOfClass: P0, _forKey: P1): R;
    requiresSecureCoding<R = boolean>(): R;
    systemVersion<R = number>(): R;
    objectZone<R = _NSZone>(): R;
    setObjectZone<R = void, P0 = _NSZone>(_setObjectZone: P0): R;
    setAllowedClasses<R = void, P0 = unknown>(_setAllowedClasses: P0): R;
    decodeBytesForKey_returnedLength<R = string, P0 = unknown, P1 = number>(_decodeBytesForKey: P0, _returnedLength: P1): R;
    decodeDoubleForKey<R = number, P0 = unknown>(_decodeDoubleForKey: P0): R;
    decodeFloatForKey<R = number, P0 = unknown>(_decodeFloatForKey: P0): R;
    decodeLongForKey<R = number, P0 = unknown>(_decodeLongForKey: P0): R;
    decodeIntegerForKey<R = number, P0 = unknown>(_decodeIntegerForKey: P0): R;
    decodeInt64ForKey<R = number, P0 = unknown>(_decodeInt64ForKey: P0): R;
    decodeInt32ForKey<R = number, P0 = unknown>(_decodeInt32ForKey: P0): R;
    decodeIntForKey<R = number, P0 = unknown>(_decodeIntForKey: P0): R;
    decodeBoolForKey<R = boolean, P0 = unknown>(_decodeBoolForKey: P0): R;
    containsValueForKey<R = boolean, P0 = unknown>(_containsValueForKey: P0): R;
    encodeBytes_length_forKey<R = void, P0 = string, P1 = number, P2 = unknown>(_encodeBytes: P0, _length: P1, _forKey: P2): R;
    encodeDouble_forKey<R = void, P0 = number, P1 = unknown>(_encodeDouble: P0, _forKey: P1): R;
    encodeFloat_forKey<R = void, P0 = number, P1 = unknown>(_encodeFloat: P0, _forKey: P1): R;
    encodeLong_forKey<R = void, P0 = number, P1 = unknown>(_encodeLong: P0, _forKey: P1): R;
    encodeInteger_forKey<R = void, P0 = number, P1 = unknown>(_encodeInteger: P0, _forKey: P1): R;
    encodeInt64_forKey<R = void, P0 = number, P1 = unknown>(_encodeInt64: P0, _forKey: P1): R;
    encodeInt32_forKey<R = void, P0 = number, P1 = unknown>(_encodeInt32: P0, _forKey: P1): R;
    encodeInt_forKey<R = void, P0 = number, P1 = unknown>(_encodeInt: P0, _forKey: P1): R;
    encodeBool_forKey<R = void, P0 = boolean, P1 = unknown>(_encodeBool: P0, _forKey: P1): R;
    encodeConditionalObject_forKey<R = void, P0 = unknown, P1 = unknown>(_encodeConditionalObject: P0, _forKey: P1): R;
    decodeTopLevelObjectForKey_error<R = unknown, P0 = unknown, P1 = unknown>(_decodeTopLevelObjectForKey: P0, _error: P1): R;
    decodeObjectForKey_error<R = unknown, P0 = unknown, P1 = unknown>(_decodeObjectForKey: P0, _error: P1): R;
    decodeObjectForKey<R = unknown, P0 = unknown>(_decodeObjectForKey: P0): R;
    encodeObject_forKey<R = void, P0 = unknown, P1 = unknown>(_encodeObject: P0, _forKey: P1): R;
    _allowsValueCoding<R = boolean>(): R;
    allowsKeyedCoding<R = boolean>(): R;
    decodeBytesWithReturnedLength<R = void, P0 = number>(_decodeBytesWithReturnedLength: P0): R;
    decodeArrayOfObjCType_count_at<R = void, P0 = string, P1 = number, P2 = void>(_decodeArrayOfObjCType: P0, _count: P1, _at: P2): R;
    decodeValuesOfObjCTypes<R = void, P0 = string>(_decodeValuesOfObjCTypes: P0): R;
    decodePropertyList<R = unknown>(): R;
    decodeTopLevelObjectAndReturnError<R = unknown, P0 = unknown>(_decodeTopLevelObjectAndReturnError: P0): R;
    decodeObject<R = unknown>(): R;
    encodeBytes_length<R = void, P0 = void, P1 = number>(_encodeBytes: P0, _length: P1): R;
    encodeArrayOfObjCType_count_at<R = void, P0 = string, P1 = number, P2 = void>(_encodeArrayOfObjCType: P0, _count: P1, _at: P2): R;
    encodeValuesOfObjCTypes<R = void, P0 = string>(_encodeValuesOfObjCTypes: P0): R;
    encodeConditionalObject<R = void, P0 = unknown>(_encodeConditionalObject: P0): R;
    encodeRootObject<R = void, P0 = unknown>(_encodeRootObject: P0): R;
    encodeByrefObject<R = void, P0 = unknown>(_encodeByrefObject: P0): R;
    encodeBycopyObject<R = void, P0 = unknown>(_encodeBycopyObject: P0): R;
    encodePropertyList<R = void, P0 = unknown>(_encodePropertyList: P0): R;
    encodeObject<R = void, P0 = unknown>(_encodeObject: P0): R;
    versionForClassName<R = number, P0 = unknown>(_versionForClassName: P0): R;
    decodeDataObject<R = unknown>(): R;
    decodeValueOfObjCType_at_size<R = void, P0 = string, P1 = void, P2 = number>(_decodeValueOfObjCType: P0, _at: P1, _size: P2): R;
    decodeValueOfObjCType_at<R = void, P0 = string, P1 = void>(_decodeValueOfObjCType: P0, _at: P1): R;
    encodeDataObject<R = void, P0 = unknown>(_encodeDataObject: P0): R;
    encodeValueOfObjCType_at<R = void, P0 = string, P1 = void>(_encodeValueOfObjCType: P0, _at: P1): R;
    __failWithExternalError<R = void, P0 = unknown>(___failWithExternalError: P0): R;
    __failWithExceptionName_errorCode_format<R = boolean, P0 = unknown, P1 = number, P2 = unknown>(___failWithExceptionName: P0, _errorCode: P1, _format: P2): R;
    __failWithException<R = boolean, P0 = unknown>(___failWithException: P0): R;
    __tryDecodeObjectForKey_error_decodeBlock<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(___tryDecodeObjectForKey: P0, _error: P1, _decodeBlock: P2): R;
    __setError<R = void, P0 = unknown>(___setError: P0): R;
    error<R = unknown>(): R;
    decodingFailurePolicy<R = number>(): R;
    failWithError<R = void, P0 = unknown>(_failWithError: P0): R;
    decodeRect<R = CGRect>(): R;
    encodeRect<R = void, P0 = CGRect>(_encodeRect: P0): R;
    decodeSize<R = CGSize>(): R;
    encodeSize<R = void, P0 = CGSize>(_encodeSize: P0): R;
    decodePoint<R = CGPoint>(): R;
    encodePoint<R = void, P0 = CGPoint>(_encodePoint: P0): R;
    decodeRectForKey<R = CGRect, P0 = unknown>(_decodeRectForKey: P0): R;
    decodeSizeForKey<R = CGSize, P0 = unknown>(_decodeSizeForKey: P0): R;
    decodePointForKey<R = CGPoint, P0 = unknown>(_decodePointForKey: P0): R;
    encodeRect_forKey<R = void, P0 = CGRect, P1 = unknown>(_encodeRect: P0, _forKey: P1): R;
    encodeSize_forKey<R = void, P0 = CGSize, P1 = unknown>(_encodeSize: P0, _forKey: P1): R;
    encodePoint_forKey<R = void, P0 = CGPoint, P1 = unknown>(_encodePoint: P0, _forKey: P1): R;
    decodeNXObject<R = unknown>(): R;
    encodeNXObject<R = void, P0 = unknown>(_encodeNXObject: P0): R;
    // + NSCoder(NSAppKitCoderExtensions): 
    _decodeDepth<R = number>(): R;
    _encodeDepth<R = void, P0 = number>(__encodeDepth: P0): R;
    _decodeByte<R = number>(): R;
    _encodeByte<R = void, P0 = number>(__encodeByte: P0): R;
    // + NSCoder(NSAppKitColorExtensions): 
    decodeNXColor<R = unknown>(): R;
  }
  namespace NSCoder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSCoder>(): R;
      new: <R = NSCoder>() => R;
      __categorizeException_intoError<R = boolean, P0 = unknown, P1 = unknown>(___categorizeException: P0, _intoError: P1): R;
  
  }
  }
}

declare const NSCoder: cocoa.NSCoder.CLASS;
