/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTouchBarItemTypeGroupProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    groupTouchBar<R = NSTouchBar>(): R;
    setGroupTouchBar<R = void, P0 = NSTouchBar>(_v: P0): R;
  }
  namespace NSTouchBarItemTypeGroupProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
