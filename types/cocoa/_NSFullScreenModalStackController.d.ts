/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSFullScreenModalStackController<T0 = void, T1 = void, T2 = void> extends NSObject, _NSFullScreenModalDimmingWindowDelegateProtocol {
    windowDidEndDraggingNotification<R = void, P0 = unknown>(_windowDidEndDraggingNotification: P0): R;
    windowWillStartDraggingNotification<R = void, P0 = unknown>(_windowWillStartDraggingNotification: P0): R;
    _actuallyBeginDraggingFrontWindow<R = void>(): R;
    _dragMoved<R = void>(): R;
    updateDraggingDimWindow<R = void>(): R;
    _showModalWindowDragEffect<R = void>(): R;
    windowDidBecomeKeyNotification<R = void, P0 = unknown>(_windowDidBecomeKeyNotification: P0): R;
    draggedWindowMovedToSpace_repositionUnderMouseIfDetached<R = void, P0 = number, P1 = boolean>(_draggedWindowMovedToSpace: P0, _repositionUnderMouseIfDetached: P1): R;
    dragShouldSnapBackForMinimize<R = boolean>(): R;
    selectedWindow<R = unknown>(): R;
    beforeStackedSavedWindowFrameString<R = unknown>(): R;
    backgroundWindowIDs<R = unknown>(): R;
    endTilePresentation<R = void>(): R;
    nonAnimatedBeginModalPresentationForTileJoin<R = void>(): R;
    endModalPresentationWithCompletionHandler<R = void, P0 = CDUnknownBlockType>(_endModalPresentationWithCompletionHandler: P0): R;
    beginModalPresentationWithCompletionHandler_forCloseSpace_waitUntilDone<R = void, P0 = CDUnknownBlockType, P1 = boolean, P2 = boolean>(_beginModalPresentationWithCompletionHandler: P0, _forCloseSpace: P1, _waitUntilDone: P2): R;
    beginModalPresentationWithCompletionHandler_forCloseSpace<R = void, P0 = CDUnknownBlockType, P1 = boolean>(_beginModalPresentationWithCompletionHandler: P0, _forCloseSpace: P1): R;
    _adjustedSnapshotWindowFrame_basedOnImage<R = CGRect, P0 = CGRect, P1 = CGImage>(__adjustedSnapshotWindowFrame: P0, _basedOnImage: P1): R;
    reshapeFrontWindow<R = void>(): R;
    reshapeContents<R = void>(): R;
    displayChanged<R = void>(): R;
    modalWindowWidth<R = number>(): R;
    createModalStackForWindow<R = boolean, P0 = unknown>(_createModalStackForWindow: P0): R;
    tearDownAnyModalStateAnimating<R = void, P0 = boolean>(_tearDownAnyModalStateAnimating: P0): R;
    tearDownAnyModalState<R = void>(): R;
    _setFrontWindow<R = void, P0 = unknown>(__setFrontWindow: P0): R;
    registerForNotifications<R = void, P0 = boolean>(_registerForNotifications: P0): R;
    dealloc<R = void>(): R;
    didDoTabbedOrderAboveForWindow<R = void, P0 = unknown>(_didDoTabbedOrderAboveForWindow: P0): R;
    didDoTabbedOrderOutForWindow<R = void, P0 = unknown>(_didDoTabbedOrderOutForWindow: P0): R;
    windowStackTabGroupDidChangeForWindow<R = void, P0 = unknown>(_windowStackTabGroupDidChangeForWindow: P0): R;
    clearWindowStateForModalStackGroupToWindow<R = void, P0 = unknown>(_clearWindowStateForModalStackGroupToWindow: P0): R;
    applyWindowStateForModalStackGroupToWindow<R = void, P0 = unknown>(_applyWindowStateForModalStackGroupToWindow: P0): R;
    tabBarWillSelectTab<R = void>(): R;
    disableBeginPresentation<R = boolean>(): R;
    setDisableBeginPresentation<R = void, P0 = boolean>(_v: P0): R;
    isDragActive<R = boolean>(): R;
    isPresentedModally<R = boolean>(): R;
    collapsedTabWindow<R = _NSFullScreenModalCollapsedTabWindow>(): R;
    windowStackController<R = NSWindowStackController>(): R;
    space<R = _NSFullScreenSpace>(): R;
    setSpace<R = void, P0 = _NSFullScreenSpace>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSFullScreenModalStackController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSFullScreenModalDimmingWindowDelegateProtocol {
      alloc<R = _NSFullScreenModalStackController>(): R;
      new: <R = _NSFullScreenModalStackController>() => R;
    }
  }
}
