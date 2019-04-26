/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableCopyingProtocol<T0 = void, T1 = void, T2 = void> {
    mutableCopyWithZone<R = unknown, P0 = _NSZone>(_mutableCopyWithZone: P0): R;
  }
  namespace NSMutableCopyingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
