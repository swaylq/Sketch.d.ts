/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSFastEnumerationProtocol<T0 = void, T1 = void, T2 = void> {
    countByEnumeratingWithState_objects_count<R = number, P0 = unknown, P1 = unknown, P2 = number>(_countByEnumeratingWithState: P0, _objects: P1, _count: P2): R;
  }
  namespace NSFastEnumerationProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
