/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSidebarListController<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    dataController_exportNodes_toFolder<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_dataController: P0, _exportNodes: P1, _toFolder: P2): R;
    originalPositionOfLayersInPasteboard_forNewParent<R = CGPoint, P0 = unknown, P1 = unknown>(_originalPositionOfLayersInPasteboard: P0, _forNewParent: P1): R;
    dataController_copyFromPasteboard_toParent_after<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_dataController: P0, _copyFromPasteboard: P1, _toParent: P2, _after: P3): R;
    dataController_moveFromPasteboard_toParent_after<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_dataController: P0, _moveFromPasteboard: P1, _toParent: P2, _after: P3): R;
    moveNode_toParent_after<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_moveNode: P0, _toParent: P1, _after: P2): R;
    dataController_canCopyFromPasteboard_toParent_after<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_dataController: P0, _canCopyFromPasteboard: P1, _toParent: P2, _after: P3): R;
    canCopyNode_toParent_after<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_canCopyNode: P0, _toParent: P1, _after: P2): R;
    dataController_canMoveFromPasteboard_toParent_after<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_dataController: P0, _canMoveFromPasteboard: P1, _toParent: P2, _after: P3): R;
    canMoveNode_toParent_after<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_canMoveNode: P0, _toParent: P1, _after: P2): R;
    dragTypesForDataController<R = unknown, P0 = unknown>(_dragTypesForDataController: P0): R;
    readDragNodesFromPasteboard<R = unknown, P0 = unknown>(_readDragNodesFromPasteboard: P0): R;
    dataController_writeNodes_toPasteboard<R = boolean, P0 = unknown, P1 = unknown, P2 = unknown>(_dataController: P0, _writeNodes: P1, _toPasteboard: P2): R;
    layersFromNodeArray<R = unknown, P0 = unknown>(_layersFromNodeArray: P0): R;
    layerForNode<R = unknown, P0 = unknown>(_layerForNode: P0): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    rootObject<R = unknown>(): R;
    delegate<R = MSSidebarControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSSidebarControllerDelegate>(_v: P0): R;
    pasteboardWriterClass<R = unknown>(): R;
    documentData<R = MSDocumentData>(): R;
  }
  namespace MSSidebarListController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSSidebarListController>(): R;
      new: <R = MSSidebarListController>() => R;
    }
  }
}

declare const MSSidebarListController: cocoa.MSSidebarListController.CLASS;
