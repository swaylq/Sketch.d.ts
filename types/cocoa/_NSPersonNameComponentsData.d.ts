/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSPersonNameComponentsData<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    dealloc<R = void>(): R;
    _freeIvars<R = void>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    phoneticRepresentation<R = NSPersonNameComponents>(): R;
    setPhoneticRepresentation<R = void, P0 = NSPersonNameComponents>(_v: P0): R;
    nickname<R = NSString>(): R;
    setNickname<R = void, P0 = NSString>(_v: P0): R;
    nameSuffix<R = NSString>(): R;
    setNameSuffix<R = void, P0 = NSString>(_v: P0): R;
    namePrefix<R = NSString>(): R;
    setNamePrefix<R = void, P0 = NSString>(_v: P0): R;
    middleName<R = NSString>(): R;
    setMiddleName<R = void, P0 = NSString>(_v: P0): R;
    familyName<R = NSString>(): R;
    setFamilyName<R = void, P0 = NSString>(_v: P0): R;
    givenName<R = NSString>(): R;
    setGivenName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace _NSPersonNameComponentsData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = _NSPersonNameComponentsData>(): R;
      new: <R = _NSPersonNameComponentsData>() => R;
    }
  }
}
