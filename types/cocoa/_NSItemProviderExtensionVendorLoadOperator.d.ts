/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSItemProviderExtensionVendorLoadOperator<T0 = void, T1 = void, T2 = void> extends NSObject, _NSItemProviderLoadingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithExtensionContextIdentifier<R = unknown, P0 = unknown>(_initWithExtensionContextIdentifier: P0): R;
    extensionContextIdentifier<R = NSUUID>(): R;
    setExtensionContextIdentifier<R = void, P0 = NSUUID>(_v: P0): R;
    identifier<R = NSUUID>(): R;
    setIdentifier<R = void, P0 = NSUUID>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSItemProviderExtensionVendorLoadOperator {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSItemProviderLoadingProtocol {
      alloc<R = _NSItemProviderExtensionVendorLoadOperator>(): R;
      new: <R = _NSItemProviderExtensionVendorLoadOperator>() => R;
    }
  }
}
