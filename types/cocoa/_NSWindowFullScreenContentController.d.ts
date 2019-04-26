/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowFullScreenContentController<T0 = void, T1 = void, T2 = void> extends _NSFullScreenContentController {
    addSiblingWindow_position_responseHandler<R = void, P0 = number, P1 = number, P2 = CDUnknownBlockType>(_addSiblingWindow: P0, _position: P1, _responseHandler: P2): R;
    queryCanAddSiblingWindow_responseHandler<R = void, P0 = number, P1 = CDUnknownBlockType>(_queryCanAddSiblingWindow: P0, _responseHandler: P1): R;
    isOnActiveSpace<R = boolean>(): R;
    endLiveResize<R = void>(): R;
    startLiveResize<R = void>(): R;
    maybeAssignWindow<R = boolean, P0 = unknown>(_maybeAssignWindow: P0): R;
    reshapeContentForTileFrame_fromFrame<R = void, P0 = CGRect, P1 = CGRect>(_reshapeContentForTileFrame: P0, _fromFrame: P1): R;
    disableMCExit<R = boolean>(): R;
    setAsThePrincipalFullScreenWindowInSpace<R = void>(): R;
    windowIDsToFreeze<R = unknown>(): R;
    _gatherWindowsToFreeze_wids<R = void, P0 = unknown, P1 = unknown>(__gatherWindowsToFreeze: P0, _wids: P1): R;
    contentWindowFrame<R = CGRect>(): R;
    contentWindowID<R = number>(): R;
    displayChanged<R = void>(): R;
    windowIDsForSnapshot<R = unknown>(): R;
    sharesTileWithOtherTabs<R = boolean>(): R;
    makeDetachedMenuBarCompanionController<R = void>(): R;
    menuBarCompanionController<R = unknown>(): R;
    fullScreenStorage<R = unknown>(): R;
    dispose<R = void>(): R;
    initWithWindow<R = unknown, P0 = unknown>(_initWithWindow: P0): R;
    dealloc<R = void>(): R;
    window<R = NSWindow>(): R;
  }
  namespace _NSWindowFullScreenContentController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSFullScreenContentController {
      alloc<R = _NSWindowFullScreenContentController>(): R;
      new: <R = _NSWindowFullScreenContentController>() => R;
    }
  }
}
