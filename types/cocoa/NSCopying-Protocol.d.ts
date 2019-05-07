/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCopyingProtocol<T0 = void, T1 = void, T2 = void> {
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
  }
  namespace NSCopyingProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
