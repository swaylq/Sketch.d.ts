/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFileCoordinatorUploadFilePreparingProtocol<T0 = void, T1 = void, T2 = void> {
    prepareFileForUploadingAtURL_originalURLExtension_inDirectory_destinationSandboxExtension_completionHandler<R = NSProgress, P0 = NSURL, P1 = NSData, P2 = NSURL, P3 = NSData, P4 = CDUnknownBlockType>(_prepareFileForUploadingAtURL: P0, _originalURLExtension: P1, _inDirectory: P2, _destinationSandboxExtension: P3, _completionHandler: P4): R;
  }
  namespace NSFileCoordinatorUploadFilePreparingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
