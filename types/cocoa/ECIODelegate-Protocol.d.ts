/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface ECIODelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    closeInfoGroup<R = void>(): R;
    openInfoGroupWithKey<R = void, P0 = NSString>(_openInfoGroupWithKey: P0): R;
    outputInfo_withKey<R = void, P0 = unknown, P1 = NSString>(_outputInfo: P0, _withKey: P1): R;
    outputFormat<R = void, P0 = NSString>(_outputFormat: P0): R;
    outputError<R = void, P0 = NSError>(_outputError: P0): R;
    outputErrorWithDomain_code_info_format<R = void, P0 = NSString, P1 = number, P2 = NSDictionary, P3 = NSString>(_outputErrorWithDomain: P0, _code: P1, _info: P2, _format: P3): R;
    urlOptionForKey_defaultingToWorkingDirectory<R = NSURL, P0 = NSString, P1 = boolean>(_urlOptionForKey: P0, _defaultingToWorkingDirectory: P1): R;
    doubleOptionForKey<R = number, P0 = NSString>(_doubleOptionForKey: P0): R;
    arrayOptionForKey_separator<R = NSArray, P0 = NSString, P1 = NSString>(_arrayOptionForKey: P0, _separator: P1): R;
    boolOptionForKey<R = boolean, P0 = NSString>(_boolOptionForKey: P0): R;
    stringOptionForKey<R = NSString, P0 = NSString>(_stringOptionForKey: P0): R;
    optionForKey<R = unknown, P0 = NSString>(_optionForKey: P0): R;
  }
  namespace ECIODelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
