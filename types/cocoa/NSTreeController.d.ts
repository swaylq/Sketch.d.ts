/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTreeController<T0 = void, T1 = void, T2 = void> extends NSObjectController {
    removeSelectionIndexPaths<R = boolean, P0 = unknown>(_removeSelectionIndexPaths: P0): R;
    _removeSelectionIndexPathsBelowNode<R = void, P0 = unknown>(__removeSelectionIndexPathsBelowNode: P0): R;
    addSelectionIndexPaths<R = boolean, P0 = unknown>(_addSelectionIndexPaths: P0): R;
    setSelectionIndexPaths<R = boolean, P0 = unknown>(_setSelectionIndexPaths: P0): R;
    setSelectionIndexPath<R = boolean, P0 = unknown>(_setSelectionIndexPath: P0): R;
    _selectObjectsAtIndexPaths_avoidsEmptySelection_sendObserverNotifications<R = boolean, P0 = unknown, P1 = boolean, P2 = boolean>(__selectObjectsAtIndexPaths: P0, _avoidsEmptySelection: P1, _sendObserverNotifications: P2): R;
    _validateMultipleValue_forKeyPath_atIndexPath_error<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(__validateMultipleValue: P0, _forKeyPath: P1, _atIndexPath: P2, _error: P3): R;
    _invokeMultipleSelector_withArguments_onKeyPath_atIndexPath<R = void, P0 = string, P1 = unknown, P2 = unknown, P3 = unknown>(__invokeMultipleSelector: P0, _withArguments: P1, _onKeyPath: P2, _atIndexPath: P3): R;
    _setMultipleValue_forKeyPath_atIndexPath<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__setMultipleValue: P0, _forKeyPath: P1, _atIndexPath: P2): R;
    _setMultipleValue_forKey_atIndexPath<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__setMultipleValue: P0, _forKey: P1, _atIndexPath: P2): R;
    _multipleMutableArrayValueForKeyPath_atIndexPath<R = unknown, P0 = unknown, P1 = unknown>(__multipleMutableArrayValueForKeyPath: P0, _atIndexPath: P1): R;
    _multipleMutableArrayValueForKey_atIndexPath<R = unknown, P0 = unknown, P1 = unknown>(__multipleMutableArrayValueForKey: P0, _atIndexPath: P1): R;
    _multipleValueForKeyPath_atIndexPath<R = unknown, P0 = unknown, P1 = unknown>(__multipleValueForKeyPath: P0, _atIndexPath: P1): R;
    _multipleValueForKey_atIndexPath<R = unknown, P0 = unknown, P1 = unknown>(__multipleValueForKey: P0, _atIndexPath: P1): R;
    moveNodes_toIndexPath<R = void, P0 = unknown, P1 = unknown>(_moveNodes: P0, _toIndexPath: P1): R;
    moveNodes_toIndexPaths<R = void, P0 = unknown, P1 = unknown>(_moveNodes: P0, _toIndexPaths: P1): R;
    moveNode_toIndexPath<R = void, P0 = unknown, P1 = unknown>(_moveNode: P0, _toIndexPath: P1): R;
    _didChangeValuesForArrangedKeys_objectKeys_indexPathKeys<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(__didChangeValuesForArrangedKeys: P0, _objectKeys: P1, _indexPathKeys: P2): R;
    _willChangeValuesForArrangedKeys_objectKeys_indexPathKeys<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(__willChangeValuesForArrangedKeys: P0, _objectKeys: P1, _indexPathKeys: P2): R;
    _selectObjectsAtIndexPathsNoCopy_avoidsEmptySelection_sendObserverNotifications<R = boolean, P0 = unknown, P1 = boolean, P2 = boolean>(__selectObjectsAtIndexPathsNoCopy: P0, _avoidsEmptySelection: P1, _sendObserverNotifications: P2): R;
    removeObjectAtArrangedObjectIndexPath<R = void, P0 = unknown>(_removeObjectAtArrangedObjectIndexPath: P0): R;
    removeObjectsAtArrangedObjectIndexPaths<R = void, P0 = unknown>(_removeObjectsAtArrangedObjectIndexPaths: P0): R;
    _removeObjectsAtArrangedObjectIndexPaths_objectHandler<R = void, P0 = unknown, P1 = unknown>(__removeObjectsAtArrangedObjectIndexPaths: P0, _objectHandler: P1): R;
    _insertObject_atArrangedObjectIndexPath_objectHandler<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(__insertObject: P0, _atArrangedObjectIndexPath: P1, _objectHandler: P2): R;
    insertChild<R = void, P0 = unknown>(_insertChild: P0): R;
    _executeInsertChild_didCommitSuccessfully_actionSender<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__executeInsertChild: P0, _didCommitSuccessfully: P1, _actionSender: P2): R;
    insert<R = void, P0 = unknown>(_insert: P0): R;
    _executeInsert_didCommitSuccessfully_actionSender<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__executeInsert: P0, _didCommitSuccessfully: P1, _actionSender: P2): R;
    _insertChildOrSibling<R = void, P0 = boolean>(__insertChildOrSibling: P0): R;
    _insertionIndexPathAppendChildIndex<R = unknown, P0 = boolean>(__insertionIndexPathAppendChildIndex: P0): R;
    _additionIndexPathAppendChildIndex<R = unknown, P0 = boolean>(__additionIndexPathAppendChildIndex: P0): R;
    addChild<R = void, P0 = unknown>(_addChild: P0): R;
    _executeAddChild_didCommitSuccessfully_actionSender<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__executeAddChild: P0, _didCommitSuccessfully: P1, _actionSender: P2): R;
    newChildObject<R = unknown>(): R;
    canRemove<R = boolean>(): R;
    canAdd<R = boolean>(): R;
    addChildObject<R = void, P0 = unknown>(_addChildObject: P0): R;
    insertObject_atArrangedObjectIndexPath<R = void, P0 = unknown, P1 = unknown>(_insertObject: P0, _atArrangedObjectIndexPath: P1): R;
    insertObjects_atArrangedObjectIndexPaths<R = void, P0 = unknown, P1 = unknown>(_insertObjects: P0, _atArrangedObjectIndexPaths: P1): R;
    _rootContentCount<R = number>(): R;
    _rootNode<R = unknown>(): R;
    _setContentInBackground<R = void, P0 = unknown>(__setContentInBackground: P0): R;
    leafKeyPathForNode<R = unknown, P0 = unknown>(_leafKeyPathForNode: P0): R;
    countKeyPathForNode<R = unknown, P0 = unknown>(_countKeyPathForNode: P0): R;
    childrenKeyPathForNode<R = unknown, P0 = unknown>(_childrenKeyPathForNode: P0): R;
    setUsesIdenticalComparisonOfModelObjects<R = void, P0 = boolean>(_setUsesIdenticalComparisonOfModelObjects: P0): R;
    usesIdenticalComparisonOfModelObjects<R = boolean>(): R;
    _mutatingNodes<R = boolean>(): R;
    _skipSorting<R = boolean>(): R;
    _explicitlyCannotInsert<R = boolean>(): R;
    _explicitlyCannotInsertChild<R = boolean>(): R;
    _explicitlyCannotAddChild<R = boolean>(): R;
    _setExplicitlyCannotAdd_insert_remove<R = void, P0 = boolean, P1 = boolean, P2 = boolean>(__setExplicitlyCannotAdd: P0, _insert: P1, _remove: P2): R;
    rearrangeObjects<R = void>(): R;
    createChildNodeForRepresentedObject<R = unknown, P0 = unknown>(_createChildNodeForRepresentedObject: P0): R;
    _stopObservingNodeIfNecessary<R = void, P0 = unknown>(__stopObservingNodeIfNecessary: P0): R;
    _stopObservingSelectionIfNecessary<R = void>(): R;
    _startObservingSelectionIfNecessary<R = void>(): R;
    removeObserver_forKeyPath_context<R = void, P0 = unknown, P1 = unknown, P2 = void>(_removeObserver: P0, _forKeyPath: P1, _context: P2): R;
    _commonRemoveObserverCleanupForKeyPath<R = void, P0 = unknown>(__commonRemoveObserverCleanupForKeyPath: P0): R;
    _registerObservingForAllModelObjects<R = boolean>(): R;
    _modelObservingKeyPaths<R = unknown>(): R;
    _multipleValuesObjectAtIndexPath<R = unknown, P0 = unknown>(__multipleValuesObjectAtIndexPath: P0): R;
    _prepareControllerTree<R = void>(): R;
    _copySelectedObjectLineages<R = unknown>(): R;
    setManagedObjectContext<R = void, P0 = unknown>(_setManagedObjectContext: P0): R;
    setUsesLazyFetching<R = void, P0 = boolean>(_setUsesLazyFetching: P0): R;
    selectionIndexPaths<R = NSArray>(): R;
    selectionIndexPath<R = NSIndexPath>(): R;
    selectedObjects<R = NSArray>(): R;
    selectedNodes<R = NSArray>(): R;
    canInsertChild<R = boolean>(): R;
    canInsert<R = boolean>(): R;
    canAddChild<R = boolean>(): R;
    content<R = unknown>(): R;
    setContent<R = void, P0 = unknown>(_v: P0): R;
    sortDescriptors<R = NSArray>(): R;
    setSortDescriptors<R = void, P0 = NSArray>(_v: P0): R;
    selectsInsertedObjects<R = boolean>(): R;
    setSelectsInsertedObjects<R = void, P0 = boolean>(_v: P0): R;
    preservesSelection<R = boolean>(): R;
    setPreservesSelection<R = void, P0 = boolean>(_v: P0): R;
    alwaysUsesMultipleValuesMarker<R = boolean>(): R;
    setAlwaysUsesMultipleValuesMarker<R = void, P0 = boolean>(_v: P0): R;
    avoidsEmptySelection<R = boolean>(): R;
    setAvoidsEmptySelection<R = void, P0 = boolean>(_v: P0): R;
    leafKeyPath<R = NSString>(): R;
    setLeafKeyPath<R = void, P0 = NSString>(_v: P0): R;
    countKeyPath<R = NSString>(): R;
    setCountKeyPath<R = void, P0 = NSString>(_v: P0): R;
    childrenKeyPath<R = NSString>(): R;
    setChildrenKeyPath<R = void, P0 = NSString>(_v: P0): R;
    arrangedObjects<R = NSTreeNode>(): R;
  }
  namespace NSTreeController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectController {
      alloc<R = NSTreeController>(): R;
      new: <R = NSTreeController>() => R;
    }
  }
}

declare const NSTreeController: cocoa.NSTreeController.CLASS;
