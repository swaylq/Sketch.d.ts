/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCloudSharingDescriptor<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
    _variantSubstrings<R = unknown>(): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    dealloc<R = void>(): R;
    sharedContentType<R = NSString>(): R;
    setSharedContentType<R = void, P0 = NSString>(_v: P0): R;
    numberOfInvitations<R = number>(): R;
    setNumberOfInvitations<R = void, P0 = number>(_v: P0): R;
    publicShare<R = boolean>(): R;
    setPublicShare<R = void, P0 = boolean>(_v: P0): R;
    invitationsSentViaThirdPartyService<R = boolean>(): R;
    setInvitationsSentViaThirdPartyService<R = void, P0 = boolean>(_v: P0): R;
    operation<R = number>(): R;
    setOperation<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSCloudSharingDescriptor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol {
      alloc<R = _NSCloudSharingDescriptor>(): R;
      new: <R = _NSCloudSharingDescriptor>() => R;
    }
  }
}
