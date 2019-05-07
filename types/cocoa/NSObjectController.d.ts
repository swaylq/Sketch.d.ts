/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSObjectController<T0 = void, T1 = void, T2 = void> extends NSController {
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    validateUserInterfaceItem<R = boolean, P0 = unknown>(_validateUserInterfaceItem: P0): R;
    _explicitlyCannotRemove<R = boolean>(): R;
    _explicitlyCannotAdd<R = boolean>(): R;
    _setExplicitlyCannotAdd_remove<R = void, P0 = boolean, P1 = boolean>(__setExplicitlyCannotAdd: P0, _remove: P1): R;
    remove<R = void, P0 = unknown>(_remove: P0): R;
    add<R = void, P0 = unknown>(_add: P0): R;
    _executeAdd_didCommitSuccessfully_actionSender<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__executeAdd: P0, _didCommitSuccessfully: P1, _actionSender: P2): R;
    removeObject<R = void, P0 = unknown>(_removeObject: P0): R;
    addObject<R = void, P0 = unknown>(_addObject: P0): R;
    prepareContent<R = void>(): R;
    _prepareContentWithNewObject<R = void, P0 = unknown>(__prepareContentWithNewObject: P0): R;
    newObject<R = unknown>(): R;
    _objectClassName<R = unknown>(): R;
    _setObjectClassName<R = void, P0 = unknown>(__setObjectClassName: P0): R;
    _changeEditable<R = void, P0 = boolean>(__changeEditable: P0): R;
    _markHasLoadedData<R = void, P0 = boolean>(__markHasLoadedData: P0): R;
    _notifyOfAnyContentChange<R = void>(): R;
    _setObjectHandler<R = void, P0 = unknown>(__setObjectHandler: P0): R;
    description<R = unknown>(): R;
    awakeFromNib<R = void>(): R;
    initWithContent<R = unknown, P0 = unknown>(_initWithContent: P0): R;
    _reactToMatchingInsertions_deletions_refreshed<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__reactToMatchingInsertions: P0, _deletions: P1, _refreshed: P2): R;
    _needsLiveUpdates<R = boolean>(): R;
    fetch<R = void, P0 = unknown>(_fetch: P0): R;
    _executeFetch_didCommitSuccessfully_actionSender<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__executeFetch: P0, _didCommitSuccessfully: P1, _actionSender: P2): R;
    fetchWithRequest_merge_error<R = boolean, P0 = unknown, P1 = boolean, P2 = unknown>(_fetchWithRequest: P0, _merge: P1, _error: P2): R;
    _lazyFetchResultProxyForObjects<R = unknown, P0 = unknown>(__lazyFetchResultProxyForObjects: P0): R;
    _relationshipKeyPathsForPrefetching<R = unknown>(): R;
    _performFetchWithRequest_merge_error<R = boolean, P0 = unknown, P1 = boolean, P2 = unknown>(__performFetchWithRequest: P0, _merge: P1, _error: P2): R;
    _objectIDsFromManagedObjects<R = unknown, P0 = unknown>(__objectIDsFromManagedObjects: P0): R;
    _fetchRequestForPerformingFetch<R = unknown>(): R;
    defaultFetchRequest<R = unknown>(): R;
    _notifyManagedContextEditorStateChanged<R = void, P0 = boolean>(__notifyManagedContextEditorStateChanged: P0): R;
    _canModifyManagedContent<R = boolean>(): R;
    _managedProxy<R = unknown>(): R;
    _isUsingManagedProxy<R = boolean>(): R;
    _setUsingManagedProxy<R = void, P0 = boolean>(__setUsingManagedProxy: P0): R;
    _isManagedController<R = boolean>(): R;
    selection<R = unknown>(): R;
    selectedObjects<R = NSArray>(): R;
    canRemove<R = boolean>(): R;
    canAdd<R = boolean>(): R;
    objectClass<R = unknown>(): R;
    setObjectClass<R = void, P0 = unknown>(_v: P0): R;
    editable<R = boolean>(): R;
    setEditable<R = void, P0 = boolean>(_v: P0): R;
    automaticallyPreparesContent<R = boolean>(): R;
    setAutomaticallyPreparesContent<R = void, P0 = boolean>(_v: P0): R;
    content<R = unknown>(): R;
    setContent<R = void, P0 = unknown>(_v: P0): R;
    fetchPredicate<R = NSPredicate>(): R;
    setFetchPredicate<R = void, P0 = NSPredicate>(_v: P0): R;
    entityName<R = NSString>(): R;
    setEntityName<R = void, P0 = NSString>(_v: P0): R;
    managedObjectContext<R = NSManagedObjectContext>(): R;
    setManagedObjectContext<R = void, P0 = NSManagedObjectContext>(_v: P0): R;
    usesLazyFetching<R = boolean>(): R;
    setUsesLazyFetching<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSObjectController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSController {
      alloc<R = NSObjectController>(): R;
      new: <R = NSObjectController>() => R;
      _defaultObjectClassName<R = unknown>(): R;
      _defaultObjectClass<R = unknown>(): R;
    }
  }
}

declare const NSObjectController: cocoa.NSObjectController.CLASS;
