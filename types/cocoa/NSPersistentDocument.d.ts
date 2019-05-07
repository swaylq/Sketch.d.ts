/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentDocument<T0 = void, T1 = void, T2 = void> extends NSDocument {
    _movePersistentStore_fromURL_toURL_attributes_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(__movePersistentStore: P0, _fromURL: P1, _toURL: P2, _attributes: P3, _error: P4): R;
    backupFileURL<R = unknown>(): R;
    isEntireFileLoaded<R = boolean>(): R;
    _isAtomicPersistentStoreType<R = boolean, P0 = unknown>(__isAtomicPersistentStoreType: P0): R;
    setFileURL<R = void, P0 = unknown>(_setFileURL: P0): R;
    setUndoManager<R = void, P0 = unknown>(_setUndoManager: P0): R;
    setHasUndoManager<R = void, P0 = boolean>(_setHasUndoManager: P0): R;
    hasUndoManager<R = boolean>(): R;
    configurePersistentStoreCoordinatorForURL_ofType_modelConfiguration_storeOptions_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = unknown>(_configurePersistentStoreCoordinatorForURL: P0, _ofType: P1, _modelConfiguration: P2, _storeOptions: P3, _error: P4): R;
    _releaseRelatedItemsForURL<R = void, P0 = unknown>(__releaseRelatedItemsForURL: P0): R;
    _requestSQLiteRelatedItemsForURL_attributes<R = void, P0 = unknown, P1 = unknown>(__requestSQLiteRelatedItemsForURL: P0, _attributes: P1): R;
    _requestRelatedItemForURL_withLastComponent<R = unknown, P0 = unknown, P1 = unknown>(__requestRelatedItemForURL: P0, _withLastComponent: P1): R;
    _persistentStoreCoordinator<R = unknown>(): R;
    persistentStoreTypeForFileType<R = unknown, P0 = unknown>(_persistentStoreTypeForFileType: P0): R;
    _documentEditor_didCommit_withContext<R = void, P0 = unknown, P1 = boolean, P2 = void>(__documentEditor: P0, _didCommit: P1, _withContext: P2): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    configurePersistentStoreCoordinatorForURL_ofType_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_configurePersistentStoreCoordinatorForURL: P0, _ofType: P1, _error: P2): R;
    _configurePersistentStoreCoordinatorForURL_ofType_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(__configurePersistentStoreCoordinatorForURL: P0, _ofType: P1, _error: P2): R;
    managedObjectModel<R = NSManagedObjectModel>(): R;
    managedObjectContext<R = NSManagedObjectContext>(): R;
    setManagedObjectContext<R = void, P0 = NSManagedObjectContext>(_v: P0): R;
  }
  namespace NSPersistentDocument {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDocument {
      alloc<R = NSPersistentDocument>(): R;
      new: <R = NSPersistentDocument>() => R;
      _hasOverrideForSelector_fromBaseClass<R = boolean, P0 = string, P1 = unknown>(__hasOverrideForSelector: P0, _fromBaseClass: P1): R;
    }
  }
}

declare const NSPersistentDocument: cocoa.NSPersistentDocument.CLASS;
