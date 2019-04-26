/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSItemProviderSandboxedResource<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
    resolveURLAndReturnError<R = unknown, P0 = unknown>(_resolveURLAndReturnError: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    dealloc<R = void>(): R;
    initWithContentsOfURL_auditToken_error<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithContentsOfURL: P0, _auditToken: P1, _error: P2): R;
    accessingSecurityScopedResource<R = boolean>(): R;
    setAccessingSecurityScopedResource<R = void, P0 = boolean>(_v: P0): R;
    sandboxExtensionToken<R = NSData>(): R;
    setSandboxExtensionToken<R = void, P0 = NSData>(_v: P0): R;
    resourceURL<R = NSURL>(): R;
    setResourceURL<R = void, P0 = NSURL>(_v: P0): R;
  }
  namespace _NSItemProviderSandboxedResource {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSSecureCodingProtocol, NSCopyingProtocol {
      alloc<R = _NSItemProviderSandboxedResource>(): R;
      new: <R = _NSItemProviderSandboxedResource>() => R;
    }
  }
}
