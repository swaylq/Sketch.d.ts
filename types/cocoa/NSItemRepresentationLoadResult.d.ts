/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSItemRepresentationLoadResult<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    copyWithData_urlWrapper_cleanupHandler_error<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = unknown>(_copyWithData: P0, _urlWrapper: P1, _cleanupHandler: P2, _error: P3): R;
    dealloc<R = void>(): R;
    wasOpenedInPlace<R = boolean>(): R;
    setWasOpenedInPlace<R = void, P0 = boolean>(_v: P0): R;
    archivedObjectClassName<R = NSString>(): R;
    setArchivedObjectClassName<R = void, P0 = NSString>(_v: P0): R;
    error<R = NSError>(): R;
    setError<R = void, P0 = NSError>(_v: P0): R;
    cleanupHandler<R = CDUnknownBlockType>(): R;
    setCleanupHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
    urlWrapper<R = NSSecurityScopedURLWrapper>(): R;
    setUrlWrapper<R = void, P0 = NSSecurityScopedURLWrapper>(_v: P0): R;
    data<R = NSData>(): R;
    setData<R = void, P0 = NSData>(_v: P0): R;
  }
  namespace NSItemRepresentationLoadResult {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSItemRepresentationLoadResult>(): R;
      new: <R = NSItemRepresentationLoadResult>() => R;
      resultWithError<R = unknown, P0 = unknown>(_resultWithError: P0): R;
      resultWithData_urlWrapper_cleanupHandler_error<R = unknown, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType, P3 = unknown>(_resultWithData: P0, _urlWrapper: P1, _cleanupHandler: P2, _error: P3): R;
    }
  }
}

declare const NSItemRepresentationLoadResult: cocoa.NSItemRepresentationLoadResult.CLASS;
