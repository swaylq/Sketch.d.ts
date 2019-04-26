/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface SCKShareUploadDataSourceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    shareUploadOperation_exportDocumentWithHandler<R = void, P0 = SCKShareUploadOperation, P1 = CDUnknownBlockType>(_shareUploadOperation: P0, _exportDocumentWithHandler: P1): R;
    shareUploadOperation_willStartUploadingShare<R = void, P0 = SCKShareUploadOperation, P1 = SCKShare>(_shareUploadOperation: P0, _willStartUploadingShare: P1): R;
    shareUploadOperation_fileURLForItemWithHash<R = NSURL, P0 = SCKShareUploadOperation, P1 = NSString>(_shareUploadOperation: P0, _fileURLForItemWithHash: P1): R;
  }
  namespace SCKShareUploadDataSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
