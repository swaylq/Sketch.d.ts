/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUIHeartBeat<T0 = void, T1 = void, T2 = void> extends NSObject {
    _startFrameTime<R = number>(): R;
    _currentFrameTime<R = number>(): R;
    reenableHeartBeating<R = void, P0 = boolean>(_reenableHeartBeating: P0): R;
    disableHeartBeating<R = void>(): R;
    updateHeartBeatState<R = void>(): R;
    birthDate<R = number>(): R;
    removeHeartBeatView<R = void, P0 = unknown>(_removeHeartBeatView: P0): R;
    addHeartBeatView<R = void, P0 = unknown>(_addHeartBeatView: P0): R;
    dealloc<R = void>(): R;
    _sessionDidResignActive<R = void>(): R;
    _sessionDidBecomeActive<R = void>(): R;
    _heartBeatViews<R = void>(): R;
  }
  namespace NSUIHeartBeat {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSUIHeartBeat>(): R;
      new: <R = NSUIHeartBeat>() => R;
      isHeartBeatThread<R = boolean>(): R;
      setHeartBeatCycle<R = void, P0 = number>(_setHeartBeatCycle: P0): R;
      heartBeatCycle<R = number>(): R;
      sharedHeartBeat<R = unknown>(): R;
    }
  }
}

declare const NSUIHeartBeat: cocoa.NSUIHeartBeat.CLASS;
