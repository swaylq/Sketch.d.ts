/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCSketchFileMigratorProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    migrateResourcesNamed_inFolderAtBookmark_withReply<R = void, P0 = NSArray, P1 = NSData, P2 = CDUnknownBlockType>(_migrateResourcesNamed: P0, _inFolderAtBookmark: P1, _withReply: P2): R;
    migrateDocumentAtBookmark_intoFolderAtBookmark_withReply<R = void, P0 = NSData, P1 = NSData, P2 = CDUnknownBlockType>(_migrateDocumentAtBookmark: P0, _intoFolderAtBookmark: P1, _withReply: P2): R;
    validateDocumentAtBookmark_withReply<R = void, P0 = NSData, P1 = CDUnknownBlockType>(_validateDocumentAtBookmark: P0, _withReply: P1): R;
  }
  namespace BCSketchFileMigratorProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
