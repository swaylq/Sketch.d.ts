/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCOutlineViewDataControllerDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    dataController_refreshPreviewsOnNode<R = void, P0 = BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _refreshPreviewsOnNode: P1): R;
    dataController_handleBadgePressedOnNode_withAltState<R = void, P0 = BCOutlineViewDataController, P1 = unknown, P2 = boolean>(_dataController: P0, _handleBadgePressedOnNode: P1, _withAltState: P2): R;
    dataController_copyFromPasteboard_toParent_after<R = boolean, P0 = BCOutlineViewDataController, P1 = NSPasteboard, P2 = unknown, P3 = unknown>(_dataController: P0, _copyFromPasteboard: P1, _toParent: P2, _after: P3): R;
    dataController_moveFromPasteboard_toParent_after<R = boolean, P0 = BCOutlineViewDataController, P1 = NSPasteboard, P2 = unknown, P3 = unknown>(_dataController: P0, _moveFromPasteboard: P1, _toParent: P2, _after: P3): R;
    dataController_canCopyFromPasteboard_toParent_after<R = boolean, P0 = BCOutlineViewDataController, P1 = NSPasteboard, P2 = unknown, P3 = unknown>(_dataController: P0, _canCopyFromPasteboard: P1, _toParent: P2, _after: P3): R;
    dataController_canMoveFromPasteboard_toParent_after<R = boolean, P0 = BCOutlineViewDataController, P1 = NSPasteboard, P2 = unknown, P3 = unknown>(_dataController: P0, _canMoveFromPasteboard: P1, _toParent: P2, _after: P3): R;
    dataController_writeNodes_toPasteboard<R = boolean, P0 = BCOutlineViewDataController, P1 = NSArray, P2 = NSPasteboard>(_dataController: P0, _writeNodes: P1, _toPasteboard: P2): R;
    dragTypesForDataController<R = NSArray, P0 = BCOutlineViewDataController>(_dragTypesForDataController: P0): R;
    dataController_exportNodes_toFolder<R = NSArray, P0 = BCOutlineViewDataController, P1 = NSArray, P2 = NSURL>(_dataController: P0, _exportNodes: P1, _toFolder: P2): R;
    dataController_updateNode_expandedState<R = void, P0 = BCOutlineViewDataController, P1 = unknown, P2 = number>(_dataController: P0, _updateNode: P1, _expandedState: P2): R;
    dataController_isNodeHighlighted<R = boolean, P0 = BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _isNodeHighlighted: P1): R;
    dataController_isNodeExpandable<R = boolean, P0 = BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _isNodeExpandable: P1): R;
    dataController_isNodeExpanded<R = boolean, P0 = BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _isNodeExpanded: P1): R;
    dataController_changeSelectionTo<R = void, P0 = BCOutlineViewDataController, P1 = NSArray>(_dataController: P0, _changeSelectionTo: P1): R;
    dataController_nodeHasSharedStyle<R = boolean, P0 = BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _nodeHasSharedStyle: P1): R;
    multipleNodesSelectedForDataController<R = boolean, P0 = BCOutlineViewDataController>(_multipleNodesSelectedForDataController: P0): R;
    dataController_isNodeLockedOnCanvas<R = boolean, P0 = BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _isNodeLockedOnCanvas: P1): R;
    dataController_isAncestorOfNodeHiddenOnCanvas<R = boolean, P0 = BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _isAncestorOfNodeHiddenOnCanvas: P1): R;
    dataController_isNodeHiddenOnCanvas<R = boolean, P0 = BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _isNodeHiddenOnCanvas: P1): R;
    dataController_isNodeSelected<R = boolean, P0 = BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _isNodeSelected: P1): R;
    dataController_hoverNodeDidChangeTo<R = void, P0 = BCOutlineViewDataController, P1 = unknown>(_dataController: P0, _hoverNodeDidChangeTo: P1): R;
    dataController_menuItemsForSelectedObjects<R = NSArray, P0 = BCOutlineViewDataController, P1 = NSArray>(_dataController: P0, _menuItemsForSelectedObjects: P1): R;
    defaultFirstResponder<R = NSView>(): R;
  }
  namespace BCOutlineViewDataControllerDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
