/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSError<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    _cfTypeID<R = number>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    redactedDescription<R = unknown>(): R;
    description<R = unknown>(): R;
    _retainedUserInfoCallBackForKey<R = __CFString, P0 = unknown>(__retainedUserInfoCallBackForKey: P0): R;
    _cocoaErrorStringWithKind<R = unknown, P0 = unknown>(__cocoaErrorStringWithKind: P0): R;
    _cocoaErrorStringWithKind_variant<R = unknown, P0 = unknown, P1 = unknown>(__cocoaErrorStringWithKind: P0, _variant: P1): R;
    hash<R = number>(): R;
    dealloc<R = void>(): R;
    initWithDomain_code_userInfo<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithDomain: P0, _code: P1, _userInfo: P2): R;
    _web_failingURL<R = unknown>(): R;
    _web_localizedDescription<R = unknown>(): R;
    _web_errorIsInDomain<R = boolean, P0 = unknown>(__web_errorIsInDomain: P0): R;
    _web_initWithDomain_code_failingURL<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(__web_initWithDomain: P0, _code: P1, _failingURL: P2): R;
    _web_initWithDomain_nowarn_code_URL<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(__web_initWithDomain_nowarn: P0, _code: P1, _URL: P2): R;
    _cocoaErrorString<R = unknown, P0 = unknown>(__cocoaErrorString: P0): R;
    _cocoaErrorString_fromBundle_tableName<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(__cocoaErrorString: P0, _fromBundle: P1, _tableName: P2): R;
    _formatCocoaErrorString_parameters_applicableFormatters_count<R = unknown, P0 = unknown, P1 = string, P2 = unknown, P3 = number>(__formatCocoaErrorString: P0, _parameters: P1, _applicableFormatters: P2, _count: P3): R;
    _collectApplicableUserInfoFormatters_max<R = number, P0 = unknown, P1 = number>(__collectApplicableUserInfoFormatters: P0, _max: P1): R;
    replacementObjectForPortCoder<R = unknown, P0 = unknown>(_replacementObjectForPortCoder: P0): R;
    helpAnchor<R = NSString>(): R;
    recoveryAttempter<R = unknown>(): R;
    localizedRecoveryOptions<R = NSArray>(): R;
    localizedRecoverySuggestion<R = NSString>(): R;
    localizedFailureReason<R = NSString>(): R;
    localizedDescription<R = NSString>(): R;
    userInfo<R = NSDictionary>(): R;
    domain<R = NSString>(): R;
    code<R = number>(): R;
  }
  namespace NSError {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSError>(): R;
      new: <R = NSError>() => R;
      userInfoValueProviderForDomain<R = CDUnknownBlockType, P0 = unknown>(_userInfoValueProviderForDomain: P0): R;
      setUserInfoValueProviderForDomain_provider<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_setUserInfoValueProviderForDomain: P0, _provider: P1): R;
      errorWithDomain_code_userInfo<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_errorWithDomain: P0, _code: P1, _userInfo: P2): R;
      _web_errorWithDomain_code_URL<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(__web_errorWithDomain: P0, _code: P1, _URL: P2): R;
      _web_errorWithDomain_code_failingURL<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(__web_errorWithDomain: P0, _code: P1, _failingURL: P2): R;
      _web_addErrorsWithCodesAndDescriptions_inDomain<R = void, P0 = unknown, P1 = unknown>(__web_addErrorsWithCodesAndDescriptions: P0, _inDomain: P1): R;
      _registerFormatter_forErrorKey_parameters<R = void, P0 = CDUnknownFunctionPointerType, P1 = unknown, P2 = string>(__registerFormatter: P0, _forErrorKey: P1, _parameters: P2): R;
      _registerBuiltInFormatters<R = void>(): R;
      _setFileNameLocalizationEnabled<R = void, P0 = boolean>(__setFileNameLocalizationEnabled: P0): R;
      _readCorruptErrorWithFormat<R = unknown, P0 = unknown>(__readCorruptErrorWithFormat: P0): R;
    }
  }
}

declare const NSError: cocoa.NSError.CLASS;
