/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSImageData<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, MSCodingProtocol, MSJSONArchiverAlternativeFileReferenceProtocol {
    cxx_destruct<R = void>(): R;
    CGImageAtLevelOfDetail<R = CGImage, P0 = number>(_CGImageAtLevelOfDetail: P0): R;
    generateCGImageAtLevelOfDetail<R = CGImage, P0 = number>(_generateCGImageAtLevelOfDetail: P0): R;
    CGImageSuitableForDrawingWithSize<R = CGImage, P0 = CGSize>(_CGImageSuitableForDrawingWithSize: P0): R;
    correctInvalidGamma<R = void>(): R;
    replacementObjectForJSONEncoder<R = unknown, P0 = unknown>(_replacementObjectForJSONEncoder: P0): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    isAssetEqual<R = boolean, P0 = unknown>(_isAssetEqual: P0): R;
    assetType<R = number>(): R;
    decodeWithUnarchiver<R = void, P0 = unknown>(_decodeWithUnarchiver: P0): R;
    NSImage<R = unknown>(): R;
    isLegacy<R = boolean>(): R;
    setSha1<R = void, P0 = unknown>(_setSha1: P0): R;
    setData<R = void, P0 = unknown>(_setData: P0): R;
    waitForDataLock<R = void>(): R;
    dealloc<R = void>(): R;
    initWithLegacyHash<R = unknown, P0 = unknown>(_initWithLegacyHash: P0): R;
    initWithData_sha<R = unknown, P0 = unknown, P1 = unknown>(_initWithData: P0, _sha: P1): R;
    initWithImage<R = unknown, P0 = unknown>(_initWithImage: P0): R;
    initDefault<R = unknown>(): R;
    treeAsDictionary<R = unknown>(): R;
    imageLock<R = BCReadWriteLock>(): R;
    dataLock<R = OS_dispatch_semaphore>(): R;
    image<R = NSImage>(): R;
    setImage<R = void, P0 = NSImage>(_v: P0): R;
    cgImage<R = CGImage>(): R;
    hash<R = number>(): R;
    archiveReferenceIdentifier_bc<R = NSString>(): R;
    sha1<R = NSData>(): R;
    data<R = NSData>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSImageData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, MSCodingProtocol, MSJSONArchiverAlternativeFileReferenceProtocol {
      alloc<R = MSImageData>(): R;
      new: <R = MSImageData>() => R;
      errorImage<R = unknown>(): R;
    }
  }
}

declare const MSImageData: cocoa.MSImageData.CLASS;
