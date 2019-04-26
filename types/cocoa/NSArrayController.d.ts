/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSArrayController<T0 = void, T1 = void, T2 = void> extends NSObjectController {
    _validateMultipleValue_forKeyPath_atIndex_error<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = unknown>(__validateMultipleValue: P0, _forKeyPath: P1, _atIndex: P2, _error: P3): R;
    _invokeMultipleSelector_withArguments_onKeyPath_atIndex<R = void, P0 = string, P1 = unknown, P2 = unknown, P3 = number>(__invokeMultipleSelector: P0, _withArguments: P1, _onKeyPath: P2, _atIndex: P3): R;
    _setMultipleValue_forKeyPath_atIndex<R = void, P0 = unknown, P1 = unknown, P2 = number>(__setMultipleValue: P0, _forKeyPath: P1, _atIndex: P2): R;
    _setMultipleValue_forKey_atIndex<R = void, P0 = unknown, P1 = unknown, P2 = number>(__setMultipleValue: P0, _forKey: P1, _atIndex: P2): R;
    _multipleMutableArrayValueForKeyPath_atIndex<R = unknown, P0 = unknown, P1 = number>(__multipleMutableArrayValueForKeyPath: P0, _atIndex: P1): R;
    _multipleMutableArrayValueForKey_atIndex<R = unknown, P0 = unknown, P1 = number>(__multipleMutableArrayValueForKey: P0, _atIndex: P1): R;
    _multipleValueForKeyPath_atIndex<R = unknown, P0 = unknown, P1 = number>(__multipleValueForKeyPath: P0, _atIndex: P1): R;
    _multipleValueForKey_atIndex<R = unknown, P0 = unknown, P1 = number>(__multipleValueForKey: P0, _atIndex: P1): R;
    _multipleValuesObjectsAtIndexes<R = unknown, P0 = unknown>(__multipleValuesObjectsAtIndexes: P0): R;
    _multipleValuesObjectAtIndex<R = unknown, P0 = number>(__multipleValuesObjectAtIndex: P0): R;
    _multipleValuesObjectCount<R = number>(): R;
    selectPrevious<R = void, P0 = unknown>(_selectPrevious: P0): R;
    _executeSelectPrevious_didCommitSuccessfully_actionSender<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__executeSelectPrevious: P0, _didCommitSuccessfully: P1, _actionSender: P2): R;
    selectNext<R = void, P0 = unknown>(_selectNext: P0): R;
    _executeSelectNext_didCommitSuccessfully_actionSender<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__executeSelectNext: P0, _didCommitSuccessfully: P1, _actionSender: P2): R;
    canRemove<R = boolean>(): R;
    canAdd<R = boolean>(): R;
    _explicitlyCannotInsert<R = boolean>(): R;
    _setExplicitlyCannotAdd_insert_remove<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(__setExplicitlyCannotAdd: P0, _insert: P1, _remove: P2): R;
    insert<R = void, P0 = unknown>(_insert: P0): R;
    _executeInsert_didCommitSuccessfully_actionSender<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__executeInsert: P0, _didCommitSuccessfully: P1, _actionSender: P2): R;
    removeObjects<R = void, P0 = unknown>(_removeObjects: P0): R;
    _removeObjects_objectHandler<R = void, P0 = unknown, P1 = unknown>(__removeObjects: P0, _objectHandler: P1): R;
    removeObjectsAtArrangedObjectIndexes<R = void, P0 = unknown>(_removeObjectsAtArrangedObjectIndexes: P0): R;
    _removeObjectsAtArrangedObjectIndexes_contentIndexes_objectHandler<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__removeObjectsAtArrangedObjectIndexes: P0, _contentIndexes: P1, _objectHandler: P2): R;
    removeObjectAtArrangedObjectIndex<R = void, P0 = number>(_removeObjectAtArrangedObjectIndex: P0): R;
    _removeObjectAtArrangedObjectIndex_objectHandler<R = void, P0 = number, P1 = unknown>(__removeObjectAtArrangedObjectIndex: P0, _objectHandler: P1): R;
    _ensureSelectionAfterRemoveWithPreferredIndex_sendObserverNotifications<R = void, P0 = number, P1 = boolean>(__ensureSelectionAfterRemoveWithPreferredIndex: P0, _sendObserverNotifications: P1): R;
    insertObjects_atArrangedObjectIndexes<R = void, P0 = unknown, P1 = unknown>(_insertObjects: P0, _atArrangedObjectIndexes: P1): R;
    _insertObjects_atArrangedObjectIndexes_objectHandler<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__insertObjects: P0, _atArrangedObjectIndexes: P1, _objectHandler: P2): R;
    insertObject_atArrangedObjectIndex<R = void, P0 = unknown, P1 = number>(_insertObject: P0, _atArrangedObjectIndex: P1): R;
    _insertObject_atArrangedObjectIndex_objectHandler<R = void, P0 = unknown, P1 = number, P2 = unknown>(__insertObject: P0, _atArrangedObjectIndex: P1, _objectHandler: P2): R;
    addObjects<R = void, P0 = unknown>(_addObjects: P0): R;
    _assertFilterRestrictsInsertionOfObjects_atArrangedObjectIndexes<R = void, P0 = unknown, P1 = unknown>(__assertFilterRestrictsInsertionOfObjects: P0, _atArrangedObjectIndexes: P1): R;
    _filterRestrictsInsertion<R = boolean>(): R;
    _setFilterRestrictsInsertion<R = void, P0 = boolean>(__setFilterRestrictsInsertion: P0): R;
    _removeNumberOfIndexes_fromSelectionIndexesAtIndex_sendObserverNotifications<R = void, P0 = number, P1 = number, P2 = boolean>(__removeNumberOfIndexes: P0, _fromSelectionIndexesAtIndex: P1, _sendObserverNotifications: P2): R;
    _addNumberOfIndexes_toSelectionIndexesAtIndex_sendObserverNotifications<R = void, P0 = number, P1 = number, P2 = boolean>(__addNumberOfIndexes: P0, _toSelectionIndexesAtIndex: P1, _sendObserverNotifications: P2): R;
    _modifySelectionIndexes_atIndex_addOrRemove_sendObserverNotifications<R = void, P0 = number, P1 = number, P2 = boolean, P3 = boolean>(__modifySelectionIndexes: P0, _atIndex: P1, _addOrRemove: P2, _sendObserverNotifications: P3): R;
    _cacheSelectedObjectsIfNecessary<R = void>(): R;
    removeSelectedObjects<R = boolean, P0 = unknown>(_removeSelectedObjects: P0): R;
    addSelectedObjects<R = boolean, P0 = unknown>(_addSelectedObjects: P0): R;
    setSelectedObjects<R = boolean, P0 = unknown>(_setSelectedObjects: P0): R;
    _modifySelectedObjects_useExistingIndexesAsStartingPoint_avoidsEmptySelection_addOrRemove_sendObserverNotifications_forceUpdate<R = boolean, P0 = unknown, P1 = boolean, P2 = boolean, P3 = boolean, P4 = boolean, P5 = boolean>(__modifySelectedObjects: P0, _useExistingIndexesAsStartingPoint: P1, _avoidsEmptySelection: P2, _addOrRemove: P3, _sendObserverNotifications: P4, _forceUpdate: P5): R;
    removeSelectionIndexes<R = boolean, P0 = unknown>(_removeSelectionIndexes: P0): R;
    addSelectionIndexes<R = boolean, P0 = unknown>(_addSelectionIndexes: P0): R;
    setSelectionIndex<R = boolean, P0 = number>(_setSelectionIndex: P0): R;
    setSelectionIndexes<R = boolean, P0 = unknown>(_setSelectionIndexes: P0): R;
    _selectObjectsAtIndexes_avoidsEmptySelection_sendObserverNotifications_forceUpdate<R = boolean, P0 = unknown, P1 = boolean, P2 = boolean, P3 = boolean>(__selectObjectsAtIndexes: P0, _avoidsEmptySelection: P1, _sendObserverNotifications: P2, _forceUpdate: P3): R;
    _selectObjectsAtIndexesNoCopy_avoidsEmptySelection_sendObserverNotifications_forceUpdate<R = boolean, P0 = unknown, P1 = boolean, P2 = boolean, P3 = boolean>(__selectObjectsAtIndexesNoCopy: P0, _avoidsEmptySelection: P1, _sendObserverNotifications: P2, _forceUpdate: P3): R;
    _selectionIndexesCount<R = number>(): R;
    rearrangeObjects<R = void>(): R;
    _arrayContent<R = unknown>(): R;
    _sendsContentChangeNotifications<R = boolean>(): R;
    setUsesLazyFetching<R = void, P0 = boolean>(_setUsesLazyFetching: P0): R;
    content<R = unknown>(): R;
    setContent<R = void, P0 = unknown>(_setContent: P0): R;
    _setContentInBackground<R = void, P0 = unknown>(__setContentInBackground: P0): R;
    didChangeArrangementCriteria<R = void>(): R;
    _didChangeArrangementCriteriaWithOperationsMask_useBasis<R = void, P0 = number, P1 = unknown>(__didChangeArrangementCriteriaWithOperationsMask: P0, _useBasis: P1): R;
    _addKeyPathsFromPredicate_toSet<R = void, P0 = unknown, P1 = unknown>(__addKeyPathsFromPredicate: P0, _toSet: P1): R;
    _setUpAutomaticRearrangingOfObjects<R = void>(): R;
    _updateAutomaticRearrangementKeysPaths<R = void>(): R;
    _arrangeObjectsWithSelectedObjects_avoidsEmptySelection_operationsMask_useBasis<R = void, P0 = unknown, P1 = boolean, P2 = number, P3 = unknown>(__arrangeObjectsWithSelectedObjects: P0, _avoidsEmptySelection: P1, _operationsMask: P2, _useBasis: P3): R;
    _updateObservingForAutomaticallyRearrangingObjects<R = void>(): R;
    _ensureObjectsAreMutable<R = void>(): R;
    _setObjects<R = void, P0 = unknown>(__setObjects: P0): R;
    arrangeObjects<R = unknown, P0 = unknown>(_arrangeObjects: P0): R;
    _sortObjects<R = unknown, P0 = unknown>(__sortObjects: P0): R;
    _filterObjects<R = unknown, P0 = unknown>(__filterObjects: P0): R;
    didChangeValuesForArrangedKeys_objectKeys_indexKeys<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(_didChangeValuesForArrangedKeys: P0, _objectKeys: P1, _indexKeys: P2): R;
    willChangeValuesForArrangedKeys_objectKeys_indexKeys<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(_willChangeValuesForArrangedKeys: P0, _objectKeys: P1, _indexKeys: P2): R;
    _refreshesAllModelObjects<R = boolean>(): R;
    _setRefreshesAllModelObjects<R = void, P0 = boolean>(__setRefreshesAllModelObjects: P0): R;
    _stopObservingSelectionIfNecessary<R = void>(): R;
    _startObservingSelectionIfNecessary<R = void>(): R;
    _registerObservingForAllModelObjects<R = boolean>(): R;
    _rearrangementExtensions<R = unknown, P0 = boolean>(__rearrangementExtensions: P0): R;
    addRangeOfInterest<R = void, P0 = _NSRange>(_addRangeOfInterest: P0): R;
    setManagedObjectContext<R = void, P0 = unknown>(_setManagedObjectContext: P0): R;
    arrangedObjects<R = unknown>(): R;
    canSelectPrevious<R = boolean>(): R;
    canSelectNext<R = boolean>(): R;
    canInsert<R = boolean>(): R;
    selectedObjects<R = NSArray>(): R;
    selectionIndex<R = number>(): R;
    selectionIndexes<R = NSIndexSet>(): R;
    alwaysUsesMultipleValuesMarker<R = boolean>(): R;
    setAlwaysUsesMultipleValuesMarker<R = void, P0 = boolean>(_v: P0): R;
    clearsFilterPredicateOnInsertion<R = boolean>(): R;
    setClearsFilterPredicateOnInsertion<R = void, P0 = boolean>(_v: P0): R;
    selectsInsertedObjects<R = boolean>(): R;
    setSelectsInsertedObjects<R = void, P0 = boolean>(_v: P0): R;
    preservesSelection<R = boolean>(): R;
    setPreservesSelection<R = void, P0 = boolean>(_v: P0): R;
    avoidsEmptySelection<R = boolean>(): R;
    setAvoidsEmptySelection<R = void, P0 = boolean>(_v: P0): R;
    automaticRearrangementKeyPaths<R = NSArray>(): R;
    automaticallyRearrangesObjects<R = boolean>(): R;
    setAutomaticallyRearrangesObjects<R = void, P0 = boolean>(_v: P0): R;
    sortDescriptors<R = NSArray>(): R;
    setSortDescriptors<R = void, P0 = NSArray>(_v: P0): R;
    filterPredicate<R = NSPredicate>(): R;
    setFilterPredicate<R = void, P0 = NSPredicate>(_v: P0): R;
  }
  namespace NSArrayController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectController {
      alloc<R = NSArrayController>(): R;
      new: <R = NSArrayController>() => R;
    }
  }
}

declare const NSArrayController: cocoa.NSArrayController.CLASS;
