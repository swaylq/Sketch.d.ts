/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTree<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    debugDescription<R = unknown>(): R;
    parentItemNodeForNode<R = unknown, P0 = unknown>(_parentItemNodeForNode: P0): R;
    parentNodeForNode<R = unknown, P0 = unknown>(_parentNodeForNode: P0): R;
    parentNodeForNode_outIndex<R = unknown, P0 = unknown, P1 = number>(_parentNodeForNode: P0, _outIndex: P1): R;
    dealloc<R = void>(): R;
    initWithRootNode_centeredRootNode<R = unknown, P0 = unknown, P1 = unknown>(_initWithRootNode: P0, _centeredRootNode: P1): R;
    nodeForItem<R = unknown, P0 = unknown>(_nodeForItem: P0): R;
    nodeForBar<R = unknown, P0 = unknown>(_nodeForBar: P0): R;
    _spliceTreeFromRootNode_centerNode_foundCenter<R = unknown, P0 = unknown, P1 = unknown, P2 = string>(__spliceTreeFromRootNode: P0, _centerNode: P1, _foundCenter: P2): R;
    customization_node_canBeMovedAfterNode<R = boolean, P0 = unknown, P1 = unknown>(_customization_node: P0, _canBeMovedAfterNode: P1): R;
    customization_itemWithIdentifier_canBeInsertedAfterNode<R = boolean, P0 = unknown, P1 = unknown>(_customization_itemWithIdentifier: P0, _canBeInsertedAfterNode: P1): R;
    customization_nodeCanBeReordered<R = boolean, P0 = unknown>(_customization_nodeCanBeReordered: P0): R;
    customization_nodeCanBeRemoved<R = boolean, P0 = unknown>(_customization_nodeCanBeRemoved: P0): R;
    positionForInsertingItemWithIdentifier_toBeAfterNode<R = unknown, P0 = unknown, P1 = unknown>(_positionForInsertingItemWithIdentifier: P0, _toBeAfterNode: P1): R;
    positionForInsertingItemFromTouchBar_toBeAfterNode<R = unknown, P0 = unknown, P1 = unknown>(_positionForInsertingItemFromTouchBar: P0, _toBeAfterNode: P1): R;
    positionForInsertingItemWithPredicate_toBeAfterNode<R = unknown, P0 = CDUnknownBlockType, P1 = unknown>(_positionForInsertingItemWithPredicate: P0, _toBeAfterNode: P1): R;
    positionForMovingNode_toBeAfterNode<R = unknown, P0 = unknown, P1 = unknown>(_positionForMovingNode: P0, _toBeAfterNode: P1): R;
    positionOfNode<R = unknown, P0 = unknown>(_positionOfNode: P0): R;
    treeByRemovingItemIdentifier<R = unknown, P0 = unknown>(_treeByRemovingItemIdentifier: P0): R;
    treeByRemovingNode<R = unknown, P0 = unknown>(_treeByRemovingNode: P0): R;
    treeByInsertingItem_toBeAfterNode<R = unknown, P0 = unknown, P1 = unknown>(_treeByInsertingItem: P0, _toBeAfterNode: P1): R;
    treeByMovingNode_toBeAfterNode<R = unknown, P0 = unknown, P1 = unknown>(_treeByMovingNode: P0, _toBeAfterNode: P1): R;
    treeByReplacingNode_withNode<R = unknown, P0 = unknown, P1 = unknown>(_treeByReplacingNode: P0, _withNode: P1): R;
    treeByReplacingNode_withNodes<R = unknown, P0 = unknown, P1 = unknown>(_treeByReplacingNode: P0, _withNodes: P1): R;
    lastLeafPositionForMovingNode<R = number, P0 = unknown>(_lastLeafPositionForMovingNode: P0): R;
    lastLeafPositionForInsertingItemFromTouchBar<R = number, P0 = unknown>(_lastLeafPositionForInsertingItemFromTouchBar: P0): R;
    lastLeafPositionForInsertingItemWithIdentifier<R = number, P0 = unknown>(_lastLeafPositionForInsertingItemWithIdentifier: P0): R;
    persistBarNode_toDomain<R = boolean, P0 = unknown, P1 = unknown>(_persistBarNode: P0, _toDomain: P1): R;
    persistBar_toDomain<R = boolean, P0 = unknown, P1 = unknown>(_persistBar: P0, _toDomain: P1): R;
    persistTreeToDomain<R = void, P0 = unknown>(_persistTreeToDomain: P0): R;
    centeredRootNode<R = NSTouchBarItemTreeNode>(): R;
    rootNode<R = NSTouchBarItemTreeBarProviderNode>(): R;
    prioritizedLeafNodes<R = NSArray>(): R;
    centeredLeafNodes<R = NSArray>(): R;
    layoutOrderedLeafNodes<R = NSArray>(): R;
    leafNodes<R = NSArray>(): R;
  }
  namespace NSTouchBarItemTree {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSTouchBarItemTree>(): R;
      new: <R = NSTouchBarItemTree>() => R;
      itemTreeWithDefaultPresetTouchBars<R = unknown, P0 = unknown>(_itemTreeWithDefaultPresetTouchBars: P0): R;
      itemTreeWithTouchBars<R = unknown, P0 = unknown>(_itemTreeWithTouchBars: P0): R;
    }
  }
}

declare const NSTouchBarItemTree: cocoa.NSTouchBarItemTree.CLASS;
