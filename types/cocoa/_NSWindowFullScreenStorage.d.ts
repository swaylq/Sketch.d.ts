/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowFullScreenStorage<T0 = void, T1 = void, T2 = void> extends _NSFullScreenStorage {
    windowJoinedTileOnCreation<R = boolean>(): R;
    setWindowJoinedTileOnCreation<R = void, P0 = boolean>(_v: P0): R;
    userTilePreferredSize<R = CGSize>(): R;
    setUserTilePreferredSize<R = void, P0 = CGSize>(_v: P0): R;
    savedScreenNumber<R = number>(): R;
    setSavedScreenNumber<R = void, P0 = number>(_v: P0): R;
    savedScreenFrame<R = CGRect>(): R;
    setSavedScreenFrame<R = void, P0 = CGRect>(_v: P0): R;
    toolbarWasHidden<R = boolean>(): R;
    setToolbarWasHidden<R = void, P0 = boolean>(_v: P0): R;
    stringWithSavedFrame<R = NSString>(): R;
    setStringWithSavedFrame<R = void, P0 = NSString>(_v: P0): R;
    savedFrame<R = CGRect>(): R;
    setSavedFrame<R = void, P0 = CGRect>(_v: P0): R;
  }
  namespace _NSWindowFullScreenStorage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSFullScreenStorage {
      alloc<R = _NSWindowFullScreenStorage>(): R;
      new: <R = _NSWindowFullScreenStorage>() => R;
    }
  }
}
