/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineViewDataController<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    refreshPreviewsOnNode<R = void, P0 = unknown>(_refreshPreviewsOnNode: P0): R;
    handleBadgePressedOnNode_withAltState<R = void, P0 = unknown, P1 = boolean>(_handleBadgePressedOnNode: P0, _withAltState: P1): R;
    isNodeHighlighted<R = boolean, P0 = unknown>(_isNodeHighlighted: P0): R;
    hoverNodeDidChangeTo<R = void, P0 = unknown>(_hoverNodeDidChangeTo: P0): R;
    menuItemsForSelectedObjects<R = unknown, P0 = unknown>(_menuItemsForSelectedObjects: P0): R;
    updateNode_expandedState<R = void, P0 = unknown, P1 = number>(_updateNode: P0, _expandedState: P1): R;
    isNodeExpandable<R = boolean, P0 = unknown>(_isNodeExpandable: P0): R;
    multipleNodesSelected<R = boolean>(): R;
    isNodeExpanded<R = boolean, P0 = unknown>(_isNodeExpanded: P0): R;
    nodeHasSharedStyle<R = boolean, P0 = unknown>(_nodeHasSharedStyle: P0): R;
    isNodeLockedOnCanvas<R = boolean, P0 = unknown>(_isNodeLockedOnCanvas: P0): R;
    isAncestorOfNodeHiddenOnCanvas<R = boolean, P0 = unknown>(_isAncestorOfNodeHiddenOnCanvas: P0): R;
    isNodeHiddenOnCanvas<R = boolean, P0 = unknown>(_isNodeHiddenOnCanvas: P0): R;
    isNodeSelected<R = boolean, P0 = unknown>(_isNodeSelected: P0): R;
    changeSelectionTo<R = void, P0 = unknown>(_changeSelectionTo: P0): R;
    handleDragWithPasteboard_forProposedItem_proposedChildIndex_copying_validationOnly<R = boolean, P0 = unknown, P1 = unknown, P2 = number, P3 = boolean, P4 = boolean>(_handleDragWithPasteboard: P0, _forProposedItem: P1, _proposedChildIndex: P2, _copying: P3, _validationOnly: P4): R;
    writeNodes_toPasteboard<R = boolean, P0 = unknown, P1 = unknown>(_writeNodes: P0, _toPasteboard: P1): R;
    namesOfPromisedFilesDroppedAtDestination_forDraggedItems<R = unknown, P0 = unknown, P1 = unknown>(_namesOfPromisedFilesDroppedAtDestination: P0, _forDraggedItems: P1): R;
    shouldExpandNode<R = boolean, P0 = unknown>(_shouldExpandNode: P0): R;
    childOfNode_atIndex<R = unknown, P0 = unknown, P1 = number>(_childOfNode: P0, _atIndex: P1): R;
    numberOfChildrenOfNode<R = number, P0 = unknown>(_numberOfChildrenOfNode: P0): R;
    childrenOfNode<R = unknown, P0 = unknown>(_childrenOfNode: P0): R;
    nodeOrChildMatchesFilter<R = boolean, P0 = unknown>(_nodeOrChildMatchesFilter: P0): R;
    initWithDataSource_delegate<R = unknown, P0 = unknown, P1 = unknown>(_initWithDataSource: P0, _delegate: P1): R;
    cachedNodesChildren<R = NSArray>(): R;
    setCachedNodesChildren<R = void, P0 = NSArray>(_v: P0): R;
    cachedNode<R = unknown>(): R;
    setCachedNode<R = void, P0 = unknown>(_v: P0): R;
    filter<R = BCFilterInfo>(): R;
    setFilter<R = void, P0 = BCFilterInfo>(_v: P0): R;
    dataSource<R = BCOutlineViewDataControllerDataSource>(): R;
    delegate<R = BCOutlineViewDataControllerDelegate>(): R;
    rootObject<R = unknown>(): R;
    canProvideContextMenuItems<R = boolean>(): R;
    dragTypes<R = NSArray>(): R;
    nodeFilterPredicate<R = NSPredicate>(): R;
  }
  namespace BCOutlineViewDataController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = BCOutlineViewDataController>(): R;
      new: <R = BCOutlineViewDataController>() => R;
    }
  }
}

declare const BCOutlineViewDataController: cocoa.BCOutlineViewDataController.CLASS;
